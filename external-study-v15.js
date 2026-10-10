import {learningResources} from './reference-data.js?v=15.0.0';
import {lessonStudyMap,toolStudyMap,projectStudyMap,groupStudyMap,studyContextNotes} from './source-library-v15.js?v=15.0.0';
import {lessonInlineReferences,groupInlineReferences} from './inline-reference-map-v10.js?v=15.0.0';
import {resourceCard} from './resource-card-v15.js?v=15.0.0';

const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fromIds=ids=>[...new Set(ids)].map(id=>learningResources.find(r=>r.id===id)).filter(Boolean);
export function studyResources(kind,key){
 const map=kind==='lesson'?lessonStudyMap:kind==='tool'?toolStudyMap:kind==='project'?projectStudyMap:groupStudyMap;
 const extra=kind==='lesson'?lessonInlineReferences[key]:kind==='group'?groupInlineReferences[key]:null;
 return fromIds([...(map[key]||[]),...(extra?.resourceIds||[]),...(extra?.videoIds||[])]);
}
export function featuredStudyResources(rows){
 const featured=[];
 for(const type of ['guide','video','repo']){const r=rows.find(r=>r.type===type);if(r)featured.push(r);}
 if(!featured.length&&rows.length)featured.push(rows[0]);
 return featured;
}
export function studySearchPrompt(subject,rows=[]){
 const urls=rows.slice(0,4).map(r=>r.title+'：'+r.url).join('\n');
 return `我正在学习“${subject}”，已经读过本步的资料。我用的是【填写工具、Windows/Mac/手机和版本】，现在想解决【填写一个具体问题】，希望得到【填写真实文件或效果】。\n请先问清必要条件，再上网找与这个问题直接相关的原作者blog／图文教程、操作视频和适用的Skill或开源项目。\n优先从这些原资料继续查找：\n${urls||'先找该产品当前官方文档及原作者教程。'}\n最多推荐3份，说明原作者、更新时间、适用平台、学习门槛、值得看的章节或演示，以及我能照着做的一个小练习。\n请实际打开原页，区分操作教学与成品展示；打不开或无法核实的资料要明确说明，不要编网址、视频时间点或收费条件。不要把另一个工具的按钮当成本工具教程。\n发现Skill时，先解释它的SKILL.md、配套脚本、依赖、许可证和权限要求，以及适不适合我的工具；先给安装方案，不直接安装或运行。\n最后带我用自己的材料做一遍，告诉我应得到什么文件、如何亲自检查；我理解并核对后，再决定把哪些方法整理进自己的Skill。`;
}
export function studyNotes(kind,key,subject){
 const rows=studyResources(kind,key);
 return '## 跟原作者继续学习\n\n'+rows.map(r=>r.title+'\n原作者：'+r.author+'\n原页：'+r.url+'\n语言：'+r.language+'\n学什么：'+r.whatToLearn+'\n学完练：'+r.practiceAfter+'\n准备条件：'+r.prerequisite+'\n核对日期与范围：'+r.checkedAt+'；'+r.verificationNote).join('\n\n')+'\n\n## 自己继续找资料和 Skill\n\n'+studySearchPrompt(subject,rows);
}
export function studyExplorationMarkup(subject,rows,context){
 return `<details class="study-exploration"><summary>学会自己继续找资料与 Skill</summary><ol><li>写清眼前的问题：用哪个工具、已有怎样的材料、卡在哪一步、希望得到什么，再搜索工具名与具体操作。</li><li>先打开原作者或官方页面，看示范结果、版本、平台和依赖；博客读操作步骤，视频看实际操作，项目先读 README、SKILL.md 和许可。</li><li>用自己的小样本跟做一次，保存结果与修改原因；遇到差异回到当前官方说明，再把有效的方法记进自己的手册。</li></ol><p class="inline-note">英文资料可请AI解释指定段落，并保留按钮和参数原名；核对原页后再操作。若视频入口需要登录、暂时打不开，先用同一步的图文资料完成练习。</p><details><summary>展开可复制的找资料提示词</summary><pre class="sample-text" id="study-search-${esc(context)}">${esc(studySearchPrompt(subject,rows))}</pre><p class="inline-note">选中文字后按 Ctrl+C／Command+C，手机可长按复制；填完方括号再发给自己能联网的AI工具。</p></details><a href="./materials/跟原教程学习记录.md" download>下载原教程跟学与探索记录</a></details>`;
}
export function studyMarkup(kind,key,subject,{heading='跟原作者继续学',context=kind+'-'+key,excludeIds=[]}={}){
 const rows=studyResources(kind,key).filter(r=>!excludeIds.includes(r.id));
 if(!rows.length)return '';
 const featured=featuredStudyResources(rows),ids=new Set(featured.map(r=>r.id)),more=rows.filter(r=>!ids.has(r.id));
 const noVideo=!rows.some(r=>r.type==='video');
 const toolMethodNote=kind==='lesson'&&['first-task','better-questions','files-check','ai-judgement'].includes(key)?'<p class="inline-note">本课在Kimi中练习；补充的ChatGPT资料用于学习说明需求和检查结果的方法，Kimi入口仍按本课原教程核对。</p>':kind==='project'?'<p class="inline-note">优先沿用需求表中选好的工具。进阶项目按需选学，读清适用条件后再决定是否安装。</p>':'';
 return `<section class="external-study" data-study-kind="${esc(kind)}" data-study-key="${esc(key)}" aria-labelledby="study-title-${esc(context)}"><div class="study-section-heading"><span class="eyebrow">原教程 · 视频 · Skill与项目</span><h3 id="study-title-${esc(context)}">${esc(heading)}</h3><span class="pill">${rows.length}份对应资料</span></div><p>先选与眼前问题相关的一份，读懂后用自己的材料做一次。下面的推荐写明学习重点、准备条件和课后练习。</p>${toolMethodNote}${studyContextNotes[kind+'/'+key]?`<p class="inline-note">${esc(studyContextNotes[kind+'/'+key])}</p>`:''}<div class="study-featured resource-grid">${featured.map(r=>resourceCard(r,false,'study-'+context)).join('')}</div>${more.length?`<details class="study-more"><summary>继续深入：另外${more.length}份本步资料</summary><div class="resource-grid">${more.map(r=>resourceCard(r,false,'study-'+context)).join('')}</div></details>`:''}${noVideo?'<p class="inline-note study-video-gap">这一步先读对应原教程；目前未收录直接适用的操作视频。可以按下面的方法继续查找并核对。</p>':''}${studyExplorationMarkup(subject,rows,context)}</section>`;
}
