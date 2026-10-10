import {toolStartLessons} from './tool-start-v12.js?v=12.0.1';
import {dramaCoreLessons} from './drama-core-v8.js?v=12.0.1';
import {generationLessons,generationTools} from './drama-generation-v8.js?v=12.0.1';
import {releaseLessons} from './drama-release-v8.js?v=12.0.1';
import {lessonQualityById} from './lesson-quality-v7.js?v=12.0.1';
import {sourceLessonPatches,sourceToolPatches,sourceFeaturePatches} from './source-repairs-v7.js?v=12.0.1';
import {practiceLessonPatches} from './practice-repairs-v7.js?v=12.0.1';
import {catalogLessons} from './skill-resources.js?v=12.0.1';
import {advancedLessons,toolEntries,templateEntries} from './advanced.js?v=12.0.1';
import {deepGroups,deepLessons,featureMap} from './deep-learning.js?v=12.0.1';
import {workflowLessons} from './workflow-courses.js?v=12.0.1';
import {anygentGroup,anygentLessons,anygentInvite} from './anygent.js?v=12.0.1';
export const version = '12.0.1 · 2026-10-10';
export {featureMap};
export {anygentInvite};
export const groups = [
 {id:'basics',n:'01',title:'先把 Kimi 用熟',desc:'学会提问、传资料、改答案，也学会判断答案靠不靠谱。',tag:'从这里开始',time:'约 2 小时',kind:'主线'},
 {id:'skills',n:'02',title:'让 AI 帮你操作电脑',desc:'Kimi Work → DeepSeek Harness → 第一个 Skill → PPT 实战。',tag:'电脑练习',time:'约 3 小时',kind:'主线'},
 {id:'chatgpt',n:'03',title:'拓展 ChatGPT 的用法',desc:'认识官方 App、语音、文件和项目，理解订阅与技能的区别。',tag:'条件具备再学',time:'约 1.5 小时',kind:'进阶'},
 {id:'english',n:'04',title:'英语教学：做出能用的资料',desc:'一份教案、一套分层练习、一轮反馈，围绕真实学生来设计。',tag:'实战专题',time:'约 2 小时',kind:'专题'},
 {id:'ppt',n:'05',title:'PPT：从想法到可编辑文件',desc:'先讲清楚内容，再套用模板，最后检查版式和导出。',tag:'实战专题',time:'约 2 小时',kind:'专题'},
 {id:'video',n:'06',title:'视频自媒体：完成第一条作品',desc:'选题、脚本、分镜、生成、剪辑、发布与成本复盘。',tag:'实战专题',time:'约 3 小时',kind:'专题'},
 {id:'optional',n:'07',title:'选修：WorkBuddy 与 Claude Code',desc:'遇到实际需要再增加工具，用同一个任务比较效果。',tag:'可以以后再学',time:'约 1.5 小时',kind:'选修'}
];
export const lessons = [
 {id:'first-task',group:'basics',title:'第一课：让 Kimi 帮你完成一件小事',time:20,device:'电脑 / 手机',summary:'不用懂技术。今天只要发出一个完整要求，再把结果改到能用。',goal:'完成一份能直接发给家人的周末安排。',intro:'AI 像一个需要你交代清楚任务的助手。你不用先学术语，也不用先付费。给它具体背景，比只说“帮我写一下”更有用。',steps:[['打开官方入口','从工具箱进入 Kimi 官网或由官网跳转下载 App。按官方方式登录，找到“新建对话”或新会话按钮。不要在搜索广告中购买所谓的永久会员。'],['复制下面的要求','把方括号里的地点、人数和预算换成自己的情况。发送前看一遍，确认没有密码、证件号或支付信息。'],['看一遍，再改一遍','检查路线是否合适、时间是否够、是否超预算。追问“我们有老人，减少步行，午休一小时，重新安排”。'],['保存一个能用的版本','把最终结果复制到记事本或文档里，文件名写成“周末安排-日期”。记下哪一句补充要求让它变好了。']],prompts:[{title:'第一次完整提问',text:'帮我做一个周末半日活动安排。\n背景：我们在[城市]，共[人数]人，有[老人/孩子]。\n目标：轻松交流，不能太赶。\n限制：总预算[金额]元，步行每段不超过15分钟。\n输出：按时间列出活动、预计费用、需要准备的东西。\n如果信息不足，先问我最多3个问题。不要编造营业时间；需要核实的地方注明“待确认”。'}],practice:'完成一份真实周末安排，再把其中一个要求改掉，比较修改前后的结果。',checks:['我会新建对话、输入要求和发送。','我已经补充一次条件，并检查修改后的结果。','我把最终版本保存到了自己找得到的文件夹。'],quiz:{q:'AI 写了一家餐厅的营业时间，你应该怎么做？',options:['直接按这个时间出发','去官方页面或打电话核实','让 AI 再重复一次就足够'],answer:1,explain:'AI 的答案可能有误。涉及实际出行的信息，要回到可靠来源核对。'},troubles:[['没有看到一样的按钮','界面会更新。找功能含义相近的新对话、输入框和发送图标；不用追求和教程一模一样。'],['答案太空泛','补充具体地点、对象、预算、时长和输出格式，再追问。']],sources:[['Kimi 官方入口','https://www.kimi.com/']]},
 {id:'better-questions',group:'basics',title:'把“帮我做”变成一个清楚的任务',time:20,device:'电脑 / 手机',summary:'学会四件事：说清背景、目标、限制和交付物。',goal:'同一个任务，通过两轮修改得到更适合自己的答案。',intro:'好提示词不是咒语。它是一份清楚的任务说明。可以直接用口语，先说你有什么材料，再说要拿去做什么，最后说怎么算合格。',steps:[['先说背景','例如“我是小学英语老师，学生10岁，学过颜色词”。避免让 AI 猜读者水平。'],['说清要完成什么','例如“设计20分钟复习活动”，比“给我一些建议”容易得到能执行的结果。'],['写出限制和格式','说明时长、字数、语言、不能做什么、需要的栏目。一次只做一个主要任务。'],['用反馈继续修改','指出具体问题：“第2个活动太难，改成两人配对；每轮3分钟”。保存最有效的一版说明。']],prompts:[{title:'通用任务说明',text:'我的背景：[身份、对象和已有材料]\n我要完成：[一个具体任务]\n限制条件：[时间、预算、难度、风格]\n请交付：[格式、长度、栏目]\n质量标准：[我会如何检查]\n先检查信息是否足够；不够时向我提问。给出初稿后，列出3个需要我确认的地方。'},{title:'让答案变好',text:'请基于上一版修改。\n保留：[有用的部分]\n修改：[具体问题和期望]\n删掉：[不需要的部分]\n重新输出完整版本，并说明改动的3个要点。'}],practice:'把“帮我做英语练习题”改成完整任务说明，让 AI 出5道题。逐题检查答案后，再调整其中一种题型。',checks:['我的要求写出了对象、目标、限制和交付格式。','我用具体反馈修改了一个问题。','我能说出两版答案为什么不一样。'],troubles:[['AI 忽略某个要求','把要求分成编号，要求它交付前逐项自查；关键限制放在最后再强调一次。'],['不知道该写什么条件','先说“帮我列出做这个任务前需要确认的5个条件”，挑与你有关的回答。']],sources:[['Kimi 官方入口','https://www.kimi.com/']]},
 {id:'files-check',group:'basics',title:'上传文件、读截图，并检查有没有看对',time:25,device:'电脑 / 手机',summary:'让 AI 用你的材料工作，养成“先确认读到了什么”的习惯。',goal:'从一份无敏感信息的材料提取要点，并核对原文。',intro:'上传资料以后，AI 仍可能漏页、误读表格或看不清图片。先让它复述材料范围，再开始生成，能少走很多弯路。学生资料要先去掉姓名、联系方式、学校班级等识别信息，使用“学生A”即可。',steps:[['准备练习文件','选一页自己写的通知、无个人信息的课文或示例图片。扫描件要清晰；复杂 PDF 可以只上传需要的几页。'],['找到附件入口','点击输入框附近的加号、回形针或附件按钮，选择文件，等上传完成。手机先在“文件”里确认文件位置。'],['先确认它看到了什么','要求列出文件标题、页数或识别范围，并复述一段指定文字。把复述和原文对照。'],['再让它完成任务','要求每个要点标注页码或段落；没找到的信息写“原文未提供”，最后随机核对3条。']],prompts:[{title:'读材料前的检查',text:'请只根据我上传的材料回答。\n先告诉我你能读取的文件名和内容范围。\n列出5个关键点，每点注明页码或小节；无法确定页码时说明原因。\n区分“材料原话”“你的概括”“需要核实的推断”。\n材料没有的信息请写“原文未提供”，不要补造。'}],practice:'上传一份材料，提取5个要点，选3个回到原文核对。把错误或遗漏发给 AI 修正。',checks:['我去除了不应上传的个人信息。','我确认 AI 读到了需要的内容。','我核对了3条要点的来源。'],troubles:[['上传失败','先检查文件是否真的存在、能否打开、网络与当前额度，再缩小文件或拆成几页。不要连续重复上传大文件。'],['截图看不清','裁掉无关区域、提高清晰度，并问它哪些文字无法辨认。']],sources:[['Kimi 官方入口','https://www.kimi.com/']]},
 {id:'ai-judgement',group:'basics',title:'什么时候相信 AI，什么时候自己检查',time:20,device:'电脑 / 手机',summary:'掌握三个概念：模型、应用、工具。用小任务比较效果。',goal:'建立自己的检查清单，并记录一次工具比较。',intro:'模型负责理解和生成；应用提供聊天界面、文件和订阅；工具让 AI 搜索、生成文件或操作电脑。模型强不代表每个功能都适合你。同一个模型换了工具，结果也会不同。',steps:[['把任务分成草稿和事实','文案、提纲可以先让 AI 起草。日期、价格、引用、学生答案、考试规则必须核查。'],['用同一份要求试两次','保持输入材料、字数和限制一样，用两个可用工具或同一个工具的两个版本完成。'],['按自己的标准打分','看事实是否正确、是否符合要求、是否易改、花了多少钱和时间。不要只看文字长不长。'],['建立常用清单','保存“适合我的工具与任务”，记录日期。把 AI 当助手，最后由自己确认。']],prompts:[{title:'交付前自查',text:'请检查这份结果：\n1. 是否满足我的全部要求？逐项说明。\n2. 哪些信息有可靠来源？给出处。\n3. 哪些只是推测或无法核实？明确标出。\n4. 有没有遗漏、矛盾或算错？\n5. 给出我必须自己检查的3项。\n不要因为之前是你写的，就默认它正确。'}],practice:'对同一份5题英语小测，用两个可用工具生成答案。自己核查，记录谁更准确、谁更方便修改。',checks:['我能用自己的话解释模型、应用与工具的区别。','我比较了准确性、可修改性、时间和费用。','我知道哪些结果需要自己确认。'],troubles:[['两种工具给出不同结论','要求分别给依据，再找可靠原始资料；投票不能代替验证。'],['AI 提供了看似真实的链接','打开链接，确认页面确实存在，内容确实支持那条说法。']],sources:[['Kimi 官方入口','https://www.kimi.com/']]}
];
export const tools = [];
export const templates = [];
lessons.push(...advancedLessons);
tools.push(...toolEntries);
templates.push(...templateEntries);
lessons.push(...deepLessons,...workflowLessons);
lessons.push(...anygentLessons,...catalogLessons);
for(const l of catalogLessons)templates.push({title:l.title,category:'explore',desc:l.summary,lesson:l.id,text:l.prompts[0].text});
for(const l of anygentLessons)templates.push({title:l.title,category:'anygent',desc:l.summary,lesson:l.id,text:l.prompts[0].text});
for(const id of ['anygent-codex','anygent-workbench','anygent-mobile']){const l=anygentLessons.find(x=>x.id===id);featureMap.push({tool:'Anygent',title:l.title,desc:l.summary,lesson:id,url:l.sources[0][1],level:'移动办公进阶'});}
tools.push({title:'Anygent / Whalent',symbol:'A',type:'移动办公进阶 · 本机Agent与工作台',desc:'在自己的电脑和目录创建Codex会话，手机接续任务，多面板检查文件与执行结果。',use:'本机Codex、工作台布局、手机办公与断连排查',limit:'本机执行需电脑和daemon在线；邀请码、连接Token与模型账号是不同事项。',url:anygentInvite.guide,lesson:'anygent-invite'});
for(const [id,tool,desc] of [
 ['wb-feature-map','WorkBuddy','Agent / Plan / Ask、工作空间、模型档位，用同一个小任务比较。'],
 ['wb-documents','WorkBuddy','DOCX / PPTX技能，模板与定向修改，交付后在Office/WPS中检查。'],
 ['wb-sheets','WorkBuddy','表格清洗、公式和图表，保留原始值，人工核对关键数字。'],
 ['wb-research','WorkBuddy','Agent Browser与公开资料研究，关键主张回到原始来源。'],
 ['wb-plugins','WorkBuddy','技能市场、本地导入与连接器，核对权限范围和执行依赖。'],
 ['wb-scheduled','WorkBuddy','先手动，后一次性定时测试；工作区、通知、费用与停用都要核对。'],
 ['video-consistency','即梦 / 可灵','角色参考图与系列一致性，按当前模型入口和账号权益小试。'],
 ['video-shot-control','即梦 / 可灵','首尾帧、景别与镜头控制，先小镜头测试，失败可换手拍或静态图。'],
 ['video-sound','剪映 / 视频工具','录音、朗读、原生音频与字幕；试听、核对授权，再做全片。'],
 ['auto-feishu-delivery','飞书','低代码工作流与AI节点，先草稿人审，再授权推送并检查日志。']
]){const l=lessons.find(l=>l.id===id);featureMap.push({tool,title:l.title,desc,lesson:id,url:l.sources[0][1],level:'文档支持 · 需自己测试'});}
tools.push({title:'飞书多维表格',symbol:'F',type:'办公自动化 · 草稿、流程与消息',desc:'用明确工作记录生成日报，审核后在授权范围配置按钮或定时发送。',use:'日报草稿、记录状态、授权推送与运行日志',limit:'账号权限、组织设置、运行次数与AI额度分别核对。Webhook本身不能读取工作资料。',url:'https://www.feishu.cn/hc/zh-CN/articles/170735237222',lesson:'auto-feishu-draft'});
const wb=lessons.find(l=>l.id==='workbuddy');wb.group='workbuddy';
wb.intro='WorkBuddy的国内办公环境支持文件、技能和工具任务。当前界面主要为默认Agent、Plan与Ask；旧教程可能称执行模式Craft。以自己当前版本为准，用同一任务比较内容、文件质量、时间与费用。';
wb.steps[2]=['Ask查看，Plan规划','先在输入框当前模式入口选择Ask确认材料，再用Plan形成步骤；确认后按当前界面进入默认Agent执行。旧版可能显示Craft。'];
wb.steps[3]=['调用技能并执行','在技能管理中选择当前可用的PPT/文档技能，先检查依赖和权限，再由默认Agent或当前执行模式生成文件。'];
const order=['mindset','basics','skills','chatgpt','explore','english','ppt','video','workbuddy','automation','anygent','optional','mastery'];
groups.push(...deepGroups,anygentGroup);groups.sort((a,b)=>order.indexOf(a.id)-order.indexOf(b.id));
groups.forEach((g,i)=>{g.n=String(i+1).padStart(2,'0');const minutes=lessons.filter(l=>l.group===g.id).reduce((a,l)=>a+l.time,0);g.time='约 '+(Math.ceil(minutes/30)/2)+' 小时';});
groups.find(g=>g.id==='optional').title='选修：Claude Code 与终端';
groups.find(g=>g.id==='ppt').desc='从可编辑稿到设计系统、数据图表、局部编辑、动画与配音微课。';
groups.find(g=>g.id==='video').desc='从第一条成片到角色系列、镜头控制、声音、跨平台与批量工作流。';
lessons.sort((a,b)=>order.indexOf(a.group)-order.indexOf(b.group));
for(const l of lessons){l.level=catalogLessons.includes(l)?'自由探索':l.group==='anygent'?'移动办公进阶':deepLessons.includes(l)||workflowLessons.includes(l)?(l.group==='mastery'?'专业实践':l.group==='explore'?'独立探索':l.group==='mindset'?'核心方法':'熟练'):'入门';l.reflection=l.reflection||['我先理解了什么问题，哪些判断由我负责？','这次输出哪里符合要求、哪里不好，我有什么证据？','下一次能自动化哪一步，应该补哪条规则或边界？'];}
for(const l of [...deepLessons,...workflowLessons])templates.push({title:l.prompts[0].title==='本课任务说明'?l.title:l.prompts[0].title,category:['mastery','explore'].includes(l.group)?'explore':l.group,desc:l.summary,lesson:l.id,text:l.prompts[0].text});

