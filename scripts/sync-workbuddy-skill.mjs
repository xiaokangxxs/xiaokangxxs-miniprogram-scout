#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root=path.resolve(fileURLToPath(new URL("..",import.meta.url)));
const version=fs.readFileSync(path.join(root,"VERSION"),"utf8").trim();
const target=path.join(root,"workbuddy","skills","xiaokangxxs-miniprogram-scout");
fs.mkdirSync(path.join(target,"references"),{recursive:true});
fs.mkdirSync(path.join(target,"templates"),{recursive:true});
fs.mkdirSync(path.join(target,"data"),{recursive:true});

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

for(const name of fs.readdirSync(path.join(root,"references"))){
  if(name.endsWith(".md")) fs.copyFileSync(path.join(root,"references",name),path.join(target,"references",name));
}
fs.copyFileSync(path.join(root,"docs","LATEST_RUN.md"),path.join(target,"references","latest_run_example.md"));
fs.copyFileSync(path.join(root,"assets","report_template.md"),path.join(target,"templates","report_template.md"));
fs.copyFileSync(path.join(root,"assets","source_credentials.example.yaml"),path.join(target,"templates","source_credentials.example.yaml"));
fs.copyFileSync(path.join(root,"data","rolling_pool.json"),path.join(target,"data","rolling_pool.json"));
fs.copyFileSync(path.join(root,"data","rolling_pool.schema.json"),path.join(target,"data","rolling_pool.schema.json"));
console.log(`Synced WorkBuddy shared Skill to repository version ${version}`);
