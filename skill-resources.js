export const communitySources=[
 {name:'OpenAI 官方文档',type:'官方说明',url:'https://learn.chatgpt.com/docs/build-skills',desc:'先分清Skill、Plugin与连接器。当前Codex本地技能发现、显式调用、创建和安装方法以这里为准。',tasks:'Codex 安装 使用 目录 创建',limit:'插件目录数量不是Skill数量；账号、端与连接器权限分别核对。'},
 {name:'Anthropic 官方 Skills',type:'原作者技能库',url:'https://github.com/anthropics/skills',desc:'从docx、pdf、pptx、xlsx、doc-coauthoring、internal-comms、theme-factory探索办公与创作。',tasks:'文档 教案 PPT 表格 日报 设计',limit:'Claude路线不能直接照搬到Codex。文档技能许可与执行依赖要逐项读。'},
 {name:'skills.sh / Vercel',type:'发现入口与热榜',url:'https://www.skills.sh/',desc:'按presentation、document、teaching、video、marketing、automation等词发现候选，再回原作者仓库。',tasks:'PPT 文档 教学 视频 营销 自动化 热门',limit:'榜单基于安装遥测，热度不能证明质量或适配。安装管理工具见Vercel CLI原仓库。',extra:'https://github.com/vercel-labs/skills'},
 {name:'Vercel Agent Skills',type:'原作者技能库',url:'https://github.com/vercel-labs/agent-skills',desc:'以网页与开发为主；writing-guidelines、web-design-guidelines适合教程表达和展示页选修。',tasks:'写作 网页 展示 开发',limit:'先选一项读说明，开发技能需要对应项目环境。'},
 {name:'Superpowers',type:'开发流程选修',url:'https://github.com/obra/superpowers',desc:'学习需求、计划、排错和完成前验证。当前Codex安装入口看原README的Plugins路线。',tasks:'规划 开发 排错 测试',limit:'包含多项流程与Hooks；先在练习项目评估，不把开发方法机械套到所有办公任务。'},
 {name:'VoltAgent Awesome Skills',type:'跨领域链接目录',url:'https://github.com/VoltAgent/awesome-agent-skills',desc:'按办公、视频、社媒与自动化方向寻找项目，继续打开具体条目的原作者仓库。',tasks:'办公 视频 社媒 自动化 聚合',limit:'这是目录，不能把awesome仓库当一个Skill全装；外链能力与费用未逐项验证。'},
 {name:'PPT Master',type:'PPT实践项目',url:'https://github.com/hugohe3/ppt-master',desc:'继续练模板、原生编辑、图表、动画与旁白，先做3页测试稿并改一个文字元素。',tasks:'PPT 模板 图表 动画 配音',limit:'跨Agent安装获取文件后仍需Python与requirements依赖；Codex组合需自己验收。'}
];
const O='https://learn.chatgpt.com/docs/build-skills',P='https://developers.openai.com/plugins/build/plugins';
const make=(id,title,summary,steps,text,practice,sources)=>({id,group:'explore',title,summary,goal:practice,intro:summary+' 从自己的需求出发，每次只验证一项，保留输入、输出、费用与不适用边界。',steps,prompts:[{title:'探索与核对任务',text}],practice,checks:['我能说明原来源、类别与适用工具。','我先核对依赖、权限和范围，再做小测试。','我留下实际结果和下一条要改的规则。'],troubles:[['名称可见但用不了','分别检查端、目录、模型、依赖与工具权限，缺少什么就报告什么。'],['教程或命令变了','回当前原README和官方文档核对，保留旧版，不用过时路径反复试错。']],sources,time:25,device:'电脑执行；手机可浏览目录',level:'独立探索'});
export const catalogLessons=[
 make('skill-codex-catalog','Codex当前目录：Skill、插件包与旧示例','当前openai/skills已标为弃用；探索优先看openai/plugins，旧精选目录标历史示例。',[
 ['打开当前官方来源','从本页实时目录进入openai/plugins，读README和对应插件里的skills、manifest与工具说明。'],['分清三件事','Skill是流程，Plugin可同时打包Skill/MCP/连接器，目录条目不等于可用Skill数量。'],['认识旧路径','旧.curated可读历史示例；本次.experimental接口404，不当作成功同步的空目录。'],['看当前Codex入口','桌面端查看Skills/Plugins；CLI查看/skills与/plugins。以当前客户端及官方文档为准。']
 ],'我的任务：[任务]；当前Codex端：[桌面/CLI/Anygent中的实例]。\n请读当前官方目录与文档，区分插件包、Skill、连接器和历史示例。列3个候选的原链接、适用端、依赖与需要的权限；先不安装，没查到的写未知。','从当前官方目录选一个候选，解释它是什么类型、为什么适合自己。',[['官方技能文档',O],['当前插件库','https://github.com/openai/plugins'],['旧库状态','https://github.com/openai/skills']]),
 make('skill-live-reading','实时目录怎样读：刷新、搜索与获取时间','学会看成功获取时间；缓存和随站资料要与最新响应分开。',[
 ['进入Skill库浏览器','默认读取当前官方插件目录，也可切换旧精选示例。搜索只筛本页条目，不把问题发给模型。'],['看来源与时间','成功后显示目录数与北京时间；网络失败会保留上次成功缓存或带日期的随站资料。'],['有需要再刷新','手动刷新有冷却，GitHub公共接口有共享IP限额；失败不反复连点，不输入私人Token。'],['回原项目读完整说明','列表只是发现入口；查看SKILL.md、依赖、许可和更新，再决定试用。']
 ],'我在目录找到：[名字与原链接]。\n本页数据标记：[实时/缓存/随站资料]，获取时间：[时间]。\n请帮我解释该证据能说明什么、不能说明什么，再给一个最小试验。不把刷新成功说成已经安装或任务通过。','刷新一次官方目录，搜索一个任务词，记录来源、时间和候选原链接。',[['当前目录API','https://api.github.com/repos/openai/plugins/contents/plugins'],['GitHub接口限额','https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api']]),
 make('skill-community-find','从热门库发现候选，回到真正的原作者','排行榜、awesome目录、安装工具和原始技能是不同入口。',[
 ['按任务搜索','先写要改善的一步，用presentation/document/video等词在skills.sh或目录发现候选。'],['进入原始项目','读README和单项SKILL.md，不对awesome聚合目录全装。'],['比较同一个小任务','选两个候选，保持材料与标准一致，比较输出、返工、费用和权限。'],['保留一个有理由的选择','记录热度之外的实际依据；不适用也留下失败边界。']
 ],'任务：[我的需求]；候选：[两个原作者链接]。\n请区分目录、排行榜、工具与原始Skill，比较用途、端、依赖、许可、费用和人工验收。未读取的部分标未知，先提出同输入小测试，不按热度替我决定。','用一个真实任务发现两个候选，完成原来源核对并写选择理由。',[['社区热榜说明','https://www.skills.sh/docs'],['跨领域目录','https://github.com/VoltAgent/awesome-agent-skills'],['Anthropic原库','https://github.com/anthropics/skills']]),
 make('skill-codex-install','在自己的Codex里安装一项，再显式试用','插件走当前Plugins入口；纯Skill按官方安装器或对应宿主目录处理。',[
 ['确定端与执行电脑','Anygent手机连接的是某台电脑上的Codex，文件与安装要在那台电脑核对，不能把手机浏览目录当安装。'],['插件按当前入口安装','官方插件或Superpowers看Plugins入口；CLI可按官方文档添加marketplace，再查看和选择具体插件。'],['纯Skill单项安装','在支持的Codex对话中用$skill-installer并给明确名称/源路径。它是对话调用方式，不是普通shell命令。'],['核对可见与实际执行','当前本地发现位置按.agents/skills等官方说明；必要时新建会话或重启。显式调用后打开实际成果检查。']
 ],'我使用[Codex端]，执行电脑与练习目录是[说明]。候选原链接：[链接]。\n请先确定它是插件包还是纯Skill，读取当前官方安装方式、依赖和安装范围。给我一项最小试用计划；确认选择后只处理这一项，不覆盖原有同名技能，不扩大授权。','安装自己选定的一项，记录真实位置与调用方式，再用无隐私材料验收。',[['本地技能与安装',O],['插件marketplace',P],['Superpowers当前安装','https://github.com/obra/superpowers']]),
 make('skill-cross-agent','跨工具安装：Codex、Harness与WorkBuddy分别核对','通用SKILL.md不保证脚本、工具名和资源路径都兼容。',[
 ['先列候选，不装全库','Vercel CLI的--list可列仓库技能，但npx本身会下载执行工具，需要确认来源与Node环境。'],['只选一项和一个目标','在练习项目用--skill与-a codex定向选择，保留交互；项目/用户范围分清。'],['核对宿主与依赖','Claude插件命令不能照搬。Harness、WorkBuddy的导入入口、目录和Python/API条件分别查原文。'],['做一次实际小范围测试','检查发现、执行、文件和内容；跨宿主成功以各自测试为证，失败可停用并恢复。']
 ],'候选Skill：[原链接]；目标宿主：[Codex/Harness/WorkBuddy]。\n请比较格式、资源、命令、工具名、依赖、权限和费用。先列缺项与正确安装位置，不把另一宿主的说明直接搬过来。只在练习目录测试一项，报告已检查与未运行的内容。','让同一候选在一个目标宿主做小试验，写出兼容与不兼容之处。',[['Vercel安装管理工具','https://github.com/vercel-labs/skills'],['Anthropic库与许可','https://github.com/anthropics/skills'],['Harness目录','https://github.com/deepseek-ai/deepseek-harness']],),
 make('skill-personal-kit','选自己的三项工具包：教案、PPT或视频','把发现的能力变成少量有证据、可复用的个人方法。',[
 ['只选一个领域','教案可看文档协作和检查，PPT可看PPT Master与设计，视频先选脚本或本地制作阶段。'],['各选一项职责','资料整理、作品制作、交付检查分清输入输出；连接器和发布动作单独确认。'],['换材料做三次','第一次小范围测试，第二次新材料，第三次加缺项；保留成本和失败处理。'],['建立个人档案','记录源链接、版本/日期、范围、依赖、许可、通过样例、失效边界和保留原因。']
 ],'我的领域：[教学/PPT/视频/日报]；目标：[真实任务]。\n请从已核对原来源的候选中建议最多3项，说明每项职责与交接文件。提供正常、缺信息、易错三份测试；记录实际费用与未验证项，不把写作Skill当成拥有飞书读取或发群权限。','整理一套最多三项的个人工具包，用不同材料留下三份作品与探索记录。',[['文档协作示例','https://github.com/anthropics/skills'],['PPT实践项目','https://github.com/hugohe3/ppt-master'],['Vercel技能库','https://github.com/vercel-labs/agent-skills']])
];
