#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const poolPath = path.join(root, "data", "rolling_pool.json");
const version = fs.readFileSync(path.join(root, "VERSION"), "utf8").trim();

function fail(msg){ console.error("❌ "+msg); process.exit(1); }
function readJson(p){ return JSON.parse(fs.readFileSync(p,"utf8")); }
function isoMs(v){ const n=Date.parse(v); return Number.isFinite(n)?n:null; }
function assertCandidate(c, form){
  const req=["opportunity_id","name","product_form","first_seen_at","last_seen_at","opportunity_score","readiness_score","confidence_score"];
  for(const k of req) if(c[k]===undefined || c[k]===null) fail(`candidate ${c?.opportunity_id||"?"} missing ${k}`);
  if(c.product_form!==form) fail(`candidate ${c.opportunity_id} wrong product_form`);
  for(const k of ["opportunity_score","readiness_score","confidence_score"]){
    if(typeof c[k]!=="number" || c[k]<0 || c[k]>100) fail(`${c.opportunity_id} invalid ${k}`);
  }
  if(isoMs(c.first_seen_at)===null || isoMs(c.last_seen_at)===null) fail(`${c.opportunity_id} invalid date`);
}
function validate(pool){
  if(pool.privacy!=="PUBLIC_MARKET_SIGNALS_ONLY") fail("privacy must be PUBLIC_MARKET_SIGNALS_ONLY");
  if(!pool.mini_program || !pool.mini_game || !Array.isArray(pool.history)) fail("invalid pool shape");
  for(const [key,form] of [["mini_program","WECHAT_MINIPROGRAM"],["mini_game","WECHAT_MINIGAME"]]){
    for(const bucket of ["fresh","rolling","champions"]){
      if(!Array.isArray(pool[key][bucket])) fail(`${key}.${bucket} must be array`);
      for(const c of pool[key][bucket]) assertCandidate(c,form);
    }
    if(pool[key].champions.length>20) fail(`${key}.champions exceeds 20`);
  }
  console.log("✅ Rolling pool validation passed.");
}
function dedupeLatest(items){
  const map=new Map();
  for(const c of items){
    const prev=map.get(c.opportunity_id);
    if(!prev || Date.parse(c.last_seen_at)>=Date.parse(prev.last_seen_at)) map.set(c.opportunity_id,c);
  }
  return [...map.values()];
}
function mergeForm(existing, incoming, form, now){
  const old = dedupeLatest([
    ...(existing.fresh||[]),...(existing.rolling||[]),...(existing.champions||[])
  ]);
  const map=new Map(old.map(c=>[c.opportunity_id, structuredClone(c)]));
  for(const raw of incoming.filter(x=>x.product_form===form)){
    assertCandidate(raw,form);
    const prev=map.get(raw.opportunity_id);
    const next=structuredClone(raw);
    const history=[...(prev?.score_history||[])];
    if(prev){
      history.push({
        at: prev.last_seen_at,
        opportunity_score: prev.opportunity_score,
        readiness_score: prev.readiness_score,
        confidence_score: prev.confidence_score
      });
    }
    next.first_seen_at = prev?.first_seen_at || next.first_seen_at;
    next.score_history = history.slice(-30);
    const delta = prev ? next.opportunity_score-prev.opportunity_score : 0;
    next.heat_status = delta>=3?"HEATING":delta<=-3?"COOLING":(next.heat_status||"STABLE");
    map.set(next.opportunity_id,next);
  }
  const DAY=86400000;
  const all=[...map.values()];
  const rolling=all.filter(c=> now-Date.parse(c.last_seen_at) <= 14*DAY);
  const fresh=rolling.filter(c=> now-Date.parse(c.last_seen_at) <= 72*3600000);
  const champions=[...rolling].sort((a,b)=>
    b.opportunity_score-a.opportunity_score ||
    b.confidence_score-a.confidence_score ||
    b.readiness_score-a.readiness_score
  ).slice(0,20);
  return {fresh,rolling,champions};
}
function main(){
  const cmd=process.argv[2]||"validate";
  const pool=readJson(poolPath);
  if(cmd==="validate") return validate(pool);
  if(cmd!=="merge") fail("usage: node scripts/rolling-pool.mjs validate|merge <candidates.json>");
  const input=process.argv[3];
  if(!input) fail("merge requires candidates JSON path");
  const payload=readJson(path.resolve(input));
  const candidates=Array.isArray(payload)?payload:payload.candidates;
  if(!Array.isArray(candidates)) fail("input must be an array or {candidates:[...]}");
  const now=Date.now();
  const next={
    ...pool,
    skill_version:version,
    updated_at:new Date(now).toISOString(),
    updated_by:"scripts/rolling-pool.mjs",
    status:"ACTIVE",
    mini_program:mergeForm(pool.mini_program,candidates,"WECHAT_MINIPROGRAM",now),
    mini_game:mergeForm(pool.mini_game,candidates,"WECHAT_MINIGAME",now)
  };
  next.history=[
    ...(pool.history||[]),
    {
      at:next.updated_at,
      mini_program_champions:next.mini_program.champions.map(x=>x.opportunity_id),
      mini_game_champions:next.mini_game.champions.map(x=>x.opportunity_id)
    }
  ].slice(-30);
  fs.writeFileSync(poolPath,JSON.stringify(next,null,2)+"\n");
  validate(next);
  console.log(`✅ Merged ${candidates.length} candidates into ${poolPath}`);
}
main();