export const glossary = [
 ['提示词（Prompt）','你给 AI 的任务说明。背景、目标、限制和输出格式比华丽措辞更重要。'],
 ['模型 / 应用 / 工具','模型负责思考与生成，应用承载界面，工具提供搜索、文件生成或电脑操作能力。'],
 ['Agent（智能体）','能把目标拆成步骤、调用工具并继续工作的 AI 助手。仍需要检查它的操作和结果。'],
 ['Harness','连接模型、工具、工作区和权限的运行环境。DeepSeek Harness 是这类产品之一。'],
 ['Skill（技能）','一套可复用的操作说明，常带 SKILL.md、模板或脚本。必须由支持它的工具读取并使用。'],
 ['API / API Key','API 是软件调用模型的接口；Key 是访问凭证。App 会员和 API 额度通常分开计费，Key 不能发到群里。'],
 ['工作区','AI 可以处理的一个文件夹。练习先用专门的 AI练习 文件夹，保留原文件副本。'],
 ['幻觉','AI 生成看似可信、实际上错误的信息。核对原文、答案和官方来源是必需步骤。']
];

const beforeQualityPrompts=Object.fromEntries(lessons.map(l=>[l.id,(l.prompts||[]).map(p=>p.text)]));
for(const l of lessons){
 const q=lessonQualityById[l.id]||{},p=practiceLessonPatches[l.id]||{};
 const notes=[l.notes,q.notes].filter(Boolean);Object.assign(l,q);if(notes.length)l.notes=[...new Set(notes)].join('\n');
 Object.assign(l,sourceLessonPatches[l.id]||{});
 const practiceNotes=[l.notes,p.notes].filter(Boolean);Object.assign(l,p);if(practiceNotes.length)l.notes=[...new Set(practiceNotes)].join('\n');
}
for(const t of tools)Object.assign(t,sourceToolPatches[t.title]||{});
for(const f of featureMap)Object.assign(f,sourceFeaturePatches[f.title]||{});
for(const t of templates){const l=lessons.find(l=>l.id===t.lesson),at=(beforeQualityPrompts[t.lesson]||[]).indexOf(t.text);if(l&&at>=0&&l.prompts?.[at])t.text=l.prompts[at].text;}
Object.assign(groups.find(g=>g.id==='skills'),{kind:'条件选修',tag:'需要文件工具时再选择',desc:'按设备和任务选择Kimi Work、Harness或已有工具；内置技能先小测，社区环境按需准备。'});
const filesLesson=lessons.find(l=>l.id==='files-check');
filesLesson.steps.unshift(['先保存并重新打开输入','下载本页活动资料，创建AI练习/input和output。保存后重新打开，确认文件名、纯文本和中文内容正确，再给AI读取。']);
filesLesson.devices={windows:'在文件资源管理器创建AI练习文件夹及input/output。Windows 11可在“查看→显示→文件扩展名”核对.txt；Windows 10在查看的显示/隐藏区。下载输入到input，保留原后缀；改后缀不会把文件转换成别的格式。',mac:'用Finder创建AI练习及input/output。下载输入到input；自行写文字时，在TextEdit的Format→Make Plain Text转换为纯文本，再保存.txt。重新打开确认中文与真实扩展名；不要把RTF直接改名为MD。',phone:'先下载或复制到自己能重新打开的笔记/文件，再粘贴给可用AI；本课可完成文本核对。运行本机文件工具与脚本留到电脑上，不要求手机先配置环境。'};
filesLesson.sources.push(['Microsoft：Windows文件扩展名','https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/common-file-name-extensions-in-windows'],['Apple：TextEdit文档与纯文本','https://support.apple.com/guide/textedit/create-open-and-convert-documents-txtee6663a0e/mac']);

