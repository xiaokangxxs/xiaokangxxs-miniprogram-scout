#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root=path.resolve(fileURLToPath(new URL("..",import.meta.url)));
const dist=path.join(root,"dist");
const stage=fs.mkdtempSync(path.join(os.tmpdir(),"workbuddy-team-"));
const pkg=path.join(stage,"wechat-opportunity-scout-team");
fs.mkdirSync(dist,{recursive:true});

function copyDir(src,dst){
  fs.mkdirSync(dst,{recursive:true});
  for(const e of fs.readdirSync(src,{withFileTypes:true})){
    const s=path.join(src,e.name), d=path.join(dst,e.name);
    if(e.isDirectory()) copyDir(s,d); else fs.copyFileSync(s,d);
  }
}
copyDir(path.join(root,"workbuddy"),pkg);

// Always overwrite embedded Skill with latest root source.
const target=path.join(pkg,"skills","xiaokangxxs-miniprogram-scout");
fs.rmSync(target,{recursive:true,force:true});
fs.mkdirSync(path.join(target,"references"),{recursive:true});
fs.mkdirSync(path.join(target,"templates"),{recursive:true});
fs.mkdirSync(path.join(target,"data"),{recursive:true});
const version=fs.readFileSync(path.join(root,"VERSION"),"utf8").trim();
const rootSkill=fs.readFileSync(path.join(root,"SKILL.md"),"utf8");
const body=rootSkill.replace(/^---\n[\s\S]*?\n---\n/,"").replace(/Version: \*\*[^*]+\*\*/,`Version: **${version}**`);
const front=`---
name: xiaokangxxs-miniprogram-scout
display_name: 微信小程序与小游戏机会侦察
display_name_en: WeChat Opportunity Scout
description: 全球机会侦察或用户需求产品化，并通过可解释评分、证据质量、风险审计、反方审查、验证实验与趋势记忆筛选微信小程序/小游戏机会
description_zh: 从全球信号或用户需求出发，经过 JTBD、产品重构、可解释评分、证据/版权风险、反方审查、验证与趋势记忆，筛选值得做的微信机会
description_en: Scout or productize opportunities with explainable scoring, evidence quality, rights/risk checks, red-team review, validation experiments and persistent trend memory.
version: ${version}
author: "xiaokangxxs"
---

`;
fs.writeFileSync(path.join(target,"SKILL.md"),front+body);
for(const n of fs.readdirSync(path.join(root,"references"))) if(n.endsWith(".md")) fs.copyFileSync(path.join(root,"references",n),path.join(target,"references",n));
fs.copyFileSync(path.join(root,"docs","LATEST_RUN.md"),path.join(target,"references","latest_run_example.md"));
fs.copyFileSync(path.join(root,"assets","report_template.md"),path.join(target,"templates","report_template.md"));
fs.copyFileSync(path.join(root,"assets","source_credentials.example.yaml"),path.join(target,"templates","source_credentials.example.yaml"));
fs.copyFileSync(path.join(root,"data","rolling_pool.json"),path.join(target,"data","rolling_pool.json"));
fs.copyFileSync(path.join(root,"data","rolling_pool.schema.json"),path.join(target,"data","rolling_pool.schema.json"));

// Generate PNG avatars into staged package.
const gen=spawnSync(process.execPath,[path.join(root,"scripts","generate-workbuddy-avatars.mjs"),path.join(pkg,"avatars")],{stdio:"inherit"});
if(gen.status!==0) process.exit(gen.status||1);

const out=path.join(dist,"wechat-opportunity-scout-team-workbuddy.zip");
fs.rmSync(out,{force:true});
let r;
if(process.platform==="win32"){
  const ps=`Compress-Archive -Path '${pkg.replaceAll("'","''")}\\*' -DestinationPath '${out.replaceAll("'","''")}' -Force`;
  r=spawnSync("powershell",["-NoProfile","-Command",ps],{stdio:"inherit"});
}else{
  r=spawnSync("zip",["-qr",out,"."],{cwd:pkg,stdio:"inherit"});
}
if(r.status!==0){
  console.error("ZIP utility failed. On Linux/macOS install zip; on Windows ensure PowerShell is available.");
  process.exit(r.status||1);
}
console.log(`Built: ${out}`);
