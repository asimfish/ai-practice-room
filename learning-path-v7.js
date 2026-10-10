import {toolStartStages} from './tool-start-v12.js?v=12.0.1';
import {dramaPathIds,dramaCheckpoint} from './drama-core-v8.js?v=12.0.1';
export const coreLessonIds=['first-task','human-ai-role','better-questions','files-check','ai-judgement','task-contract','quality-loop','automation-inventory','automation-cost'];
const path=(id,title,lessonIds,description,kind='专题',caseIds=[])=>({id,title,lessonIds,description,kind,caseIds});
export const learningPaths=[
 path('tool-start','第一阶段：Kimi → Harness → Codex → Skill',[...new Set(toolStartStages.filter(s=>!s.optional).flatMap(s=>s.lessonIds))],'先按工具入门的五步认识界面、工作区和 Skill。用同一份材料练读取、生成文件和检查；WorkBuddy、Claude Code 为选修。','工具入门'),
 path('core','基础9课：先在一个可用工具里做成小任务',coreLessonIds,'从登录、新建对话开始，学会交代要求、读文件、检查与修改。成本课可用模拟材料；不要求Python、Node、海外账号或充值。','基础'),
 path('english','英语教学：先交一份可用教案和练习',['english-profile','english-plan','english-materials','english-feedback'],'先用同一虚构学生和词表完成教案、学生版、教师答案及一次修订。','专题',['case-english-complete','workshop-office-english-reading-pack']),
 path('ppt','PPT起步：大纲、模板与实际打开检查',['ppt-outline','ppt-template','ppt-delivery'],'先完成三页可编辑稿。可用已有演示软件手工制作；要用社区项目时，再准备对应环境。','专题',['case-can-deck','workshop-office-ppt-template']),
 path('drama','AI短剧：首集、三集系列与抖音发布',dramaPathIds,'先做原创双人单场景动态短剧，再独立迁移到三集。人物、声音、质量、实际费用与发布状态逐项留证。手续具备后本人提交，未知保留待确认。','专题',['workshop-drama-first-episode','workshop-drama-three-episodes']),
 path('video','视频起步：先做静态素材与剪辑作品',['video-script','video-storyboard','video-edit','video-publish'],'先用自摄素材、文字卡或已提供PNG制作一条作品；图生视频和真实发布按需求继续。','专题',['case-borrow-lend','workshop-video-static-motion','workshop-video-subtitles']),
 path('workbuddy','WorkBuddy起步：文档与十行表格',['workbuddy','wb-feature-map','wb-documents','wb-sheets'],'完成Word教案与三页PPT，再用已知答案验收表格。先从官方入口确认可用条件。','专题',['case-v7-workbuddy-documents','case-v7-workbuddy-sheets']),
 path('automation','自动化起步：文件预览、日报草稿与恢复',['auto-files','auto-feishu-draft','auto-recovery'],'先做可撤回文件副本和不发送的日报草稿；学会遇到缺项、冲突或未知状态时停下检查。','专题',['case-v7-file-organizing','case-feishu-draft']),
 path('skills','电脑工具起步：按需求选工具',['kimi-work','harness-desktop','first-skill','own-skill'],'Kimi Work与Harness按设备和任务选择，不要求两者都安装。暂时不可用的课可标暂缓；入门Skill先选内置能力。','条件选修',['case-harness-first','case-skill-english-check']),
 path('ppt-advanced','PPT深入：数据、设计、来源与微课',['ppt-design-system','ppt-data','ppt-source-pack','ppt-live-edit','ppt-narration'],'已有一份可用PPT之后，分别解决数据、视觉、来源和配音问题。','进阶',['workshop-office-sales-deck']),
 path('video-advanced','视频深入：镜头、角色、声音与系列',['video-generate','video-audience','video-consistency','video-shot-control','video-sound','video-platforms','video-batch'],'已有一条作品之后，一次比较一个变量；付费生成前确认条件，系列交付另安排时间。','进阶',['workshop-video-series','video-case-01']),
 path('workbuddy-advanced','WorkBuddy深入：调研、扩展与定时',['wb-research','wb-plugins','wb-scheduled'],'已有可用文件后再扩大工具能力；定时任务先手动小测和停止演练。','进阶',['workshop-office-workbuddy-doc-pack']),
 path('explore','Skill探索：发现、试用、兼容与维护',['skill-discovery','skill-trial','skill-chain','skill-maintenance','skill-codex-catalog','skill-live-reading','skill-community-find','skill-codex-install','skill-cross-agent','skill-personal-kit'],'读目录、安装和实际调用分别验收，不把热门或可见当作可用。','条件选修',['workshop-tools-skill-lifecycle']),
 path('chatgpt','ChatGPT：有可用条件再学',['chatgpt-start','chatgpt-files-voice','chatgpt-projects','account-payment'],'先确认官方可用条件；地区、套餐与支付在操作当天核对。国内基础和专题不以这些课为前提。','条件选修'),
 path('anygent','Anygent：电脑执行、手机接续',['anygent-invite','anygent-computer','anygent-codex','anygent-workbench','anygent-mobile','anygent-recovery'],'已有本机会话和可用设备后，再学习工作台、手机接续与断连；不能只凭历史消息判断在线。','条件选修',['workshop-tools-anygent-lesson-project']),
 path('optional','社区与终端：需要时再准备',['ppt-master-install','claude-code','harness-cli'],'这部分涉及电脑环境或产品条件。安装失败不会阻止完成基础方法、教案或静态视频练习。','条件选修'),
 path('application','应用延伸：财报阅读与授权推送',['auto-finance','auto-feishu-delivery'],'财报练习只读原文和复算；对外消息另核权限、接收方与审核状态。','条件选修',['case-finance-reading','workshop-tools-feishu-reviewed-report']),
 path('mastery','长期练习：迁移、更新与教别人',['mastery-portfolio','mastery-learning','mastery-teach'],'整理已有作品，再换材料和处理例外。三份作品和另一人复现需要实际时间与反馈。','长期实践')
];
export function getLearningPath(id){return learningPaths.find(p=>p.id===id)||learningPaths[0];}
export function nextInPath(id,done=[],deferred=[]){return getLearningPath(id).lessonIds.find(x=>!done.includes(x)&&!deferred.includes(x))||null;}
export function lessonNavigation(lessonId,selected='core'){
 const selectedPath=getLearningPath(selected),p=selectedPath.lessonIds.includes(lessonId)?selectedPath:learningPaths.find(p=>p.lessonIds.includes(lessonId));
 if(!p)return {path:getLearningPath('core'),previous:null,next:null};
 const at=p.lessonIds.indexOf(lessonId);return {path:p,previous:p.lessonIds[at-1]||null,next:p.lessonIds[at+1]||null};
}
export function pathProgress(id,done=[],deferred=[]){const ids=getLearningPath(id).lessonIds;return {completed:ids.filter(x=>done.includes(x)).length,deferred:ids.filter(x=>!done.includes(x)&&deferred.includes(x)).length,total:ids.length};}
export function lessonPracticeReady(l,checks=[],quizAnswers={}){return l.checks.every((_,i)=>checks.includes(i))&&(!l.quiz||quizAnswers[l.id]===l.quiz.answer);}
const commonChecks=['真实成果能打开、阅读或播放，不只看对话中的完成声明。','核对三条关键事实或数字，记录原材料的位置。','保存一次修改前后对照，并解释修改原因。','换一项输入或给一项缺失，结果仍符合边界。','说清采用和拒绝的一条建议，不把不确定事项编成事实。'];
export const checkpointSpecs={
 drama:dramaCheckpoint,
 core:{title:'基础迁移验收：把活动资料写成可靠通知',mission:'使用“v7-core-活动资料.txt”，独立生成一份120–180字通知。再检查故意有错的候选稿，定位至少三处与原材料不一致的内容，保存v1/v2及核对记录。未提供的信息保留待确认，不搜索或编造。',downloads:[['v7-core-活动资料.txt','输入材料'],['v7-core-错误候选稿.txt','查错挑战'],['v7-core-验收答案.md','做完后的对照答案']],outputs:['通知-v1.txt','通知-v2.txt','核对记录.txt'],checks:['时间、地点、8位成人、每人20元预算和自带电脑/充电器都与原材料一致。','指出并修正候选稿至少三处错误，写出对应原句。','未把报名截止、联系人或设备保障编成事实；待确认项清楚。','保存v1/v2和检查记录，能解释自己为何修改。','换成6人或另一个时间时，只改变相关事实，不顺手改掉其他条件。'],caseIds:['case-kimi-file']},
 english:{title:'英语教学验收：教案、学生材料和教师答案',mission:'用既有虚构学生和can/can’t词表完成40分钟教案，按本课指定三题生成课末小测；教师答案与学生版分开。另换一项学生需求重做，说明分层支持改变了什么。',downloads:[['英语教案练习包.md','题库和完整反馈材料']],outputs:['教案.docx或教案.md','学生版','教师答案','修订记录'],checks:['时间相加40分钟，每个环节支持同一可观察目标。','题数、题号、答案与指定题库版本一致，学生版不露答案。','语法和例句逐条核查，分层改变支持程度而不偷换目标。','有一次试讲或桌面演练，并记录实际困难；未试教就明确写未试教。','换一个学生需求后仍能指出适用与不适用之处。'],caseIds:['case-english-complete','workshop-office-english-reading-pack']},
 ppt:{title:'PPT起步验收：三页可编辑稿与一轮修改',mission:'完成三页演示，每页一个观点；选一句文字作局部修改，保存v1/v2，在自己实际使用的软件打开并试讲。AI大纲可手工排入已有演示软件，不要求先安装社区项目。',outputs:['课堂稿-v1.pptx','课堂稿-v2.pptx','逐页检查记录'],checks:['恰有三页，每页论点与讲解目的清楚。','文字能选择和编辑，图表类型及编辑范围如实说明。','事实、数字与来源逐项对应，字体不重叠或截断。','v2只实现指定修改，原稿另存，实际软件能打开。','能试讲，并用一份新主题解释哪些版式可以复用。'],caseIds:['case-can-deck','workshop-office-ppt-template']},
 video:{title:'视频起步验收：一条短片与发布前审阅',mission:'用自摄素材、文字卡或提供PNG完成30–60秒作品。核对口播、字幕与画面；真实发布可暂缓，但需要完成发布前说明与成本记录。',outputs:['作品.mp4','核对后的字幕','分镜与成本记录','发布前清单'],checks:['导出视频可以完整播放，时长和画幅适合目标。','字幕与真实口播、数字、拼写对应，不把脚本当实际转写。','素材和声音用途可说明，AI参与范围与声明条件已核对。','记录失败请求、软件/模型费或“未显示，未知”，未把无模型费当全流程免费。','发布草稿和真正已发布状态分开，能解释一次采用或放弃镜头的理由。'],caseIds:['workshop-video-static-motion','workshop-video-subtitles']},
 workbuddy:{title:'WorkBuddy验收：教案文件与十行表格',mission:'从本课材料出发交付Word教案、三页PPT，再完成前后测表格清洗与处理说明。打开实际文件，与已知答案核对。',outputs:['教案.docx','课堂展示.pptx','清洗结果.xlsx','处理说明.md'],checks:['Word/PPT与同一份事实和学生目标一致，可打开并检查。','10行原表和9个唯一编号的关系可解释，重复处置有记录。','S01提升10，S04提升−2；缺失后测未填成0或杜撰。','原始表、处理结果与说明分别保留，未覆盖输入。','能指出一处工具输出问题并修订，不把生成消息当交付。'],caseIds:['case-v7-workbuddy-documents','case-v7-workbuddy-sheets']},
 automation:{title:'自动化起步验收：冲突预览与日报草稿',mission:'用六文件样例先做改名预览，遇到目标名冲突和缺日期保留待确认。再从给定日志生成当日可分享日报草稿，不发送。',outputs:['改名预览清单','处理与恢复记录','日报草稿'],checks:['原文件完整保留，两个不同原名映射同目标时未覆盖。','缺日期和第7异常输入能触发询问/停止，不能盲目继续。','日报只用指定日期和可分享记录，计划/进行中/已完成分开。','超时可能已执行时先查实际状态，不立即重复运行。','能说明如何停用、恢复，以及哪些对外操作仍需人工确认。'],caseIds:['case-v7-file-organizing','case-feishu-draft']}
};
export function getCheckpoint(id){return checkpointSpecs[id]||{title:getLearningPath(id).title+'：成果自查',mission:'选择本路径的一个实际任务，用自己的材料完成，再换输入或加入缺项复做。整理成果与检查记录，未实际执行的部分如实标记。',outputs:['真实成果','检查与修订记录','一次新输入测试'],checks:commonChecks,caseIds:getLearningPath(id).caseIds};}
export function validateCheckpoint(spec,record){return ['artifact','verification','judgement'].every(k=>typeof record?.[k]==='string'&&record[k].trim().length>0)&&spec.checks.every((_,i)=>record?.checks?.includes(i));}
export function normaliseLearningState(saved,lessons){
 const ids=new Set(lessons.map(l=>l.id)),isObject=v=>v&&typeof v==='object'&&!Array.isArray(v),source=isObject(saved)?saved:{};
 const list=v=>Array.isArray(v)?[...new Set(v.filter(id=>ids.has(id)))]:[];
 const checks={};for(const l of lessons){const v=source.checks?.[l.id];if(Array.isArray(v))checks[l.id]=[...new Set(v.filter(i=>Number.isInteger(i)&&i>=0&&i<l.checks.length))];}
 const quizAnswers={};for(const l of lessons){const v=source.quizAnswers?.[l.id];if(l.quiz&&Number.isInteger(v)&&v>=0&&v<l.quiz.options.length)quizAnswers[l.id]=v;}
 const evidence={};for(const p of learningPaths){const r=source.evidence?.[p.id];if(!isObject(r))continue;const spec=getCheckpoint(p.id);evidence[p.id]={artifact:typeof r.artifact==='string'?r.artifact.slice(0,500):'',verification:typeof r.verification==='string'?r.verification.slice(0,3000):'',judgement:typeof r.judgement==='string'?r.judgement.slice(0,2000):'',checks:Array.isArray(r.checks)?[...new Set(r.checks.filter(i=>Number.isInteger(i)&&i>=0&&i<spec.checks.length))]:[]};}
 return {done:list(source.done),checks,device:['windows','mac','phone'].includes(source.device)?source.device:'windows',journey:learningPaths.some(p=>p.id===source.journey)?source.journey:Array.isArray(source.done)&&source.done.length?'core':'tool-start',deferred:list(source.deferred),quizAnswers,evidence};
}
