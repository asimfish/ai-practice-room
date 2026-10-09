// 2026-10-09：原创离线实战。来源核对不等于安装、远控或发送已运行。
const S = {
  harness: {title:'DeepSeek Harness 官方桌面入口',url:'https://www.deepseek.com/en/harness/'},
  desktop: {title:'Harness 桌面端：内置环境与 Office 技能',url:'https://github.com/deepseek-ai/deepseek-harness/blob/master/apps/desktop/README.zh.md'},
  office: {title:'Harness Office 技能：创建、检查与限制',url:'https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/skill/skill-office/README.zh.md'},
  web: {title:'Harness CLI/Web 工作区使用指南',url:'https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/index.zh.md'},
  skills: {title:'OpenAI：Build skills，当前目录与调用方式',url:'https://learn.chatgpt.com/docs/build-skills'},
  concepts: {title:'OpenAI：Skill 与 MCP 的职责',url:'https://developers.openai.com/plugins/concepts/skills'},
  plugins: {title:'OpenAI 当前插件示例库',url:'https://github.com/openai/plugins/blob/main/README.md'},
  legacy: {title:'OpenAI 旧 skills 库的弃用说明',url:'https://github.com/openai/skills/blob/main/README.md'},
  vercel: {title:'Vercel skills CLI：单项安装、复制、查看与移除',url:'https://github.com/vercel-labs/skills/blob/main/README.md'},
  writing: {title:'Vercel writing-guidelines 的实际 SKILL.md',url:'https://github.com/vercel-labs/agent-skills/blob/main/skills/writing-guidelines/SKILL.md'},
  handbook: {title:'Vercel Writing Guidelines：技能实际引用的规则',url:'https://github.com/vercel-labs/writing-guidelines/blob/main/command.md'},
  anygent: {title:'Anygent：Codex 手机版的执行设备与接续条件',url:'https://memory.whalent.com/guide/codex-mobile/'},
  create: {title:'Anygent：创建 CLI 实例，确认目录与来源',url:'https://memory.whalent.com/guide/agent-create/'},
  login: {title:'Anygent：独立 Codex 认证配置与 ChatGPT 登录',url:'https://memory.whalent.com/guide/chatgpt-login/'},
  workbench: {title:'Anygent：工作台虚拟实操与面板',url:'https://memory.whalent.com/guide/workbench-basic/'},
  layout: {title:'Anygent：工作台新建、拖拽与自动保存',url:'https://memory.whalent.com/guide/workbench-layout/'},
  mobile: {title:'Anygent：手机抽屉导航与原生 App 的区别',url:'https://memory.whalent.com/guide/mobile-usage/'},
  lookup: {title:'飞书：查找记录，所有条件与无结果处理',url:'https://www.feishu.cn/hc/zh-CN/articles/239533363334'},
  button: {title:'飞书：当前点击按钮触发配置',url:'https://www.feishu.cn/hc/zh-CN/articles/804644015036'},
  send: {title:'飞书：发送消息的身份、接收方与权限',url:'https://www.feishu.cn/hc/zh-CN/articles/986962389649'},
  actions: {title:'飞书：工作流触发条件与操作一览',url:'https://www.feishu.cn/hc/zh-CN/articles/740947703250'}
};

