import {dramaCoreResources} from './drama-core-v8.js';
import {generationResources} from './drama-generation-v8.js';
import {releaseResources} from './drama-release-v8.js';
import {officeWorkshopResources} from './workshops-office-v6.js';
import {videoWorkshopResources} from './workshops-video-v6.js';
import {toolsWorkshopResources} from './workshops-tools-v6.js';
import {projectReadingResources} from './project-reading-v6.js';
const baseLearningResources = [
  {
    "id": "ref-1",
    "topic": "english",
    "type": "guide",
    "title": "My AI teacher",
    "url": "https://www.teachingenglish.org.uk/teaching-resources/teaching-secondary/lesson-plans/pre-intermediate-a2/my-ai-teacher",
    "language": "英文",
    "whatToLearn": "借助真实教案，学习把 AI 设为语言伙伴或练习生成器，并让学生先作答、后核对。",
    "prerequisite": "教师理解 CEFR 等级；官方网页标为 A2，配套旧 PDF 写 A1+；AI 工具由学校按规定选用。",
    "practiceAfter": "以虚构成人角色完成 5 轮英语问答，再生成 3 道与点餐相关的练习。",
    "verified": "页面已读；配套 worksheet 与 lesson plan PDF 已读；本次未运行课堂。",
    "author": "Nik Peachey（原页与 PDF 署名）",
    "sourceKind": "British Council 官方教学资源",
    "topics": [
      "english"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "页面已读；配套 worksheet 与 lesson plan PDF 已读；本次未运行课堂。"
  },
  {
    "id": "ref-2",
    "topic": "english",
    "type": "guide",
    "title": "What is AI?",
    "url": "https://www.teachingenglish.org.uk/teaching-resources/teaching-secondary/lesson-plans/intermediate-b1/what-ai",
    "language": "英文",
    "whatToLearn": "查看一节围绕 AI 话题的英语课如何组织词汇、观看、讨论与反思；它适合学习教案结构。",
    "prerequisite": "官方目标为 13–17 岁、B1；presentation 下载是 PDF。",
    "practiceAfter": "用相同教学结构重做一份 20 分钟 AI 话题讨论活动，核对事实并区分已存在能力与预测。",
    "verified": "页面已读；未完整观看页面视频。",
    "author": "Nik Peachey（原页署名）",
    "sourceKind": "British Council 官方教学资源",
    "topics": [
      "english"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "页面已读；未完整观看页面视频。"
  },
  {
    "id": "ref-3",
    "topic": "english",
    "type": "guide",
    "title": "AI guidelines for teachers",
    "url": "https://www.teachingenglish.org.uk/professional-development/teachers/using-digital-technologies/ai-guidelines-teachers",
    "language": "英文",
    "whatToLearn": "用六项原则审查 AI 教材：人的判断、数据权利、公平、安全、透明和责任。",
    "prerequisite": "能阅读英文或使用页面翻译；准备一份 AI 教材草稿。",
    "practiceAfter": "给草稿做一次教师审阅：改正事实、移除个人信息、补上工具与提示词说明。",
    "verified": "页面已读（浏览器正文及下载入口）；未逐页阅读所有附录。",
    "author": "TeachingEnglish 编辑团队（原页说明）",
    "sourceKind": "British Council 官方指南",
    "topics": [
      "english"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "页面已读（浏览器正文及下载入口）；未逐页阅读所有附录。"
  },
  {
    "id": "ref-4",
    "topic": "english",
    "type": "guide",
    "title": "AI lesson plan generator",
    "url": "https://www.magicschool.ai/tools/lesson-plan",
    "language": "英文",
    "whatToLearn": "用年级、学科、目标、课时和差异化需求组织备课输入，然后审阅和调整输出。",
    "prerequisite": "了解本班教学目标；真正使用生成器需要产品账号，公开介绍页无需登录。",
    "practiceAfter": "写一份 40 分钟 A2 点餐课的完整输入简报，检查活动是否与目标、评价相对应。",
    "verified": "页面已读；未登录或运行生成器。",
    "author": "MagicSchool（产品官网）",
    "sourceKind": "产品官方工具说明",
    "topics": [
      "english"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "页面已读；未登录或运行生成器。"
  },
  {
    "id": "ref-5",
    "topic": "english",
    "type": "guide",
    "title": "Pathways: AI in language teaching",
    "url": "https://www.teachingenglish.org.uk/professional-development/teachers/professional-development-pathways/pathways-ai-language-teaching",
    "language": "英文",
    "whatToLearn": "从同一官方入口找到课堂活动、不同英语等级教案、指南与录播，按当前教学问题选择。",
    "prerequisite": "知道自己的学习目标；页面可直接阅读。",
    "practiceAfter": "挑选一份 A2 教案与一条教师录播，写出准备在课堂采用的一项活动。",
    "verified": "页面已读；两条嵌入录播的 YouTube 原页已单独打开。",
    "author": "TeachingEnglish 编辑团队（原页说明）",
    "sourceKind": "British Council 官方学习路径",
    "topics": [
      "english"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "页面已读；两条嵌入录播的 YouTube 原页已单独打开。"
  },
  {
    "id": "ref-6",
    "topic": "english",
    "type": "video",
    "title": "How can AI enhance personalised English learning?",
    "url": "https://www.youtube.com/watch?v=aWGXFrVXIcM",
    "language": "英文",
    "whatToLearn": "了解教师如何用生成式 AI 辅助备课、评价、分层阅读与语言练习。",
    "prerequisite": "适合教师进阶观看；国内网络能否打开 YouTube 取决于实际环境。",
    "practiceAfter": "选择一个分层阅读点子，给同一教学目标设计基础版与提高版任务。",
    "verified": "视频页已读、未完整观看；原页标题、官方频道和播放器可见；未验证完整播放。",
    "author": "British Council | TeachingEnglish（官方频道）；Joe Dale（官方说明中的主讲人）",
    "sourceKind": "官方频道原视频",
    "evidencePage": "https://www.teachingenglish.org.uk/professional-development/teachers/professional-development-pathways/pathways-ai-language-teaching",
    "topics": [
      "english"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "视频页已读、未完整观看；原页标题、官方频道和播放器可见；未验证完整播放。"
  },
  {
    "id": "ref-7",
    "topic": "english",
    "type": "video",
    "title": "3 amazing AI tools for language teachers",
    "url": "https://www.youtube.com/watch?v=nTfEPLSy9ZU",
    "language": "英文",
    "whatToLearn": "从三位教师的课堂分享理解 AI 活动如何嵌入已有教学，并在课后反思适用性。",
    "prerequisite": "能理解英文教师交流；可先看官方配套活动说明。",
    "practiceAfter": "记录一个课堂活动，将其改为适合本班的 10 分钟练习，并写明教师检查点。",
    "verified": "视频页已读、未完整观看；原页标题、官方频道、介绍和播放器可见；未验证完整播放。",
    "author": "British Council | TeachingEnglish（官方频道）；原视频介绍列出 Pilar Capaul、Iman Hassan Zain、Nurohman",
    "sourceKind": "官方频道原视频",
    "evidencePage": "https://www.teachingenglish.org.uk/professional-development/teachers/professional-development-pathways/pathways-ai-language-teaching",
    "topics": [
      "english"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "视频页已读、未完整观看；原页标题、官方频道、介绍和播放器可见；未验证完整播放。"
  },
  {
    "id": "ref-8",
    "topic": "ppt",
    "type": "repo",
    "title": "PPT Master — AI generates native PowerPoint from any document",
    "url": "https://github.com/hugohe3/ppt-master",
    "language": "英文，提供中文 README",
    "whatToLearn": "理解原项目如何把文档或主题变成原生可编辑 PPTX，并分清素材、工作目录和交付文件。",
    "prerequisite": "当前官方要求 Python 3.10+ 与已鉴权、可读写文件并执行命令的 Agent 工具；本次仅阅读。",
    "practiceAfter": "先阅读中文入门，再以 3 页测试稿确认自己能找到输出并编辑一个对象。",
    "verified": "原项目 README 页面已读；未克隆、安装或生成 PPT。",
    "author": "Hugo He / hugohe3（仓库明确署名）",
    "sourceKind": "原作者项目",
    "license": "MIT（已读 LICENSE）；不自动覆盖所有第三方素材",
    "topics": [
      "ppt"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "原项目 README 页面已读；未克隆、安装或生成 PPT。"
  },
  {
    "id": "ref-9",
    "topic": "ppt",
    "type": "guide",
    "title": "快速入门",
    "url": "https://github.com/hugohe3/ppt-master/blob/main/docs/zh/getting-started.md",
    "language": "中文",
    "whatToLearn": "按交素材、描述用途与受众、取回文件三步做第一份 deck；了解预览后局部修改的流程。",
    "prerequisite": "按原项目完成环境配置；先学会复制文件路径。",
    "practiceAfter": "交付一份 3 页 PPT，修改第二页标题后重新导出，并检查结果路径。",
    "verified": "页面已读；未执行文中的安装或生成步骤。",
    "author": "hugohe3/ppt-master 项目文档",
    "sourceKind": "原项目中文指南",
    "topics": [
      "ppt"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "页面已读；未执行文中的安装或生成步骤。"
  },
  {
    "id": "ref-10",
    "topic": "ppt",
    "type": "guide",
    "title": "Windows 安装指南",
    "url": "https://github.com/hugohe3/ppt-master/blob/main/docs/zh/windows-installation.md",
    "language": "中文",
    "whatToLearn": "检查 Python、项目目录、依赖和最小测试；遇到找不到 Python 或 pip 时知道核对哪些信息。",
    "prerequisite": "Windows 电脑；本页涉及安装，课堂实操前需自行具备环境与工具账号。",
    "practiceAfter": "记录 Python 版本，并按官方最小示例生成封面、内容、结尾三页测试稿。",
    "verified": "中文指南页面已读；英文对应页的完整步骤已读；本次未安装。",
    "author": "hugohe3/ppt-master 项目文档",
    "sourceKind": "原项目安装指南",
    "topics": [
      "ppt"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "中文指南页面已读；英文对应页的完整步骤已读；本次未安装。"
  },
  {
    "id": "ref-11",
    "topic": "ppt",
    "type": "guide",
    "title": "常见问题（FAQ）",
    "url": "https://github.com/hugohe3/ppt-master/blob/main/docs/zh/faq.md",
    "language": "中文",
    "whatToLearn": "区别可编辑形状与带数据源的原生图表/表格，理解模板使用、排版问题和不同软件的兼容边界。",
    "prerequisite": "已做过一份基础 PPT；知道自己使用 PowerPoint、WPS 或其他软件。",
    "practiceAfter": "在自己的导出文件里分别检查标题能否编辑、图表是否有“编辑数据”、动画是否按预期播放。",
    "verified": "页面已读；未在 PowerPoint、WPS 等软件进行兼容测试。",
    "author": "hugohe3/ppt-master 项目文档",
    "sourceKind": "原项目 FAQ",
    "topics": [
      "ppt"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "页面已读；未在 PowerPoint、WPS 等软件进行兼容测试。"
  },
  {
    "id": "ref-12",
    "topic": "ppt",
    "type": "guide",
    "title": "在 PowerPoint 中创建演示文稿",
    "url": "https://support.microsoft.com/zh-cn/powerpoint/training/create-a-presentation-in-powerpoint",
    "language": "中文",
    "whatToLearn": "先掌握新建、添加幻灯片、版式、文本与插图等基础动作，便于接手 AI 生成的文件。",
    "prerequisite": "可使用 PowerPoint 桌面版或网页版本。",
    "practiceAfter": "手工做封面、双栏内容、结束页，并更改一个文字对象与一个形状的样式。",
    "verified": "官方页面已读；未完整观看内嵌视频。",
    "author": "Microsoft Support",
    "sourceKind": "官方中文基础教程",
    "topics": [
      "ppt"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "官方页面已读；未完整观看内嵌视频。"
  },
  {
    "id": "ref-13",
    "topic": "ppt",
    "type": "guide",
    "title": "向幻灯片添加演讲者备注",
    "url": "https://support.microsoft.com/zh-cn/powerpoint/training/add-speaker-notes-to-your-slides",
    "language": "中文",
    "whatToLearn": "把授课讲稿放在备注里，理解幻灯片正文与演讲者视图之间的关系。",
    "prerequisite": "有一份 3 页以上演示文稿；不同平台界面需按页面相应标签操作。",
    "practiceAfter": "为每页补 2 句讲稿，用桌面版演讲者视图核对观众看到的内容。",
    "verified": "官方页面已读；未完整观看内嵌视频或测试投影。",
    "author": "Microsoft Support",
    "sourceKind": "官方中文教程",
    "topics": [
      "ppt"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "官方页面已读；未完整观看内嵌视频或测试投影。"
  },
  {
    "id": "ref-14",
    "topic": "ppt",
    "type": "repo",
    "title": "PPT Master Examples",
    "url": "https://github.com/hugohe3/ppt-master-examples",
    "language": "英文说明，多个中文实例",
    "whatToLearn": "查看真实已生成的 SVG、设计说明、讲稿和 PPTX；用官方在线案例观察同一风格如何贯穿整套内容。",
    "prerequisite": "浏览器即可看画廊；检查可编辑性需要另行打开 PPTX。",
    "practiceAfter": "在“中国早餐图鉴”实例中选 3 页，记录标题、主体、辅助信息的层级，再用于自己的课件。",
    "verified": "原仓库与在线画廊已读；“中国早餐图鉴”预览页已打开；未下载或编辑 PPTX。",
    "author": "Hugo He / hugohe3（原仓库与画廊署名）",
    "sourceKind": "原作者真实案例仓库",
    "galleryUrl": "https://hugohe3.github.io/ppt-master-examples/",
    "exampleUrl": "https://hugohe3.github.io/ppt-master-examples/viewer.html?project=ppt169_pixel_breakfast_atlas",
    "license": "仓库 MIT 已读；个别素材的第三方权利需另核对",
    "topics": [
      "ppt"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "原仓库与在线画廊已读；“中国早餐图鉴”预览页已打开；未下载或编辑 PPTX。"
  },
  {
    "id": "ref-15",
    "topic": "workbuddy",
    "type": "guide",
    "title": "WorkBuddy 简介",
    "url": "https://www.codebuddy.cn/docs/workbuddy/Overview",
    "language": "中文",
    "whatToLearn": "识别工具栏、侧边栏、对话区和结果区，理解 WorkBuddy 如何根据自然语言任务处理文件。",
    "prerequisite": "阅读无需账号；真正实践需要已安装和登录的 WorkBuddy。",
    "practiceAfter": "给一项任务标出输入、执行区域、产物位置，说明如何验收结果。",
    "verified": "官方页面已读；浏览器显示最后更新 2026-09-24；未登录产品。",
    "author": "腾讯 WorkBuddy 官方文档",
    "sourceKind": "官方中文入门",
    "topics": [
      "workbuddy"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "官方页面已读；浏览器显示最后更新 2026-09-24；未登录产品。"
  },
  {
    "id": "ref-16",
    "topic": "workbuddy",
    "type": "guide",
    "title": "创建任务",
    "url": "https://www.codebuddy.cn/docs/workbuddy/Create-Task",
    "language": "中文",
    "whatToLearn": "写清目标、输入、输出格式与约束；学习工作空间、拖入附件和引用上下文的作用。",
    "prerequisite": "已安装登录产品；练习前准备一个独立文件夹和公开或虚构材料。",
    "practiceAfter": "以 6 行虚构销售数据创建任务，指定生成统计表和图表的文件位置。",
    "verified": "官方页面已读；未实际创建产品任务。",
    "author": "腾讯 WorkBuddy 官方文档",
    "sourceKind": "官方任务指南",
    "topics": [
      "workbuddy"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "官方页面已读；未实际创建产品任务。"
  },
  {
    "id": "ref-17",
    "topic": "workbuddy",
    "type": "guide",
    "title": "开启你的第一个任务",
    "url": "https://www.codebuddy.cn/docs/workbuddy/FirstTask",
    "language": "中文",
    "whatToLearn": "按官方截图理解安装入口、登录、新建、描述需求、发送、查看产物的全过程；页内有官方视频。",
    "prerequisite": "实操需要适配系统的客户端与本人账号；本次只阅读公开页面。",
    "practiceAfter": "用一句明确需求完成一份本地文档，找到产物及工作空间文件，并核对内容。",
    "verified": "官方页面已读；两段官方视频元素与源地址已读；未完整观看或验证全程播放。",
    "author": "腾讯 WorkBuddy 官方文档",
    "sourceKind": "官方截图与视频教程",
    "videoSourceUrl": "https://download.codebuddy.cn/web/docs/71c8722a08165ddedf566c5f1711bb0ec8ea991b/docs/static/%E5%BC%80%E5%90%AF%E7%AC%AC%E4%B8%80%E4%B8%AA%E4%BB%BB%E5%8A%A15.1.1.CZYTcKfK.mp4",
    "topics": [
      "workbuddy"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "官方页面已读；两段官方视频元素与源地址已读；未完整观看或验证全程播放。"
  },
  {
    "id": "ref-18",
    "topic": "workbuddy",
    "type": "guide",
    "title": "结果查看",
    "url": "https://www.codebuddy.cn/docs/workbuddy/Results",
    "language": "中文",
    "whatToLearn": "用产物、工作空间文件、浏览器和变更视图验收任务，区分完成消息与真正的交付文件。",
    "prerequisite": "已有一个会生成文件的任务。",
    "practiceAfter": "检查文件能否打开、是否在正确目录、数字是否匹配原始数据，并在对话里提交一轮修正。",
    "verified": "官方页面已读；未生成或分享任何产物。",
    "author": "腾讯 WorkBuddy 官方文档",
    "sourceKind": "官方结果验收指南",
    "topics": [
      "workbuddy"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "官方页面已读；未生成或分享任何产物。"
  },
  {
    "id": "ref-19",
    "topic": "workbuddy",
    "type": "guide",
    "title": "实践二：文档生成与编辑",
    "url": "https://www.codebuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Practice-Cases/Practice-Two",
    "language": "中文",
    "whatToLearn": "按目标读者、结构、语气生成 Word 或根据素材制作 PPT，并通过指出差异继续修改。",
    "prerequisite": "已安装登录产品；准备自己的素材与页数要求。",
    "practiceAfter": "用虚构会议记录生成 5 页以内汇报稿，再补充下一步行动及责任角色。",
    "verified": "官方案例页面已读；未执行文档生成。",
    "author": "腾讯 WorkBuddy 官方文档",
    "sourceKind": "官方办公实战案例",
    "topics": [
      "workbuddy"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "官方案例页面已读；未执行文档生成。"
  },
  {
    "id": "ref-20",
    "topic": "workbuddy",
    "type": "guide",
    "title": "实践三：数据分析并可视化",
    "url": "https://www.codebuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Practice-Cases/Practice-Three",
    "language": "中文",
    "whatToLearn": "从 Excel/CSV 输入出发，指定指标、图表、统计维度和报告要求，逐轮核对结果。",
    "prerequisite": "准备一份结构清楚且可公开的表格；了解销售额、利润和汇总的含义。",
    "practiceAfter": "按月份和产品线汇总虚构销售数据，生成柱状图及结论并手算验证。",
    "verified": "官方案例页面已读；最后更新标为 2026-07-08；未实际运行数据分析。",
    "author": "腾讯 WorkBuddy 官方文档",
    "sourceKind": "官方办公实战案例",
    "topics": [
      "workbuddy"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "官方案例页面已读；最后更新标为 2026-07-08；未实际运行数据分析。"
  },
  {
    "id": "ref-21",
    "topic": "workbuddy",
    "type": "video",
    "title": "全网最全！35分钟全面掌握Workbuddy【附完整文档】",
    "url": "https://www.bilibili.com/video/BV1j1JP6oEHA/",
    "language": "中文",
    "whatToLearn": "观察作者连续展示高频办公场景时如何提出需求、补充材料与检查结果。",
    "prerequisite": "已看官方入门；按自己当前客户端核对视频中的界面，标题中的“最全”是作者原题。",
    "practiceAfter": "仅选择一个场景，用虚构资料复做，记录提示词、文件路径和验收结果。",
    "verified": "视频页已读、未完整观看；B站原页标题、UP 主、简介、35:55 选集时长与播放器可见；未验证完整播放。",
    "author": "老顽童周老师（B站原页 UP 主）",
    "sourceKind": "原作者中文实操视频；第三方教学",
    "rights": "原页标注未经作者授权，禁止转载",
    "topics": [
      "workbuddy"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "视频页已读、未完整观看；B站原页标题、UP 主、简介、35:55 选集时长与播放器可见；未验证完整播放。"
  },
  {
    "id": "ref-22",
    "topic": "basics",
    "type": "guide",
    "title": "Kimi 入门指南：消息、文件、模型与会话",
    "url": "https://www.kimi.ai/zh-hans/help/getting-started/agentic-chat",
    "language": "中文",
    "whatToLearn": "认识新会话、上传材料、模型选择和可编辑文件交付；先学会一次只做一项可检查的小任务。",
    "prerequisite": "能打开 Kimi；准备一段公开文字或自己写的练习材料。",
    "practiceAfter": "新建会话，上传一页材料，让 AI 提取 3 个要点，再逐条和原文核对。",
    "verified": true,
    "author": "Kimi 官方（Moonshot AI）",
    "checkedAt": "2026-10-09",
    "verificationNote": "已实际打开官方原页并读取正文；未执行产品内实操。",
    "topics": [
      "basics"
    ]
  },
  {
    "id": "ref-23",
    "topic": "basics",
    "type": "guide",
    "title": "提示词基础：把需求写成可验收任务",
    "url": "https://www.kimi.ai/zh-hans/help/getting-started/what-is-prompt",
    "language": "中文",
    "whatToLearn": "把背景、具体任务、格式、示例和限制写清楚；学习追问与核查事实。",
    "prerequisite": "不需要编程；有一个想完成的具体任务。",
    "practiceAfter": "把“帮我做总结”改成“给一年级学生写 300 字摘要，并标注 3 处原文依据”，比较两次结果。",
    "verified": true,
    "author": "Kimi 官方（Moonshot AI）",
    "checkedAt": "2026-10-09",
    "verificationNote": "已实际打开官方原页并读取正文；未执行产品内实操。",
    "topics": [
      "basics"
    ]
  },
  {
    "id": "ref-24",
    "topic": "basics",
    "type": "guide",
    "title": "Kimi Work 产品介绍",
    "url": "https://www.kimi.ai/zh-hans/help/kimi-work/overview",
    "language": "中文",
    "whatToLearn": "认识 Work / Chat、项目、本地文件、权限、技能、小组件和看板的入口。",
    "prerequisite": "已有 Kimi Work 或先只读官方截图；系统要求以本页当前说明为准。",
    "practiceAfter": "进入 Work 模式，在练习目录中让 AI 列出文件并说明用途，确认它看到的目录正确。",
    "verified": true,
    "author": "Kimi 官方（Moonshot AI）",
    "checkedAt": "2026-10-09",
    "verificationNote": "已实际打开官方原页并读取正文；未执行产品内实操。",
    "topics": [
      "basics"
    ]
  },
  {
    "id": "ref-25",
    "topic": "explore",
    "type": "guide",
    "title": "Kimi Work 官方图文：从任务到本地交付物",
    "url": "https://www.kimi.com/resources/kimi-work-introduction",
    "language": "中文",
    "whatToLearn": "通过官方界面图了解建项目、选工作目录、权限、文件交付，以及目标与定时任务。",
    "prerequisite": "准备一个只放练习材料的文件夹；能自行打开桌面客户端。",
    "practiceAfter": "用 2 份练习 PDF 生成一页讲义和待核查清单，打开实际文件检查内容。",
    "verified": true,
    "author": "Kimi 官方（Moonshot AI）",
    "checkedAt": "2026-10-09",
    "verificationNote": "已打开原文；页面标示更新于 2026-10-08。图文入口已核对，未下载截图或运行任务。",
    "topics": [
      "explore"
    ]
  },
  {
    "id": "ref-26",
    "topic": "basics",
    "type": "guide",
    "title": "Kimi Work 常见问题：本地权限与定时执行",
    "url": "https://www.kimi.ai/zh-hans/help/kimi-work/kimi-work-faq",
    "language": "中文",
    "whatToLearn": "理解本地文件授权、浏览器操作，以及桌面定时任务对电脑和应用在线状态的要求。",
    "prerequisite": "知道桌面客户端和网页入口是两种使用场景。",
    "practiceAfter": "用自己的话说明：电脑休眠时桌面定时任务为何不能照常执行，并为练习任务选择权限档位。",
    "verified": true,
    "author": "Kimi 官方（Moonshot AI）",
    "checkedAt": "2026-10-09",
    "verificationNote": "已实际打开官方原页并读取正文；未执行产品内实操。",
    "topics": [
      "basics"
    ]
  },
  {
    "id": "ref-27",
    "topic": "explore",
    "type": "guide",
    "title": "Kimi Work 目标模式（Goal）",
    "url": "https://www.kimi.ai/zh-hans/help/kimi-work/goal-mode",
    "language": "中文",
    "whatToLearn": "为需要多轮尝试的任务写终点和验收条件；学习过程中调整方向或中断。",
    "prerequisite": "已能完成一次普通任务；准备一个范围有限且能验证结果的目标。",
    "practiceAfter": "把“整理资料”改成“整理 3 篇文章，交付索引、摘要与来源链接，缺失信息单列”，再观察计划和成果。",
    "verified": true,
    "author": "Kimi 官方（Moonshot AI）",
    "checkedAt": "2026-10-09",
    "verificationNote": "已实际打开官方原页并读取正文；未执行产品内实操。",
    "topics": [
      "explore"
    ]
  },
  {
    "id": "ref-28",
    "topic": "explore",
    "type": "guide",
    "title": "Kimi Work 看板：保存与组织小组件",
    "url": "https://www.kimi.ai/zh-hans/help/kimi-work/dashboard",
    "language": "中文",
    "whatToLearn": "创建看板、放入小组件、调整位置和查看更新；了解删除影响。",
    "prerequisite": "已有 Kimi Work；先使用无账号连接的练习数据。",
    "practiceAfter": "创建课程学习看板，放入一个阅读清单和一个进度组件，确认下次打开仍可找到。",
    "verified": true,
    "author": "Kimi 官方（Moonshot AI）",
    "checkedAt": "2026-10-09",
    "verificationNote": "已实际打开官方原页并读取正文；未执行产品内实操。",
    "topics": [
      "explore"
    ]
  },
  {
    "id": "ref-29",
    "topic": "skills",
    "type": "guide",
    "title": "什么是技能？Kimi 官方概念与使用路径",
    "url": "https://www.kimi.ai/zh-hans/help/plugins-and-skills/what-are-skills",
    "language": "中文",
    "whatToLearn": "理解技能如何保存重复工作的方法、格式与参考材料；区分一次性提示和固定流程。",
    "prerequisite": "会完成一次普通对话任务。",
    "practiceAfter": "为“每周学习总结”写输入材料、输出栏目、缺失信息处理规则，判断是否值得做成技能。",
    "verified": true,
    "author": "Kimi 官方（Moonshot AI）",
    "checkedAt": "2026-10-09",
    "verificationNote": "已实际打开官方原页并读取正文；未执行产品内实操。",
    "topics": [
      "skills"
    ]
  },
  {
    "id": "ref-30",
    "topic": "skills",
    "type": "guide",
    "title": "在 Kimi Agent 模式中使用与创建技能",
    "url": "https://www.kimi.ai/zh-hans/help/plugins-and-skills/use-skills-in-agent",
    "language": "中文",
    "whatToLearn": "通过 / 或加号选择技能；从文档模板或 /skill-creator 对话生成自定义技能。",
    "prerequisite": "已有可使用技能的 Kimi 模式；准备自己拥有的模板，勿用敏感材料练习。",
    "practiceAfter": "用固定的 4 个栏目建立学习周报技能，再给两组不同材料，检查栏目一致、内容没有虚构。",
    "verified": true,
    "author": "Kimi 官方（Moonshot AI）",
    "checkedAt": "2026-10-09",
    "verificationNote": "已实际打开官方原页并读取正文；未执行产品内实操。",
    "topics": [
      "skills"
    ]
  },
  {
    "id": "ref-31",
    "topic": "basics",
    "type": "guide",
    "title": "OpenAI 官方 Quickstart：选择工作入口",
    "url": "https://learn.chatgpt.com/docs/quickstart",
    "language": "英文",
    "whatToLearn": "认识桌面、网页、Codex CLI 和 IDE 的入口；按目标选择聊天、交付工作或代码任务。",
    "prerequisite": "能阅读英文或使用页面翻译；有自己的 OpenAI 使用入口。",
    "practiceAfter": "在自己的练习项目中说明目标、材料与输出文件；先完成一个小交付物并打开检查。",
    "verified": true,
    "author": "OpenAI",
    "checkedAt": "2026-10-09",
    "verificationNote": "实际打开旧 Codex quickstart 链接并核对其重定向；已读取当前官方 Markdown。未登录或运行产品。",
    "topics": [
      "basics"
    ]
  },
  {
    "id": "ref-32",
    "topic": "skills",
    "type": "guide",
    "title": "OpenAI 官方 Build skills：调用、创建与放置位置",
    "url": "https://learn.chatgpt.com/docs/build-skills",
    "language": "英文",
    "whatToLearn": "认识 SKILL.md、name / description、显式调用与自动匹配、资源目录，以及本地与插件分发。",
    "prerequisite": "会使用 Codex；先理解文件夹与 Markdown，暂不需要脚本。",
    "practiceAfter": "在自己的练习环境中用 $skill-creator 描述一个只做课程摘要的技能；检查何时使用、输入和输出是否明确。",
    "verified": true,
    "author": "OpenAI",
    "checkedAt": "2026-10-09",
    "verificationNote": "实际打开旧 Codex build-skills 链接并核对其重定向；已读取当前官方 Markdown。未创建或安装技能。",
    "topics": [
      "skills"
    ]
  },
  {
    "id": "ref-33",
    "topic": "skills",
    "type": "guide",
    "title": "OpenAI 官方插件 Skill 编写与测试",
    "url": "https://developers.openai.com/plugins/build/skills",
    "language": "英文",
    "whatToLearn": "把工具调用顺序、缺失输入处理、输出要求写成可复用流程，并检查应该触发和不应该触发的请求。",
    "prerequisite": "理解 Skill；这是进阶阅读，入门无需 MCP 或 API 密钥。",
    "practiceAfter": "为自己的学习周报技能列 3 条应触发、2 条不应触发的测试请求，检查边界。",
    "verified": true,
    "author": "OpenAI",
    "checkedAt": "2026-10-09",
    "verificationNote": "已实际打开官方原页并读取正文；未执行产品内实操。",
    "topics": [
      "skills"
    ]
  },
  {
    "id": "ref-34",
    "topic": "explore",
    "type": "repo",
    "title": "DeepSeek Harness 官方仓库与中文 README",
    "url": "https://github.com/deepseek-ai/deepseek-harness",
    "language": "中文",
    "whatToLearn": "确认官方启动入口、开发者预览状态与文档；理解 Harness 为智能体提供执行环境和工具流程。",
    "prerequisite": "了解命令行的基本操作；运行前先阅读官方安全说明。",
    "practiceAfter": "阅读中文 README，指出启动命令、默认本地地址和后续 Web UI 指南，不执行陌生插件安装。",
    "verified": true,
    "author": "DeepSeek-AI",
    "checkedAt": "2026-10-09",
    "verificationNote": "已打开官方仓库并读取 README.zh.md 原文；未安装或启动。",
    "topics": [
      "explore"
    ]
  },
  {
    "id": "ref-35",
    "topic": "explore",
    "type": "guide",
    "title": "DeepSeek Harness 中文指南：使用 Web UI",
    "url": "https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/index.zh.md",
    "language": "中文",
    "whatToLearn": "按顺序配置模型、选择工作区、启动会话；输入框不可用时先检查工作区是否选中。",
    "prerequisite": "已在专用练习环境启动 DSH；有自己的有效模型凭据。",
    "practiceAfter": "选中练习目录，要求列出文件和任务计划，再只创建一个学习清单文件并人工验收。",
    "verified": true,
    "author": "DeepSeek-AI",
    "checkedAt": "2026-10-09",
    "verificationNote": "已打开 GitHub 中文原页并读取官方 raw Markdown；未运行任务。",
    "topics": [
      "explore"
    ]
  },
  {
    "id": "ref-36",
    "topic": "explore",
    "type": "guide",
    "title": "DeepSeek Harness 中文指南：配置模型与排错",
    "url": "https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/providers.zh.md",
    "language": "中文",
    "whatToLearn": "了解设置 → 模型、密钥、模型 ID 和提供商协议；学习 MISSING_CREDENTIAL / UNKNOWN_MODEL / 401 的检查方向。",
    "prerequisite": "已读 Web UI 入门；排错时只记录脱敏信息。",
    "practiceAfter": "看到配置错误时先分类为凭据、模型或协议问题，按文档修正一处再测试，不把密钥贴进聊天。",
    "verified": true,
    "author": "DeepSeek-AI",
    "checkedAt": "2026-10-09",
    "verificationNote": "已读取官方 raw Markdown 正文；GitHub 文件路径由该原文与官方指南确认。未调用模型。",
    "topics": [
      "explore"
    ]
  },
  {
    "id": "ref-37",
    "topic": "explore",
    "type": "guide",
    "title": "DeepSeek Harness 官方安全说明",
    "url": "https://github.com/deepseek-ai/deepseek-harness/blob/master/SAFETY.zh.md",
    "language": "中文",
    "whatToLearn": "理解开发者预览、可执行命令和访问文件的边界；课堂使用专用练习环境和必要权限。",
    "prerequisite": "准备试用 DSH 前阅读。",
    "practiceAfter": "写出本次演示允许读取的目录、允许创建的文件和不允许执行的动作，再检查任务范围。",
    "verified": true,
    "author": "DeepSeek-AI",
    "checkedAt": "2026-10-09",
    "verificationNote": "已读取官方 raw Markdown 正文；未运行、安装或修改配置。",
    "topics": [
      "explore"
    ]
  },
  {
    "id": "ref-38",
    "topic": "anygent",
    "type": "guide",
    "title": "Anygent.ai 官方文档首页",
    "url": "https://memory.whalent.com/guide/",
    "language": "中文",
    "whatToLearn": "认识 AI / CLI / IDE 接入、对话、文件、终端、知识库和协作的教程入口。",
    "prerequisite": "公开浏览无需登录；知道 Anygent 是第三方远程工作台。",
    "practiceAfter": "找到与你设备和任务相符的接入教程，先画出手机、执行电脑和项目目录的关系。",
    "verified": true,
    "author": "Whalent / Anygent.ai 官方",
    "checkedAt": "2026-10-09",
    "verificationNote": "web 抓取报错后用 curl 实际读取公开 HTML 的静态正文；未登录、兑换或安装。",
    "topics": [
      "anygent"
    ]
  },
  {
    "id": "ref-39",
    "topic": "anygent",
    "type": "guide",
    "title": "Anygent CLI 接入：设备上线的两步",
    "url": "https://memory.whalent.com/guide/onboarding-cli-agent/",
    "language": "中文",
    "whatToLearn": "理解安装连接程序与启动上线的顺序；启动指令需要学习者账号生成的 Token。",
    "prerequisite": "有自己的持续联网执行设备、项目和 Whalent 账号；演示前由本人确认授权范围。",
    "practiceAfter": "在自己的环境按页面选择系统，设备上线后只做列出练习目录的验证任务。",
    "verified": true,
    "author": "Whalent / Anygent.ai 官方",
    "checkedAt": "2026-10-09",
    "verificationNote": "已读取公开 HTML 静态教程；个性化命令需登录后生成，本次未取得或执行。",
    "topics": [
      "anygent"
    ]
  },
  {
    "id": "ref-40",
    "topic": "anygent",
    "type": "guide",
    "title": "Codex 手机版使用指南：手机继续电脑上的任务",
    "url": "https://memory.whalent.com/guide/codex-mobile/",
    "language": "中文",
    "whatToLearn": "连接电脑、建立 Codex 实例、在手机打开同一会话，并检查在线状态、审批和文件。",
    "prerequisite": "已接入执行设备；电脑和手机使用自己的同一个 Whalent 账号与有效 Codex 凭据。",
    "practiceAfter": "电脑先发只读任务，手机在同一会话追问，再回电脑核对两端消息与工作目录一致。",
    "verified": true,
    "author": "Whalent / Anygent.ai 官方",
    "checkedAt": "2026-10-09",
    "verificationNote": "已读取公开 HTML 正文，页面更新于 2026-09-27；未登录或接入设备。",
    "topics": [
      "anygent"
    ]
  },
  {
    "id": "ref-41",
    "topic": "anygent",
    "type": "guide",
    "title": "创建 CLI 实例：确认机器、工作区和来源类型",
    "url": "https://memory.whalent.com/guide/agent-create/",
    "language": "中文",
    "whatToLearn": "创建 Codex / Claude Code / OpenCode 实例前确认执行机器、目录、凭据和类型；启动后核对首条状态。",
    "prerequisite": "执行设备在线；有自己的有效凭据和练习目录。",
    "practiceAfter": "创建后先让 Agent 报告当前工作目录并列出文件，和实际目录核对。",
    "verified": true,
    "author": "Whalent / Anygent.ai 官方",
    "checkedAt": "2026-10-09",
    "verificationNote": "已读取公开 HTML 正文；需登录的实例管理组件未操作。",
    "topics": [
      "anygent"
    ]
  },
  {
    "id": "ref-42",
    "topic": "anygent",
    "type": "guide",
    "title": "浏览远端文件：文件树、预览与引用",
    "url": "https://memory.whalent.com/guide/file-browser-basic/",
    "language": "中文",
    "whatToLearn": "分清远端执行设备目录与手机本地目录；从文件树预览并给对话提供准确文件引用。",
    "prerequisite": "远端设备在线，已选中正确工作区。",
    "practiceAfter": "打开练习目录的一份 Markdown，选相关内容给会话，再检查回答引用的是该文件。",
    "verified": true,
    "author": "Whalent / Anygent.ai 官方",
    "checkedAt": "2026-10-09",
    "verificationNote": "已读取公开 HTML 正文；未访问任何个人远端文件。",
    "topics": [
      "anygent"
    ]
  },
  {
    "id": "ref-43",
    "topic": "anygent",
    "type": "guide",
    "title": "Anygent Skills 市场与安装范围",
    "url": "https://memory.whalent.com/guide/skills/",
    "language": "中文",
    "whatToLearn": "先选机器、平台与范围，再观察异步安装状态；不同 Agent 的生效方式不同。",
    "prerequisite": "已理解 Skill；使用自己的练习工作区和可信来源。",
    "practiceAfter": "先查看 Skill 详情和目标范围；若 Codex 安装后未出现，按文档重启 worker 或开新会话再检查。",
    "verified": true,
    "author": "Whalent / Anygent.ai 官方",
    "checkedAt": "2026-10-09",
    "verificationNote": "已读取公开 HTML 正文；页面标示更新于 2026-06-12，未安装或导入任何 Skill。",
    "topics": [
      "anygent"
    ]
  },
  {
    "id": "ref-44",
    "topic": "anygent",
    "type": "guide",
    "title": "Anygent 本地命令总览：计划、压缩与停止",
    "url": "https://memory.whalent.com/guide/chat-commands/",
    "language": "中文",
    "whatToLearn": "理解 /help、/plan、/agent、/compact、/model、/effort、/stop；命令支持取决于会话来源和后端能力。",
    "prerequisite": "已有可用的 CLI Agent 会话；不要把平台命令和普通消息混淆。",
    "practiceAfter": "先输入 /help 查看当前会话支持的命令，再进入计划模式，让 AI 只列步骤。",
    "verified": true,
    "author": "Whalent / Anygent.ai 官方",
    "checkedAt": "2026-10-09",
    "verificationNote": "已读取公开 HTML 正文；没有执行命令或发送消息。",
    "topics": [
      "anygent"
    ]
  },
  {
    "id": "ref-45",
    "topic": "anygent",
    "type": "guide",
    "title": "Anygent Token、登录会话和安全",
    "url": "https://memory.whalent.com/guide/token-management/",
    "language": "中文",
    "whatToLearn": "分清登录与 API Token；在合适位置保存凭据，避免公开分享，处理疑似泄露。",
    "prerequisite": "无需实际创建 Token 即可学习；操作时使用本人账号。",
    "practiceAfter": "为演示截图建立遮挡清单：Token、API 密钥、个人邮箱和私人路径，不把明文发布到课件。",
    "verified": true,
    "author": "Whalent / Anygent.ai 官方",
    "checkedAt": "2026-10-09",
    "verificationNote": "已读取公开 HTML 正文；未创建、复制、删除或兑换 Token。",
    "topics": [
      "anygent"
    ]
  },
  {
    "id": "ref-46",
    "topic": "explore",
    "type": "video",
    "title": "DeepSeek Harness 首发实测 + 入门教程，夯爆了！梁神我错了",
    "url": "https://www.youtube.com/watch?v=6u5wah0BpBE",
    "language": "中文",
    "whatToLearn": "跟随原作者了解启动、运行模式、项目练习和插件的演示路线；具体命令回查当日官方指南。",
    "prerequisite": "中文视频；准备独立练习目录，先阅读官方安全说明。",
    "practiceAfter": "观看后只复做一个最小文件任务，记录输入、输出文件和实际检查结果。",
    "verified": true,
    "author": "程序员鱼皮",
    "checkedAt": "2026-10-09",
    "verificationNote": "已读取真实 YouTube watch 原页的 og:title、描述、ownerChannelName 与 videoId；未完整播放核验。",
    "topics": [
      "explore"
    ]
  },
  {
    "id": "ref-47",
    "topic": "explore",
    "type": "video",
    "title": "DeepSeek Harness 保姆级教程｜从零跑通 Web UI 和第一个 Agent 任务",
    "url": "https://www.youtube.com/watch?v=mpelxra1aL4",
    "language": "中文",
    "whatToLearn": "视频描述给出 Node.js、启动 Web UI、API、工作区、审批和第一份文件的短教程路线。",
    "prerequisite": "中文视频；具备自己的练习环境和 API 凭据。",
    "practiceAfter": "用官方指南检查视频中的启动命令，并为第一份产物写出人工验收标准。",
    "verified": true,
    "author": "影子也有秘密",
    "checkedAt": "2026-10-09",
    "verificationNote": "已读取真实 YouTube watch 原页的 og:title、描述、ownerChannelName 与 videoId；未完整播放核验。",
    "topics": [
      "explore"
    ]
  },
  {
    "id": "ref-48",
    "topic": "basics",
    "type": "video",
    "title": "Introducing the Codex app",
    "url": "https://www.youtube.com/watch?v=HFM3se4lNiw",
    "language": "英文",
    "whatToLearn": "通过官方演示认识 Agent 工作台和并行任务界面；以当前 Quickstart 核对实际入口。",
    "prerequisite": "英文视频；无需先安装即可看演示。",
    "practiceAfter": "看完后用一项小任务区分目标、上下文、执行过程与交付物，并在自己的入口试做。",
    "verified": true,
    "author": "OpenAI",
    "checkedAt": "2026-10-09",
    "verificationNote": "官方学习页直接链接此视频；已读取真实 watch 原页标题、描述、OpenAI 频道名与 videoId。未完整播放；界面以当前文档为准。",
    "topics": [
      "basics"
    ]
  },
  {
    "id": "ref-49",
    "topic": "explore",
    "type": "video",
    "title": "OpenAI Codex in your code editor",
    "url": "https://www.youtube.com/watch?v=sd21Igx4HtA",
    "language": "英文",
    "whatToLearn": "看官方作者如何在代码编辑器中使用 Codex 扩展；理解把代码上下文带进任务。",
    "prerequisite": "英文视频；适合已认识项目文件的学习者。",
    "practiceAfter": "在已有练习项目中让 AI 解释一个文件和测试入口，再检查回答是否对应真实代码。",
    "verified": true,
    "author": "OpenAI",
    "checkedAt": "2026-10-09",
    "verificationNote": "官方学习页直接链接此视频；已读取真实 watch 原页标题、描述、OpenAI 频道名与 videoId。未完整播放；当前功能以文档为准。",
    "topics": [
      "explore"
    ]
  },
  {
    "id": "ref-50",
    "topic": "explore",
    "type": "video",
    "title": "Codex for (almost) everything",
    "url": "https://www.youtube.com/watch?v=Lm7-yFZ5fZQ",
    "language": "英文",
    "whatToLearn": "通过 OpenAI 官方演示了解跨应用、连接工具、图像与持续工作的扩展场景。",
    "prerequisite": "英文视频；先完成普通对话和一次文件交付，再看扩展场景。",
    "practiceAfter": "选一个自己确实需要的场景，写出输入材料、完成文件和检查方法，避免一次打开全部扩展。",
    "verified": true,
    "author": "OpenAI",
    "checkedAt": "2026-10-09",
    "verificationNote": "官方学习页直接链接此视频；已读取真实 watch 原页标题、描述、OpenAI 频道名与 videoId。未完整播放；未验证个人账号可用功能。",
    "topics": [
      "explore"
    ]
  },
  {
    "id": "ref-51",
    "topic": "video",
    "type": "guide",
    "title": "即梦AI - 即刻造梦",
    "url": "https://jimeng.jianying.com/",
    "language": "中文",
    "author": "即梦AI / 深圳市脸萌科技有限公司",
    "whatToLearn": "认识文生图、图生视频、首尾帧和智能画布的区别；先准备静帧再设计运动。",
    "prerequisite": "会打开网页、保存自己的素材；阅读产品介绍不需要登录。实际生成需账号与当前可用额度。",
    "practiceAfter": "为原创布偶小熊写1张角色卡、3个静帧提示词和3个单动作运动提示词。",
    "verified": {
      "date": "2026-10-09",
      "status": "opened",
      "method": "web.open + IAB原页",
      "scope": "官网正文、入口、主体编辑和首尾帧能力",
      "limitation": "产品介绍页不等于完整教程；本次未登录、未生成，额度和按钮以实际界面为准。"
    },
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "产品介绍页不等于完整教程；本次未登录、未生成，额度和按钮以实际界面为准。"
  },
  {
    "id": "ref-52",
    "topic": "video",
    "type": "guide",
    "title": "可灵 AI 使用指南 - 视频生成",
    "url": "https://docs.qingque.cn/d/home/eZQDKi7uTmtUr3iXnALzw6vxp?identityId=2BhQQvUEloC",
    "language": "中文",
    "author": "可灵团队（正文以团队口吻提供指南及 kling@kuaishou.com 联系方式）",
    "whatToLearn": "把提示词拆成主体、运动、场景以及可选的镜头/光影/氛围；一个短镜头只承载少量动作。",
    "prerequisite": "会写一句清楚的场景描述；理解图片和视频文件的区别。",
    "practiceAfter": "同一只原创小熊分别写固定镜头和缓慢推近两个提示词，逐项检查主体、动作、环境是否清楚。",
    "verified": {
      "date": "2026-10-09",
      "status": "opened",
      "method": "web.open",
      "scope": "已读公开正文中的基础功能和提示词公式",
      "limitation": "公开抓取只读到指南前半部分，不能据此确认全部章节；其中5/10秒等属于该指南版本，当前模型设置另查。"
    },
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "公开抓取只读到指南前半部分，不能据此确认全部章节；其中5/10秒等属于该指南版本，当前模型设置另查。"
  },
  {
    "id": "ref-53",
    "topic": "video",
    "type": "guide",
    "title": "Kling VIDEO 3.0 Omni Model User Guide",
    "url": "https://kling.ai/quickstart/klingai-video-3-omni-model-user-guide",
    "language": "英文（可使用浏览器翻译）",
    "author": "Kling AI",
    "whatToLearn": "参考图/主体资产、多镜头描述、声音绑定和镜头间一致性的思路；区分能力介绍与实际成片质量。",
    "prerequisite": "先做过1个图生视频；会准备自己拥有使用权的角色参考图。",
    "practiceAfter": "用同一角色参考图写3个镜头，并检查每镜的外观、服装、位置和声音是否一致。",
    "verified": {
      "date": "2026-10-09",
      "status": "opened",
      "method": "web.open",
      "scope": "页面署名Kling AI、2026-02-06日期、参考和分镜章节",
      "limitation": "这是模型指南；文中的一致性宣传不作为100%保证，本次未运行生成。"
    },
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "这是模型指南；文中的一致性宣传不作为100%保证，本次未运行生成。"
  },
  {
    "id": "ref-54",
    "topic": "video",
    "type": "guide",
    "title": "可灵 O1 - 视频 O1 使用指南",
    "url": "https://docs.qingque.cn/d/home/eZQCg5xHvxDaE-jP2GcnaNc6O?identityId=2E1MlYrrPk4",
    "language": "中文",
    "author": "可灵 O1 使用指南（页面无个人作者署名）",
    "whatToLearn": "认识图片、视频、主体参考的不同作用；用多视角素材表达角色，理解参考生视频和编辑指令。",
    "prerequisite": "知道角色卡是什么；参考图由自己拍摄/生成，或已获明确授权。",
    "practiceAfter": "给小熊角色制作正面、侧面两个参考视图，列出3个必须保持的特征，再写一个景别变化镜头。",
    "verified": {
      "date": "2026-10-09",
      "status": "opened",
      "method": "web.open",
      "scope": "公开正文、O1创作入口、全能参考章节",
      "limitation": "指南是O1版本，不能当作当前3.0界面的按钮说明；公开抓取正文不完整。"
    },
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "指南是O1版本，不能当作当前3.0界面的按钮说明；公开抓取正文不完整。"
  },
  {
    "id": "ref-55",
    "topic": "video",
    "type": "guide",
    "title": "剪映官网-剪映AI 创作无限新可能",
    "url": "https://www.jianying.com/",
    "language": "中文",
    "author": "剪映 / 深圳市脸萌科技有限公司",
    "whatToLearn": "认识文本朗读、关键帧、音频剪辑、主画面与字幕等工具职责；从官网进入创作课堂。",
    "prerequisite": "会区分视频、图片、音频；实际编辑需自己的剪映环境。",
    "practiceAfter": "建立一个20秒项目，导入4张自摄图片，设置竖屏比例，按叙事顺序排列，再给一张静图加轻微缩放。",
    "verified": {
      "date": "2026-10-09",
      "status": "opened",
      "method": "web.open",
      "scope": "官网正文、文本朗读和关键帧功能、创作课堂链接",
      "limitation": "官网功能介绍不是逐按钮实操课程；本次没有安装或操作剪映。"
    },
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "官网功能介绍不是逐按钮实操课程；本次没有安装或操作剪映。"
  },
  {
    "id": "ref-56",
    "topic": "video",
    "type": "guide",
    "title": "How do I recognise subtitles?",
    "url": "https://www.capcut.com/help/how-to-recognise-subtitles",
    "language": "英文（可使用浏览器翻译）",
    "author": "CapCut",
    "whatToLearn": "导入素材、选择音频来源与语言、识别字幕，再人工纠正文案、时间和样式。",
    "prerequisite": "已有一段自己的语音或视频；能在时间线上找到字幕轨。",
    "practiceAfter": "给20秒桌面整理旁白生成字幕；逐字校对，并把一行过长的字幕拆成两段。",
    "verified": {
      "date": "2026-10-09",
      "status": "opened",
      "method": "web.open",
      "scope": "官方帮助页中的Web/Desktop/Mobile步骤",
      "limitation": "CapCut是国际产品；它的界面路径与国内剪映可能不同，不能照抄为国内版按钮路径。"
    },
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "CapCut是国际产品；它的界面路径与国内剪映可能不同，不能照抄为国内版按钮路径。"
  },
  {
    "id": "ref-57",
    "topic": "video",
    "type": "guide",
    "title": "Transform Text into Audio & Audio into Text with AI (Free Guide)",
    "url": "https://www.capcut.com/resource/ai-text-audio-converter",
    "language": "英文（可使用浏览器翻译）",
    "author": "CapCut",
    "whatToLearn": "用短句和标点组织配音文本；选择声音后试听；理解文本转语音与语音转字幕是两个步骤。",
    "prerequisite": "已有原创短脚本；会播放音频、移动音频轨。",
    "practiceAfter": "用同一段旁白比较两个通用音色，记录哪一句有重音或停顿问题，修正文案后再配字幕。",
    "verified": {
      "date": "2026-10-09",
      "status": "opened",
      "method": "web.open",
      "scope": "官方文章的配音、字幕和复核步骤",
      "limitation": "页面含营销表述；免费、音色、导出能力须以账号/地区/版本实际显示为准，不建议据此保证零费用。"
    },
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "页面含营销表述；免费、音色、导出能力须以账号/地区/版本实际显示为准，不建议据此保证零费用。"
  },
  {
    "id": "ref-58",
    "topic": "video",
    "type": "video",
    "title": "爽🔥 用即梦AI保持人物一致性简直完美！",
    "url": "https://www.bilibili.com/video/BV11WgGzDErq/",
    "language": "中文",
    "author": "设计师学Ai",
    "whatToLearn": "从简介可确认作者介绍固定人设提示词、参考图，以及两者结合的角色一致性方法；把不变特征与可变动作分开。",
    "prerequisite": "会生成或准备1张原创角色图；无需先学编程。",
    "practiceAfter": "固定3个外观特征，生成同角色3个景别；把衣服、耳部特征、颜色列成核对表。",
    "verified": {
      "date": "2026-10-09",
      "status": "opened",
      "method": "IAB实际打开B站播放原页",
      "scope": "标题、UP主、简介、播放器04:10、AI声明和禁止转载提示",
      "limitation": "web.open抓取报错；IAB原页成功。本次仅核验元数据和简介，没有完整观看，标题中的效果保证不采信。"
    },
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "web.open抓取报错；IAB原页成功。本次仅核验元数据和简介，没有完整观看，标题中的效果保证不采信。"
  },
  {
    "id": "ref-59",
    "topic": "video",
    "type": "video",
    "title": "【可灵AI完整教学】超详细AI视频生成教程｜打造电影感AI动态影像",
    "url": "https://www.bilibili.com/video/BV1Qg7ZzkEkF/",
    "language": "中文",
    "author": "崔老师课堂",
    "whatToLearn": "按原页20个分集定位图生视频、多图参考、视频延长、运镜、首尾帧和对口型；可先看第11、12、15、16集。",
    "prerequisite": "了解可灵基本入口；有1张自己的静帧。",
    "practiceAfter": "用同一图片分别写固定镜头与缓慢推近；预览后比较主体是否变形、运镜是否符合预期。",
    "verified": {
      "date": "2026-10-09",
      "status": "opened",
      "method": "IAB实际打开B站播放原页",
      "scope": "标题、UP主、个人经验说明、20个分集标题及各集时长",
      "limitation": "本次没有完整观看。2025年课程界面可能较旧；页面允许素材用于练习不等于允许商业转载，本次未下载素材。"
    },
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "本次没有完整观看。2025年课程界面可能较旧；页面允许素材用于练习不等于允许商业转载，本次未下载素材。"
  },
  {
    "id": "ref-60",
    "topic": "video",
    "type": "video",
    "title": "【剪映入门 03】剪映字幕一键生成！改字体 + 调颜色 + 挪位置全教程",
    "url": "https://www.bilibili.com/video/BV1wDfDBtE7n/",
    "language": "中文",
    "author": "歪歪_工作室版",
    "whatToLearn": "从简介可确认覆盖自动识别语音、字体、颜色、位置调整；适合先完成一条短字幕练习。",
    "prerequisite": "有自己的语音与一个剪映项目。",
    "practiceAfter": "给20秒旁白生成字幕，把字幕移动到不挡主体的位置，逐字修正并在手机上检查可读性。",
    "verified": {
      "date": "2026-10-09",
      "status": "opened",
      "method": "IAB实际打开B站播放原页",
      "scope": "标题、UP主、简介、合集内00:39时长和原创标签",
      "limitation": "仅核验原页简介与元数据，没有完整观看；不同版本入口可能变化。"
    },
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "仅核验原页简介与元数据，没有完整观看；不同版本入口可能变化。"
  },
  {
    "id": "ref-61",
    "topic": "video",
    "type": "repo",
    "title": "remotion-dev/template-helloworld",
    "url": "https://github.com/remotion-dev/template-helloworld",
    "language": "英文文档 / TypeScript源码",
    "author": "remotion-dev",
    "whatToLearn": "阅读官方Hello World视频模板，理解Composition、fps、宽高、durationInFrames，以及titleText等参数；从剪辑时间线过渡到代码时间线。",
    "prerequisite": "选修进阶：先懂基本文件结构与JavaScript/React；运行需要符合官方要求的Node/Bun环境。",
    "practiceAfter": "先只把默认标题改成中文，再做12秒四张文字卡；检查总帧数360、30fps和竖屏1080×1920。",
    "verified": {
      "date": "2026-10-09",
      "status": "opened",
      "method": "web.open + IAB源码页",
      "scope": "README、src目录、Root.tsx参数、HelloWorld.tsx；目录显示提交04da7cc（2026-09-30）",
      "limitation": "只读研究，未克隆、未安装、未运行或渲染。源码公开并适用Remotion专用许可，不能标为MIT或无限制商用。"
    },
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "只读研究，未克隆、未安装、未运行或渲染。源码公开并适用Remotion专用许可，不能标为MIT或无限制商用。"
  },
  {
    "id": "ref-62",
    "topic": "video",
    "type": "guide",
    "title": "Hello World | Remotion Template",
    "url": "https://www.remotion.dev/templates/hello-world",
    "language": "英文",
    "author": "Remotion",
    "whatToLearn": "从官方模板页区分源代码、Studio预览和在线尝试入口；模板不是已经替你制作好的AI成片。",
    "prerequisite": "选修；先能阅读最基础的代码说明。",
    "practiceAfter": "只读比较模板预览与Root.tsx的标题/尺寸/时长设置，列出要改的3个参数。",
    "verified": {
      "date": "2026-10-09",
      "status": "opened",
      "method": "web.open",
      "scope": "官方模板页、View source、Preview入口、TypeScript说明",
      "limitation": "只打开模板页，未执行创建命令或在线代码。"
    },
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "只打开模板页，未执行创建命令或在线代码。"
  },
  {
    "id": "ref-63",
    "topic": "video",
    "type": "guide",
    "title": "关于AI生成内容有序标识的公告",
    "url": "https://www.bilibili.com/opus/1106496554576904197",
    "language": "中文",
    "author": "哔哩哔哩治理小分队",
    "whatToLearn": "了解B站投稿创作声明中的AI标识选项，并保留已有内容标识。",
    "prerequisite": "准备好自己的成片与素材来源记录；阅读不需要投稿。",
    "practiceAfter": "在发布前核对表写上：创作声明选择“该视频使用人工智能合成技术”；同时检查画面、音乐、声音的来源。",
    "verified": {
      "date": "2026-10-09",
      "status": "opened",
      "method": "web.open",
      "scope": "官方账号名、2025-08-29日期、AI标识正文及投稿路径",
      "limitation": "没有实际投稿；发布按钮和路径以当前客户端为准。"
    },
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "没有实际投稿；发布按钮和路径以当前客户端为准。"
  },
  {
    "id": "ref-64",
    "topic": "video",
    "type": "guide",
    "title": "抖音关于开展“治理AI技术滥用”专项的公告（一）",
    "url": "https://trust.douyin.com/article/15868",
    "language": "中文",
    "author": "抖音安全与信任中心",
    "whatToLearn": "了解作者主动声明AI内容的入口示例，避免AI拟造事实、冒用真人形象和删除标识。",
    "prerequisite": "能分辨真实拍摄、AI生成、AI配音和混合制作。",
    "practiceAfter": "写一份发布说明草稿，标明哪些画面/声音由AI生成；查当前发布界面的AI声明选项并准备截图记录。",
    "verified": {
      "date": "2026-10-09",
      "status": "opened",
      "method": "web.open尝试 + IAB实际打开原页",
      "scope": "2025-06-13日期、官方正文、主动声明路径",
      "limitation": "web文本抓取空白，IAB成功读取。公告里的界面路径是当时示例；本次未登录/发布，不保证当前菜单名称完全相同。"
    },
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "web文本抓取空白，IAB成功读取。公告里的界面路径是当时示例；本次未登录/发布，不保证当前菜单名称完全相同。"
  },
  {
    "id": "ref-65",
    "topic": "video",
    "type": "guide",
    "title": "关于印发《人工智能生成合成内容标识办法》的通知",
    "url": "https://www.cac.gov.cn/2025-03/14/c_1743654684782215.htm",
    "language": "中文",
    "author": "国家互联网信息办公室、工业和信息化部、公安部、国家广播电视总局",
    "whatToLearn": "了解显式/隐式标识的区别，重点读用户主动声明和不得恶意删除、篡改、隐匿标识的要求。",
    "prerequisite": "知道准备发布的内容是否使用生成式AI。",
    "practiceAfter": "在成片验收中增加“AI声明、已有标识保留、素材来源记录”三项，并按实际平台执行。",
    "verified": {
      "date": "2026-10-09",
      "status": "opened",
      "method": "web.open",
      "scope": "官方通知全文；第十条与2025-09-01施行日期",
      "limitation": "这是一般规则原文，本资料不替代平台当前的具体发布界面说明。"
    },
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "这是一般规则原文，本资料不替代平台当前的具体发布界面说明。"
  }
];

baseLearningResources.push(...[
  {
    "id": "ref-feishu-workflow",
    "topic": "automation",
    "topics": [
      "automation"
    ],
    "type": "guide",
    "title": "飞书多维表格：工作流入门",
    "url": "https://www.feishu.cn/hc/zh-CN/articles/170735237222",
    "language": "中文",
    "author": "飞书官方帮助",
    "whatToLearn": "理解触发、查记录、条件、写回与发送，把草稿审核与对外发送分开。",
    "prerequisite": "使用自己的练习表，核对组织权限、运行次数和AI额度。",
    "practiceAfter": "先用按钮生成虚构日志日报，检查当日记录和审核状态。",
    "verificationNote": "此前已读取官方原文；当前链接可重定向到中文标题页。未配置账号流程。",
    "checkedAt": "2026-10-09"
  },
  {
    "id": "ref-feishu-agent",
    "topic": "automation",
    "topics": [
      "automation"
    ],
    "type": "guide",
    "title": "飞书工作流 AI Agent 节点",
    "url": "https://www.feishu.cn/hc/zh-CN/articles/643175485940",
    "language": "中文",
    "author": "飞书官方帮助",
    "whatToLearn": "了解模型、工具与输出节点，核对每个工具的数据范围与执行身份。",
    "prerequisite": "先完成一份人工审核的日报草稿；不要一次接入全部工具。",
    "practiceAfter": "为日报设计最小节点图，写清停止条件和未授权动作。",
    "verificationNote": "此前已读取官方原文；未运行AI节点或真实群推送。",
    "checkedAt": "2026-10-09"
  },
  {
    "id": "ref-finance-reports",
    "topic": "automation",
    "topics": [
      "automation"
    ],
    "type": "guide",
    "title": "上交所：读懂上市公司定期报告",
    "url": "https://edu.sse.com.cn/college/required/basicinfo/index.shtml",
    "language": "中文",
    "author": "上海证券交易所投资者教育",
    "whatToLearn": "从官方系列学习利润表、现金流、报表关系和审计意见，回原报告确认数字。",
    "prerequisite": "只作公开原文阅读，不用模型摘要代替投资判断。",
    "practiceAfter": "列收入、利润、经营现金流的期间、单位、币种、口径与原文位置。",
    "verificationNote": "本轮已打开官方课程索引，未逐条完整观看系列动画。",
    "checkedAt": "2026-10-09"
  },
  {
    "id": "ref-finance-original",
    "topic": "automation",
    "topics": [
      "automation"
    ],
    "type": "guide",
    "title": "巨潮资讯：查找公开报告原文",
    "url": "https://www.cninfo.com.cn/new/index",
    "language": "中文",
    "author": "巨潮资讯",
    "whatToLearn": "按公司与公告类型查原文，区分摘要、修订版、发布日期和数据期间。",
    "prerequisite": "学习公开披露资料，记录来源，不提供真实交易账号。",
    "practiceAfter": "任选一个公司只作阅读练习，保存原报告和三项指标阅读卡。",
    "verificationNote": "此前已读取法定披露平台介绍和原文入口；未验证具体公司财务数字。",
    "checkedAt": "2026-10-09"
  }
]);

baseLearningResources.push(...[
  {
    "id": "ref-project-openai-plugins",
    "topic": "explore",
    "topics": [
      "explore"
    ],
    "type": "repo",
    "title": "OpenAI 当前插件示例库",
    "url": "https://github.com/openai/plugins",
    "language": "英文（可使用页面翻译）",
    "author": "官方或原项目维护者",
    "whatToLearn": "查看一个插件包的skills、工具和连接器配置，理解文件与执行条件。",
    "prerequisite": "先分清插件包与纯Skill，核对自己Codex端的可用入口。",
    "practiceAfter": "选一个包只读README和技能说明，写一个最小试用计划。",
    "checkedAt": "2026-10-09",
    "verificationNote": "此前同日已打开原README/使用说明；未安装或逐项验证所有外链。"
  },
  {
    "id": "ref-project-openai-old-skills",
    "topic": "explore",
    "topics": [
      "explore"
    ],
    "type": "repo",
    "title": "OpenAI 历史Skill示例库（已弃用）",
    "url": "https://github.com/openai/skills",
    "language": "英文（可使用页面翻译）",
    "author": "官方或原项目维护者",
    "whatToLearn": "阅读历史精选示例和弃用说明，把旧示例与当前分发入口分开。",
    "prerequisite": "旧仓库已标deprecated；安装方法回当前文档核对。",
    "practiceAfter": "比较一个历史SKILL.md与当前插件目录，不因名称一样就覆盖已有安装。",
    "checkedAt": "2026-10-09",
    "verificationNote": "此前同日已打开原README/使用说明；未安装或逐项验证所有外链。"
  },
  {
    "id": "ref-project-anthropic-skills",
    "topic": "explore",
    "topics": [
      "explore"
    ],
    "type": "repo",
    "title": "Anthropic 官方Skill源码与示例",
    "url": "https://github.com/anthropics/skills",
    "language": "英文（可使用页面翻译）",
    "author": "官方或原项目维护者",
    "whatToLearn": "学习doc-coauthoring、文档/PPT/表格、internal-comms等任务如何组织说明和资源。",
    "prerequisite": "Claude工具名与Codex环境不同，文档类技能的单项许可要阅读。",
    "practiceAfter": "挑一个说明型技能，在练习目录核对依赖后做小范围试做。",
    "checkedAt": "2026-10-09",
    "verificationNote": "此前同日已打开原README/使用说明；未安装或逐项验证所有外链。"
  },
  {
    "id": "ref-project-vercel-skills-cli",
    "topic": "explore",
    "topics": [
      "explore"
    ],
    "type": "repo",
    "title": "Vercel Skills：发现与安装管理工具",
    "url": "https://github.com/vercel-labs/skills",
    "language": "英文（可使用页面翻译）",
    "author": "官方或原项目维护者",
    "whatToLearn": "学习find、--list、单项选择、目标Agent和项目/用户范围。",
    "prerequisite": "npx会下载执行工具自身，先确认来源与Node环境。",
    "practiceAfter": "先列候选，不全装，再在自己的练习项目试一个。",
    "checkedAt": "2026-10-09",
    "verificationNote": "此前同日已打开原README/使用说明；未安装或逐项验证所有外链。"
  },
  {
    "id": "ref-project-vercel-agent-skills",
    "topic": "explore",
    "topics": [
      "explore"
    ],
    "type": "repo",
    "title": "Vercel Agent Skills 原始技能集合",
    "url": "https://github.com/vercel-labs/agent-skills",
    "language": "英文（可使用页面翻译）",
    "author": "官方或原项目维护者",
    "whatToLearn": "查看写作与网页规范，学习把评价规则写成明确的输入、输出与检查。",
    "prerequisite": "开发方向要有对应项目环境，办公场景不机械套用。",
    "practiceAfter": "把一条写作规则用于自己的教程草稿，说明修改理由。",
    "checkedAt": "2026-10-09",
    "verificationNote": "此前同日已打开原README/使用说明；未安装或逐项验证所有外链。"
  },
  {
    "id": "ref-project-superpowers-repo",
    "topic": "explore",
    "topics": [
      "explore"
    ],
    "type": "repo",
    "title": "Superpowers 开发流程源码与文档",
    "url": "https://github.com/obra/superpowers",
    "language": "英文（可使用页面翻译）",
    "author": "官方或原项目维护者",
    "whatToLearn": "观察需求、计划、排错与验证如何组成可复用流程。",
    "prerequisite": "作为开发选修，按当前README的Codex Plugins入口处理。",
    "practiceAfter": "在小练习项目观察一轮流程，评价是否适合自己的任务。",
    "checkedAt": "2026-10-09",
    "verificationNote": "此前同日已打开原README/使用说明；未安装或逐项验证所有外链。"
  },
  {
    "id": "ref-project-voltagent-index",
    "topic": "explore",
    "topics": [
      "explore"
    ],
    "type": "repo",
    "title": "VoltAgent 跨领域Skill项目索引",
    "url": "https://github.com/VoltAgent/awesome-agent-skills",
    "language": "英文（可使用页面翻译）",
    "author": "官方或原项目维护者",
    "whatToLearn": "从办公、视频与自动化条目追溯真正的原作者项目。",
    "prerequisite": "awesome是索引，不是一个应全量安装的Skill；外链条件逐项查。",
    "practiceAfter": "找两个候选，读原仓库后比较任务、依赖、费用和边界。",
    "checkedAt": "2026-10-09",
    "verificationNote": "此前同日已打开原README/使用说明；未安装或逐项验证所有外链。"
  },
  {
    "id": "ref-project-skills-discovery",
    "topic": "explore",
    "topics": [
      "explore"
    ],
    "type": "guide",
    "title": "skills.sh：发现入口与实时热榜",
    "url": "https://www.skills.sh/",
    "language": "英文（可使用页面翻译）",
    "author": "官方或原项目维护者",
    "whatToLearn": "按任务关键词发现候选，学习热度信息与质量验证的区别。",
    "prerequisite": "安装量不能保证适配或质量，具体安装回原作者仓库。",
    "practiceAfter": "搜索presentation或video，记录原链接与一个验收小范围试做。",
    "checkedAt": "2026-10-09",
    "verificationNote": "此前同日已打开原README/使用说明；未安装或逐项验证所有外链。"
  }
]);

for(const r of baseLearningResources){if(r.author==='CapCut'){r.prerequisite='这是国际CapCut教程，按自己的端和地区核对，不能照抄为国内剪映按钮或套餐。'+r.prerequisite;}if(r.url.includes('template-helloworld'))r.prerequisite+=' 这是专用许可的源码公开项目，使用前读当前LICENSE，不能假定无限制商用。';}

const seenResourceURLs=new Set();
export const learningResources=[...baseLearningResources,...officeWorkshopResources,...videoWorkshopResources,...toolsWorkshopResources,...projectReadingResources,...dramaCoreResources,...generationResources,...releaseResources].filter(r=>{const key=new URL(r.url).href;if(seenResourceURLs.has(key))return false;seenResourceURLs.add(key);return true;});
