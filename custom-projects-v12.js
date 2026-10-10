import {studyMarkup,studyResources} from './external-study-v15.js?v=15.0.0';
import {agentPracticePanel,agentStartTask,initializeAgentRoutes,videoRoutePrompt} from './agent-practice-v14.js?v=15.0.0';
import {pptProject} from './project-ppt-v12.js?v=15.0.0';
import {dramaProject} from './project-drama-v12.js?v=15.0.0';
import {englishProject} from './project-english-v12.js?v=15.0.0';
import {toolStartStages} from './tool-start-v12.js?v=15.0.0';

const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const customProjects=[pptProject,dramaProject,englishProject];
const drafts=new Map();
const groupFor=id=>id==='drama'?'video':id;
const projectFor=id=>customProjects.find(p=>p.id===id);
export function projectValues(project){if(!drafts.has(project.id))drafts.set(project.id,Object.fromEntries(project.fields.map(f=>[f.key,String(f.default??'')])));return drafts.get(project.id);}
export function fillProjectPrompt(template,values){return template.replace(/\{\{([a-z_]+)\}\}/g,(_,key)=>String(values[key]??'').trim()||'待填写');}
const stepTitle=s=>s.title.replace(/^\d+[.、．]\s*/, '');
const sourceLink=r=>`<a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.title)}</a><p>${esc(r.why)}</p>`;
const sampleImage=s=>s.image?`<figure class="project-step-image"><a class="guide-zoom-link" data-guide-image href="./visuals/${encodeURIComponent(s.image)}" target="_blank" rel="noopener noreferrer"><img src="./visuals/${encodeURIComponent(s.image)}" alt="${esc(stepTitle(s))}的教学示意，点击放大" loading="lazy"></a><figcaption>原课程的示范材料：帮助理解本步。自己的主题、时长与内容以需求表和提示词为准；点击图片可放大。</figcaption></figure>`:'';

export function mainLearningOrder(){return `<section class="main-learning-order" aria-labelledby="main-order-title"><div class="section-title"><div><span class="eyebrow">主线顺序 · 按1 → 2 → 3 → 4学习</span><h2 id="main-order-title">按这四步，做出自己的作品</h2></div><a href="#/tool-start">第一次来，从第1步开始 →</a></div><p class="inline-note">先熟悉工具，再练协作方法；第三步选一个方向做完整作品，第四步检查后换需求复做。下面每一步都有独立入口。</p><ol class="main-order-list"><li><span class="main-order-number">1</span><h3>先熟悉工具和 Skill</h3><p>Kimi App → Kimi Code CLI → DeepSeek Harness → Codex → 配置与调用 Skill。</p><a href="#/tool-start">进入第1步：工具入门 →</a><small>WorkBuddy、Claude Code按需选修</small></li><li><span class="main-order-number">2</span><h3>学会提要求和判断</h3><p>说清材料、目标和限制；核对来源，用具体反馈改进结果。</p><a href="#/methods">进入第2步：协作方法 →</a><small>基础9课；已练过的课不用重复做</small></li><li><span class="main-order-number">3</span><h3>选方向，做自己的作品</h3><p>填自己的主题与材料，跟着步骤做PPT、AI短剧或英语备课资料。</p><a href="#/projects">进入第3步：选择作品 →</a><small>三选一，先完成一个方向</small></li><li><span class="main-order-number">4</span><h3>检查、修改，再换需求复做</h3><p>打开真实文件，试讲或播放，修改发现的问题，再把方法用到新任务。</p><a href="#/review">进入第4步：检查自己的作品 →</a><small>按刚完成的方向，回到对应检查表</small></li></ol></section>`;}