export const toolsWorkshops = [
  {
    id:'workshop-tools-harness-batch',topic:'skills',title:'Harness 批量整理：三份材料变成有清单的标准任务单',
    basis:'课程编辑原创的小批量文件项目；产品能力参考官方 Desktop、Web 指南与 Office 技能说明。重点是编号、事实保留、文件交付和可复查验收。',
    level:'从单文件进阶到小批量',minutes:90,
    prerequisites:['会创建练习文件夹，并能用 Word/WPS 打开 DOCX。','已按官方当前入口准备可用的 Harness、账号与额度；本案例不代安装。','理解输入副本、输出目录和原件的区别。'],
    input:'全部材料为虚构。H01：10岁学习者，已学 bird/fish/fly/swim/jump，20分钟复习 can/can’t，目标是说出2句动物能力句；有词卡和纸。H02：初一学习者，已学 pen/book/bag，25分钟分清 borrow/lend；用一支笔演示借入和借出；目标是完成2道方向判断题；不添加新时态。H03：8位成人的45分钟 AI 学习分享，目标是每人说清一项作品和一项待改进点；有电脑；举办日期与房间未确定。输入只有 v6-tools-harness-input.md 和编号清单，不含真实学生信息。',
    inputNotes:'先复制下载材料到独立工作区的 input/，输出写到 output-v1/。先做 H01，确认能交付再做 H02–H03。桌面版默认带 Office 技能；CLI/Web 需核对实际技能和依赖，不能推定与桌面版相同。结构检查通过仍须用自己的 Word/WPS 检查外观和编辑。',
    prompt:'这是三份虚构练习材料。先报告当前工作区、输入文件清单、可用的文档技能与输出位置，只读核对编号 H01–H03。\n每份材料输出一份 DOCX，按固定六节组织：对象、可观察目标、分钟流程、材料、待确认项、交付验收。保留来源编号，不补学生背景、日期、房间或教材页码。第一次只做 H01；我检查后，再处理其余两份。\n文件名分别为 H01-任务单.docx、H02-任务单.docx、H03-任务单.docx。另交 manifest.csv，列 id、input_file、output_file、status、unknowns、checks；再交验收说明.md。另存新目录，不覆盖输入。说明实际路径、已运行的结构检查、尚未做的外观检查与失败项。若无法生成真实 DOCX，先报告缺项，给 Markdown 草稿，不把它说成 DOCX 已完成。',
    sampleOutput:'以下是编辑编写的验收参照，尚未由 Harness 生成。\n\nH01 的目标：学生能用已学词说出2句动物能力句。流程：3分钟认词卡、5分钟示范、8分钟配对说句、4分钟出口检查，总计20分钟。示范：A bird can fly. A fish can swim. 待确认：实际学生是否能认读本词表。\nH02 的流程：4分钟复述借的方向、6分钟用笔示范、10分钟两人交换与判断、5分钟出口题，总计25分钟。题目：I borrow a pen from you. 是谁借入？答案：I。You lend a pen to me. 是谁借出？答案：you。\nH03 的流程：5分钟准备、15分钟分组介绍作品、15分钟互提修改建议、10分钟每人写下一步，总计45分钟。待确认：举办日期、房间。\n\n交付清单应有3份 DOCX、1份 manifest.csv、1份验收说明.md。清单中 H03 的 unknowns 至少保留“日期；房间”。status 可以写“待人工打开”，不能仅凭生成消息写“课堂可用”。\n预期检查：3个编号各对应1个文档；每个文档六节齐全；时间和目标一致；真实文件可打开、可改字。',
    deliverables:['3份带 H01–H03 编号的标准任务单 DOCX。','manifest.csv：输入、输出、状态、未知项和检查范围一一对应。','验收说明.md：逐文件检查结果、问题与重做范围。'],
    walkthrough:[
      '下载输入、清单和验收卡，建立 AI练习-Harness批量/input 与 output-v1；先自己打开输入，圈出三个编号和缺项。',
      '从官方 Harness 页面确认当前适配设备。已安装桌面版直接使用；走 CLI/Web 的学员先按官方指南选中工作区，再核对模型与环境。',
      '在当前客户端选择自己的练习目录。第一条只读要求列文件名、工作区和可用技能，与电脑上的文件列表逐项对照。',
      '与 AI 约定六节模板和命名规则。自己写清：未知项不补、输入不覆盖、失败文件单独报告；先不启动三份并发。',
      '仅生成 H01 小样，要求真实 DOCX 路径与检查说明。用 Word/WPS 打开，检查六节、20分钟合计及两句英语，再改一处文字另存测试副本。',
      '如果 H01 有字号、分页或事实错误，先修模板并重做 H01，确认这次修订有效；缺文档技能时先补查环境或保留 Markdown 草稿。',
      '使用通过的小样规则处理 H02、H03。每完成一份就在 manifest.csv 更新对应行，未确定的日期和房间继续留在 H03。',
      '打开三份文件逐一验收，计算时间，检查借入/借出方向。不要以某个文件通过推定另外两个通过。',
      '请 AI 对照输入编号和清单检查漏项、多项与错误路径；人工确认真实目录恰有这次约定的五项交付物。',
      '只返工未通过的编号，另存 output-v2，并记录原因与有效改动。换三份新材料再练时复用模板和清单，重新判断内容。'
    ],
    milestones:[
      {name:'材料登记',action:'核对输入文件与 H01–H03 编号。',expected:'三个任务与缺项均有记录。',verify:'逐条读下载材料，对照编号清单。',fix:'少一条时先补输入，多一条时先说明是否属于本批。'},
      {name:'模板小样',action:'只生成并打开 H01。',expected:'六节齐全、时间20分钟、文字可编辑。',verify:'实际打开并改一句话；复算3+5+8+4。',fix:'内容错修模板，打不开则先查路径、文件格式与生成错误。'},
      {name:'剩余两份',action:'沿用模板分别处理 H02 和 H03。',expected:'各一份文件，H03 缺项仍可见。',verify:'对照输入查看题目方向与未知项。',fix:'只重做问题编号，不整批反复覆盖。'},
      {name:'交付对账',action:'填写 manifest.csv 与验收说明。',expected:'3份文档和2份说明文件可以互相定位。',verify:'从每行打开对应文件，核对编号和检查状态。',fix:'路径失效则更正清单；漏文件补交并重新检查。'},
      {name:'人工签收',action:'完成外观、编辑、时间与事实复查。',expected:'每项写明通过或未通过，留下 v2 修订依据。',verify:'以实际打开记录判断，不采用聊天中的总括成功消息。',fix:'未验外观保留“待人工检查”，不可写“全部通过”。'}
    ],
    workedExample:{before:'H03 原材料没有日期和房间；错误任务单却写了“10月17日，201室”，清单写“已完成”。',after:'任务单明确列“举办日期待确认；房间待确认”；清单记“文件已生成，待人工打开”，收到真实补充后只改 H03 为 v2。',why:'标准格式可以统一，缺失事实仍需保留。把文件生成、打开检查与业务可用分开，能定位返工范围。'},
    rubric:[
      {criterion:'材料与编号',pass:'三条材料各有一份输出，能回到源编号。',fail:'漏 H02、把两条混写，或额外编出第四项。'},
      {criterion:'事实与未知项',pass:'只用输入，H03 日期和房间待确认。',fail:'虚构场地、教材页码或学生背景。'},
      {criterion:'文档与编辑',pass:'DOCX真实存在、能打开、可改字，外观检查有记录。',fail:'只有对话文本或文件损坏，却标记完成。'},
      {criterion:'模板与内容',pass:'六节一致，三份时间分别20/25/45分钟，方向和英语正确。',fail:'格式一致但目标、时间或答案错误。'},
      {criterion:'批量控制',pass:'一份小样通过后处理两份，清单状态逐项记录。',fail:'先全量运行，再用一句“都正常”签收。'}
    ],
    acceptance:['H01–H03 与三个真实文件逐项对应。','六节模板完整，时间各自可复算。','未知事实没有被补造。','每份 DOCX 已在自己的 Word/WPS 打开并试改。','清单中已验、未验与失败项准确。','输入原件保留，v2 与返工原因可查。'],
    sources:[S.harness,S.desktop,S.office,S.web],executionStatus:'NOT_RUN：本站仅编写原创输入、预期内容与验收卡；未安装或运行 Harness，未生成本案例的 DOCX。学员需在自己的版本、账号与 Office 软件中验证。',
    figure:'files-flow',secondaryFigure:'skill-flow',downloads:['v6-tools-harness-input.md','v6-tools-harness-manifest.csv','v6-tools-harness-acceptance.md']
  },
  {
    id:'workshop-tools-skill-lifecycle',topic:'explore',title:'一项 Skill 的完整试用：发现原项目、安装小范围、改规则与回退',
    basis:'围绕 Vercel 原作者的 writing-guidelines 做原创中文练习；安装方法来自 Vercel CLI，Codex发现与停用规则来自当前 OpenAI 文档。安装和调用均为待学员执行的文字教程。',
    level:'会查来源的独立探索',minutes:100,
    prerequisites:['会在电脑上找到自己正在使用的练习目录。','已有可用 Codex；命令路线需本人核对 Node/npm/npx 环境。','理解外部 Skill 指令也可能读取网络规则；愿意先读再选择。'],
    input:'任务：给第一次接触 AI 的成人写一页家庭练习说明。测试材料 T1：准确的小教程；T2：“一键自动生成完美答案，不用检查，费用永远为零”，且没有实际文件验收；T3：只说“帮我改一下”而未提供文件；T4：要求该写作 Skill 直接登录飞书并向群发送消息。四份材料均为课程原创，见 v6-tools-skill-tests.md。候选 A 为 Vercel writing-guidelines；候选 B 为 Anthropic doc-coauthoring，用来比较表达检查与协作文档流程，不同时安装。',
    inputNotes:'这次选择 A，是因为目标为表达和教程结构检查。实际 SKILL.md 会联网读取 Vercel writing-guidelines 的 command.md，并出现 WebFetch 这个工具名；Codex是否具备对应网页读取能力要在试用中核对。英文技术文档规则不能机械套到所有中文教案；它也不保证英语题目、费用或产品事实正确。',
    prompt:'请先只读两个候选的原 README 和具体 SKILL.md，比较触发条件、输入、输出、外部链接、脚本、许可声明与宿主依赖。OpenAI当前例子看 openai/plugins；openai/skills 已弃用，只作为历史资料。\n本次选 writing-guidelines，在我指定的练习项目中只试这一项，使用复制方式，保留安装交互，不安装整库、不使用全局范围。先报告计划和实际位置。安装后显式调用，分别测试 T1–T4，记录实际触发、输出、未知项和费用。\n若中文测试暴露不适用规则，备份本地副本，再加入“中文教学说明”的范围规则：保留事实；优先可照做的步骤和验收；英文大小写、Vercel元数据和英文词数只在对应语境适用；未核实事实列待确认。只改我的本地副本，不改上游。\n最后停用或移除本次新增的一项，恢复原规则并用 T1 复查。不要登录飞书、连接 MCP 或发送消息；找不到文件和缺工具时如实报告。',
    sampleOutput:'以下是预期记录示范，不是安装日志。\n\n候选判断：Skill 提供工作步骤；Plugin 是可打包 Skill 和可选连接器等内容的安装单元；MCP 提供工具和受控数据/动作。writing-guidelines 属于写作检查 Skill，不能凭这个文件取得飞书权限。\n来源阅读：A 的 SKILL.md 元数据为 writing-guidelines / 1.0.0，引用另外一个原作者规则文件；实际安装时重新记录版本或获取日期。\nT1 预期：保留准确事实，可提出少量表达建议，不大改任务目标。\nT2 预期：指出夸大表述与缺少步骤/验收；“费用永远为零”另列事实待查，不凭写作规范认定真实价格。\nT3 预期：先要求提供文件或明确范围。\nT4 预期：说明写作检查范围，不假装已有飞书工具或群消息发送权限。\n\n一次有效规则改动示范：将“所有标题必须按英语 sentence case”改成按文档语言检查；中文标题优先表达读者要完成的动作。修改记录说明是哪份测试暴露问题，再用原测试和新材料复查。\n回退参照：记录真实 SKILL.md 路径，按当前官方配置停用并重启 Codex，确认选择器状态；或用安装工具移除本次项目中的该项。保留测试成果，不能把隐藏名称当作输出已删除。',
    deliverables:['两项候选的来源和依赖阅读卡，但只试用一项。','T1–T4 的实际结果表：触发、输出、问题、费用、决定。','本地规则 v1 备份、v2 改动说明与新材料复查。','一次停用/移除与恢复检查记录。'],
    walkthrough:[
      '下载练习包，在自己的电脑建 Skill试验室，把输入与结果目录分开。写出这次要改善的一个环节：让家庭练习说明可照着做。',
      '从当前 OpenAI 文档认识 Skill、Plugin 与 MCP。打开 openai/plugins 看现行例子；注意 openai/skills 首页的弃用提示。',
      '按文档写作任务发现 Vercel writing-guidelines 和 Anthropic doc-coauthoring。分别进入原作者仓库，不把热榜或聚合目录当作源文件。',
      '读 A 的 SKILL.md，再打开它引用的 command.md。记录外部网页读取、WebFetch工具名和英语/Vercel特有规则；读 B 的协作阶段，说明它与当前检查任务的区别。',
      '阅读当前目录和许可声明。Vercel agent-skills README 声明 MIT；实际下载时核对完整目录与许可文件。若来源、范围或依赖无法解释，先停止安装，保留阅读卡。',
      '本人决定试用后，在独立练习目录按下载操作卡只选 writing-guidelines 和 codex，使用 --copy，保留交互，确认项目范围及真实路径。npx 会下载并执行工具自身，即使 --list 也需核对环境。',
      '在 Codex 技能选择器核对发现状态。项目级本地目录按当前 .agents/skills 规则核对；同名技能不会自动合并，来源不明时先查路径。必要时重新打开会话。',
      '显式调用 $writing-guidelines 并给出 T1 文件；随后分别测试 T2、T3、T4，每次保留原输入和输出。缺网页读取能力时记录工具缺项，不伪造规则已经读取。',
      '备份安装副本的完整文件，增加原创中文教学补充规则，记录前后差异。若复制位置仍是链接，先查明其指向，不直接修改共享的另一份原件。',
      '重跑暴露问题的 T2 和 T3，再用一份新教程做复查。保留原版能工作的部分；一项规则未通过时只改该项，避免不停扩展职责。',
      '练习官方停用配置或安装工具的单项移除。使用真实路径或名称，范围与安装时一致，不删除整个 skills 目录。重启/新会话后确认停用状态。',
      '恢复自己的 v1 副本或明确保留 v2，核对调用结果与文件。写出保留/停用原因：有没有改善、什么材料不适用、下一次何时需要重新查来源。'
    ],
    milestones:[
      {name:'任务与候选',action:'写一个任务目标并比较两项原项目。',expected:'能解释为什么只选 A。',verify:'对照各自 SKILL.md 的输入与输出。',fix:'目标是英语正确性时改用有相应依据的检查流程，不把写作格式当语法证据。'},
      {name:'边界阅读',action:'读技能引用的规则与当前许可/工具说明。',expected:'外部链接、WebFetch与中文适用限制有记录。',verify:'实际打开引用规则；不只看名字和星标。',fix:'引用页打不开或许可不明时标未知，先不安装。'},
      {name:'单项试用',action:'仅在练习项目安装 A。',expected:'实际位置、范围、复制方式可核对。',verify:'选择器与实际目录都能定位到同一项。',fix:'层级不对先检查；同名冲突先辨来源，不能覆盖了事。'},
      {name:'四项测试',action:'按相同输入依次做 T1–T4。',expected:'正常、夸大、缺输入、超范围都有实际记录。',verify:'逐条看输出，检查是否虚构联网、价格或飞书操作。',fix:'缺工具写未运行；越界或错误先停用再缩小规则。'},
      {name:'修订与回退',action:'备份、改一条规则、换输入复查并停用/恢复。',expected:'能回到原版，成果和原因仍保留。',verify:'看真实规则差异和停用后的调用状态。',fix:'恢复不完整则取回备份，只操作本次副本，不批量删技能。'}
    ],
    workedExample:{before:'原创测试句：“你只需一键操作，AI永远免费，答案一定正确。”写作检查只把“只需”删掉，仍保留未经核实的承诺。',after:'原创修订：“上传本页虚构材料，要求 AI 列出缺项；核对时间、数字和真实文件。使用前在当前页面查看费用，答案需人工复查。”本地补充规则要求把未知价格单列待确认。',why:'语言变顺不代表事实可靠。用故意错误的输入测试边界，能发现一项 Skill 的具体缺口，再通过局部规则和人工复查补上。'},
    rubric:[
      {criterion:'来源阅读',pass:'读到原 SKILL.md 和引用规则，记录版本/日期及未知项。',fail:'只根据热度或名称安装整库。'},
      {criterion:'安装范围',pass:'只选一项、一个宿主和独立练习项目，真实位置明确。',fail:'误装全局、覆盖同名项或把 Claude 插件命令照搬。'},
      {criterion:'测试质量',pass:'T1–T4有真实输入输出；不存在的操作写未执行。',fail:'只有 installed 提示，或把写作规则当事实/价格验证。'},
      {criterion:'规则修订',pass:'改动来自已观察问题，保留原版，再换输入复查。',fail:'随意增加联网、发消息或登录权限。'},
      {criterion:'可回退',pass:'能停用/恢复指定副本，保留测试记录。',fail:'删掉全部 skills 或无法找回原规则。'}
    ],
    acceptance:['清楚解释 Skill、Plugin、MCP 的区别。','两项原来源均已读，一次只试用选定的一项。','实际安装范围和路径与计划相符。','四份测试保留实际结果与未运行标签。','中文补充规则有明确失败样例和复查结果。','停用或恢复记录可查，未扩大账号和发群权限。'],
    sources:[S.skills,S.concepts,S.plugins,S.legacy,S.vercel,S.writing,S.handbook,{title:'Anthropic doc-coauthoring：用于比较协作流程',url:'https://github.com/anthropics/skills/blob/main/skills/doc-coauthoring/SKILL.md'}],
    executionStatus:'NOT_RUN：本站实际读取原作者文档并编写试验材料；未安装 Skill、未执行 npx、未修改用户技能或配置。命令、触发、规则效果和回退需在学员自己的 Codex 版本中验证。',
    figure:'skill-flow',downloads:['v6-tools-skill-lab.md','v6-tools-skill-tests.md']
  },
  {
    id:'workshop-tools-anygent-lesson-project',topic:'anygent',title:'Anygent 完整教案项目：电脑建工作台，手机接续，回电脑签收',
    basis:'课程原创 There is / There are 教案项目；远程执行、会话、凭据和布局能力依据 Anygent 官方公开指南。教案和示范改动由编辑编写，尚未实际远控或进课堂。',
    level:'跨端项目实践',minutes:120,
    prerequisites:['自己的执行电脑已按官方接入说明联网运行 Whalent daemon。','已有可用 Codex 与本人凭据；手机和电脑登录同一个 Anygent 账号。','会打开 Markdown 文件，能在电脑上检查修改前后版本。'],
    input:'虚构成人初学小组8人，35分钟，已学 book/pen/bag/desk/chair 与 one/two/three。目标：按眼前物品说出2句 There is / There are，并正确完成3题退出票；用书、笔、包和纸。原稿 lesson-v1.md 中有待核查句“There are a book.”，worksheet-v1.md 尚未分学生题目与教师答案。下载项目材料后，按其中分隔说明另存 source.md、lesson-v1.md、worksheet-v1.md，放入同一练习 workspace。',
    inputNotes:'这是第三方工作台远程操作方案。手机显示对话和发送要求；命令、写文件在接入的电脑执行。材料都是虚构，本项目不代登录、不复制真实 auth.json、不建立执行设备。邀请码 JMSY5HME 由用户授权公开，可选访问 https://memory.whalent.com/#/settings/invites?invite=JMSY5HME；是否适用与权益以本人当前账号页面为准，不影响本练习验收。',
    prompt:'先报告当前执行电脑、workspace、会话来源、目录与三个输入文件名，概述 source.md，不修改。确认目录后，把虚构原稿整理为35分钟教师教案 lesson-v2.md、学生练习 student-v2.md、教师答案 teacher-key-v2.md。\n目标只限 There is / There are，不新增时态和词汇。按5+8+10+8+4分钟安排：认物品、示范单复数、引导练习、两人信息差任务、退出票。指出原稿错误并给理由；每段有教师话术、学生动作、材料和达标信号。答案只放教师文件。保留 v1，不发送、不共享。\n稍后我会用手机继续同一会话，只修改“两人任务”的操作说明，不改变词表、总时长和其他内容；先列修改计划，再按当前实例的权限流程另存 lesson-v3.md。交付项目清单.md，列实际路径、修改和检查范围、未知项。不要把历史可见当作电脑在线。',
    sampleOutput:'以下教案骨架由课程编辑编写，供人工验收。\n\n0–5分钟：认 book/pen/bag/desk/chair，教师展示真实物品，学生指出并读词。\n5–13分钟：一支笔与两支笔，示范“There is a pen.”和“There are two pens.”；让学生解释数量与 is/are 的关系。\n13–23分钟：看3组物品卡，每人说至少2句，同伴按单复数核对。\n23–31分钟：两人任务，A摆物品但暂时遮住，B听描述后画图；交换角色，揭开物品后核对。只使用已学词和数字，不新增地点介词。\n31–35分钟：退出票。1 There ___ a book. 2 There ___ two pens. 3 对桌上三只包写一句话。\n教师答案：is；are；There are three bags.。\n原稿修正：There are a book. → There is a book.，因为 a book 是单数。\n\n手机修改示范：增加“A描述前先数物品；B画完用相同句型读回；A揭开实物核对”的动作说明，仍占8分钟。v3改动仅在23–31分钟环节。\n项目清单预期：source.md、两个v1原稿保留；lesson-v2.md、student-v2.md、teacher-key-v2.md、lesson-v3.md与项目清单.md真实可打开。手机接续记录写同一会话、执行设备状态和回电脑检查结果。',
    deliverables:['教师教案 lesson-v2.md 与手机修改后的 lesson-v3.md。','student-v2.md 与 teacher-key-v2.md，答案分开。','项目清单.md 与手机接续检查记录。','工作台指向同一电脑/目录/会话的核对记录。'],
    walkthrough:[
      '下载原创项目材料，按标记拆成三个文件，保存到自己的 Anygent-教案项目目录；在电脑上先读原稿，圈出语法错误、目标和缺少的分版规则。',
      '核对本人账号、执行电脑在线和 daemon 运行。未接入的学员先按官方下载/接入教程自行完成；历史消息仍在不能替代在线状态。',
      '在目标机器的认证管理中按官方指南选择独立 Codex 配置，使用自己的 ChatGPT 登录流程；新建会话时绑定该配置。避开直接共用 ~/.codex 标记的默认认证目录。',
      '从指定 workspace 创建 Codex 实例，核对 machine、workspace、source_type、工作目录和首条状态。先发只读核对，确认看到三个输入文件。',
      '先看官方工作台虚拟实操，练习拖入 Chat、用 + 添加 File/Terminal 和标签分栏。该演示不连接真实机器，不当作本项目已经执行。',
      '回自己的工作台。按当前管理页创建或使用一个工作台；拖入本项目会话，给 File 和 Terminal 选同一电脑和目录。建议左侧 Chat、右侧文件、下方终端，这是课程布局建议。',
      '发送电脑端教案任务，先看计划再按当前权限流程处理必要写入。打开 v2 文件，复算35分钟，逐题查单复数和答案，确认学生版没有答案。',
      '手机浏览器登录同一账号，点左上角抽屉，按机器、workspace 和对话找到刚才的会话；核对项目目录和最后一条电脑消息后再继续。',
      '手机发送一个局部要求：只改两人任务，增加数物品、听后画图、读回和揭开核对。先看计划与影响范围，再按当前实例权限流程处理写入；要求另存 v3。',
      '在手机查看新消息与文件结果，记录实际路径、状态和未验项。手机浏览器、PWA与原生App入口不同，不把App分享/通知能力自动套到网页。',
      '回电脑在同一工作台打开 v3、学生版和答案版，逐段比对。检查只有8分钟任务段变化，v1原件还在；文件预览或下载能否使用需在自己的手机实际确认。',
      '留一次断连排查记录：无法继续时依次核对账号、设备在线、daemon、凭据和目录。任务状态未知先查看最新输出，不重复新建相似会话。'
    ],
    milestones:[
      {name:'项目就位',action:'在执行电脑创建目录与三个输入文件。',expected:'网页只读输出能列出相同文件与目录。',verify:'对照本机文件，查看首条状态与 source_type。',fix:'文件不可见先修 workspace 与在线状态，不另猜目录。'},
      {name:'三面板',action:'打开 Chat、File、Terminal 并确认指向。',expected:'都属于本项目的同一电脑和 workspace。',verify:'在每个面板确认目录或会话来源。',fix:'错误面板改指向；不以布局漂亮代替目录核对。'},
      {name:'电脑初稿',action:'生成并人工检查 v2 教案、学生版、答案版。',expected:'35分钟、同一目标、答案独立。',verify:'复算5+8+10+8+4；检查is/are和复数。',fix:'错误题改后重查对应题；额外语法删去。'},
      {name:'手机接续',action:'在同一会话发局部修改并另存 v3。',expected:'电脑会话能看到手机消息，真实目录有 v3。',verify:'核对最后消息、输出路径与机器在线。',fix:'不同会话先返回原会话；离线先恢复执行电脑。'},
      {name:'回电脑签收',action:'比对 v2/v3 与输入，保存检查记录。',expected:'只改两人任务，材料原件保留。',verify:'逐段阅读文件，确认学生答案隐藏与35分钟总时长。',fix:'越界修改恢复v2再做局部修订，不覆盖原稿。'}
    ],
    workedExample:{before:'手机上看到旧会话就以为电脑在线，发送“把教案完善一下”；另一个相似会话生成了有新词和新时态的稿件。',after:'先按机器→workspace→对话核对最后消息，再发“只改23–31分钟两人任务，保留词表和35分钟”；报告 lesson-v3.md 的真实路径，回电脑逐段对照。',why:'跨端便利取决于会话与执行设备一致。把修改限定到一个环节，才能判断手机接续是否真正完成了预定任务。'},
    rubric:[
      {criterion:'设备与会话',pass:'账号、电脑、workspace与同一会话可核对。',fail:'只凭相似名称或历史消息判断在线。'},
      {criterion:'工作台用途',pass:'Chat派活、File核查成果、Terminal查看必要执行信息，指向一致。',fail:'三个面板打开了三个不同目录。'},
      {criterion:'教案质量',pass:'时间35分钟，目标可观察，题目与已学词匹配，教师答案正确。',fail:'加入新时态、错误单复数或学生版直接带答案。'},
      {criterion:'手机修改范围',pass:'v3只改两人任务操作，留下真实路径和改动记录。',fail:'生成整份新教案、覆盖v1或未经核对就签收。'},
      {criterion:'恢复与签收',pass:'离线问题按设备/daemon/凭据/目录排查，回电脑打开复查。',fail:'反复刷新或重发命令，把状态未知写成完成。'}
    ],
    acceptance:['执行电脑在线、目录和三个输入文件已核对。','同一会话的手机消息能在电脑查看。','工作台三个面板指向同一项目。','三份v2交付和v3修改稿真实可打开。','时间35分钟，语法和答案人工复查。','原稿保留，局部改动与未验项可查。'],
    sources:[S.anygent,S.create,S.login,S.workbench,S.layout,S.mobile],executionStatus:'NOT_RUN：本站只读了官方公开指南并编写原创教案与检查卡；未登录 Anygent、未兑换邀请码、未接入设备、未建立会话/工作台、未远控电脑。实际账号、客户端、网络、权限与课堂效果需学员验证。',
    figure:'mobile-work',secondaryFigure:'workbench-layout',downloads:['v6-tools-anygent-project.md','v6-tools-anygent-mobile-log.md']
  },
  {
    id:'workshop-tools-feishu-reviewed-report',topic:'automation',title:'飞书多维表日报项目：五条有效记录、人工审核、按钮推送设计',
    basis:'课程原创日志、字段和流程教学设计；查找记录、按钮触发与消息身份依据飞书帮助中心。本案例交付草稿与设计卡，不操作真实飞书或发送消息。',
    level:'从手工记录到受控流程',minutes:110,
    prerequisites:['会在飞书多维表格或本地表格中建立字段与填记录。','能分清完成、进行中、受阻与计划，知道分享范围由记录者填写。','若以后实测按钮，需本人有对应表格流程配置权限和测试接收方授权。'],
    input:'练习日期固定为2026-10-09，Asia/Shanghai。下载的CSV有8条原创虚构日志 D01–D08。D01和D04当天可分享测试组且已完成；D02当天可分享但PPT只完成2/3页小样；D03当天可分享但教案受阻；D07当天可分享，内容是次日计划。D05是前一天，D06仅自己可见，D08是未来日期。有效输入应为 D01、D02、D03、D04、D07。',
    inputNotes:'推荐先手动筛选和复制五条到AI，生成草稿后人工回填审核表；不要求先接MCP或启用AI Agent。按钮推送是另一个待本人配置和测试的流程。日报ID、审核状态、发送状态与运行备注是课程设计的自定义字段，不代表飞书原生提供幂等去重或审批锁。',
    prompt:'只读取虚构CSV，先按“日期=2026-10-09 且 分享范围=可分享测试组”筛选，列纳入/排除编号和原因。输出日报草稿，不发送。\n已完成、进行中、受阻、下一步分开，每项带D编号与证据。PPT2/3页不能写成3页完成；本机播放通过不能写已发布；计划不能写成已完成；缺信息写待确认。另列人工审核卡：日期、范围、编号、数字、状态、证据、目标接收方、版本。\n再写一个按钮推送设计：使用“日报审核表”的按钮字段，引用该行已审核文本；按当前官方按钮触发文档核对类型和记录范围。审核人手动核查并标记已审核后，才由本人决定点击。先写发送身份和测试群条件、无有效记录时停止、状态未知时查流程日志和实际群消息。\n不要实际登录或发消息，不创建定时任务；不要声称发送状态字段能保证原子去重，也不要把AI判断当人工审核。',
    sampleOutput:'编辑编写的预期筛选：纳入 D01、D02、D03、D04、D07，共5条；排除D05（日期较早）、D06（仅自己可见）、D08（未来日期）。\n\n日报草稿 RPT-20261009-教学练习-01 / v1 / 未审核 / 未发送\n已完成：D01 学生词卡10张完稿，本机已打开，尚未课堂试用；D04 自录30秒示范片段，本机播放通过，未发布。\n进行中：D02 PPT目标3页，目前2页小样，剩1页及全屏检查待做。\n受阻：D03 教案等待课时确认，不能据此宣布教案完成。\n下一步：D07 计划次日复核例句；D02补剩余1页并检查；D03取得课时后继续。\n待确认：D03课时；实际接收群、发送身份和配置权限由本人核对。\n\n建议审核表字段：日报ID、日期、来源编号、草稿版本、审核后文本、审核人、审核状态、目标测试群、发送状态、发送证据、按钮。\n按钮设计：按钮字段关联本行记录→按类型/记录范围匹配的“点击按钮时”流程→引用已审核文本发送测试卡片→本人看实际送达与日志后回填。若自己的界面支持条件节点，核对已审核和未发送；界面缺项就保留手工发送前检查，不编造节点。\n这不是发送结果。自定义状态与ID帮助追查，无法单独保证多人同时点击只发送一次。',
    deliverables:['8条原始日志与5条纳入记录的筛选说明。','一份带编号、事实状态和未知项的日报草稿。','人工审核卡与日报审核表字段设计。','按钮触发、发送身份、测试与状态未知处理的设计卡；无真实发送。'],
    walkthrough:[
      '下载8条日志，先在本地阅读。给工作记录建编号、日期、分享范围、状态、事实、证据、下一步；在真实工作中由记录者填写，不让AI猜。',
      '在本地表格或自己的飞书练习副本中筛选固定日期和允许范围，两项必须同时满足。手算应为5条，分别核对排除的三个原因。',
      '只把五条有效记录交给AI，使用本页提示词先列编号，再生成未审核、未发送的草稿。零基础路线采用人工复制，不先配置外部连接。',
      '逐项回到原记录核对：完成依据是什么、进行中是否被升为完成、计划是否被写成结果、数字是否一致。特别检查D02的2/3页与D04的未发布。',
      '建立独立的日报审核表，一份日报一行。把自定义日报ID、来源编号、草稿版本和审核后文本填写清楚，保留原始日志。',
      '审核人实际读草稿、检查授权范围和接收方后，再手动标记已审核。未审核、无有效记录或接收方不明时停止，继续修改草稿。',
      '阅读官方按钮触发教程：当前先在流程选择按钮类型和可选范围，再在按钮字段/组件配置中关联流程。本案例选与审核表行数据关联的按钮字段。',
      '纸上设计一次按钮流程：引用该行的审核后文本，明确由谁发送、发送到哪个测试接收方。流程范围或条件节点能否表达已审核/未发送，需在自己的账号界面核对。',
      '阅读发送身份限制。若选多维表格应用机器人，核对配置者在接收群、企业内范围与机器人自动取得表格编辑权限等条件；不能随意沿用其他身份的权限。',
      '本案例在离线设计阶段止步于测试卡：未审核样例应停止，正常样例应只发送核准版本，零条样例应停止，状态未知样例应先查实际消息。未启用真实流程，不点真实发送。',
      '以后本人获授权实测时，只选测试群做一次，核对标题、来源编号、数字、身份和送达；再记发送证据。超时或状态未知先查日志与实际群，不立即连点重发。',
      '记录停用入口、问题和修订版。日期改变或日报内容修改需重新筛选与审核；多人并发、重复点击的可靠防重需要另外设计验证，不把一个状态字段说成已经解决。'
    ],
    milestones:[
      {name:'记录成表',action:'录入8条虚构日志并检查字段。',expected:'编号、日期、范围、状态与证据齐全。',verify:'对照下载CSV，检查无真实个人信息。',fix:'缺日期或范围先补确认，不能默认可分享。'},
      {name:'双条件筛选',action:'日期和分享范围同时满足。',expected:'准确纳入5条，排除3条。',verify:'逐编号核对D01/D02/D03/D04/D07。',fix:'记录数不同先查条件，别让AI猜少了什么。'},
      {name:'可追溯草稿',action:'分状态写日报并带编号。',expected:'完成2项、进行中1项、受阻1项、计划1项。',verify:'回原行复查2/3页、30秒、未发布和课时待确认。',fix:'夸大完成或数字错时改稿并重新审阅。'},
      {name:'人审版本',action:'人工检查并填写审核人、版本和接收方。',expected:'审核后文本与来源编号固定，审核状态由本人填写。',verify:'看原记录和审核卡，不让AI代签已审核。',fix:'任何内容改变都退回待审核并更新版本。'},
      {name:'按钮设计验收',action:'写触发类型、记录范围、身份、停止与未知状态处理。',expected:'能在纸上说明谁点击、哪行数据、发给谁、何时停止。',verify:'用未审核/正常/零条/未知四种情形走查设计。',fix:'界面与文档不同则保留手工检查；无法判断送达就先查证，不重发。'}
    ],
    workedExample:{before:'错误草稿：“今日已完成3页PPT，30秒教学视频已发布，教案已完成。”',after:'“D02：3页目标已做2页小样，仍需1页与全屏检查；D04：30秒自录片段本机播放通过，未发布；D03：课时待确认，教案受阻。”',why:'摘要容易把计划、局部成果和本机检查压缩成完成。记录编号和证据可以把每句结论退回到原行检查。'},
    rubric:[
      {criterion:'筛选与范围',pass:'恰有5条，排除旧日期、私有与未来记录。',fail:'包括D06，或只按日期筛选。'},
      {criterion:'状态与数字',pass:'2/3页、30秒、未发布、受阻和计划均准确。',fail:'把小样、计划或本机检查升为完成/发布。'},
      {criterion:'人工审核',pass:'审核人实际读稿，版本、编号与接收方清楚。',fail:'AI自行标记已审核，或修改稿仍沿用旧审批。'},
      {criterion:'按钮与身份',pass:'使用已核对的按钮类型/范围，身份限制与接收方明确。',fail:'写不存在的触发器、默认所有身份能发所有群。'},
      {criterion:'发送证据',pass:'未运行如实标记；将来实测后看实际消息与日志再回填。',fail:'用自定义ID或状态字段宣称原子去重已通过。'}
    ],
    acceptance:['有效记录准确为5条，各有编号。','日报状态、数字、证据与原行一致。','D05/D06/D08没有进入可分享草稿。','审核和接收方由本人核对，改稿重新审核。','按钮流程按当前文档设计，身份权限有明确前提。','本练习未真实发送，四种异常走查写明处理。','自定义ID与状态没有被宣称为原生幂等去重。'],
    sources:[S.lookup,S.button,S.send,S.actions],executionStatus:'NOT_RUN：本站只读官方帮助文档并制作虚构CSV、草稿和流程设计；未登录飞书、未创建表格或流程、未发送消息、未设置定时任务。按钮、权限、送达和并发防重需本人另行实测。',
    figure:'report-flow',downloads:['v6-tools-report-records.csv','v6-tools-report-review.md']
  }
];

