#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root=path.resolve(fileURLToPath(new URL("..",import.meta.url)));
const version=fs.readFileSync(path.join(root,"VERSION"),"utf8").trim();
const target=path.join(root,"workbuddy","skills","xiaokangxxs-miniprogram-scout");
fs.mkdirSync(path.join(target,"references"),{recursive:true});
fs.mkdirSync(path.join(target,"templates"),{recursive:true});

const rootSkill=fs.readFileSync(path.join(root,"SKILL.md"),"utf8");
const body=rootSkill.replace(/^---\n[\s\S]*?\n---\n/,"").replace(/Version: \*\*[^*]+\*\*/,`Version: **${version}**`);
const front=`---
name: xiaokangxxs-miniprogram-scout
display_name: 微信小程序与小游戏机会侦察
display_name_en: WeChat Opportunity Scout
description: 侦察全球产品/游戏信号，或将用户给定需求与素材产品化，并路由评分中国可落地的微信小程序、小游戏及其他产品形态机会
description_zh: 从全球信号或用户给定需求中提取 JTBD、重构产品、生成多方案，并筛选值得做且适合微信生态的机会
description_en: Scout global signals or productize user-provided ideas into testable China-feasible WeChat Mini Program and Mini Game opportunities.
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
console.log(`Synced WorkBuddy shared Skill to repository version ${version}`);
