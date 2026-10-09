// Official media verified on 2026-10-09. Keep original media URLs and source context.
// These are publisher examples, not screenshots of a learner's account or a site-run task.
const CHECKED = '2026-10-09';
const WB = 'https://www.workbuddy.cn/docs/workbuddy/';
const WBA = 'https://download.codebuddy.cn/web/docs/3754a028cd26c05d858852b7fbcedeb54159906e/docs/static/';
const WBT = WB + 'From-Beginner-to-Expert-Guide/Function-Description/Task-Bar';
const WBS = WB + 'From-Beginner-to-Expert-Guide/Function-Description/Skills-Market';
const KSK = 'https://www.kimi.ai/zh-hans/help/plugins-and-skills/use-skills-in-agent';
const KDS = 'https://www.kimi.ai/zh-hans/help/docs-and-sheets/docs-and-sheets-overview';
const KWORK = 'https://www.kimi.com/academy/kimi-work-getting-started';
const KI = 'https://statics.kimi.ai/kimi-helpcenter-doc/zh-SG/';
const KV = 'https://kimi-img.kimi.ai/pub/slides/kimi-fs/weaver/assets/';
const m = (kind, src, title, caption, sourceUrl, sourceLabel, scope) => ({kind, src, title, caption, sourceUrl, sourceLabel, scope, checkedAt: CHECKED});
const at = (media, steps) => ({...media, steps});

const kimiChat = m('image', KI + 'docs-and-sheets/images/overview/screenshot-1.f455eaabef53.png',
  'Kimi 网页：新对话、输入框与加号在哪里',
  '先看左侧 New Chat（新对话），再找输入框左下角的 +。官方图还标出了 Docs 文档入口；本课先完成普通对话即可。',
  KDS, 'Kimi 官方：文档与表格',
  '网页版官方英文示例，画面为 K2.5 时期界面；手机、国内账号和当前模型按钮以自己的界面为准。');
const kimiAttach = m('image', KI + 'plugins-and-skills/images/skills/%E5%8A%A0%E5%8F%B7-en.c87425c33b17.png',
  'Kimi 网页：加号菜单里的附件与技能',
  '图中 + 菜单的 Add files & photos 是附件入口；Skills 子菜单展示 docx、pdf、xlsx 等技能。上传材料与选择技能是两个动作。',
  KSK, 'Kimi 官方：在 Agent 模式中使用技能',
  '网页版 Agent 官方英文截图；此图没有展示文件上传完成，不作为 Kimi Work 本地目录授权图。');
const kimiDocx = m('image', KI + 'docs-and-sheets/images/overview/screenshot-2.f6c1ff02598a.png',
  'Kimi 网页：读取 Skill 与文档产物预览',
  '左侧执行记录出现 Read SKILL.md，右侧打开文档预览，右上有下载入口。用它理解“读到技能”和“交付文件”分别在哪里检查。',
  KDS, 'Kimi 官方：文档与表格',
  '网页版 Agent 的英文文档案例；预览不是对本课文件可编辑性的证明，仍需下载后用自己的文档软件检查。');
const kimiCreateSkill = m('image', KI + 'plugins-and-skills/images/skills/create-skill-en.32f38079ced7.png',
  'Kimi Agent：通过对话创建 Skill',
  '官方示例展示 /skill-creator 对话创建入口。把自己的适用场景、输入、检查步骤与输出要求写清，再检查生成的技能说明。',
  KSK, 'Kimi 官方：在 Agent 模式中使用技能',
  '网页版 Agent 官方英文示例，图中为 K2.6 Agent；本课选这条文字说明路线时使用，不替代 Work 的 Plugin Builder 仓库转换路线。');
const kimiManageSkill = m('image', KI + 'plugins-and-skills/images/skills/managing-skills.f794353b3906.png',
  'Kimi Agent：找到自定义技能的管理入口',
  '在技能面板找自定义条目与 ⋯ 菜单，图中展示 Try it、Edit、Download。修改自己的说明后，还要用两份材料重新测试。',
  KSK, 'Kimi 官方：在 Agent 模式中使用技能',
  '网页版 Agent 官方英文管理图；仅用于 Agent 自定义技能，其他宿主的目录、插件更新方法分别核对。');
