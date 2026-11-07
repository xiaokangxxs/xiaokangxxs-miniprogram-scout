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
description: 发现全球产品与游戏机制信号，路由并评分中国可落地的微信小程序、小游戏及其他产品形态机会
description_zh: 从全球新品和游戏机制中筛选值得做、可验证、适合微信生态的小程序与小游戏机会
description_en: Discover global product and game signals and convert the strongest China-feasible opportunities into testable WeChat Mini Program and Mini Game concepts.
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
