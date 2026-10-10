import {dramaCases} from './drama-cases-v8.js?v=15.0.0';
import {dramaAssets} from './drama-core-v8.js?v=15.0.0';
import {applyPracticeRepairs,repairCases} from './practice-repairs-v7.js?v=15.0.0';
import {officeWorkshops} from './workshops-office-v6.js?v=15.0.0';
import {videoWorkshops} from './workshops-video-v6.js?v=15.0.0';
import {toolsWorkshops} from './workshops-tools-v6.js?v=15.0.0';
import {officeCases} from './office-cases.js?v=15.0.0';
import {videoCases} from './video-cases.js?v=15.0.0';
import {learningResources} from './reference-data.js?v=15.0.0';
const src=topic=>learningResources.filter(r=>r.topics.includes(topic)&&r.type!=='video').slice(0,3).map(r=>({title:r.title,url:r.url}));
const make=(id,topic,title,input,prompt,sampleOutput,walkthrough,acceptance,extra={})=>({id,topic,title,input,prompt,sampleOutput,walkthrough,acceptance,basis:'课程编辑的原创练习，方法参考对应官方指南。',sources:src(topic),executionStatus:'示范内容由课程编辑编写；所用工具的生成、导出与账号条件需你实际运行验收。',...extra});
const originalPracticeCases=[...officeCases,...videoCases,
make('case-kimi-file','basics','Kimi：一页材料变成可检查的活动通知','虚构资料：周六14:00–16:00，社区活动室，8位成人，主题是分享AI学习成果。请带电脑充电器，预算每人20元。',
 '只根据这段资料写一份200字以内通知，包含时间、地点、参与对象、准备物品和待确认项。先复述你读到的信息；没有的信息不补造。给一版后等我指出修改，再输出v2。',
 '活动通知示范：周六14:00–16:00，我们在社区活动室分享AI学习成果，参加者为8位成人。请带电脑和充电器，预算每人20元。\n待确认：活动室具体地址、报名回复方式。',
 ['把资料另存为练习文本，先找得到文件。','从官方入口新建对话，传一页资料或直接粘贴，等材料处理完成。','先问它读到了哪些时间、地点和数字，逐项与输入对照。','发送完整通知要求，检查200字、栏目和未知项。','补充“回复方式是群内接龙”，要求保留其他事实改为v2。','把两版存到练习目录，对照一处有效修改。'],
 ['事实全部来自输入，未编造地址。','v2只改变明确补充的内容。','文件自己找得到，能解释哪些条件让答案变好了。'],{figure:'files-flow',downloads:['人机协作任务单.md']}),
make('case-harness-first','skills','Harness：先生成一份小文件，再判断工具可用','使用虚构通知材料，只放在AI练习-Harness目录；桌面版已完成基础设置的用户，首次任务只做三页，不需要找图。走Web/CLI路线的用户先按官方Web指南生成学习清单.md，确认读取与写文件成功，再试PPT任务。',
 '先列当前可用办公技能与练习文件。把材料做成3页可编辑PPT：标题、3个要点、准备清单。先说明计划，另存新文件，不覆盖输入。报告实际路径和未检查项。',
 '预期文件结构：第1页标题与活动信息；第2页三个要点；第3页准备清单。\n应有证据：文件确实在指定目录，打开后可改一段文字。完成消息与真实文件要分别检查。',
 ['从官方Harness页下载适配设备的桌面包；按当前引导完成账号与额度。','选择独立练习目录，先核对真实材料与可写位置。','列出实际可用技能，缺项就先处理，不把聊天文字当PPT。','先做3页测试稿，要求交付路径。','用PowerPoint/WPS打开，改一个标题另存v2。','失败时记录第一处错误、所用技能和目录，不连续盲目重试。'],
 ['本机目录与实际文件吻合。','恰有3页，文字可编辑。','能区分模型、技能、环境和文件验收问题。'],{figure:'skill-flow',sources:[{title:'Harness官方桌面入口',url:'https://www.deepseek.com/en/harness/'},{title:'桌面包与内置运行环境说明',url:'https://github.com/deepseek-ai/deepseek-harness/blob/master/apps/desktop/README.zh.md'},{title:'Web UI是另一条可选路线',url:'https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/index.zh.md'}]}),
make('case-anygent-mobile','anygent','Anygent：手机改教案，电脑核对v2','电脑在线且daemon运行；自己的Codex会话已完成认证。先下载本页教案-v1.md放到自己的练习目录，手机与电脑使用同一账号。',
 '继续这段对话，只对练习目录里的教案-v1.md增加3道口头练习并附教师答案。先列计划，我确认后另存教案-v2.md。报告执行电脑、目录、输出与未检查项，不发送给别人。',
 '预期证据：手机要求出现在电脑同一会话；原v1仍在；真实目录有v2；练习与答案经过教师核对。\n示范练习：Can you jump? / Can you swim? / Say one thing you can do. 开放题接受合理回答。',
 ['下载本页教案-v1.md保存到电脑的练习目录，打开确认内容，再创建独立Codex认证与会话，完成只读目录核对。','新建工作台，Chat、File、Terminal选同一电脑和目录。','手机登录同一账号，展开抽屉找到同一Workspace和会话。','发小修改要求，先看计划、路径与权限范围。','确认必要写入后查看文件；找不到文件先问真实路径，不只看成功文案。','回电脑打开v2，逐题检查，核对v1未被覆盖。','离线时先恢复电脑与daemon；历史可见不能证明执行设备在线。'],
 ['同一账号、电脑、目录和会话。','原稿保留，v2真实可打开。','自己读过权限范围、核对答案和执行状态。'],{figure:'mobile-work',secondaryFigure:'workbench-layout',downloads:['教案-v1.md','Anygent手机办公检查单.md']}),
make('case-borrow-lend','video','50秒英语视频：borrow与lend','面向初一学习者，只讲一个易混词问题；使用自己的笔和原创文字卡，第一条先不生成复杂手部动作。',
 '给这条知识视频拆6镜头，总长约50秒。每镜头列时间、台词、画面、自有素材方案。例句要自然正确，最多2个镜头使用AI，字幕后期添加；列教师必须核对的地方。',
 '0–4秒：提出问题。\n4–12秒：borrow是借进来，I borrow a pen from you.\n12–20秒：lend是借出去，You lend a pen to me.\n20–34秒：一支笔从对方交给自己，可自己拍。\n34–44秒：Could you ___ me your pen?\n44–50秒：答案lend，回顾借的方向。\n时长是编辑估算，实际按自己朗读计时。',
 ['自己解释借进/借出，查例句语法，不直接采用未知事实。','用手机拍一支自己有权使用的笔，做问题卡、箭头卡和答案卡。','朗读台词计时，太长就删内容。','剪映先放自己的录音，再按声音切段排列画面。','添加字幕，逐字核对borrow/lend及例句。','导出后从头看完，先让亲友复述理解，再修订。','需要发布时查当前AI声明，核对素材权利与标题封面。'],
 ['30–60秒内只讲一个问题。','字幕和例句人工核对。','素材权利与AI参与可说明，导出完整可播放。'],{figure:'video-flow',downloads:['视频分镜与成本.csv']}),
make('case-pencil-motion','video','图生视频：用一张参考图练一个镜头','本站提供AI生成的静态铅笔参考图，接近9:16。图片可以作为练习输入；还没有视频。',
 '以提供的铅笔图为参考。铅笔和卡纸保持原样，镜头缓慢轻微推进，光线自然，不新增人物，不生成文字，不让主体变形。只做一个短镜头，先看当前模型、时长与扣费。',
 '采用标准：主体形状与颜色不变，镜头轻微推进，无新增文字和手，边缘未裁掉。\n不可用例：铅笔弯曲、卡纸突然变成文字、画面无关主体增加。最多先试2次，失败用原静态图加剪映关键帧。',
 ['下载静态参考图，自己检查它确实适合用途。','打开即梦或可灵的当前图生视频入口，先核对可用模型、画幅、时长和单次扣费。','导入图片，确认预览裁切未破坏主体；比例以工具当前设置为准。','一次只写一种镜头运动，做低成本短测试。','逐帧看主体与新增元素，记录采用或拒绝的依据。','无法稳定生成时，回到静态图与关键帧替代；保留费用和重试记录。'],
 ['能解释图片生成和视频生成分别完成什么。','参考图有来源，单次扣费已查看。','采用的镜头有检查记录，未把失败当可用。'],{figure:'video-flow',photo:'pencil-reference.png',downloads:['../visuals/pencil-reference.png']}),
make('case-feishu-draft','automation','飞书日报：记录、草稿、人审与推送','用本站虚构日志R01–R04。R01–R03是2026-10-09且可分享测试组；R04日期更早且仅自己可见。',
 '只根据2026-10-09且可分享测试组的记录生成日报草稿。完成和进行中分开，每项带记录编号。缺失信息标待确认，不补负责人，不发送。再列人工审核项。',
 '完成：R01词卡12张初稿（仍有例句待核查）。\n进行中：R02 PPT大纲已审，3页测试稿未完成；R03口播和分镜已准备，画面未生成。\n阻碍：例句、模板字体与素材。\n下一步：按记录继续核查和做小范围测试。R04不进入本日日报。',
 ['先手填有日期、范围和证据的记录，不让机器人猜工作信息。','选择当日与授权范围，先输出带编号的草稿。','人工核对“初稿/计划”是否误写成“完成”，逐项回记录。','需要推送时另外确认群、身份、权限和已审核状态，先按钮测试。','稳定后才考虑定时；当日无记录或日期不符停止。','保留稳定日报ID和每次运行ID，状态未知时先查实际发送，不立即重跑。'],
 ['只用当日且允许分享的记录。','完成、进行中与未知项正确。','未经审核和授权不发送，能停用并检查日志。'],{figure:'report-flow',downloads:['飞书日报练习材料.md'],sources:[{title:'飞书工作流',url:'https://www.feishu.cn/hc/zh-CN/articles/170735237222'},{title:'发送身份与权限',url:'https://www.feishu.cn/hc/zh-CN/articles/986962389649'}]}),
make('case-finance-reading','automation','金融资料：先复算预算，再读公开财报','使用本站6笔虚构预算，统一人民币。公开财报只选择原文中的三个指标，不涉及账户操作。',
 '检查虚构收入/支出是否有重复、转账和不同币种。给公式与记录编号，合计后让我复算。公开财报只提取收入、净利润和经营现金流，带期间、单位、币种、合并口径与原文位置；找不到写未找到。',
 '预算预期：收入5000，支出3160，结余1840。可选活动由300变200，其他不变，结余1940。\n财报阅读卡：报告期与发布日期分开；三个数字每个带原文页码/表名与口径，事实和推测分开。',
 ['先自己用计算器算虚构预算，再给AI核对。','按记录编号定位差异，不用一句“保证正确”替代公式。','通过巨潮、交易所或公司官方页面取公开原报告。','先核对报告期、版本、单位、币种及合并/母公司口径。','只查三项数字，回PDF表头和脚注确认；不同口径不直接算同比。','保留未知问题和下次要查的材料，不把摘要当自动交易依据。'],
 ['预算计算能手工复算。','每项财报数字有原文与口径。','事实、公司解释和AI推测分开。'],{figure:'files-flow',downloads:['金融资料练习.md'],sources:[{title:'上交所定期报告学习入口',url:'https://edu.sse.com.cn/college/required/basicinfo/index.shtml'},{title:'巨潮原文',url:'https://www.cninfo.com.cn/new/index'}]}),
make('case-can-deck','ppt','可编辑参考成品：Can / Can’t三页课堂稿','本站已制作3页PPTX和逐页预览。内容是教学参考，教师需按自己的学生修改。',
 '请以这份三页参考稿为基础，只修改第二页的一个动词，再为第三页安排不显示答案的学生版。保持可编辑文本，保存v2，报告实际改动和打开检查。',
 '页1：Can / Can’t与学习目标。\n页2：I can jump. / I can’t fly.；can后接动词原形。\n页3：A bird can (fly / flies).；将I can swim.改为否定句。教师答案fly / I can’t swim.。',
 ['先看3张预览，明确每页只承担一个教学任务。','下载PPTX，在自己的PowerPoint/WPS中打开。','点第二页文字，修改jump为自己已教的词，确认可编辑。','第三页教师答案移到备注、隐藏或改为逐步揭示，检查学生版。','全屏试讲，核对字号、时间和语法，另存v2。','换一份材料再做3页测试稿，记录模板和编辑边界。'],
 ['真实PPTX能打开，文字能改。','学生版不直接露出教师答案。','三页内容与目标对应，改动有理由。'],{figure:'ppt-flow',slides:['sample-ppt-1.png','sample-ppt-2.png','sample-ppt-3.png'],downloads:['CanCan’t课堂参考.pptx'],executionStatus:'本站已制作并检查PPTX结构、三页渲染和可导入性；尚未在你的PowerPoint/WPS和课堂中实测。'})
];