const kimiLocal = m('video', KV + 'd4beab092550e9c5fcb2c6b4be63bca3.mp4',
  'Kimi Work 操作视频：关联本地文件并提交任务',
  '观看官方约 10 秒演示，重点看本地文件如何关联到任务、要求写在哪里。先在自己的练习目录操作，提交前确认材料范围。',
  KWORK, 'Kimi 官方学院：Work 入门指南',
  '官方桌面 Work 演示，文章更新于 2026-09-18；视频已在浏览器载入。演示不证明本课文档已生成，也不适用于手机上传流程。');
const kimiComputerInstall = m('video', KV + '462fa33dd89ab093a9afa97415c93ac3.mp4',
  'Kimi Work 操作视频：找到电脑操控插件',
  '看官方演示中的插件入口与“电脑操控”条目。随后在自己的设备阅读权限用途，并按当前官方引导完成设置。',
  KWORK, 'Kimi 官方学院：Work 入门指南',
  '桌面 Work 官方安装演示，2026-09-18 文章版本；它展示入口，不代表本站安装插件或完成系统授权。');
const kimiComputerUse = m('video', KV + '9517b2679102d3cc605d0217e01d3cba.mp4',
  'Kimi Work 操作视频：电脑操控过程',
  '观看官方功能走查，识别屏幕中的点击与任务推进。自己的首次练习仍选无账号信息的公开帮助页，并练习停止任务。',
  KWORK, 'Kimi 官方学院：Work 入门指南',
  '桌面 Work 官方功能走查，2026-09-18 文章版本；示例任务与本课不同，仅展示电脑操作能力和过程。');

const harnessModels = m('image', 'https://deepseek-harness.github.io/deepseek-harness/assets/providers-models-page.zh.CuMz0o8J.png',
  'Harness Web：设置→模型与 API Key 字段',
  '官方中文图展示 DeepSeek 卡片和保存入口。本课 CLI/Web 路线按此配置自己的密钥，先核对 API 余额与计费。',
  'https://deepseek-harness.github.io/deepseek-harness/guide/providers', 'DeepSeek Harness 官方：配置模型',
  '官方 Web UI 教程截图，当前技术预览版；不用于推断桌面账号首次引导，也没有替学员填写或验证密钥。');
const harnessPlugins = m('image', 'https://www.deepseek.com/harness/images/feat-plugins-en.webp',
  'Harness 官方界面图：插件管理与开关',
  '看 Plugins 管理页、Add plugin 和各项开关，理解能力入口在哪里。本图展示插件管理，没有展示办公 Skill 的调用或 PPT 导出。',
  'https://www.deepseek.com/en/harness/', 'DeepSeek 官方：Harness 产品演示',
  '官方发布页的英文功能界面图，public preview；插件不等于 Skill，此图不能作为工作区选择截图。');
const harnessTrace = m('image', 'https://www.deepseek.com/harness/images/feat-trace-en.webp',
  'Harness 官方界面图：查看工具调用与执行轨迹',
  '轨迹页展示调用时间线与具体工具记录。用它理解怎样核对“执行过什么”；文件能否打开、文字能否编辑仍由自己验收。',
  'https://www.deepseek.com/en/harness/', 'DeepSeek 官方：Harness 产品演示',
  '官方发布页的英文轨迹界面图，示例为开发检查任务；不是本课文档/PPT 任务的运行记录。');

const wbWorkspace = m('image', WBA + 'workspace-select.DvwU3Fid.png',
  'WorkBuddy：选择工作空间并打开本地文件夹',
  '输入框左下角“选择工作空间”菜单中可见“新建工作空间”和“打开本地文件夹”。选择自己准备的练习目录后再提交任务。',
  WBT, 'WorkBuddy 官方：新建任务栏',
  '国内桌面端官方中文截图，2026-10-09 公开文档；菜单可能随版本更新，未对学员设备操作。');