// Keep the explicit host routes alongside the three independent practice tests.
const ownSkill=lessons.find(l=>l.id==='own-skill');
ownSkill.steps.splice(2,0,...sourceLessonPatches['own-skill'].steps.slice(2,4));
const costLesson=lessons.find(l=>l.id==='automation-cost');
costLesson.practice='使用本课成本模拟CSV的教学假设：输入1000 token、输出500 token，每百万输入2元、输出4元，完整重复3次，无缓存、其他费用假设0。这里的元只是虚构公式示例，不是任何产品价格或实际消费。手算单次0.004元、三次0.012元，另列人工时间。已有账单者选做对照；无记录填实际扣费未核实，不充值也可完成。';
costLesson.checks[0]='我标明虚构示例，算出单次0.004元、三次0.012元，写了计算式，没有当作实际账单。';
costLesson.steps[1]=['用给定假设手算','CSV为输入1000、输出500，每百万虚构单价2元与4元。单次1000/1000000×2+500/1000000×4=0.004元，完整重复3次=0.012元；其他费用0仅是本次假设。'];
costLesson.prompts=[{title:'模拟成本与未知项',text:'按本课成本模拟CSV计算教学假设：输入1000 token、输出500 token，每百万输入2元、输出4元；完整重复3次，无缓存，其他费用假设0。这些是虚构示例，不是任何产品价格或实际消费。列单次和三次公式，人工检查时间另列。我的实际渠道：[免费聊天/会员/已有API等]；可见账单：[有记录/没有]。无实际记录写扣费未核实，不当0，不要求我充值。'}];
costLesson.notes+='\n本课CSV与费用计算器统一用人民币元作虚构公式单位，便于核算。真实扣费、工具费用和币种必须另看自己的实际渠道，不能据本例推断。';
for(const t of templates)if(t.lesson==='automation-cost')t.text=costLesson.prompts[0].text;
glossary.push(['Token','模型处理内容时使用的片段计数，不等于汉字或单词个数。实际计数随模型、消息结构和材料变化；本课1000/500只是计算假设。'],['Markdown / .md','一种纯文本记录格式。可先用记事本或纯文本编辑器阅读；不要把RTF或网页只改后缀当成Markdown。'],['副本与版本','原材料另存，v1是初稿、v2是修订稿。比较真实内容和改动，不只看文件名。']);
costLesson.intro+=' Token不是字数；输入是模型读取的内容，输出是它生成的内容，实际使用量还可能包括消息格式或工具结构。本课只用给定规模练公式，不要求调用计数API。';
costLesson.sources.push(['OpenAI：Token概念（通用概念参考）','https://developers.openai.com/api/docs/guides/advanced-usage'],['OpenAI：计数范围（仅阅读，不要求调用API）','https://developers.openai.com/api/docs/guides/token-counting']);