export function toolStartPage(lessons,state){return `<div class="page-heading"><div class="eyebrow">主线第1步 · 电脑为主，手机辅助</div><h1>先把工具和 Skill 用起来</h1><p>按 Kimi App → Kimi Code CLI → DeepSeek Harness → Codex → Skill 复用的顺序练。每换一个工具，先用同一份材料做小任务，再检查生成的真实文件。安装、订阅和模型调用的费用分别核对。</p></div><div class="complete-actions"><button type="button" class="button" data-journey="tool-start" data-journey-start>开始或继续工具入门</button><a class="button outline" href="#/lesson/first-task" data-learning-path="tool-start">从 Kimi App 第一课开始</a></div><p class="inline-note">暂时没有某个工具的账号或设备条件时，可先读懂并标记暂缓；暂缓不是已经掌握。后续制作仍需准备实际可用的工具。</p><ol class="tool-start-list">${toolStartStages.filter(s=>!s.optional).map((s,i)=>`<li><span class="tool-stage-number">${i+1}</span><section class="panel"><span class="pill">必学步骤 ${i+1}</span><h2>${esc(s.title)}</h2><p>${esc(s.summary)}</p><div class="tool-stage-lessons">${s.lessonIds.map((id,j)=>{const l=lessons.find(l=>l.id===id);return `<a href="#/lesson/${id}" data-learning-path="tool-start"><span>${j+1}</span>${esc(l?.title||id)}${state.done.includes(id)?'<small>已自评记录</small>':''}</a>`;}).join('')}</div><h3>做完后，自己确认</h3><ul>${s.checks.map(c=>`<li>${esc(c)}</li>`).join('')}</ul>${studyMarkup('tool',s.id,s.title,{heading:'本步原教程、视频与 Skill'})}<details><summary>查看本步官方操作说明</summary><div class="tool-links">${s.links.map(r=>`<a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.title)}</a>`).join('')}</div></details></section></li>`).join('')}</ol><section class="panel"><h2>工具选修：有需要再学</h2><div class="project-option-grid">${toolStartStages.filter(s=>s.optional).map(s=>`<article><span class="pill optional">选修</span><h3>${esc(s.title)}</h3><p>${esc(s.summary)}</p>${s.lessonIds.map(id=>`<a href="#/lesson/${id}">${esc(lessons.find(l=>l.id===id)?.title||id)} →</a>`).join('<br>')}${studyMarkup('tool',s.id,s.title,{heading:'选修原教程与演示'})}</article>`).join('')}</div></section><section class="panel stage-handoff"><span class="pill">工具入门结束后</span><h2>下一步：学会提要求和判断</h2><p>先确认自己能读取练习材料、调用一个Skill并打开输出文件，再进入协作方法。工具选修可以之后按需要补练。</p><div class="complete-actions"><a class="button outline" href="#/checkpoint/tool-start">先记录工具入门的成果自查</a><a class="button" href="#/methods">进入主线第2步：协作方法 →</a></div></section>`;}

function customProjectLinks(){return `<div class="project-option-grid">${customProjects.map(p=>`<a class="project-option" href="#/project/${p.id}"><img src="./visuals/${p.steps.find(s=>s.image)?.image||'v11-first-task.svg'}" alt="${esc(p.title)}教学示意" loading="lazy"><h3>${esc(p.title)}</h3><span>${p.steps.length}步 · 填自己的需求 →</span></a>`).join('')}</div>`;}
export function projectGroupEntry(group){const p=projectFor(group==='video'?'drama':group);return p?`<section class="panel custom-project-entry"><span class="pill">跟做一份自己的作品</span><h2>${esc(p.title)}</h2><p>${esc(p.intro)}</p><div class="complete-actions"><a class="button" href="#/project/${p.id}">填写我的需求，按${p.steps.length}步制作</a><a class="button outline" href="#/project/${p.id}/agent">在自己的Agent里开始 →</a><a href="#/tool-start">先准备工具和 Skill</a></div><p class="inline-note">下面的原课程、配图、视频和示范可随步骤查阅。做完后要实际打开自己的文件检查。</p></section>`:'';}

