import {dramaCoreMaterials,dramaAssets} from './drama-core-v8.js';
import {generationMaterialsByLesson} from './drama-generation-v8.js';
import {releaseMaterialsByLesson} from './drama-release-v8.js';
import {practiceMaterialsByLesson} from './practice-repairs-v7.js';
const extra={
 'first-task':[{file:'v7-core-活动资料.txt',purpose:'可选共同材料；不用上传也可粘贴内容做第一份通知',role:'input'}],
 'files-check':[{file:'v7-core-活动资料.txt',purpose:'保存、重新打开，再上传或粘贴并核对三项事实',role:'input'}],
 'better-questions':[{file:'v7-core-活动资料.txt',purpose:'固定事实，只增加表达要求，比较两次提问',role:'input'}],
 'task-contract':[{file:'人机协作任务单.md',purpose:'记录对象、目标、限制、输出与人工验收',role:'record'}],
 'quality-loop':[{file:'v7-core-活动资料.txt',purpose:'只根据该材料修改通知，保留未知项',role:'input'},{file:'v7-core-错误候选稿.txt',purpose:'另一份查错练习，先独立找错误',role:'input'},{file:'v7-core-验收答案.md',purpose:'做完后回原文对照，不作为首轮生成输入',role:'answer'}],
 'automation-cost':[{file:'v7-core-成本模拟.csv',purpose:'模拟单价与规模，不是当前模型价目',role:'input'}],
 'anygent-codex':[{file:'教案-v1.md',purpose:'本课只读检查与提纲的确切输入',role:'input'}]
};
const defaultFiles={mindset:['人机协作任务单.md','活动与自动化清单.md'],explore:['Skill探索记录.md'],english:['英语教案练习包.md'],ppt:['PPT需求与验收.md'],video:['视频分镜与成本.csv'],automation:['活动与自动化清单.md'],anygent:['Anygent手机办公检查单.md'],mastery:['专业作品档案.md']};
export function materialsForLesson(l){
 const gm=generationMaterialsByLesson[l.id];const dramaRows=dramaCoreMaterials[l.id]||(gm?[...(gm.inputs||[]),...(gm.answers||[]),...(gm.records||[])]:releaseMaterialsByLesson[l.id]);
 if(dramaRows){const figures=['drama-character-scene','drama-gen-test'].includes(l.id)?dramaAssets.map(a=>({file:a.file,role:'input',purpose:a.id+' 原创静态参考，非成片；先核身份、衣服与站位'})):[];return [...dramaRows,...figures].filter((x,i,all)=>all.findIndex(y=>y.file===x.file&&y.role===x.role)===i);}
 const rows=Object.hasOwn(practiceMaterialsByLesson,l.id)?practiceMaterialsByLesson[l.id]:extra[l.id]||(defaultFiles[l.group]||[]).map(file=>({file,purpose:'本阶段练习记录或材料，按本课具体要求使用',role:'record'}));
 if(l.id==='auto-finance')return [{file:'金融资料练习.md',purpose:'虚构预算与公开资料阅读清单',role:'input'}];
 if(l.id==='auto-feishu-draft'||l.id==='auto-feishu-delivery')return [{file:'飞书日报练习材料.md',purpose:'带日期、授权范围和编号的虚构日志',role:'input'},{file:'v6-tools-report-review.md',purpose:'草稿、审核、发送状态与未知处理的参考记录',role:'record'}];
 return rows;
}
