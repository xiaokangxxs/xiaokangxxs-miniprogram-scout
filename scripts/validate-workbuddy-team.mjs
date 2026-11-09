#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root=path.resolve(fileURLToPath(new URL("..",import.meta.url)));
const wb=path.join(root,"workbuddy");
const errors=[];
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const exists=p=>fs.existsSync(path.join(root,p));

const required=[
  "workbuddy/.codebuddy-plugin/plugin.json",
  "workbuddy/settings.json",
  "workbuddy/README.md",
  "workbuddy/UPLOAD_CHECKLIST.md",
  "workbuddy/avatar-specs.json",
  "workbuddy/skills/xiaokangxxs-miniprogram-scout/SKILL.md",
  "workbuddy/skills/xiaokangxxs-miniprogram-scout/data/rolling_pool.json",
  "workbuddy/skills/xiaokangxxs-miniprogram-scout/data/rolling_pool.schema.json"
];
for(const p of required) if(!exists(p)) errors.push(`Missing: ${p}`);

if(!errors.length){
  const plugin=JSON.parse(read("workbuddy/.codebuddy-plugin/plugin.json"));
  const settings=JSON.parse(read("workbuddy/settings.json"));
  const specs=JSON.parse(read("workbuddy/avatar-specs.json"));
  const version=read("VERSION").trim();

  if(plugin.expertType!=="team") errors.push("expertType must be team");
  if(plugin.agentName!==plugin.teamInfo?.leadAgent) errors.push("agentName != leadAgent");
  if(settings.agent!==plugin.agentName) errors.push("settings.agent != agentName");
  if(plugin.quickPrompts?.length!==3) errors.push("quickPrompts must contain 3 items");
  if(plugin.tags?.length!==3) errors.push("tags must contain 3 items");
  if(plugin.members?.length!==8) errors.push("members must contain 1 lead + 7 members");

  const ids=new Set();
  for(const rel of plugin.agents||[]){
    const p=path.join(wb,rel.replace(/^\.\//,""));
    if(!fs.existsSync(p)){errors.push(`Missing agent: ${rel}`);continue;}
    const txt=fs.readFileSync(p,"utf8");
    const m=txt.match(/^name:\s*(.+)$/m);
    if(!m){errors.push(`Missing agent name: ${rel}`);continue;}
    const id=m[1].trim(); ids.add(id);
    if(path.basename(p,".md")!==id) errors.push(`Agent filename/name mismatch: ${rel}`);
  }
  if(!ids.has(plugin.agentName)) errors.push("Lead agent file not found");
  for(const id of plugin.teamInfo?.memberAgents||[]) if(!ids.has(id)) errors.push(`Member agent missing: ${id}`);

  const avatarFiles=new Set(Object.keys(specs.avatars||{}));
  if(specs.size!==512 || specs.format!=="png") errors.push("Avatar spec must be 512px PNG");
  for(const m of plugin.members||[]){
    const f=String(m.avatar||"").replace(/^avatars\//,"");
    if(!avatarFiles.has(f)) errors.push(`Avatar spec missing: ${f}`);
  }
  const teamAvatar=String(plugin.avatar||"").replace(/^avatars\//,"");
  if(!avatarFiles.has(teamAvatar)) errors.push("Team avatar spec missing");

  const wbSkill=read("workbuddy/skills/xiaokangxxs-miniprogram-scout/SKILL.md");
  if(!wbSkill.includes(`version: ${version}`)) errors.push(`WorkBuddy Skill version not synced to ${version}`);

  // The root rolling pool is the canonical live state. The committed WorkBuddy
  // copy is only a valid snapshot/seed and is refreshed by sync/build tooling.
  // Do not require byte-for-byte equality: the daily scout intentionally updates
  // data/rolling_pool.json without rewriting the whole WorkBuddy source tree.
  const wbPool="workbuddy/skills/xiaokangxxs-miniprogram-scout/data/rolling_pool.json";
  const wbPoolSchema="workbuddy/skills/xiaokangxxs-miniprogram-scout/data/rolling_pool.schema.json";
  const rootPool=JSON.parse(read("data/rolling_pool.json"));
  const embeddedPool=JSON.parse(read(wbPool));
  if(read(wbPoolSchema)!==read("data/rolling_pool.schema.json")) errors.push("WorkBuddy rolling pool schema drift");
  if(embeddedPool.schema_version!==rootPool.schema_version) errors.push("WorkBuddy rolling pool schema_version mismatch");
  if(embeddedPool.skill_version!==version) errors.push(`WorkBuddy rolling pool skill_version not synced to ${version}`);
  if(embeddedPool.privacy!=="PUBLIC_MARKET_SIGNALS_ONLY") errors.push("WorkBuddy rolling pool privacy boundary missing");
  if(!embeddedPool.mini_program || !embeddedPool.mini_game || !Array.isArray(embeddedPool.history)) errors.push("WorkBuddy rolling pool snapshot shape invalid");

  const referenceNames=fs.readdirSync(path.join(root,"references")).filter(x=>x.endsWith(".md"));
  for(const name of referenceNames){
    const a=read(`references/${name}`);
    const p=`workbuddy/skills/xiaokangxxs-miniprogram-scout/references/${name}`;
    if(!exists(p)) errors.push(`WorkBuddy reference missing: ${name}`);
    else if(read(p)!==a) errors.push(`WorkBuddy reference drift: ${name}`);
  }
}
if(errors.length){
  console.error("❌ WorkBuddy expert-team validation failed:");
  for(const e of errors) console.error(`- ${e}`);
  process.exit(1);
}
console.log("✅ WorkBuddy expert-team validation passed.");
