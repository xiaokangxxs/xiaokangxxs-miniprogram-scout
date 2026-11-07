#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const specPath = path.join(root, "workbuddy", "avatar-specs.json");
const target = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(root, "workbuddy", "avatars");

const specs = JSON.parse(fs.readFileSync(specPath, "utf8"));
const size = specs.size || 512;
fs.mkdirSync(target, { recursive: true });

function hex(s) {
  const n = s.replace("#", "");
  return [parseInt(n.slice(0,2),16),parseInt(n.slice(2,4),16),parseInt(n.slice(4,6),16),255];
}
function crc32(buf) {
  let c = 0xffffffff;
  for (const b of buf) {
    c ^= b;
    for (let k=0;k<8;k++) c = (c>>>1) ^ (0xedb88320 & -(c&1));
  }
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const t = Buffer.from(type);
  const out = Buffer.alloc(12 + data.length);
  out.writeUInt32BE(data.length,0); t.copy(out,4); data.copy(out,8);
  out.writeUInt32BE(crc32(Buffer.concat([t,data])),8+data.length);
  return out;
}
function setPixel(pix,x,y,c) {
  if (x<0||y<0||x>=size||y>=size) return;
  const i=(y*size+x)*4;
  pix[i]=c[0];pix[i+1]=c[1];pix[i+2]=c[2];pix[i+3]=c[3]??255;
}
function circle(pix,cx,cy,r,c,fill=true) {
  for (let y=-r;y<=r;y++) for(let x=-r;x<=r;x++) {
    const d=x*x+y*y;
    if ((fill && d<=r*r) || (!fill && d<=r*r && d>=(r-5)*(r-5))) setPixel(pix,cx+x,cy+y,c);
  }
}
function rect(pix,x0,y0,x1,y1,c) {
  for(let y=y0;y<=y1;y++) for(let x=x0;x<=x1;x++) setPixel(pix,x,y,c);
}
function line(pix,x0,y0,x1,y1,c,w=6) {
  const dx=Math.abs(x1-x0), sx=x0<x1?1:-1, dy=-Math.abs(y1-y0), sy=y0<y1?1:-1;
  let err=dx+dy;
  while(true){
    circle(pix,x0,y0,Math.max(1,Math.floor(w/2)),c,true);
    if(x0===x1&&y0===y1) break;
    const e2=2*err;
    if(e2>=dy){err+=dy;x0+=sx}
    if(e2<=dx){err+=dx;y0+=sy}
  }
}
function icon(pix,name) {
  const w=[255,255,255,235], dark=[10,25,40,110];
  circle(pix,256,205,118,dark,true);
  if(name==="radar"){
    for(const r of [38,70,100]) circle(pix,256,205,r,w,false);
    line(pix,256,205,330,145,w,8); circle(pix,330,145,12,w,true);
  } else if(name==="compass"){
    line(pix,256,110,256,300,w,10); line(pix,165,205,347,205,w,10);
    line(pix,256,112,300,205,w,9); line(pix,256,298,212,205,w,9);
  } else if(name==="spark"){
    for(const [x,y,r] of [[256,205,42],[195,160,18],[320,165,14],[315,250,20]]) circle(pix,x,y,r,w,true);
  } else if(name==="gamepad"){
    rect(pix,175,165,337,245,w); line(pix,205,205,255,205,dark,12); line(pix,230,180,230,230,dark,12);
    circle(pix,292,190,10,dark,true); circle(pix,314,216,10,dark,true);
  } else if(name==="search"){
    circle(pix,235,185,58,w,false); line(pix,277,227,340,290,w,18);
  } else if(name==="grid"){
    for(const y of [150,220]) for(const x of [195,265]) rect(pix,x,y,x+52,y+52,w);
  } else if(name==="joystick"){
    line(pix,256,120,256,210,w,16); circle(pix,256,115,28,w,true); rect(pix,180,210,332,260,w);
  } else if(name==="shield"){
    for(let y=130;y<285;y++){
      const half=Math.max(10,82-Math.floor((y-130)*0.35));
      for(let x=256-half;x<=256+half;x++) setPixel(pix,x,y,w);
    }
    line(pix,220,205,247,232,dark,14); line(pix,247,232,303,168,dark,14);
  }
}
function writePng(file, spec) {
  const pix = Buffer.alloc(size*size*4);
  const a=hex(spec.background[0]), b=hex(spec.background[1]);
  for(let y=0;y<size;y++) for(let x=0;x<size;x++){
    const t=(x+y)/(2*(size-1));
    const c=[0,1,2].map(i=>Math.round(a[i]*(1-t)+b[i]*t)); c.push(255);
    setPixel(pix,x,y,c);
  }
  for(let x=44;x<size-44;x++){setPixel(pix,x,44,[255,255,255,70]);setPixel(pix,x,size-45,[255,255,255,70]);}
  for(let y=44;y<size-44;y++){setPixel(pix,44,y,[255,255,255,70]);setPixel(pix,size-45,y,[255,255,255,70]);}
  icon(pix,spec.icon);

  const raw=Buffer.alloc((size*4+1)*size);
  for(let y=0;y<size;y++){
    const off=y*(size*4+1); raw[off]=0;
    pix.copy(raw,off+1,y*size*4,(y+1)*size*4);
  }
  const ihdr=Buffer.alloc(13);
  ihdr.writeUInt32BE(size,0); ihdr.writeUInt32BE(size,4);
  ihdr[8]=8; ihdr[9]=6; ihdr[10]=0; ihdr[11]=0; ihdr[12]=0;
  const png=Buffer.concat([
    Buffer.from([137,80,78,71,13,10,26,10]),
    chunk("IHDR",ihdr),
    chunk("IDAT",zlib.deflateSync(raw,{level:9})),
    chunk("IEND",Buffer.alloc(0))
  ]);
  fs.writeFileSync(path.join(target,file),png);
  if(png.length>500*1024) throw new Error(`${file} exceeds 500KB`);
}
for(const [file,spec] of Object.entries(specs.avatars)) writePng(file,spec);
console.log(`Generated ${Object.keys(specs.avatars).length} WorkBuddy avatars in ${target}`);