const wbMode = m('image', WBA + 'task-mode-menu.C-D1U6_A.png',
  'WorkBuddy：在工作模式菜单选择 Ask 或 Plan',
  '先用 Ask 看材料，再用 Plan 审阅执行计划。按自己当前菜单确认模式与执行入口，记录旧版 Craft 与当前 Agent 的名称差异。',
  WBT, 'WorkBuddy 官方：新建任务栏',
  '国内桌面端官方模式菜单图；图片是官方示例，不证明某个账号具备全部模式或模型。');
const wbSkill = m('image', WBA + 'skill-select.PLLHy_nP.png',
  'WorkBuddy：在任务输入框选择已安装技能',
  '打开技能列表，选与当前文件格式对应的已安装技能。提交前读技能说明、输入与输出要求，不以看见名称代替执行验证。',
  WBT, 'WorkBuddy 官方：新建任务栏',
  '国内桌面端官方中文截图；技能列表随安装内容变化，不保证学员列表中有同名条目。');
const wbUpload = m('image', WBA + 'drag-upload.ZJh9WiEf.png',
  'WorkBuddy：把材料拖入任务输入框',
  '官方图展示拖拽添加文件。只拖入练习副本，随后要求 WorkBuddy 先确认文件名与可读取范围，再生成交付物。',
  WBT, 'WorkBuddy 官方：新建任务栏',
  '国内桌面端官方文件输入截图；此图展示添加动作，不证明 AI 已读取完整内容。');
const wbFirstTask = m('video', 'https://download.codebuddy.cn/web/docs/71c8722a08165ddedf566c5f1711bb0ec8ea991b/docs/static/%E5%BC%80%E5%90%AF%E7%AC%AC%E4%B8%80%E4%B8%AA%E4%BB%BB%E5%8A%A15.1.1.CZYTcKfK.mp4',
  'WorkBuddy 官方操作视频：开启第一个任务',
  '约 40 秒官方演示涵盖登录、创建任务、输入要求、执行与查看结果。登录由本人完成，练习时重点复看任务输入和右侧结果区。',
  WB + 'FirstTask', 'WorkBuddy 官方：开启你的第一个任务',
  '国内 PC 端官方视频，文件名含 5.1.1；2026-10-09 页面仍引用此片，浏览器已载入。不同端和新版本以实际界面为准。');
const wbDocx = m('image', WBA + 'image.Cx25iyoW.png',
  'WorkBuddy：Word 文档任务的执行与产物',
  '官方案例展示 Word 文档生成效果。找到实际产物后在自己的 Word/WPS 打开，核对内容、分页和答案分离，再提出具体修改。',
  WB + 'From-Beginner-to-Expert-Guide/Practice-Cases/Practice-Two', 'WorkBuddy 官方：文档生成与编辑',
  '官方案例效果图，部分图窗标题为旧版 Agents；用于定位文件产物，不作为本课文件生成、打开或排版检查的结果。');
const wbPptx = m('image', WBA + 'image-2.BFuqtqo6.png',
  'WorkBuddy：在产物区打开 PPTX 预览',
  '左侧可见 PPTX 文件，右侧显示页数和幻灯片预览。官方图也提醒预览与原始文件可能有差异，下载后再用 PowerPoint/WPS 检查。',
  WB + 'From-Beginner-to-Expert-Guide/Practice-Cases/Practice-Two', 'WorkBuddy 官方：文档生成与编辑',
  '官方旧版 Agents 案例截图，展示 9 页汇报稿；不证明本课页数、内容或可编辑性达标。');
const wbDataInput = m('image', WBA + 'image-3.0L6YKmy5.png',
  'WorkBuddy：导入 Excel/CSV 并写分析要求',
  '官方数据分析案例展示文件输入。自己的练习同时交代去重、缺失和计算规则，让它先复述规则再输出 XLSX。',
  WB + 'From-Beginner-to-Expert-Guide/Practice-Cases/Practice-Three', 'WorkBuddy 官方：数据分析并可视化',
  '国内桌面端官方业务数据案例；图中数据与本课十行匿名学习数据不同，不用于证明计算结果。');