// New production route is appended after the v7 source/material repairs.
const allDramaLessons=[...dramaCoreLessons,...generationLessons,...releaseLessons];
lessons.push(...allDramaLessons);
for(const l of allDramaLessons){templates.push({title:l.prompts[0].title,category:'video',desc:l.summary,lesson:l.id,text:l.prompts[0].text});featureMap.push({tool:l.id.startsWith('drama-douyin')?'抖音与官方核对':'AI短剧制作',title:l.title,desc:l.summary,lesson:l.id,url:l.sources[0][1],level:l.level});}
tools.push(...generationTools);
Object.assign(groups.find(g=>g.id==='video'),{title:'AI视频与短剧：从首作到三集系列',desc:'从剪辑起步到原创剧情、角色场景、动态生成、声音返工、三集迁移与抖音适用发布。',tag:'独立制作专题'});
lessons.sort((a,b)=>order.indexOf(a.group)-order.indexOf(b.group));
for(const g of groups){const minutes=lessons.filter(l=>l.group===g.id).reduce((sum,l)=>sum+l.time,0);g.time='阅读与首次练习约 '+(Math.ceil(minutes/30)/2)+' 小时';}
glossary.push(['剪辑段与生成请求','剪辑段是最终时间线上的安排，可以由主镜、反应和插镜组合；模型一次支持的秒数与费用需当前界面核对。'],['角色与场景设定表','写清需要保持一致的人物外观、关系、声音、站位、道具和已发生事件的规则表。实际图和视频仍需逐镜检查。'],['审片与上线','审片检查故事与音画；上线另需适用手续、平台审核、声明和真实可播放作品证据，不能互相替代。']);

