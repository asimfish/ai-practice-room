// Reviewed source and terminology corrections. Merge by stable lesson ID / tool title.
// A source hint with caseId: null deliberately disables a default case recommendation.
const U = {
  kimiWork: 'https://www.kimi.com/help/kimi-work/overview',
  kimiDownload: 'https://www.kimi.com/products/download',
  kimiSkills: 'https://www.kimi.ai/zh-hans/help/plugins-and-skills/use-skills-in-agent',
  kimiPlugins: 'https://www.kimi.com/help/kimi-work/plugin-center',
  kimiCreatePlugin: 'https://www.kimi.com/help/plugins-and-skills/create',
  kimiCodeSkills: 'https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html',
  harness: 'https://www.deepseek.com/en/harness/',
  harnessRepo: 'https://github.com/deepseek-ai/deepseek-harness',
  harnessDesktop: 'https://github.com/deepseek-ai/deepseek-harness/blob/master/apps/desktop/README.zh.md',
  harnessWeb: 'https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/index.zh.md',
  harnessSkills: 'https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/skill/skill-filesystem/README.zh.md',
  openaiSkills: 'https://learn.chatgpt.com/docs/build-skills',
  openaiPlugins: 'https://learn.chatgpt.com/docs/plugins',
  openaiPluginBuild: 'https://developers.openai.com/plugins/build/plugins',
  chatgptDownload: 'https://chatgpt.com/download/',
  chatgptCountries: 'https://help.openai.com/en/articles/7947663-chatgpt-supported-countries',
  chatgptCapabilities: 'https://help.openai.com/en/articles/9260256-chatgpt-capabilities-overview',
  chatgptFiles: 'https://help.openai.com/en/articles/8555545-uploading-files-and-audio-to-chatgpt',
  chatgptProjects: 'https://help.openai.com/en/articles/10169521-projects-in-chatgpt',
  chatgptIosSubscription: 'https://help.openai.com/en/articles/7905739-chatgpt-ios-app-upgrading-to-a-paid-subscription',
  applePayments: 'https://support.apple.com/en-us/111741',
  appleRegion: 'https://support.apple.com/en-us/118283',
  claudeCountries: 'https://support.claude.com/en/articles/8461763-where-can-i-access-claude',
  claudeDesktop: 'https://code.claude.com/docs/en/desktop-quickstart',
  claudeSkills: 'https://code.claude.com/docs/en/skills',
  superpowers: 'https://github.com/obra/superpowers',
  node: 'https://nodejs.org/'
};

const kimiSkillSources = [
  ['Kimi Agent：技能调用、创建与管理', U.kimiSkills],
  ['Kimi Work：技能入口与本地任务', U.kimiWork],
  ['Kimi Work：个人插件转换与安装（可包含 Skill）', U.kimiCreatePlugin]
];

