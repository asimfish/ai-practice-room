// v12 tutorial data. This site prepares a brief and prompts; it does not generate PPTX.
// Sources reviewed on 2026-10-10. Follow the SKILL.md of the learner's installed version.
const repository = 'https://github.com/hugohe3/ppt-master';
const gettingStarted = `${repository}/blob/main/docs/zh/getting-started.md`;
const skillSource = `${repository}/blob/main/skills/ppt-master/SKILL.md`;
const routingSource = `${repository}/blob/main/skills/ppt-master/workflows/routing.md`;
const generateSource = `${repository}/blob/main/skills/ppt-master/workflows/generate-pptx.md`;
const editSource = `${repository}/blob/main/skills/ppt-master/workflows/edit-native-pptx.md`;
const templatesSource = `${repository}/blob/main/docs/templates-guide.md`;
const createTemplateSource = `${repository}/blob/main/skills/ppt-master/workflows/create-template.md`;
const carnivalTemplate = 'https://www.slidescarnival.com/template/quintus-free-presentation-template/1405';
const carnivalLicense = 'https://www.slidescarnival.com/faqs';
const slidesgoTemplate = 'https://slidesgo.com/theme/book-lovers';
const slidesgoTerms = 'https://slidesgo.com/terms-conditions';

export const pptProject = {
  id: 'ppt',
  title: '制作自己的可编辑PPT',
  intro: '把主题、听众和材料换成自己的，跟着完成需求说明、找模板、调用 Skill、三页测试和全稿修改。本站帮你整理需求与复制提示词；真实 PPTX 要在自己的电脑端 AI 工具中制作。图是操作示意，不是你已经完成的作品。',
  outcome: '得到符合自己用途的真实 PPTX：在实际播放软件中能打开、改文字、另存并重新打开；另有按页讲稿或演讲者备注、PDF 备份和素材来源记录。填写表单、导出本站的文本或勾选完成都不能代替这些文件。',
  prerequisites: [
    '先完成基础提问、上传材料与检查答案的练习；写出这份 PPT 给谁看、讲完后希望对方知道或做到什么。',
    '使用能够读写本地文件、执行命令的电脑端 Agent，并准备持久可写的工作目录。普通手机聊天可以准备需求和文案，不能默认直接安装或运行 GitHub Skill。',
    '准备 ppt-master 的完整资源包和它要求的运行环境：不只是一份 SKILL.md，还包括工作流、脚本、模板、参考文档、requirements.txt 及需要的素材。安装方式按原项目与宿主当前说明核对。',
    '准备 PowerPoint 或 WPS 等实际使用的软件、材料与模板副本；原件另存。模型、图片服务、模板和办公软件的费用分别核对，不把开源 Skill 理解为所有操作都免费。'
  ],
  fields: [
    { key: 'topic', label: 'PPT主题', type: 'text', default: '向同学推荐一本我读过的书', hint: '换成你的汇报、课程、分享或活动主题。示范是读书分享。' },
    { key: 'audience', label: '听众和已有知识', type: 'textarea', default: '五年级同学，没读过这本书，熟悉日常故事表达', hint: '写年龄、身份、已有知识，以及看投影还是自己阅读。' },
    { key: 'purpose', label: '讲完希望达到什么', type: 'textarea', default: '让同学了解这本书值得读的原因，愿意在课后借阅，并能回答一个讨论问题', hint: '写一个能检查的结果，避免只写“做得高级”。' },
    { key: 'page_count', label: '计划页数', type: 'number', default: 8, hint: '包括封面和结尾。内容放不下时与 AI 商量删减或调整页数。' },
    { key: 'minutes', label: '讲解时长（分钟）', type: 'number', default: 10, hint: '写真实可用时长，最后按讲稿计时。' },
    { key: 'materials', label: '自己的材料与来源', type: 'textarea', default: '待填写：书名与版本、我的读书笔记、希望引用的短段落及页码、可使用的图片或数据文件路径', hint: '写本地文件路径、可打开的网址或直接粘贴内容。删去私人信息；没有的事实注明待补。' },
    { key: 'visual_style', label: '希望的风格', type: 'textarea', default: '温暖、简洁，浅色背景，投影时正文清楚；重点放在书中例子，装饰少一些', hint: '描述使用场景、颜色、阅读距离和不喜欢的做法；参考图另给路径。' },
    { key: 'template_mode', label: '模板或参考怎么用', type: 'select', default: '重新设计一份PPT', options: ['重新设计一份PPT', '保留已有PPTX设计，填入自己的内容', '从图片或PDF借鉴风格，重新设计'], hint: '有 PPTX 原文件和只有截图是不同情况；选择后仍让 AI 按实际 Skill 版本核对流程。' },
    { key: 'template_path', label: '已有或选中的模板、参考', type: 'textarea', default: '暂无；完成找模板步骤后，补上选中的具体页面链接、本地副本路径和使用条件', hint: '填真实可打开的文件路径或 Skill 模板工作区根目录；截图只能当参考，不能当原生 PPTX。' },
    { key: 'host', label: '使用的电脑端AI工具', type: 'text', default: '待填写：我已配置好的电脑端 Agent 名称', hint: '例如能读写工作目录并执行命令的 Claude Code、Codex 或 Cursor；按该工具当前 Skill 入口调用。' },
    { key: 'workspace', label: '自己的工作目录', type: 'text', default: '待填写：本机可写的练习文件夹绝对路径', hint: '在这个目录打开 Agent，只放材料副本；AI 会报告本次活动项目的具体路径。' },
    { key: 'skill_path', label: 'ppt-master安装目录', type: 'text', default: '待填写：包含 SKILL.md 与 requirements.txt 的完整 ppt-master 目录绝对路径', hint: '工作目录和 Skill 安装目录可以不同。安装后在宿主技能入口或文件管理器中确认位置。' },
    { key: 'editable_items', label: '必须能编辑的内容', type: 'textarea', default: '标题、正文和图片位置；如果有数据图表，还要能修改图表数据', hint: '文字能改、图片能替换、图表能编辑数据要分别验证；整页图片不满足改字要求。' },
    { key: 'budget', label: '费用限制', type: 'textarea', default: '先用有权使用的免费模板；模型和图片服务按我的现有额度核对，收费或超出额度前先说明', hint: '写币种、上限和已有服务。金额不明确就填待确认，不把未知费用当作零。' },
    { key: 'feedback', label: '看到文件后要修改的问题', type: 'textarea', default: '待看实际文件后填写：页码、具体问题、希望改成什么，以及要保留的内容', hint: '例如“第4页删到3个要点，标题两行内，保留主色和原图”。每次先解决一两个问题。' }
  ],
  steps: [
    {
      id: 'brief',
      title: '1. 写自己的需求，准备材料副本',
      purpose: '让 AI 根据你的材料为你的听众组织内容。',
      actions: [
        '填写主题、听众、目标、页数、时长和风格；把默认读书示范换成自己的任务。',
        '在工作目录准备 inputs 文件夹，放入材料、图片和模板副本，保留原件。复制真实文件路径到材料字段。',
        '先让 AI 复述读到的文件、内容范围和缺失信息；回到原文核对三个要点，再补齐关键事实。'
      ],
      prompt: `我要做一份关于“{{topic}}”的 PPT。
听众与已有知识：{{audience}}
目标：{{purpose}}
计划 {{page_count}} 页，讲 {{minutes}} 分钟。
我提供的材料与来源：{{materials}}
风格：{{visual_style}}
必须能编辑：{{editable_items}}
请先整理成一份需求说明，列出你实际读到的材料、可用的事实、缺失的关键信息，以及每个重点的来源。不确定的写待核实，不补造引文或数据。现在先完成需求与材料检查。`,
      output: '一份经自己核对的需求说明、可用材料副本和待补信息清单。它们是制作输入，此时还没有 PPTX。',
      checks: [
        '我能说清楚这份 PPT 给谁看、要达到什么结果，页数与时长也适合自己的场景。',
        '我打开过材料原件，核对了 AI 复述的三个要点；引用和数据能找到出处。'
      ],
      lessonIds: ['better-questions', 'files-check', 'ppt-outline'],
      image: 'v11-ppt-source-pack.svg',
      sourceUrls: [{ title: 'PPT Master 中文入门：准备来源材料', url: gettingStarted, why: '核对可提供的材料类型以及本次项目的实际保存位置。' }]
    },
    {
      id: 'skill_setup',
      title: '2. 准备完整Skill，在电脑端明确调用',
      purpose: '确认 AI 能找到技能资源、读材料并在你的目录里生成真实文件。',
      actions: [
        '打开原仓库 README 和中文入门，按自己的宿主选择完整仓库、Skill 发布包或宿主支持的安装方式。教程只给操作说明，不会替你安装。',
        '按原项目准备 Python 3.10+ 和依赖；Skill-only 安装从实际安装目录的 requirements.txt 准备依赖。只有 SKILL.md 时，回到原项目获取完整资源。',
        '在自己的可写工作目录启动 Agent，填入宿主、工作目录和 Skill 安装目录。选择宿主的 ppt-master 技能，或明确说“使用 ppt-master”，让 AI 读取安装版 SKILL.md 和 routing.md。',
        '让 AI 先报告技能路径、版本或安装来源、资源是否齐全、材料能否读取和实际工具能力。需要你配置或提供文件时，完成这一项后再继续。'
      ],
      prompt: `请使用 ppt-master Skill（若此宿主支持 $ppt-master 调用，也请明确加载它）。
我的宿主：{{host}}
工作目录：{{workspace}}
实际 Skill 安装目录：{{skill_path}}
材料：{{materials}}
请先读取这个安装目录中的 SKILL.md、路由文档及所选流程要求的资源，遵守该版本的准备与检查步骤。报告你实际找到的路径、版本或安装来源、依赖状态，以及读写文件和执行命令的能力；缺项给出对应官方说明，不能假装已准备好。
后续按 Skill 自身流程执行，在要求用户确认的节点暂停，等我的明确回复。不要跳过确认，不委托或批量生成 SVG 页面。
费用限制：{{budget}}
这一步先检查运行条件，不开始生成页面。`,
      output: '宿主中的技能调用记录、实际安装路径和运行条件检查结果；缺少的资源或配置已经补齐。',
      checks: [
        'AI 读取的是完整安装包内的 Skill，报告了真实路径；我区分得清安装目录、工作目录和活动项目。',
        'AI 能读取材料副本并保存文件；未准备好的依赖或能力没有被写成已完成。',
        '我核对了自己的模型、图片服务和工具费用，没有把普通手机聊天当成可运行本地 Skill 的宿主。'
      ],
      lessonIds: ['first-skill', 'ppt-master-install'],
      image: 'v11-ppt-master-install.svg',
      sourceUrls: [
        { title: 'PPT Master README：安装选择与宿主要求', url: `${repository}/blob/main/README.md`, why: '核对当前准备要求和安装入口，广告或示例效果不等于你的实测结果。' },
        { title: '中文入门：安装目录、工作目录与活动项目', url: gettingStarted, why: '核对完整仓库与 Skill-only 安装的目录和依赖差异。' },
        { title: '原仓库当前 SKILL.md', url: skillSource, why: '对照当前规则；真实执行仍以自己安装的完整版本为准。' }
      ]
    },
    {
      id: 'find_template',
      title: '3. 让AI找具体模板，自己核对能否使用',
      purpose: '选到适合内容、能合法使用且能继续编辑的模板。',
      actions: [
        '让有搜索能力的 AI 按自己的用途找两到三个具体模板页面。没有搜索能力时，自己打开下方真实示范入口，再把页面和条件交给 AI 比较。',
        '逐个打开候选详情页与官方使用条款：核对 PPTX 或 Google Slides 格式、登录与费用、署名要求、用途限制，以及下载后哪些内容能编辑。',
        '读书示范候选 Open Book 的页面提供 PowerPoint 格式，并自称可编辑；SlidesCarnival FAQ 写明 CC BY 4.0 与署名条件。Book Lovers 页面标为 Premium，应先核对付费条件。两者都要下载后再实际检查。',
        '选择一份适合自己的模板，下载材料副本，记录详情页和许可页面，更新模板字段；已有有权使用的模板可直接检查。没有合适候选时明确改为自由设计。'
      ],
      prompt: `请联网为我的 PPT 找 2—3 个具体模板候选；只能给你实际打开并核对过的详情页链接。
主题：{{topic}}；听众：{{audience}}；用途：{{purpose}}
规模：{{page_count}} 页、{{minutes}} 分钟；风格：{{visual_style}}
现有模板或参考：{{template_path}}
费用限制：{{budget}}
每个候选说明：为什么适合；下载格式；是否收费或需登录；官方许可链接；我这种用途是否符合条件；要保留的署名；文字、图片和图表的可编辑性依据。页面宣传可编辑时注明尚未下载实测。未知项写待核实。
不要把搜索结果页、预览图片或不存在的链接当模板。不下载或购买，先等我选择。`,
      output: '两个至三个真实候选的比较记录，或自己已有模板的检查记录；选中模板的副本、官方许可链接与应保留的署名说明。',
      checks: [
        '候选是具体模板页面，链接能打开；官方使用条件与费用适合我的用途。',
        '我下载或复制得到可打开的文件；宣传中的可编辑性仍等待三页测试验证。',
        '模板、图片和字体的来源已经记录，署名要求会保留到成稿。'
      ],
      lessonIds: ['ppt-template', 'files-check'],
      image: 'v11-ppt-template.svg',
      sourceUrls: [
        { title: '示范候选：SlidesCarnival Open Book', url: carnivalTemplate, why: '具体模板页提供 PowerPoint 与 Google Slides 入口；仅供读书主题示范。' },
        { title: 'SlidesCarnival 官方FAQ：许可与编辑', url: carnivalLicense, why: '核对 CC BY 4.0、署名与再分发条件。' },
        { title: '示范候选：Slidesgo Book Lovers', url: slidesgoTemplate, why: '具体模板页标为 Premium；核对当前账号和费用，不当作免费模板。' },
        { title: 'Slidesgo 官方使用条款', url: slidesgoTerms, why: '核对具体用途、署名与分享限制；免费和付费条件分别看。' }
      ]
    },
    {
      id: 'outline_design',
      title: '4. 说清模板用法，确认大纲和设计',
      purpose: '确认内容顺序与设计方向，再让 AI 开始制作。',
      actions: [
        '说明自己要保留已有 PPTX 设计填入内容，还是以旧稿为材料重新设计。只有图片或 PDF 时，说明只是借鉴风格；不能把截图当作可编辑原文件。',
        '当前原项目将原生 PPTX 填充与部分修改交给 Edit Native PPTX；重新设计走 Generate PPTX。希望做可重复使用的模板时，先按 Create Template 建好有效工作区，再提供根目录。让 AI 对照实际安装版选择流程。',
        '审阅逐页大纲：每页解决什么问题、保留哪些事实、配什么图、预计讲多久。删掉重复内容，确认模板的页型能容纳自己的内容。',
        '在 Skill 的确认环节选择版式、颜色、字体与图片来源。明确要求先审阅完整设计方案，确认前暂停；不要用“快速生成、无需确认”跳过这一步。'
      ],
      prompt: `请使用已加载的 ppt-master，按安装版路由处理以下任务。
主题：{{topic}}；听众：{{audience}}；目标：{{purpose}}
材料：{{materials}}
计划 {{page_count}} 页、{{minutes}} 分钟；风格：{{visual_style}}
模板用法：{{template_mode}}
选中的原文件或模板工作区：{{template_path}}
必须可编辑：{{editable_items}}
请解释所选流程和保留范围：原生 PPTX 填充或修改、以材料重新设计、或从图片/PDF借鉴风格。图片参考不代表能保留原文件的对象、备注或图表数据；精确截图重建有单独条件，请不要擅自切换。
逐页给出标题、主要信息、来源、建议页型与讲解时间，并按 Skill 的确认流程呈现设计选择。我要先审阅完整设计方案（安装版支持时进入 refine-spec）；在相应确认节点暂停，等我明确确认后再开始制作。`,
      output: '自己确认过的逐页大纲、设计选择和模板保留范围；采用默认生成流程时保存 Skill 要求的设计记录。',
      checks: [
        '我明确了填充已有 PPTX、借鉴图片风格或重新设计，AI 的流程与这个意图一致。',
        '逐页内容有依据，能在规定时间内讲完；页型和文字量适合听众。',
        'AI 在要求确认的节点等过我的明确回复，没有把自己推荐的选择写成我的决定。'
      ],
      lessonIds: ['ppt-outline', 'ppt-template'],
      image: 'v11-ppt-design-system.svg',
      sourceUrls: [
        { title: '当前路由规则', url: routingSource, why: '区分原生PPTX编辑、重新设计、图片重建与创建可复用模板。' },
        { title: 'Edit Native PPTX：已有文件的填充与修改', url: editSource, why: '核对哪些页面和原生对象要保留，以及内容来源要求。' },
        { title: '模板指南', url: templatesSource, why: '核对原生PPTX与有效模板工作区的区别。' },
        { title: 'Create Template工作流', url: createTemplateSource, why: '只在需要可复用模板时使用，并遵守它的确认环节。' }
      ]
    },
    {
      id: 'three_page_test',
      title: '5. 先做独立的三页测试稿',
      purpose: '用最有代表性的三页验证内容、版式与可编辑性。',
      actions: [
        '从已确认的大纲挑三种页面：封面、一页正文和内容最复杂的一页；复杂页可以是比较、数据或图片说明，不必强加图表。',
        '让 AI 建立单独的三页测试项目，沿用已选方向与模板使用方式，在该流程的确认环节确认三页安排，然后完整导出这份测试 PPTX。',
        '记下测试项目与 PPTX 的实际路径。不要用三张预览图或本站导出的需求文本代替测试稿。'
      ],
      prompt: `使用 ppt-master 为“{{topic}}”制作一份独立的 3 页测试 PPTX，保存在 {{workspace}} 下的测试项目中，与正式全稿分开。
沿用我们已确认的大纲和设计方向：{{visual_style}}
模板用法：{{template_mode}}；模板或参考：{{template_path}}
材料：{{materials}}
选择封面、正文和最复杂的一页，内容针对 {{audience}}，帮助实现 {{purpose}}。
必须能编辑：{{editable_items}}。如需可修改数据的原生图表或表格，按安装版的专门选项处理，并说明未支持的部分。
遵守所选 Skill 流程的确认和检查节点，等我确认三页安排后完成这份测试稿。SVG 页面由当前主 Agent 依次制作，不委托或写脚本批量生成。给出真实 PPTX 路径、实际运行的检查与未运行项；完成测试稿后等我的检查反馈。`,
      output: '一份能实际打开的三页测试 PPTX、测试项目路径和生成检查记录。此时只完成测试稿，正式全稿尚未完成。',
      checks: [
        '我拿到了真实的三页 PPTX，三页能代表这次作品的主要页面类型。',
        '模板保留范围和暂时不能编辑的部分说清楚了；没有把预览、SVG 或 Markdown 当作 PPTX。'
      ],
      lessonIds: ['ppt-template', 'ppt-delivery'],
      image: 'v11-ppt-template.svg',
      sourceUrls: [
        { title: '中文入门：真实PPTX与导出位置', url: gettingStarted, why: '寻找活动项目中的 exports 文件，以 AI 报告的精确路径为准。' },
        { title: 'Generate PPTX工作流', url: generateSource, why: '按生成流程完成整份三页测试稿的确认、逐页制作和导出。' }
      ]
    },
    {
      id: 'test_edit',
      title: '6. 打开测试稿，亲手改字再保存',
      purpose: '确认自己真正能接着编辑，并及时改掉全稿会重复的问题。',
      actions: [
        '在实际使用的 PowerPoint 或 WPS 中打开测试 PPTX。改一个标题和一段正文，移动或替换一张图片，另存“测试稿-修改版.pptx”。',
        '关闭文件并重新打开修改版，确认改动还在。如要求编辑数据，尝试图表“编辑数据”或表格单元格；只能选中形状不等于可改图表数据。',
        '全屏看三页，检查中文字体、字大小、图片比例、文字溢出、重叠和引用。把页码、问题、期望与保留项填入修改字段。',
        '把具体反馈交给 AI 修改，再打开新版确认。内容放不下时先删减，避免靠缩小所有正文解决。'
      ],
      prompt: `我已实际打开“{{topic}}”的三页测试 PPTX，并做了编辑保存测试。
我的检查与修改要求：{{feedback}}
必须能编辑：{{editable_items}}
请区分我已经实测的结果和你还未运行的检查，先修这些具体问题，按所选流程同步必要的设计记录与备注，并另存新版 PPTX。保留未要求改变的内容和设计，给出实际改动清单及新文件路径。若是整页图片导致不能改字，请说明原因并按可编辑要求重做对应页。`,
      output: '自己改字、另存并重新打开的测试文件，以及 AI 根据真实反馈修订后的三页 PPTX。',
      checks: [
        '我亲手修改了标题和正文，保存后重新打开仍能继续编辑。',
        '我分别检查了图片与数据对象的编辑要求，未支持的项目有明确记录。',
        '我看过修订版三页的实际显示效果，重复性问题已经解决后才进入全稿。'
      ],
      lessonIds: ['ppt-template', 'ppt-delivery'],
      image: 'v11-ppt-live-edit.svg',
      sourceUrls: [
        { title: '中文入门：预览与可视化修改', url: gettingStarted, why: '浏览器修改需要应用并重新导出；软件中的保存重开测试仍由自己完成。' },
        { title: 'Slidesgo FAQ：母版中的元素', url: 'https://slidesgo.com/faqs', why: '有些固定元素需要进入母版编辑，不能只看普通页面是否可选。' }
      ]
    },
    {
      id: 'full_deck',
      title: '7. 用通过测试的方案制作全稿',
      purpose: '把已验证的方向用于自己的完整内容，并取得真实导出文件。',
      actions: [
        '把正式大纲和测试后确认的改动交给 AI，指出测试文件是设计参考，正式内容仍以自己的材料和大纲为准。',
        '回到正式项目，按 Skill 所需环节确认最终方案，然后让 AI 完成全稿、按页备注和导出。需要手动补素材时按实际缺项补齐。',
        '保留材料、设计记录和测试稿。收到导出路径后，在文件管理器找到真实 PPTX，并核对页数；无法导出的任务不能标成制作完成。'
      ],
      prompt: `三页测试已经由我打开、修改、保存并重开检查。现在请使用 ppt-master 制作“{{topic}}”的正式全稿。
目标：{{purpose}}；听众：{{audience}}；{{page_count}} 页、{{minutes}} 分钟。
正式材料：{{materials}}
模板用法：{{template_mode}}；模板或参考：{{template_path}}
已验证的风格：{{visual_style}}；测试后确认的改动：{{feedback}}
必须可编辑：{{editable_items}}；费用限制：{{budget}}
沿用已确认的大纲，把测试中的改动写回正式方案；在 Skill 要求的确认节点等我明确确认后，按其流程完成整份文件。需要 SVG 时由当前主 Agent 逐页制作，不委托或批量生成。
为每页提供适合讲解的演讲者备注，引用与数据有来源。交付实际 PPTX 路径、活动项目路径、备注位置、素材来源记录，以及真实运行的检查与未运行项；不能只交付文字、图片或改后缀的文件。`,
      output: '自己的完整 PPTX、按页演讲者备注、项目源文件与素材来源记录，以及实际生成与检查结果。',
      checks: [
        '我找到了真实 PPTX，实际页数和内容与最终大纲一致；测试稿和全稿区分清楚。',
        '备注与每页内容对应，引用和数字可核对，没有遗留模板占位词。',
        'AI 报告的是实际做过的检查，文件存在没有被当成版式与编辑性通过。'
      ],
      lessonIds: ['ppt-master-install', 'ppt-outline', 'ppt-template'],
      image: 'ppt-flow.svg',
      sourceUrls: [
        { title: 'Generate PPTX：制作、备注与导出', url: generateSource, why: '新稿走该流程；已有PPTX填充按实际所选编辑流程交付。' },
        { title: 'Edit Native PPTX：原文件编辑流程', url: editSource, why: '保留原生PPTX时，不混用重新设计流程的命令。' }
      ]
    },
    {
      id: 'revise',
      title: '8. 按页给具体反馈，拿到修订版',
      purpose: '把全稿调整到真正适合听众和讲解时间。',
      actions: [
        '先在播放软件中逐页看全稿，按备注试讲并计时。把讲不清、太密、事实有误或不符合用途的页面记下来。',
        '一次提出一两个明确问题：“第4页保留3个要点，删掉重复例子；第6页改用我的原始数据；保留主色和已核对的引文”。',
        '让 AI 在当前项目内按所选流程修改、同步对应备注并导出新版。若用浏览器预览，先应用修改或提交注解，再回对话明确要求处理与重新导出。',
        '打开新版核对修改过的页面和有关联的目录、页码、备注，保存可比较的版本，不只看 AI 的修改说明。'
      ],
      prompt: `请修改“{{topic}}”的正式 PPTX，当前项目位于 {{workspace}} 下 AI 已报告的活动项目路径。
具体反馈：{{feedback}}
继续满足：听众 {{audience}}；目标 {{purpose}}；时长 {{minutes}} 分钟；风格 {{visual_style}}；可编辑要求 {{editable_items}}。
请先说明涉及哪些页面和来源，再按当前所选 Skill 流程修改；需要我确认的节点暂停。同步有关联的目录、页码和演讲者备注，另存修订版，给真实路径与实际修改清单。我会重新打开验证，未实际运行的播放、字体或编辑性检查请明确写未运行。`,
      output: '一份已重新打开核对的修订版 PPTX，以及能对应页码的修改记录。',
      checks: [
        '反馈写出了页码、问题和希望的结果，修订版实际解决了这些问题。',
        '目录、页码和备注仍一致；事实与图表数据经过自己核对。',
        '试讲时间适合自己的安排，投影时重点能看清。'
      ],
      lessonIds: ['better-questions', 'ppt-template', 'ppt-delivery'],
      image: 'v11-ppt-live-edit.svg',
      sourceUrls: [
        { title: 'Generate PPTX：交付后的定向修改', url: generateSource, why: '新稿修改应同步受影响的内容、备注并重新检查导出。' },
        { title: '中文入门：应用浏览器修改与注解', url: gettingStarted, why: '预览中看到的修改需要实际应用并重新导出才能进入新的PPTX。' }
      ]
    },
    {
      id: 'save_reopen',
      title: '9. 保存重开、检查备注，再留PDF备份',
      purpose: '确保最后交付的是自己能展示、能修改、能再次找到的文件。',
      actions: [
        '在最终使用的 PowerPoint 或 WPS 中打开修订版，亲手改一个标题和一段正文，另存最终 PPTX；关闭后重新打开，确认改动保留。',
        '查看各页演讲者备注，用放映或演讲者视图试讲。检查中文字体、缺图、引用、署名和需要的数据编辑；动画有要求时在目标软件实际播放。',
        '用办公软件的导出功能生成 PDF，重新打开核对页数和内容。PDF 用于阅读或展示备份，可编辑要求仍由 PPTX 验证。',
        '整理最终 PPTX、PDF、讲稿或备注、材料与许可记录，文件名标主题、日期和版本。记下测试使用的软件及检查范围。'
      ],
      prompt: `我要交付“{{topic}}”的最终文件，请根据本次项目整理一份文件说明。
列出真实存在的最终 PPTX、备注或讲稿、素材来源记录的路径；PDF 只有实际导出后才能列为已完成。
按 {{audience}} 的使用场景和 {{purpose}}，提醒我逐项完成：亲手改标题与正文、另存关闭重开、看备注、按 {{minutes}} 分钟试讲、全屏逐页查看、核对 {{editable_items}}，以及导出 PDF 后重新打开。
区分你实际检查过的项目、需要我在 PowerPoint/WPS 中检查的项目和未运行项。不要替我声称改字保存或播放通过，不把本站导出的文本当成作品。`,
      output: '实际编辑、保存并重开的最终 PPTX；逐页核对过的 PDF 备份；备注或讲稿、素材许可记录与检查说明。',
      checks: [
        '我真的改过最终文件的标题和正文，另存后关闭重开，改动仍在且能继续编辑。',
        '备注按页对应，试讲时长合适，关键文字和图片在实际播放软件中显示正常。',
        'PDF 已真实导出并重新打开；最终文件有明确路径，来源与署名记录一并保存。'
      ],
      lessonIds: ['ppt-delivery'],
      image: 'v11-ppt-delivery.svg',
      sourceUrls: [{ title: 'PPT Master 中文入门与兼容性提示', url: gettingStarted, why: '核对输出位置与目标软件差异；工具检查不替代自己打开与播放。' }]
    }
  ],
  finalChecks: [
    '内容来自我核对过的材料，主题、听众、用途、页数和时长符合自己的需求。',
    '模板详情页和使用条件有记录，费用已按实际渠道核对；图片、字体和署名符合使用要求。',
    '我在最终软件里打开了真实 PPTX，修改标题与正文、另存、关闭重开，改动仍保留。',
    '需要的图片替换、图表数据或表格编辑已分别测试；未支持的内容有明确说明。',
    '我逐页全屏检查并按备注试讲；目录、页码、数据、引用和演讲者备注一致。',
    'PDF 已导出并重开核对，最终 PPTX、PDF、备注或讲稿与来源记录都在自己找得到的目录。'
  ],
  reuse: '下一次复制这份需求，把主题、听众、材料、时长和风格换掉；重新核对模板条件，仍从代表性的三页开始测试。可选：把这次确实有效的需求写法、确认方式、修改反馈和软件检查步骤整理为自己的 Skill；不要直接改写第三方 Skill。先用另一个主题和不同材料跑一次，记录只测试过的宿主、软件和场景，不能凭一份成功稿承诺任何主题都能完成。',
  example: '教学示范：为五年级同学做8页、10分钟的读书推荐，输入自己的书名、版本和笔记，先比较 Open Book 与 Book Lovers 两个具体模板页面，再选符合费用与署名条件的一份。先做封面、推荐理由、书中例子三页，亲手改字并保存重开；确认可编辑后制作全稿、改掉过密的一页、检查备注并导出 PDF。主题与页数都可改；这里描述的是跟做方法，本站没有替你生成这份 PPT。'
};