const wbDataChart = m('image', WBA + 'image-4.XNjLoI4M.png',
  'WorkBuddy：预览统计结果与图表',
  '看官方案例如何展示分析产物。自己的结果仍需在表格软件核对有效行、缺失值和公式重算，图表不能代替核算。',
  WB + 'From-Beginner-to-Expert-Guide/Practice-Cases/Practice-Three', 'WorkBuddy 官方：数据分析并可视化',
  '官方业务数据可视化结果图；仅说明结果展示方式，未运行本课清洗或公式测试。');
const wbAddSkill = m('image', WBA + 'skill-2.DIhokP9-.png',
  'WorkBuddy：添加技能的三种入口',
  '在添加技能菜单分别找上传技能、查找技能和创建技能。选择自己已经读过的练习包，或先用自然语言创建一个单一流程。',
  WBS, 'WorkBuddy 官方：技能',
  '国内桌面端官方中文图；安装路径与创建路径分别测试，不推断与其他宿主的技能兼容。');
const wbImportSkill = m('image', WBA + 'image-17-1.CL2d5GKX.png',
  'WorkBuddy：上传本地技能包',
  '官方图展示上传技能包窗口与“选择文件”。先看包内说明、脚本和资源，再仅在小练习目录导入并验证。',
  WBS, 'WorkBuddy 官方：技能',
  '国内桌面端官方导入截图；本站未上传或安装任何技能包，文件格式以当前窗口为准。');
const wbCreateSkill = m('image', WBA + 'skill-4.Ce9uwHkT.png',
  'WorkBuddy：描述需求创建自己的技能',
  '从创建技能入口写出何时触发、输入、步骤、输出位置和缺材料时的处理。创建完成后回到技能列表读说明并试三类输入。',
  WBS, 'WorkBuddy 官方：技能',
  '国内桌面端官方创建示例；生成结果和可能的脚本依赖仍需自己审阅，不代表本站创建了技能。');
const wbToggleSkill = m('image', WBA + 'skill-5.DXH8Vvpw.png',
  'WorkBuddy：启用与关闭一个技能',
  '在已安装技能卡片中找到开关。仅启用当前任务需要的条目，练习关闭后再做一个小任务确认它不再参与。',
  WBS, 'WorkBuddy 官方：技能',
  '国内桌面端官方启停截图；开关状态只是配置，是否按预期触发还要用任务检查。');

export const toolVisualsByLesson = {
  'first-task': [at(kimiChat, [1])],
  'files-check': [at(kimiAttach, [2])],
  'kimi-work': [at(kimiLocal, [2, 3]), at(kimiComputerInstall, [4]), at(kimiComputerUse, [4])],
  'first-skill': [at(kimiAttach, [1, 2]), at(kimiDocx, [3])],
  'own-skill': [at(kimiCreateSkill, [3]), at(kimiManageSkill, [4])],
  'harness-desktop': [at(harnessPlugins, [4]), at(harnessTrace, [5])],
  'harness-cli': [at(harnessModels, [3])],
  'workbuddy': [at(wbWorkspace, [2]), at(wbMode, [3]), at(wbSkill, [4]), at(wbFirstTask, [2, 3, 5])],
  'wb-feature-map': [at(wbWorkspace, [1]), at(wbMode, [2]), at(wbFirstTask, [3])],
  'wb-documents': [at(wbUpload, [1]), at(wbSkill, [2]), at(wbDocx, [3, 4]), at(wbPptx, [4])],
  'wb-sheets': [at(wbDataInput, [1, 2]), at(wbSkill, [3]), at(wbDataChart, [3, 4])],
  'wb-plugins': [at(wbAddSkill, [2]), at(wbImportSkill, [2]), at(wbCreateSkill, [3]), at(wbToggleSkill, [4])]
};