export const sourceLessonPatches = {
  'first-skill': {
    steps: [
      ['先使用内置技能', 'Kimi Work 先从侧栏“技能”入口或输入框“/”技能列表，选择当前可用的内置文档/PPT能力；Harness 则先查看当前可用的办公技能。Kimi 的“插件”入口用于查看插件包、外部应用和数据库等能力，先读构成与授权说明，再决定是否需要；第一次 Skill 练习不必先接入外部服务。'],
      ['明确调用并分清入口', '在 Kimi Work 输入框用“/”选择已可用的技能；Harness 先让它列出当前发现的技能，再明确要求使用其中一个。插件也可能包含 Skill，但插件安装、外部服务授权与技能调用分别检查。入口因产品和端而异。'],
      ['检查技能做了什么', '要求它说明读了哪个技能、执行了什么步骤、生成了什么文件。出现技能名字只说明发现了，不代表脚本成功执行。'],
      ['比较一次普通提问', '用同一要求分别做普通提问和 Skill 任务，看交付文件、模板一致性和修改次数。']
    ],
    sources: [
      ['Kimi Work：技能与插件分别从哪里进入', U.kimiWork],
      ['Kimi Agent：技能调用、创建与管理', U.kimiSkills],
      ['Harness：本地 Skill 发现规则', U.harnessSkills],
      ['Kimi Work：插件中心及外部应用', U.kimiPlugins]
    ],
    notes: '2026-10-09 已读取 Kimi Work、插件中心和 Agent 技能指南的公开正文。此处介绍入口与能力边界；本站未安装插件、授权外部应用或执行本课 Skill。学员需在自己的当前版本中确认实际可用项。'
  },
  'own-skill': {
    steps: [
      ['选一个重复任务', '例如每次出英语练习都要检查难度、语法、答案、版式。把自己已经做过的检查写出来。'],
      ['让 AI 写成 SKILL.md', '给出技能名称、适用范围、输入、步骤和验收标准。要求仅用文字，不联网、不执行脚本、不夹带账号和 Key；按目标宿主的当前格式保留必要元数据。'],
      ['按明确的宿主路线接入', 'Harness 项目按其官方发现规则，可用 .dsh/skills/english-check/SKILL.md 或 .agents/skills/english-check/SKILL.md。Kimi Agent 可在技能面板创建，或通过 /skill-creator 描述这套检查流程。Kimi Work 如导入一个纯技能仓库，应使用下一步的插件转换路线。Kimi Code 的目录和调用方式另读 Code 官方技能文档，不由 Work 的插件安装位置推断。'],
      ['Kimi Work 仓库导入先转换再安装', '仅在选择仓库导入时，把自己的明确仓库或子目录交给内置 Plugin Builder。官方说明允许把纯技能仓库转换为技能型插件，登记到“插件 → 个人”页签，再安装并检查会话中可用性。这与直接保存本地 SKILL.md 不同；转换产物的 plugins/ 源目录用于后续更新，不把它当成所有宿主通用的技能目录。'],
      ['用两份不同材料试用', '检查 Skill 是否被读取、是否按要求输出。发现漏项就修改自己的说明，记录版本；真实输出与缺项处理都通过后，再判断这条路线是否适合自己。']
    ],
    sources: [
      ['Harness：本地 Skill 发现规则', U.harnessSkills],
      ['Kimi Agent：技能调用、创建与管理', U.kimiSkills],
      ['Kimi Work：个人插件转换与安装（可包含 Skill）', U.kimiCreatePlugin],
      ['Kimi Code：自己的技能目录与调用方式', U.kimiCodeSkills]
    ],
    notes: 'Kimi Work 的 Plugin Builder 转换、登记和安装路线于 2026-10-09 读取公开正文；Kimi Code 和 Harness 路径依据此前同日公开资料记录。本站未创建、转换、安装或执行这项技能；不据一个宿主的发现结果声称其他宿主也能运行。'
  },
  'skill-discovery': {
    sources: kimiSkillSources,
    notes: 'Kimi 的技能列表和个人插件市场是不同入口。纯技能仓库可由 Work 的 Plugin Builder 转换为技能型插件；转换、登记、安装、调用和结果验收分别记录。公开说明核对日期为 2026-10-09，实际账号和设备能力未测试。'
  },
  'skill-trial': {
    steps: [
      ['核对原作者与内容', '从原项目读 README、SKILL.md、依赖清单和许可，记录版本或发布日期，不从转载网盘取代原来源。'],
      ['选正确的宿主与目录', '先选定 Codex、Harness、Kimi Work 或 Kimi Code 中的一个宿主，再查它的当前导入方式。保留整个技能文件夹与相对资源，核对实际范围和路径，不照搬另一产品的目录。'],
      ['分清 Kimi Work 的转换与安装', '若选择 Kimi Work 的仓库导入，内置 Plugin Builder 可把纯技能仓库转换为技能型插件；先登记到个人插件市场，再到“插件 → 个人”安装。说明它包含 Skill、MCP 或哪些工具，确认转换后的依赖。Kimi Code 按 Code 官方文档处理，不使用 Work 的 plugins/ 目录作通用安装位置。'],
      ['确认权限和外部服务', '列出文件范围、执行命令、联网、API与费用；凭证在官方设置中管理，不贴入提示词。插件出现不等于已完成外部服务授权。'],
      ['试一个小任务', '核对实际调用、文件存在、内容正确和可编辑性；失败时保留第一处错误、环境与日志，再决定修复、停用或卸载。']
    ],
    sources: [
      ['OpenAI：本地 Skill 格式、发现与启停', U.openaiSkills],
      ['Harness：本地 Skill 发现规则', U.harnessSkills],
      ['Kimi Work：个人插件转换与安装（可包含 Skill）', U.kimiCreatePlugin],
      ['Kimi Code：自己的技能目录与调用方式', U.kimiCodeSkills]
    ],
    notes: '来源支持各自的格式与导入路线，不证明候选技能跨宿主执行兼容。2026-10-09 已读取 OpenAI 本地 Skill 与 Kimi Work 转换说明；Harness、Kimi Code 使用此前同日记录。本课所有安装、转换、调用、停用与跨宿主测试均未运行。'
  },
  'skill-chain': { sources: [['OpenAI：Skill 格式、调用与工具依赖', U.openaiSkills], ['Kimi Agent：技能调用、创建与管理', U.kimiSkills]] },
  'skill-maintenance': { sources: [['OpenAI：本地 Skill 变化与启停', U.openaiSkills], ['Kimi Agent：自定义技能管理', U.kimiSkills], ['Kimi Work：个人插件更新与卸载', U.kimiCreatePlugin]] },
  'mastery-learning': { sources: kimiSkillSources },
  'chatgpt-start': {
    sources: [['ChatGPT 官方客户端下载', U.chatgptDownload], ['ChatGPT 支持地区：操作当天核对', U.chatgptCountries]],
    notes: '此前课程公开资料核对日期为 2026-10-09：当时的 ChatGPT 支持地区记录未列中国大陆。地区名单和访问条件会变化，操作当天须打开本课官方支持地区原文重新查询，并按实际使用地区与账号条件判断；商店地区、安装或付款成功不能替代服务支持。本站未登录或验证任何账号可用性，本轮未重新获取地区名单。'
  },
  'chatgpt-files-voice': {
    sources: [['ChatGPT 能力说明', U.chatgptCapabilities], ['ChatGPT 文件与音频说明', U.chatgptFiles]]
  },
  'chatgpt-projects': {
    sources: [['ChatGPT 项目说明', U.chatgptProjects], ['OpenAI：Skill 的调用、分发与本地范围', U.openaiSkills], ['ChatGPT 官方客户端下载', U.chatgptDownload]]
  },
  'account-payment': {
    sources: [['ChatGPT iOS 订阅说明', U.chatgptIosSubscription], ['Apple 各地区支付方式：操作当天核对', U.applePayments], ['更改 Apple 账号地区', U.appleRegion], ['ChatGPT 支持地区：操作当天核对', U.chatgptCountries]],
    notes: '此前课程于 2026-10-09 核对 Apple 公开支付说明，记录的菲律宾列表未列 Apple Account 礼品卡余额；这是一时点记录。操作当天重新打开 Apple 支付方式、商店地区及本课 OpenAI 订阅原文，核对自己实际可用的方式、币种、税费、周期和取消方法。礼品卡类型、商店地区和服务支持分别确认。本站未登录、购买、代充或验证任何账户的付款可用性；本轮未重新获取这些支付页面。'
  },
  'skill-codex-install': {
    sources: [['OpenAI：本地技能与安装', U.openaiSkills], ['OpenAI：插件入口与连接条件', U.openaiPlugins], ['OpenAI：插件 marketplace', U.openaiPluginBuild], ['Superpowers：当前 Codex 安装', U.superpowers]]
  }
};