// Current UI observations from cropped captures and the official demo.
const anygentWorkbenchVisualUpdate=lessons.find(l=>l.id==='anygent-workbench');
anygentWorkbenchVisualUpdate.steps[0][1]='打开官方使用工作台教程，按“开始工作台实操”进入。先搜索完整的“演示：给服务加 /health 接口”，只用demo-workstation/whalent-quickstart；界面也会列真实机器，不要选其它机器。练拖对话、File/Terminal和分栏。四项绿只验UI动作，本次演示File读取报错，不能当真文件可用或本机接入已通过。';
anygentWorkbenchVisualUpdate.steps[1][1]='顶栏“工作台”的下拉或双击入口中选择“管理工作台”。当前管理列表底部有“新工作台名称”和“创建”栏；先填自己的“英语备课练习”，核对账号条件后创建。截图停在提交前；多工作台权益按本人账号确认。';
anygentWorkbenchVisualUpdate.steps[2][1]+=' 分清目录和具体对话整行：本次界面拖目录打开的是终端，拖具体对话才打开Chat。用面板的来源、机器和路径核对，不因同名就认为同一对象。';
anygentWorkbenchVisualUpdate.troubles.push(['演示File出现身份/目录读取失败','记为未读取，不把4/4动作勾选当文件成功。核对是否是指定演示机与工作区；仍失败就回原教程说明，结构练习与真实文件验证分开。在自己的练习目录做一次只读取材料的测试，不对真实机器盲目重试。']);
const anygentMobileVisualUpdate=lessons.find(l=>l.id==='anygent-mobile');
anygentMobileVisualUpdate.steps[2][1]+=' 小屏多栏太窄时，可从对应面板标签菜单“放大浏览”聚焦同一会话。本站图是433px桌面窄屏参考，真正手机仍需本人核对。';
anygentMobileVisualUpdate.steps[3][1]+=' 出现审批时先读将执行的命令、目标目录与影响；图中“批准本会话”涉及更广范围，不为省事默认选择。未知就询问并保持未执行，样例声称测试通过不代替判断。';