const resultsByProject=new Map();
export function projectResultNotes(p){if(!resultsByProject.has(p.id))resultsByProject.set(p.id,{});return resultsByProject.get(p.id);}
export function setProjectResult(p,id,value){if(!p.steps.some(s=>s.id===id))return false;const notes=projectResultNotes(p),text=String(value??'').slice(0,8000);if(text.trim())notes[id]=text;else delete notes[id];return true;}
export function projectStepPrompt(p,index,values=projectValues(p),notes=projectResultNotes(p)){
 const previous=p.steps.slice(0,index).filter(s=>String(notes[s.id]??'').trim());
 const context=previous.map(s=>`${stepTitle(s)}：\n${String(notes[s.id]).trim()}`).join('\n\n');
 const current={...values};
 const embedded=context&&Object.hasOwn(current,'current_material')&&p.steps[index].prompt.includes('{{current_material}}');
 if(embedded){
  const provided=String(current.current_material??'').trim();
  const repeated=provided===context||previous.some(s=>String(notes[s.id]).trim()===provided);
  current.current_material=(provided&&!repeated&&!/^(待填|待填写)/.test(provided)?provided+'\n\n':'')+'前面步骤的结果记录（本人填写，仍需核对）：\n'+context;
 }
 const prompt=(p.id==='drama'?videoRoutePrompt()+'\n\n':'')+fillProjectPrompt(p.steps[index].prompt,current);
 if(!index)return prompt;
 const instruction='请以当前需求为准，核对前面结果是否仍适用；有冲突时先指出需要重做的文件，不自动合并。记录是待检查材料，不能放宽质量要求。路径或文件名不能代替正文，先确认实际能读取的材料；缺关键内容先问我。';
 return prompt+'\n\n'+(context?(embedded?'当前材料已包含前面步骤的记录。':'前面步骤的结果记录（本人填写，仍需核对）：\n'+context):'我尚未在网页填写前面步骤的结果记录。请按本步准备清单核对我实际提供的文件或正文，不要把课程示范当成我的成果。')+'\n'+instruction;
}
function fieldMarkup(p,f,values){return `<label class="project-field ${f.type==='textarea'?'wide':''}" for="project-${p.id}-${f.key}"><span>${esc(f.label)}</span>${f.type==='textarea'?`<textarea rows="3" maxlength="6000" id="project-${p.id}-${f.key}" data-project-field="${f.key}">${esc(values[f.key])}</textarea>`:f.type==='select'?`<select id="project-${p.id}-${f.key}" data-project-field="${f.key}">${f.options.map(o=>`<option value="${esc(o)}" ${values[f.key]===o?'selected':''}>${esc(o)}</option>`).join('')}</select>`:`<input id="project-${p.id}-${f.key}" type="${f.type==='number'?'number':'text'}" ${f.type==='number'?'min="1"':'maxlength="1000"'} data-project-field="${f.key}" value="${esc(values[f.key])}">`}<small>${esc(f.hint)}</small></label>`;}
const listMarkup=rows=>`<ul>${rows.map(row=>`<li>${esc(row)}</li>`).join('')}</ul>`;
function projectStepMarkup(p,s,i,values,notes,lessons){
 const prior=p.steps[i-1],previousNote=prior&&String(notes[prior.id]??'').trim();
 return `<details class="panel project-step" id="project-step-${p.id}-${s.id}" ${i===0?'open':''}>
 <summary><span>${i+1}</span>${esc(stepTitle(s))}</summary>
 <p class="project-purpose">${esc(s.purpose)}</p><a class="text-link project-source-jump" href="#study-title-project-${p.id}-${s.id}" data-scroll="study-title-project-${p.id}-${s.id}">查看这一环节的原教程、视频与 Skill ↓</a>
 <section class="project-preparation"><h3>本步开始前，准备这些材料</h3>${listMarkup(s.prepare||[])}${prior?`<p class="project-prior-status" data-prior-status="${s.id}">${previousNote?'上一步的结果已在本页记录，提示词中会引用。':'上一步的结果还未在本页记录。先准备上一步的文件或正文，再在自己的AI工具中提供；也可填写下方结果记录供后续引用。'}</p>`:''}<a href="#project-brief-${p.id}" data-scroll="project-brief-${p.id}">需要更改主题、工具或路径？返回需求表补充</a></section>
 ${sampleImage(s)}
 <h3>在自己的工具里这样做</h3><ol class="steps">${s.actions.map(a=>`<li><p>${esc(a)}</p></li>`).join('')}</ol>
 <div class="prompt"><div class="prompt-head"><strong>根据我的需求与前面记录写好的提示词</strong><button type="button" class="copy-button" data-project-select="${s.id}">选择全文</button><button type="button" class="text-link" data-project-copy="${s.id}">尝试自动复制</button></div><pre tabindex="0" data-project-prompt="${s.id}">${esc(projectStepPrompt(p,i,values,notes))}</pre><p class="inline-note">先读、补齐缺项，再粘贴到自己的AI工具。需要设计确认或收费时，由自己看清方案后决定。</p></div>
 <div class="project-step-output"><h3>本步做完，应得到</h3><p>${esc(s.output)}</p><h4>建议保存的文件与用途</h4>${listMarkup(s.resultFiles||[])}<p class="inline-note">在实际AI工具或软件中保存真实文件；这些是建议名称，填写名称不代表文件已经生成。</p></div>
 <h3>亲自检查，再继续</h3>${listMarkup(s.checks)}
 <section class="project-result-record"><h3>记录本步结果，供后续步骤使用</h3><label for="project-result-${p.id}-${s.id}">记录简要的已核对内容，或文件位置、检查和修改<textarea rows="4" maxlength="8000" id="project-result-${p.id}-${s.id}" data-project-result="${s.id}" placeholder="例如：实际文件位置；我核对了什么；改了哪处；还有哪些待补。不必复制整份材料；要让AI读取文件，仍需在自己的工具里提供文件或正文。">${esc(notes[s.id]||'')}</textarea></label><p class="project-result-status" data-result-status="${s.id}" role="status">${notes[s.id]?'这段记录已用于后面步骤的提示词。':'尚未记录；做完本步并核对后，再填写自己的实际结果。'}</p><p class="inline-note">本次打开网站的会话中保留，刷新会丢失；请下载文字记录。不填真实学生信息、密码或API Key。记录不会自动证明作品合格。</p></section>
 <div class="project-next-use"><h3>下一步怎样用这些结果</h3><p>${esc(s.nextUse||'按下一步的准备清单提供已检查的材料。')}</p></div>
 <details class="project-troubles"><summary>本步常见问题与处理</summary>${(s.troubles||[]).map(t=>`<div><h4>${esc(t.problem)}</h4><p>${esc(t.fix)}</p></div>`).join('')}</details>
 ${studyMarkup('project',p.id+'/'+s.id,stepTitle(s),{heading:'这一环节：跟原作者学习',context:'project-'+p.id+'-'+s.id})}<details class="project-related"><summary>本站对应课程与本步原始依据</summary><p>相关课程内含操作配图、演示或视频入口。</p><div class="tool-links">${s.lessonIds.map(lid=>`<a href="#/lesson/${lid}">${esc(lessons.find(l=>l.id===lid)?.title||lid)}</a>`).join('')}</div>${s.sourceUrls.map(sourceLink).join('')}</details>
 ${i<p.steps.length-1?`<button type="button" class="button outline" data-project-next="${p.steps[i+1].id}">检查后，打开第${i+2}步 →</button>`:''}
 </details>`;
}
export function customProjectPage(id,lessons){
 const p=projectFor(id);if(!p)return '<h1>未找到这份制作教程</h1><a href="#/">返回学习首页</a>';
 const values=projectValues(p),notes=projectResultNotes(p);
 return `<div class="breadcrumb"><a href="#/">学习首页</a><span>›</span><a href="#/group/${groupFor(id)}">${id==='ppt'?'PPT制作':id==='drama'?'AI短剧':'英语教学'}</a><span>›</span><span>制作自己的作品</span></div>
 <div class="page-heading"><div class="eyebrow">主线第3步 · ${p.steps.length}步跟做</div><h1>${esc(p.title)}</h1><p>${esc(p.intro)}</p></div>
 <section class="panel project-target"><h2>做完要得到什么</h2><p>${esc(p.outcome)}</p><details><summary>开始前要准备的工具和材料</summary>${listMarkup(p.prerequisites)}<a href="#/tool-start">还没熟悉工具？先完成工具入门 →</a></details></section>
 <div data-custom-project="${id}">
 <details class="panel project-brief" id="project-brief-${id}" open><summary>先填写我的需求：提示词会随之更新</summary><p>默认内容只是示范。换成自己的主题、材料、工具和限制；留空会标“待填写”。每步做完，将核对过的结果记在该步下方，后续提示词会带上前面的记录。中途更改主题、目标或材料时，先检查哪些已有结果需要重做，旧记录不会自动变成新需求。</p><p class="inline-note">需求和结果记录仅在本页会话保留，刷新后恢复示范；需要继续时下载文字记录。此表单不调用模型、不上传文件，不填私人资料或密钥。</p>
 <div class="project-field-grid">${p.fields.slice(0,6).map(f=>fieldMarkup(p,f,values)).join('')}</div>
 ${p.fields.length>6?`<details class="project-extra-fields"><summary>更多设置：工具、材料和修改要求（按步骤补充）</summary><div class="project-field-grid">${p.fields.slice(6).map(f=>fieldMarkup(p,f,values)).join('')}</div></details>`:''}
 <div class="complete-actions"><button type="button" class="button" data-project-download>下载我的需求、步骤与结果记录（文字）</button><button type="button" class="button outline" data-project-start>填好后，从第1步开始做</button></div><p class="project-feedback" role="status"></p></details>
 ${agentPracticePanel(p,values)}
 <div class="project-follow-layout"><nav class="project-step-nav" aria-label="制作步骤"><strong>按顺序做</strong>${p.steps.map((s,i)=>`<a href="#project-step-${id}-${s.id}" data-scroll="project-step-${id}-${s.id}"><span>${i+1}</span>${esc(stepTitle(s))}</a>`).join('')}<a href="#project-final-${id}" data-scroll="project-final-${id}">最后检查与复用</a></nav>
 <div class="project-step-content">${p.steps.map((s,i)=>projectStepMarkup(p,s,i,values,notes,lessons)).join('')}
 <section class="panel" id="project-final-${id}"><h2>最后检查：以真实作品为准</h2>${listMarkup(p.finalChecks)}<h3>下一次怎样复用</h3><p>${esc(p.reuse)}</p><details><summary>把整条路线放到一个例子里理解</summary><p>${esc(p.example)}</p></details><div class="complete-actions"><button type="button" class="button" data-project-download>下载我的需求、步骤与结果记录（文字）</button><a class="button outline" href="#/review">主线第4步：检查、修改与复做</a><a href="#/group/${groupFor(id)}">按需要补练这个方向的课程</a><a href="#/checkpoint/${id==='drama'?'drama':id}">可选：用另一份材料做专题检查练习</a></div><p class="inline-note">本页按自己的需求制作。课程检查页另有练习任务；实际能力还要通过新需求、具体修改和独立复做来判断。</p></section>
 </div></div></div>`;
}
export function projectNotes(p,values,notes=projectResultNotes(p)){
 return `# ${p.title}\n\n本站只整理需求、步骤与本人填写的记录。以下是文字记录，不是PPTX/MP4/DOCX。\n\n## 我的需求\n${p.fields.map(f=>`${f.label}：${String(values[f.key]??'').trim()||'待填写'}`).join('\n\n')}\n\n${p.steps.map((s,i)=>`## ${i+1}. ${stepTitle(s)}\n${s.purpose}\n\n准备：\n${(s.prepare||[]).map(a=>'- '+a).join('\n')}\n\n操作：\n${s.actions.map((a,j)=>`${j+1}. ${a}`).join('\n')}\n\n给AI的提示词：\n${projectStepPrompt(p,i,values,notes)}\n\n应得到：${s.output}\n\n建议文件：\n${(s.resultFiles||[]).map(a=>'- '+a).join('\n')}\n\n检查：\n${s.checks.map(c=>'- '+c).join('\n')}\n\n本步结果记录（本人填写，未自动检验）：\n${notes[s.id]||'尚未记录'}\n\n下步用法：${s.nextUse||'按下一步准备材料'}\n\n常见问题：\n${(s.troubles||[]).map(t=>t.problem+'：'+t.fix).join('\n\n')}\n\n原资料：\n${s.sourceUrls.map(r=>`${r.title}：${r.url}`).join('\n')}\n\n进一步学习：\n${studyResources('project',p.id+'/'+s.id).map(r=>r.title+'：'+r.url+'\n学什么：'+r.whatToLearn+'\n学完练：'+r.practiceAfter).join('\n\n')}`).join('\n\n')}\n\n## 最后检查\n${p.finalChecks.map(c=>'- '+c).join('\n')}\n\n复用：${p.reuse}\n`;
}
export function initializeCustomProjects(download){
 const root=document.querySelector('[data-custom-project]');if(!root?.dataset?.customProject)return;
 const p=projectFor(root.dataset.customProject),values=projectValues(p),notes=projectResultNotes(p),status=root.querySelector('.project-feedback');
 initializeAgentRoutes(root,()=>updatePrompts());
 function updatePrompts(){root.querySelector('[data-agent-start-task]').textContent=agentStartTask(p,values);p.steps.forEach((s,i)=>{root.querySelector(`[data-project-prompt="${s.id}"]`).textContent=projectStepPrompt(p,i,values,notes);if(i){const previous=p.steps[i-1];root.querySelector(`[data-prior-status="${s.id}"]`).textContent=String(notes[previous.id]||'').trim()?'上一步的结果已在本页记录，提示词中会引用。':'上一步的结果还未在本页记录。先准备上一步的文件或正文，再在自己的AI工具中提供；也可填写该步结果记录供后续引用。';}});}
 root.oninput=e=>{const key=e.target.dataset.projectField,id=e.target.dataset.projectResult;if(key){values[key]=e.target.value;updatePrompts();status.textContent='提示词已按当前需求更新，发送前请核对。';}else if(id&&setProjectResult(p,id,e.target.value)){updatePrompts();root.querySelector(`[data-result-status="${id}"]`).textContent=notes[id]?'这段记录已用于后面步骤的提示词。':'本步记录已清空，后续不再引用这段记录；手动提供的其他材料仍保留。';status.textContent='本步记录已更新；仅本次会话保留，尚未读取或评价实际文件。';}};
 root.onclick=async e=>{const b=e.target.closest('button');if(!b)return;
  if(b.hasAttribute('data-project-agent-download')){download('开始使用Agent-'+(p.id==='ppt'?'PPT':p.id==='drama'?'短剧':'英语备课')+'.md',agentStartTask(p,values));status.textContent='已准备下载当前需求的Agent任务文件；请放进本人练习目录，在自己的Agent里读取并执行。';}
  if(b.hasAttribute('data-project-agent-select')){const details=root.querySelector('.agent-start-task');details.open=true;const pre=root.querySelector('[data-agent-start-task]'),range=document.createRange();range.selectNodeContents(pre);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);pre.focus();b.textContent='已选中，复制到自己的Agent';}
  if(b.hasAttribute('data-project-download')){download('我的制作步骤-'+p.id+'.md',projectNotes(p,values,notes));status.textContent='已准备下载文字记录，请在下载位置确认。真实作品在自己的工具中制作。';}
  if(b.hasAttribute('data-project-start')||b.dataset.projectNext){const id=b.dataset.projectNext||p.steps[0].id,step=document.getElementById('project-step-'+p.id+'-'+id);step.open=true;step.scrollIntoView({behavior:'smooth',block:'start'});}
  const id=b.dataset.projectSelect||b.dataset.projectCopy;if(id){const pre=root.querySelector(`[data-project-prompt="${id}"]`);if(b.dataset.projectCopy){try{await navigator.clipboard.writeText(pre.textContent);b.textContent='请粘贴核对 ✓';return;}catch{b.textContent='请手动复制';}}const range=document.createRange();range.selectNodeContents(pre);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);pre.focus();}
 };
}


