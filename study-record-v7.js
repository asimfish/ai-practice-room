export function readEvidenceSection(section){
 if(!section)return null;
 const value=(name,max)=>String(section.querySelector('[name="'+name+'"]')?.value||'').trim().slice(0,max);
 return {artifact:value('artifact',500),verification:value('verification',3000),judgement:value('judgement',2000),checks:Array.from(section.querySelectorAll('[name="check"]:checked')).map(x=>Number(x.value)).filter(Number.isInteger)};
}
export function saveStudyState(storage,key,state){try{storage.setItem(key,JSON.stringify(state));return true;}catch{return false;}}
export function evidenceSaveMessage(ok){return ok?'自查记录已保存在当前浏览器。表单完整不等于作品已合格，仍需按标准或请他人复核。':'本次页面仍保留记录，但浏览器未能持久保存；刷新可能丢失，请先下载自查记录。';}
