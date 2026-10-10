const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function videoEmbed(url){
 let u;try{u=new URL(url);}catch{return null;}
 if(u.protocol!=='https:')return null;
 if(['www.bilibili.com','bilibili.com'].includes(u.hostname)){const id=u.pathname.match(/\/video\/(BV[a-zA-Z0-9]{10})(?:\/|$)/)?.[1];return id?{kind:'iframe',src:'https://player.bilibili.com/player.html?bvid='+id+'&autoplay=0'}:null;}
 if(['www.youtube.com','youtube.com','youtu.be'].includes(u.hostname)){const id=u.hostname==='youtu.be'?u.pathname.slice(1):u.searchParams.get('v');return /^[a-zA-Z0-9_-]{11}$/.test(id||'')?{kind:'iframe',src:'https://www.youtube-nocookie.com/embed/'+id+'?rel=0'}:null;}
 return null;
}
export function officialDemo(url){let u;try{u=new URL(url);}catch{return null;}return u.protocol==='https:'&&u.hostname==='download.codebuddy.cn'&&u.pathname.startsWith('/web/docs/')&&u.pathname.endsWith('.mp4')?u.href:null;}
export function resourceCard(r,compact=false,context='source'){
 let u;try{u=new URL(r.url);}catch{return '';}
 if(u.protocol!=='https:')return '';
 const playerId='player-'+context+'-'+r.id;
 const label={guide:'图文／博客',repo:'Skill／项目源码',video:'视频原页'}[r.type]||'原资料';
 const reason=r.type==='repo'?'先读 README、SKILL.md、依赖和许可，再决定是否适合自己的工具。':r.type==='video'?(videoEmbed(r.url)?'可打开原平台；点击后才加载播放器。':'在原网页查阅视频或课程；本站不复制第三方视频。'):'';
 return `<article class="resource-card" data-resource-id="${esc(r.id)}"><div class="resource-meta"><span class="pill">${label}</span><span>${esc(r.language)}</span>${r.level?`<span>${esc(r.level)}</span>`:''}</div><h3>${esc(r.title)}</h3><p class="resource-author">${esc(r.author)}</p><p class="resource-focus"><strong>学什么：</strong>${esc(r.whatToLearn)}</p>${compact?'':`<p class="resource-practice"><strong>学完练：</strong>${esc(r.practiceAfter)}</p><details><summary>准备条件与核对范围</summary><p><strong>先准备：</strong>${esc(r.prerequisite)}</p><p class="inline-note">核对日期：${esc(r.checkedAt)}。${esc(r.verificationNote)}</p></details>`}${reason?`<p class="inline-note">${reason}</p>`:''}<div class="tool-links"><a href="${esc(u.href)}" target="_blank" rel="noopener noreferrer">${r.type==='video'?'打开视频原页':r.type==='repo'?'查看 Skill／项目源码':'阅读原教程／博客'} ↗</a>${r.videoSourceUrl&&officialDemo(r.videoSourceUrl)?`<button type="button" class="text-link" data-official-demo="${esc(r.id)}" data-player="${esc(playerId)}">加载官方操作演示</button>`:''}${r.type==='video'&&videoEmbed(r.url)?`<button type="button" class="text-link" data-watch="${esc(r.id)}" data-player="${esc(playerId)}">加载原平台播放器</button>`:''}</div><div id="${esc(playerId)}"></div></article>`;
}