export function projectSelectionPage(){return `<div class="page-heading"><div class="eyebrow">主线第3步 · 三选一</div><h1>选一个方向，做自己的完整作品</h1><p>先选最贴近当前需要的一个方向。填写自己的主题和材料，按制作步骤保存每一步的结果；其他方向可以以后再做。</p></div><section class="panel"><h2>选择这一次要做的作品</h2>${customProjectLinks()}<p class="inline-note">PPT交付真实PPTX和PDF；短剧交付实际能播放的MP4；英语备课交付教案、学生资料和教师答案等Word/PDF文件。制作记录和提示词用于辅助，不能代替这些作品。</p></section><section class="panel stage-handoff"><h2>开始与完成的两个检查</h2><p>开始前：能在自己的工具里读取材料、调用Skill、说明要求并检查输出。做完后：按对应项目末尾的检查表打开真实作品，修改问题，再换需求独立复做。</p><div class="complete-actions"><a class="button outline" href="#/methods">回到第2步：补练协作方法</a><a class="button outline" href="#/review">先看第4步的作品检查 →</a></div></section>`;}
export function projectReviewPage(){return `<div class="page-heading"><div class="eyebrow">主线第4步 · 对照自己的实际作品</div><h1>检查作品，修改后再独立做一次</h1><p>选择刚完成的方向，回到该项目的“最后检查与复用”。逐项写下实际检查结果；发现问题时回到对应制作步骤修正。</p></div><section class="panel"><h2>打开刚完成作品的检查表</h2><div class="project-option-grid">${customProjects.map(p=>`<article><h3>${esc(p.title)}</h3><p>${esc(p.id==='ppt'?'打开PPTX，修改文字后另存并重新打开；核对同版PDF与讲稿。':p.id==='drama'?'完整播放MP4，核对动作、角色、对白与字幕；记录实际发布状态。':'打开教案、学生资料与教师答案，逐题核对并试讲；检查课堂时间与支持安排。')}</p><a class="button outline" href="#/project/${p.id}/review">检查我的${p.id==='ppt'?'PPT':p.id==='drama'?'AI短剧':'英语备课资料'} →</a></article>`).join('')}</div><p class="inline-note">网页不读取或自动评分你的文件。项目需求和结果记录仅在本次打开的网站会话中保留；刷新前请下载文字记录，实际作品另外保存。</p></section><section class="panel"><h2>这一步按什么顺序做</h2><ol class="steps"><li><strong>实际打开、播放或试讲</strong><p>用对应项目的检查表核对内容、格式、时长和可用性，记录具体页码、题号或时间码。</p></li><li><strong>改一处明确的问题，再检查</strong><p>说明哪里不符合要求、为什么需要修改、怎样算改好。保存新版并重新打开，确认修改有效。</p></li><li><strong>换一个需求，独立再做一次</strong><p>换听众、主题、学生情况或故事，把原来的方法用在新任务。遇到不适用的规则，自己调整并说明原因。</p></li><li><strong>完成后再按需要深入</strong><p>保留自己的输入、成品、检查记录和可复用方法，再探索Skill、自动化、WorkBuddy或手机办公。</p></li></ol><div class="complete-actions"><a class="button outline" href="#/projects">回到第3步：继续制作作品</a><a class="button outline" href="#/updates">完成后：整理作品与继续学习</a></div></section>`;}