export const sourceToolPatches = {
  WorkBuddy: { desc: 'Ask 查看材料、Plan 审阅计划、默认 Agent 执行文件任务。用同一任务实测效果；旧教程可能称执行模式为 Craft。' }
};

// topic is navigation context, not permission to select another product's resources.
// sourceUrls is an ordered allowlist for the lesson; [] videos means no default video.
const hint = (topic, caseId, sourceUrls) => ({ topic, caseId, sourceUrls, relatedVideoIds: [] });
export const lessonSourceHints = {
  'kimi-work': hint('skills', null, [U.kimiDownload, U.kimiWork, U.kimiPlugins]),
  'harness-desktop': hint('skills', 'case-harness-first', [U.harness, U.harnessDesktop, U.harnessRepo]),
  'harness-cli': hint('skills', 'case-harness-first', [U.harnessWeb, U.harnessRepo, U.node]),
  'first-skill': hint('skills', null, [U.kimiWork, U.kimiSkills, U.harnessSkills, U.kimiPlugins]),
  'own-skill': hint('skills', 'case-skill-english-check', [U.harnessSkills, U.kimiSkills, U.kimiCreatePlugin, U.kimiCodeSkills]),
  'skill-discovery': hint('explore', null, kimiSkillSources.map(s => s[1])),
  'skill-trial': hint('explore', null, [U.openaiSkills, U.harnessSkills, U.kimiCreatePlugin, U.kimiCodeSkills]),
  'skill-chain': hint('explore', null, [U.openaiSkills, U.kimiSkills]),
  'skill-maintenance': hint('explore', null, [U.openaiSkills, U.kimiSkills, U.kimiCreatePlugin]),
  'mastery-learning': hint('explore', null, kimiSkillSources.map(s => s[1])),
  'chatgpt-start': hint('explore', null, [U.chatgptCountries, U.chatgptDownload]),
  'chatgpt-files-voice': hint('explore', null, [U.chatgptCapabilities, U.chatgptFiles]),
  'chatgpt-projects': hint('explore', null, [U.chatgptProjects, U.openaiSkills, U.chatgptDownload]),
  'account-payment': hint('explore', null, [U.chatgptIosSubscription, U.applePayments, U.appleRegion, U.chatgptCountries]),
  'claude-code': hint('skills', null, [U.claudeCountries, U.claudeDesktop, U.claudeSkills]),
  'skill-codex-install': hint('explore', 'workshop-tools-skill-lifecycle', [U.openaiSkills, U.openaiPlugins, U.openaiPluginBuild, U.superpowers])
};

export const sourceFeaturePatches = {
  '平台插件与个人 Skill': {
    desc: '先从技能入口用内置方法。社区纯技能仓库可由 Work 的 Plugin Builder 转为技能型插件，登记到个人插件市场后安装并测试；Code 路线另查其文档。',
    url: U.kimiCreatePlugin
  }
};