originalPracticeCases.push(
make('case-english-complete','english','完整英语教案包：can / can’t 40分钟','虚构学生A，10岁；能读颜色、动物和简单动作词，长句读得慢，喜欢画画。已学bird/fish/rabbit/cat/fly/swim/jump/run。线下小班40分钟，有纸、彩笔和词卡。目标：说出3句能力表达，完成3题课末小测。',
 '基于这个匿名画像和词表，先做40分钟教案大纲。每环节给分钟数、教师话术、学生操作、材料和达标信号。基础层给示例与词库，提高层加新情境但不加新语法。三题课末小测附教师答案。不要诊断学生，不补教材页码。先给初稿，我检查时间和目标后再修改。',
 '教师编辑的示范教案（需按实际学生调整）\n\n0–5分钟，热身：看动作词卡，教师说 “Show me jump.”，学生做动作或指词卡。检查能识别已学词，不能识别则先中文解释。\n5–13分钟，呈现：教师示范 “I can jump. I can’t fly.”，强调can/can’t后动词原形。学生跟读，老师用手势帮助区分肯定与否定。\n13–23分钟，引导练习：学生给动物与动作配对，再说 “A fish can swim.”，同伴核对。每人至少说2句。\n23–35分钟，任务：画一个自己选的动物，用3句介绍能力。基础层提供can/can’t和词库；提高层改成关于自己的能力句，但只用学过词汇。教师记录语言错误，不贴标签。\n35–40分钟，课末小测：1 A fish can ___. (swim/fly) 2 I can (jump/jumps). 3 把I can swim.改否定。教师答案：swim；jump；I can’t swim.。\n\n基础支持：给句框A ___ can ___.，让学生先指卡再说。提高任务：补一句can’t表达，解释和can的含义区别。\n\n初稿常见问题与修订：若AI设计了5分钟长视频却不支持本课目标，改成动作词卡热身；若最后题目用了新时态，替换为本课can句。时间合计5+8+10+12+5=40。学生版隐藏答案，教师版保留解释。',
 ['先自己写学生能做什么、目标怎么检查，不提供姓名联系方式。','向AI交代词表与课时，先读教案大纲而不是立刻排版。','用计算器核对5+8+10+12+5，确认每个环节支持同一目标。','试讲两句英语指令，遇到听不懂时准备示范和中文提示。','检查基础支持与提高任务没有偷加语法，逐题核查答案。','把教师版与学生版分别保存，拿本站三页PPT示范做视觉材料。','课后用匿名观察调整下一课：是词汇、指令还是动词形式没理解，先设计检查任务确认。'],
 ['时间总和40分钟，目标可观察。','学生版与教师答案版分开；每题答案正确。','分层改变支持程度，保留同一个目标。','我试讲并按实际学生修改过，而不是直接交给课堂。'],
 {figure:'english-plan',downloads:['英语教案练习包.md','CanCan’t课堂参考.pptx'],sources:[{title:'British Council教师AI使用原则',url:'https://www.teachingenglish.org.uk/professional-development/teachers/using-digital-technologies/ai-guidelines-teachers'},{title:'My AI teacher官方活动（适龄与水平要另核对）',url:'https://www.teachingenglish.org.uk/teaching-resources/teaching-secondary/lesson-plans/pre-intermediate-a2/my-ai-teacher'}],executionStatus:'这是课程编辑的原创示范教案；时间已复算，未在真实课堂实测。British Council资料用来学习方法与教师审阅原则，不代表其为本虚构学生编写此教案。'}),
make('case-skill-english-check','explore','说明型Skill：检查英语练习，先用三份材料测试','工作区使用练习副本。先写只有文字说明的english-check，不联网、不执行外部脚本。三份材料：正常输入I can jump.；含错误输入I can jumps.；缺教学目标的空白需求。',
 '请按当前宿主格式写一个说明型Skill，名称english-check。输入要求学生年龄/水平、目标、题目和答案。先问缺项，逐题检查语法、难度、答案与歧义，再给修改和教师需确认项。不要猜学生背景，不执行脚本。告诉我真实保存路径与显式调用方式；先用三份测试材料验证。',
 '示范说明主体\n\n适用：教师已有英语练习初稿，需要交付前检查。\n输入：年龄/水平、教学目标、题目、答案。\n步骤：检查缺项；逐题查语法和歧义；对照目标和已学词汇；修订并说明理由；给人工复核项。\n输出：问题位置、依据、建议、修订稿、未确定事项。\n\n预期测试：I can jump.不修改；I can jumps.指出can后动词原形并改为jump；缺目标时先问，不自动杜撰年级。\n\n可能路径：Codex项目级.agents/skills/english-check/SKILL.md；Harness按其.dsh/skills规则；其他宿主按当前官方导入入口。不同宿主不照搬目录。',
 ['先独立写自己的检查规则，知道什么算对与错。','让AI读取当前宿主官方格式，生成说明型SKILL.md；不增加脚本和API。','核对保存位置、完整文件和发现状态，同名文件不直接覆盖。','显式调用这个Skill，先试正常句，确认不会无意义改写。','再试故意错误句与缺信息输入，看是否准确改错并主动问缺项。','把漏检规则写回v2，再换一套材料复查，记录何时不适用。'],
 ['我能解释输入、步骤、输出和触发范围。','三份测试分别通过保留正确、修正错误、缺项先问。','我核对了宿主目录与实际调用，不把文件存在当技能通过。'],
 {figure:'skill-flow',downloads:['Skill探索记录.md'],sources:[{title:'OpenAI本地Skill格式与发现规则',url:'https://learn.chatgpt.com/docs/build-skills'},{title:'Harness Skill目录规则',url:'https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/skill/skill-filesystem/README.zh.md'},{title:'Kimi技能使用路径',url:'https://www.kimi.ai/zh-hans/help/plugins-and-skills/use-skills-in-agent'}]})
);