const ref=(id,topic,type,title,url,language,author,whatToLearn,prerequisite,practiceAfter,topics,verificationNote)=>({id,topic,type,title,url,language,author,whatToLearn,prerequisite,practiceAfter,topics,checkedAt:'2026-10-09',verificationNote});
export const toolsWorkshopResources = [
  ref('tools-v6-ref-harness-office','skills','repo','Harness Office：结构检查通过以后，还要验什么',S.office.url,'中文','DeepSeek / deepseek-ai','学习三类Office技能的交付边界；区分结构、外观与公式结果检查。','先完成一个本地文件练习。','给H01任务单写结构、打开、编辑和内容四项检查，不把结构通过当全部通过。',['skills','ppt'],'已实际读取master的中文说明；当前分支不是固定发行版，未运行Harness或Office检查器。'),
  ref('tools-v6-ref-harness-web','skills','repo','Harness Web：工作区和默认文件位置',S.web.url,'中文','DeepSeek / deepseek-ai','理解启动目录、选中工作区和任务权限；与Desktop的内置环境分别核对。','已选择CLI/Web选修路线并自行准备账号环境。','先只读列出三个练习文件；报告工作区，再决定能否写标准文件。',['skills'],'已实际读取master指南；官方页面另有Desktop下载，Web文档不能用来否认桌面端。未启动Web。'),
  ref('tools-v6-ref-writing-skill','explore','repo','Vercel 写作检查 Skill：短文件里的外部依赖',S.writing.url,'英文','Vercel Labs','读name/description、1.0.0元数据、外部规则URL和输出约定，识别WebFetch宿主工具名。','能打开原仓库文件，理解Skill不是工具授权。','用T1–T4测试中文适用范围，记录缺工具和未核实事实。',['explore'],'已实际读取main的SKILL.md与目录API；本轮目录只有SKILL.md。未安装，Codex工具适配未运行。'),
  ref('tools-v6-ref-writing-handbook','explore','repo','Vercel 写作规则原文件：判断哪些规则适合中文',S.handbook.url,'英文','Vercel Labs','学习按读者任务检查结构与步骤，并辨认英语、Vercel技术文档特有约束。','先读引用它的writing-guidelines。','把一处不适用规则写进本地修订记录，换材料再查，不照搬全部英文规则。',['explore'],'已实际读取main的command.md；课程输入和补充规则为原创，未复制完整规则库或验证规则效果。'),
  ref('tools-v6-ref-skill-mcp','explore','guide','OpenAI：Skill 和 MCP 各负责什么',S.concepts.url,'英文','OpenAI','Skill编排流程，MCP提供数据和受控动作；理解插件可包装二者。','读过一个SKILL.md即可。','解释为什么写作Skill不自动拥有飞书数据读取和群消息权限。',['explore','automation'],'已打开并读取官方概念页；只核对概念，未连接任何MCP或插件。'),
  ref('tools-v6-ref-current-plugins','explore','repo','OpenAI 当前插件例子：先看 manifest，再看 skills',S.plugins.url,'英文','OpenAI','读插件包的manifest与可选文件结构；区分插件条目数和Skill数。','理解Skill、Plugin和连接器的区别。','打开一个现行插件例子，记录包里是否有skills与连接器，不把旧skills库当当前目录。',['explore'],'已读取main README，并实际读取openai/skills弃用声明；当前目录数据与未来版本可能变化。未安装插件。'),
  ref('tools-v6-ref-anygent-basic','anygent','guide','Anygent 工作台虚拟实操：Chat、File 和 Terminal',S.workbench.url,'中文','Whalent / Anygent.ai','先练习虚拟拖拽、加文件/终端和分栏，再核对真实项目的电脑与目录。','能登录自己的账号；虚拟演示与真实机器区分。','设计教案项目三面板，给每个面板写作用和指向。',['anygent'],'通过背景浏览器实际读取官方页面，标注更新2026-07-31；未进入登录后演示或创建工作台。'),
  ref('tools-v6-ref-anygent-layout','anygent','guide','Anygent 工作台布局：创建、拖入与自动保存',S.layout.url,'中文','Whalent / Anygent.ai','核对工作台管理页、对话/Workspace拖拽、自动保存和多工作台账户条件。','执行电脑与daemon在线，已有自己的workspace。','给一个教案项目建立布局核对卡，检查三面板属于同一目录。',['anygent'],'通过背景浏览器实际读取官方页面，标注更新2026-06-12；未建立布局或验证同步，付费能力以当前账号为准。'),
  ref('tools-v6-ref-feishu-button','automation','guide','飞书当前按钮触发：类型、范围和关联流程',S.button.url,'中文','飞书帮助中心','区分关联记录的按钮字段与不提供行数据的按钮组件，使用升级后的配置顺序。','会建日报审核表；以后实测需有流程配置权限。','纸上标出一行日报按钮如何引用该行已审核文本，不编造固定触发器。',['automation'],'通过背景浏览器实际读取，更新2026-02-26；未配置或点击真实按钮。'),
  ref('tools-v6-ref-feishu-lookup','automation','guide','飞书查找记录：所有条件、结果范围和无记录处理',S.lookup.url,'中文','飞书帮助中心','核对日期与范围同时满足、所有记录/首条/某列值的区别，以及无结果处理。','已用本地CSV手工完成五条记录筛选。','对照手算结果设计查找条件；排序标为内测时保留人工排序备选。',['automation'],'通过背景浏览器实际读取，更新2026-05-12；部分功能有内测标注，未运行查询流程。')
];