// New onboarding lessons retain their own current sources and practice requirements.
lessons.push(...toolStartLessons);
for(const l of toolStartLessons)templates.push({title:l.title,category:'explore',desc:l.summary,lesson:l.id,text:l.prompts[0].text});
groups.find(g=>g.id==='skills').desc='Kimi App／CLI → DeepSeek Harness → Codex → 配置、调用与复用 Skill；WorkBuddy、Claude Code 选修。';
groups.find(g=>g.id==='skills').kind='主线';
groups.find(g=>g.id==='skills').tag='工具入门';

for(const l of toolStartLessons)l.sourcesReviewed='2026-10-10';
tools.push({title:'Kimi Code CLI',symbol:'K',type:'电脑端命令行工具',desc:'在练习目录读取材料、生成文件，并按当前 Kimi Code 说明发现与调用 Skill。',use:'先用同一份活动材料完成一个可检查的文件任务',limit:'Windows 按当前官方说明准备 Git for Windows / Git Bash；安装、会员权益和开放平台 API 费用分别核对。',url:'https://www.kimi.com/code/docs/en/kimi-code-cli/guides/getting-started',lesson:'kimi-code-cli-start'});
tools.push({title:'Codex 桌面入口',symbol:'C',type:'电脑端任务与工作区',desc:'按当前官方桌面入口进入 Codex，选择自己的练习目录，明确调用 Skill 并检查真实输出文件。',use:'本地文件任务、Skill 练习与作品修改',limit:'当前下载产品与菜单名称以官方 Quickstart 为准；普通聊天和 Codex 工作区的能力与账号条件分别核对。',url:'https://learn.chatgpt.com/docs/quickstart',lesson:'codex-app-start'});