const salesExample=originalPracticeCases.find(c=>c.id==='office-case-workbuddy');salesExample.downloads=['sales-demo.csv'];

const workshopFigures={
 'workshop-video-series':[{file:'v6-video-series-storyboard.svg',alt:'三条系列视频的15镜原创分镜',caption:'本站原创系列分镜示范'}],
 'workshop-video-static-motion':[{file:'v6-video-clean-scene.png',alt:'第四镜使用的原创无文字窗户双人物底图',caption:'本站原创静态底图，英文在编辑器另轨后加，尚未生成视频'},{file:'v6-video-class-card.png',alt:'原创英语句型卡，仅用于静态剪辑和核字',caption:'本站原创含字参照卡，不用于第四镜生成输入'}]
};
export const practiceCases=applyPracticeRepairs([...originalPracticeCases,...officeWorkshops,...videoWorkshops,...toolsWorkshops,...repairCases,...dramaCases]).map(c=>c.milestones?{...c,figures:c.id.startsWith('workshop-drama-')?dramaAssets.map(a=>({file:a.file,alt:a.alt,caption:a.id+'：原创静态参考，非剧情视频；需要当前模型小试'})):workshopFigures[c.id]||c.figures,secondaryFigure:c.secondaryFigure||(c.id==='workshop-office-ppt-template'?'delivery-files':{ppt:'ppt-before-after',english:'reading-support',workbuddy:'delivery-files',video:'video-timeline',explore:'project-reading-map',skills:'delivery-files',automation:'delivery-files',anygent:'mobile-work'}[c.topic])}:c);
