// First tool-learning route. Existing lessons remain owned by content.js.
const U = {
  kimi: 'https://www.kimi.com/',
  kimiDownload: 'https://www.kimi.com/products/download',
  kimiWork: 'https://www.kimi.com/help/kimi-work/overview',
  kimiAgentSkills: 'https://www.kimi.ai/zh-hans/help/plugins-and-skills/use-skills-in-agent',
  kimiCode: 'https://github.com/MoonshotAI/kimi-code',
  kimiCodeStart: 'https://www.kimi.com/code/docs/en/kimi-code-cli/guides/getting-started',
  kimiCodeSkills: 'https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html',
  kimiCodeCommands: 'https://www.kimi.com/code/docs/en/kimi-code-cli/reference/slash-commands.html',
  kimiCodeMembership: 'https://www.kimi.com/code/docs/en/kimi-code/membership.html',
  kimiCodeMigration: 'https://www.kimi.com/code/docs/en/kimi-code-cli/guides/migration',
  harness: 'https://www.deepseek.com/en/harness/',
  harnessRepo: 'https://github.com/deepseek-ai/deepseek-harness',
  harnessDesktop: 'https://github.com/deepseek-ai/deepseek-harness/blob/master/apps/desktop/README.zh.md',
  harnessGuide: 'https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/index.zh.md',
  harnessSkills: 'https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/skill/skill-filesystem/README.zh.md',
  codexStart: 'https://learn.chatgpt.com/docs/quickstart',
  codexApp: 'https://learn.chatgpt.com/docs/app',
  codexProjects: 'https://learn.chatgpt.com/docs/projects',
  codexSkills: 'https://learn.chatgpt.com/docs/build-skills',
  codexPricing: 'https://learn.chatgpt.com/docs/pricing',
  codexPlugins: 'https://learn.chatgpt.com/docs/plugins',
  workbuddy: 'https://cloud.tencent.com/product/workbuddy',
  claude: 'https://code.claude.com/docs/en/desktop-quickstart',
  claudeSkills: 'https://code.claude.com/docs/en/skills'
};

// Teaching example only: this string does not install a skill in any host.
const materialCheckSkill = `---
name: course-material-check
description: 学员要求检查练习通知或活动材料时，依据指定原材料核对事实、缺项和输出文件；不处理真实个人信息。
---

1. 先确认学员指定的工作目录、输入文件和输出文件名，只读取指定材料。
2. 核对活动名称、日期、时间、地点、参加对象与需要准备的东西；逐项引用原文位置。
3. 材料没写的信息标为“原文未提供”，不得补造日期、费用或联系方式。
4. 先说明发现的问题，再把检查结果另存为学员指定的新 Markdown 文件；不覆盖输入。
5. 报告实际读取的技能文件、输入路径、输出路径与未检查项，交给学员打开核对。
6. 本技能只包含文字说明，不安装软件、不调用付费 API、不对外发送。`;

export const toolStartLessons = [
  {
    id: 'kimi-code-cli-start',
    group: 'skills',
    title: 'Kimi CLI 入门：进入练习目录，调用一个 Skill',
    summary: '使用当前 Kimi Code CLI，先读一份材料，再保存并检查一个文字技能。',
    goal: '在本人电脑上确认 Kimi Code CLI 的工作目录，用一个明确调用的 Skill 生成检查记录，并打开实际文件。',
    intro: '终端是输入命令的窗口，CLI 是通过这个窗口启动的工具。当前产品名是 Kimi Code CLI，启动命令仍是 kimi；旧 Python 版 kimi-cli 已归档。它能读取和修改本机文件，所以先把任务限制在一个练习目录。Kimi App、Kimi Work 与 Kimi Code 的入口和权益分别确认，App 能聊天不代表 Code 已有可用额度。',
    time: 35,
    device: 'Windows / macOS / Linux；在电脑执行',
    level: '工具入门',
    prerequisites: ['first-task', 'files-check'],
    practiceEstimate: '先做一页材料和一份检查记录；首次安装、登录、额度核对与排错另安排时间。',
    timeScope: '本页分钟数是阅读与短练习的规划估算，未经学员计时，不包含安装和下载等待。',
    devices: {
      windows: '当前官方支持 Windows。打开 PowerShell，按本课官方脚本安装；首次运行前需准备 Git for Windows，CLI 使用随它安装的 Git Bash。不要把旧教程的 WSL 当作本课前提。安装后重新打开 PowerShell，运行 kimi --version。',
      mac: 'macOS 在“终端”中按官方脚本安装，脚本不要求预先安装 Node.js。Linux 也有同一官方脚本路线。若选择 npm 路线，当前文档另要求 Node.js 22.19.0+；已有环境才选这条，不必两种都装。',
      phone: '手机可以阅读本课和完成本人授权页面，但终端、练习目录与实际文件任务在电脑上完成。手机上的 Kimi 聊天不会自动连接这台电脑的 CLI。'
    },
    steps: [
      ['先准备本人账号和练习材料', '沿用上一课的 AI练习/input 与 output。把一段无个人信息的活动材料保存为 input/练习材料.txt，重新打开确认中文和真实扩展名。登录和授权由本人完成；先查看自己是否已有 Kimi Code 可用权益，条件未具备时记录“待完成”，不用为了阅读本课立即付费。'],
      ['按当前官方路线安装', '打开本课 Kimi Code CLI 原仓库与入门文档，选一种安装方式。下方脚本会下载并安装软件，读过来源和说明后由本人在对应终端运行。Windows 首次运行还需 Git for Windows。已有旧 Python CLI 时先读迁移指南，保留原数据，不照旧 uv 安装教程重复安装。'],
      ['进入目录，再启动 kimi', '重新打开终端，先运行 kimi --version，记录实际版本。将下方 cd 命令的路径替换为自己 AI练习 的完整路径，进入后再运行 kimi。这样会话从这份练习材料所在的目录开始，而不是随意从桌面或用户目录开始。'],
      ['在 CLI 内登录并核对用量', '在 kimi 的输入框输入 /login，选择本人已有的 Kimi Code OAuth 权益，由本人打开授权页面。Kimi 开放平台 API Key 是另一个按量计费渠道，不能把它当作会员额度。登录后用 /usage 看当前用量，用 /status 核对目录、模型与权限；本课无需开启额外付费用量。'],
      ['先完成一个只读小任务', '发送下方“先确认材料”提示词，核对它报告的目录、文件名和三条原文。读不到就先查路径与文件；三条一致后，再要求把活动要点另存 output/活动要点-v1.md，打开确认真实存在。'],
      ['保存一个只有文字的 Skill', '先使用自己的用户级目录：默认是用户主目录下的 .kimi-code/skills/course-material-check/SKILL.md。Windows 对应用户文件夹中的 .kimi-code。若自己设过 KIMI_CODE_HOME，以实际目录为准。用纯文本编辑器保存下方 SKILL.md 内容；同名文件已经存在时先查看并另选名字，同时改 name 与后面的调用名。用户级技能会对其他项目可见，任务仍只处理本次练习目录。'],
      ['显式调用，再确认文件', '重新进入一次会话，输入 /skill:course-material-check 并带上本课检查要求。先看自动补全是否发现该技能，再查看实际读取路径、执行步骤和输出路径。项目级也支持 .kimi-code/skills 与 .agents/skills，但项目根目录按官方规则确认，不把用户目录、项目目录与 Kimi Work 插件目录混用。'],
      ['留下本次练习记录', '打开 output/材料检查-kimi-v1.md，把一条检查结论与输入原文对照，确认缺项没有被编造。记下版本、登录渠道、技能路径、输出路径和未完成项。会调用一个文字技能后，再考虑带脚本或外部服务的技能。']
    ],
    commands: [
      {title: 'macOS / Linux 官方安装脚本：读过官方说明后，在终端运行', text: 'curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash'},
      {title: 'Windows 官方安装脚本：读过官方说明后，在 PowerShell 运行', text: 'irm https://code.kimi.com/kimi-code/install.ps1 | iex'},
      {title: '安装后验证，再进入自己的练习目录：先替换完整路径', text: 'kimi --version\ncd "你的AI练习完整路径"\nkimi'},
      {title: '以下是 SKILL.md 的纯文本内容：保存为文件，不作为终端命令运行', text: materialCheckSkill}
    ],
    prompts: [
      {
        title: '先确认材料，再生成一份新文件',
        text: '先只读，不修改文件。请报告当前工作目录，读取 input/练习材料.txt，引用3条原文并标明位置。材料没写的信息请标“原文未提供”。我核对后，再把活动要点另存 output/活动要点-v1.md，不覆盖输入。完成后给实际输出路径和未检查项。'
      },
      {
        title: '在 Kimi Code CLI 输入框中显式调用本课 Skill',
        text: '/skill:course-material-check 请检查 input/练习材料.txt，只使用这份材料；把结果另存 output/材料检查-kimi-v1.md。先报告实际读取的 SKILL.md 路径，再列活动名称、日期、时间、地点、参加对象与准备事项的原文依据及缺项。不覆盖已有文件，不联网，不对外发送；文件已经存在时先给新文件名。'
      }
    ],
    practice: '本人完成可用条件核对后，在同一练习目录做只读核对、生成一份活动要点，并显式调用文字 Skill 生成检查记录。亲手打开两份输出，保留一条原文对照。账号或环境不可用时，只保存准备记录与 Skill 文本，调用和文件生成写“未运行”。',
    reflection: [
      'kimi --version 成功、登录成功、技能被发现、检查文件可打开，分别证明了什么？你完成到了哪一步？',
      '从检查记录中选一条结论，指出对应原文；一个缺失字段被怎样处理？',
      '换到 Codex 或 Harness 时，哪些文字规则可以复用，哪些目录、调用入口和执行依赖必须重新确认？'
    ],
    reflectionGuide: '写出实际版本、工作目录、技能路径和输出路径，再引用一条原文对照；没有执行的步骤明确标为未运行。',
    checks: [
      '我使用当前 Kimi Code CLI，记录了实际版本、本人登录渠道与可用额度状态。',
      '我确认会话在自己的练习目录，并核对了三条输入原文。',
      '我保存了完整文字 Skill，记录实际位置，并用 /skill:名称 显式调用。',
      '我打开了实际输出，核对一条结论和缺项处理，保留原始材料。'
    ],
    quiz: {
      q: 'Kimi App 能正常聊天，是否说明 Kimi Code CLI 可以直接使用同一额度？',
      options: ['可以，安装后一定无限使用', '还要核对本人 Code 权益与登录渠道；开放平台 API 另行计费', '必须先把 API Key 发到聊天里'],
      answer: 1,
      explain: 'Code 会员权益和开放平台 API 是不同渠道。当前权益、共享额度与限制以本人计划和官方用量页面为准。'
    },
    troubles: [
      ['终端找不到 kimi', '先重开终端并核对官方安装结果和 PATH；已装旧 Python 版时读迁移指南，记录实际命令来源，不通过反复混装猜测。'],
      ['Windows 提示 shell 不存在', '确认 Git for Windows 与 Git Bash 已安装。自定义安装位置按官方 KIMI_SHELL_PATH 说明处理；不改用来历不明脚本。'],
      ['登录了，但没有可用额度', '检查 Code 会员权益、/usage 与所选平台。普通聊天可用不证明 Code 权益可用；开放平台 API 的余额也不等同会员额度。记录状态后保留准备成果。'],
      ['输入 /skill:名称 后没有发现技能', '核对新版本的实际用户目录、SKILL.md 大小写、name/description 元数据和纯文本格式，再开新会话。旧 ~/.kimi/skills 不能直接当作新产品默认位置。'],
      ['显示用了技能，却没有文件', '先看输入路径、写入权限和第一处错误。技能名字可见与执行完成分别判断，输出不存在就记录未完成。']
    ],
    sources: [
      ['Kimi Code CLI 当前官方仓库', U.kimiCode],
      ['Kimi Code CLI 安装、首次登录与计费渠道', U.kimiCodeStart],
      ['Kimi Code CLI：Skill 目录、格式与调用', U.kimiCodeSkills],
      ['Kimi Code CLI：/usage、/status 与内置命令', U.kimiCodeCommands],
      ['Kimi Code：会员权益与额外用量', U.kimiCodeMembership],
      ['旧 kimi-cli 到 Kimi Code CLI 的迁移', U.kimiCodeMigration]
    ],
    notes: '公开原文核对：2026-10-10。旧 MoonshotAI/kimi-cli 已归档；本课按新的 MoonshotAI/kimi-code 与当前 Code Docs 编写。当前新会员 Plus 及以上包含 Code 权益，旧会员按原计划核对，额度可能共享。本站只核对资料，没有代学员安装、登录、开通、充值或执行付费模型请求。'
  },
  {
    id: 'codex-app-start',
    group: 'skills',
    title: 'Codex App 入门：选择目录，做小任务，再复用 Skill',
    summary: '在当前官方桌面 App 的 Codex 入口中，读取自己的材料、生成新文件，并明确调用一个 Skill。',
    goal: '找到本人桌面 App 内的 Codex，确认本地练习目录，复用一项文字 Skill 并打开检查结果。',
    intro: '本站沿用“Codex App 入门”这个熟悉的称呼。当前官方快速入门的下载产品是 ChatGPT 桌面 App，在产品下拉菜单选择 Codex，进入本地文件任务。普通 ChatGPT 对话、ChatGPT Work 和 Codex 各有入口；本课明确使用 Codex。App、CLI 和 IDE 是不同操作入口，Skill 的加载位置与执行条件仍要在当前入口确认。',
    time: 30,
    device: 'Windows / macOS；Linux 按官方安装指南',
    level: '工具入门',
    prerequisites: ['files-check', 'first-skill'],
    practiceEstimate: '完成只读核对、一份新文件与一次文字 Skill 调用；下载安装、认证与排错另安排时间。',
    timeScope: '本页分钟数是阅读与短练习的规划估算，未经学员计时，不包含下载、登录和模型等待。',
    devices: {
      windows: '从当前官方快速入门或下载页进入 Windows 版本，按本人设备要求安装并登录。当前官方桌面路线支持 Windows，不把 WSL 作为使用 App 的默认前提。文件任务在选择的本地目录中完成。',
      mac: '从当前官方快速入门进入 macOS 下载，并核对所需系统与芯片。Linux 学员按官方 Linux 桌面指南确认发行版与安装方式，不照搬 Mac 安装包。',
      phone: '手机可以阅读与核对资料；本课的安装、本地目录选择和文件检查在电脑上完成。手机看到同步会话，不证明能读取这台电脑当前目录。'
    },
    steps: [
      ['从官方入口安装，并由本人登录', '打开本课官方快速入门，选择与系统匹配的桌面版本。本人使用 ChatGPT 账号登录，查看当前计划、可用模型与额度；可用性按账号实际显示确认。订阅用量与 API 账单分开，本课不要求开通 API 或充值。'],
      ['明确选择 Codex', '当前官方桌面 App 可在 ChatGPT 产品下拉菜单中选择 Codex，再从 New chat 开始。已经显示 Codex 的版本直接进入新对话。按钮文案有变化时按官方快速入门的功能位置查找，先确认当前模式，不在普通聊天中假定本地 Skill 已加载。'],
      ['打开自己的本地练习目录', '创建或打开一个本地项目，选择 AI练习 文件夹，把它作为当前主要目录。保留 input/练习材料.txt 与 output；附加多个文件夹时重新核对主要目录，因为自动发现技能与项目指令以主要目录为准。先选本地文件任务，不必建立云环境或连接 GitHub。'],
      ['先只读，再生成一个新文件', '发送下方只读提示词，核对工作目录、输入路径和三条原文。确认一致后，请它另存 output/活动要点-codex-v1.md。查看文件改动，再在文件管理器或 App 文件预览中打开；聊天中的文件名不是文件存在的证据。'],
      ['把一项文字 Skill 放到 Codex 的位置', '把前一课的 course-material-check 文件夹完整复制到当前主要练习目录的 .agents/skills/course-material-check/，直接保留其中 SKILL.md。没有前一课文件时，可保存本课相同的纯文本示例。已有同名技能先查看并另选名字。Codex 用户级位置为 ~/.agents/skills；不要把 Kimi Work 的插件位置当作 Codex 位置。'],
      ['在 Codex 中显式调用', '在当前 Codex 输入框中明确提及 $course-material-check，使用下方检查任务。核对它实际读取的 SKILL.md 路径；名称可见但正文没有读取时继续排查。官方说明新技能可自动发现，当前会话没显示时重开会话或重启 Codex，再检查主要目录。'],
      ['打开结果，核对复用是否有效', '打开 output/材料检查-codex-v1.md，和 Kimi 或 Harness 的同材料记录比较一项事实、一项缺失字段与输出格式。分别记录每个工具已执行与未执行的检查；另一个工具成功不能替这个工具证明。'],
      ['再学正式安装和资源技能', '完成文字技能后，进入“在自己的 Codex 里安装一项，再显式试用”。插件通过当前 Plugins 入口处理，纯 Skill 通过当前安装器或本地发现位置处理；脚本、模板和 references 要随完整文件夹保留，外部服务与计费另核对。']
    ],
    commands: [
      {title: '没有现成文件时：把这些内容保存到 .agents/skills/course-material-check/SKILL.md，不作为终端命令运行', text: materialCheckSkill}
    ],
    prompts: [
      {
        title: '第一次 Codex 本地文件任务',
        text: '请先只读报告当前主要工作目录与 input/练习材料.txt 的实际路径，引用3条原文并标明位置；不读其他目录。等我核对后，再将活动要点另存 output/活动要点-codex-v1.md，不覆盖输入或已有输出。完成后报告实际文件路径、改动和未检查项，我会打开核对。'
      },
      {
        title: '在 Codex 输入框中显式调用文字 Skill',
        text: '$course-material-check 请先报告实际读取的 SKILL.md 路径，再检查 input/练习材料.txt，只用这份材料。将活动名称、日期、时间、地点、参加对象与准备事项逐项列出原文依据；缺项写“原文未提供”。另存 output/材料检查-codex-v1.md，不覆盖已有文件，不联网、不安装软件、不对外发送。交付实际路径、已完成检查与未检查项。'
      }
    ],
    practice: '在本人已有可用条件下，打开本地练习目录，完成三条原文核对与一份新文件。接入一个文字 Skill，显式调用后打开检查记录，再与同材料的另一工具结果比较一项。条件不可用时保存目录、Skill 文本和状态记录，实际调用标“未运行”。',
    reflection: [
      '你怎样确认当前是 Codex、本地执行目录正确、材料确实被读取？给出三种实际证据。',
      '同一份 Skill 从 Kimi Code 转到 Codex，保留了哪些规则，改变了哪个位置和调用入口？',
      '如果下一项 Skill 带脚本、模板或 API，你还要确认哪些资源和费用，才能判断它在当前电脑上可用？'
    ],
    reflectionGuide: '记下当前产品模式、主要目录、技能路径、明确调用文字与实际输出；引用一条检查结论和对应原文，未执行的对比不要写成成功。',
    checks: [
      '我从官方入口使用本人账号，知道当前 Codex 入口与可用额度状态。',
      '我确认当前主要目录，并用三条原文验证了读取结果。',
      '我把完整文字技能放到 Codex 的实际发现位置，并显式提及了它。',
      '我打开了真实输出，核对事实、缺项和原稿保留，记录其他工具的比较状态。'
    ],
    quiz: {
      q: '把一个 Skill 文件夹复制到 Codex 后，怎样才算完成本课？',
      options: ['文件夹名字出现就足够', '明确调用，确认读到说明，再打开实际输出核对', '在普通 ChatGPT 对话中粘贴同一段文字即可证明'],
      answer: 1,
      explain: '本课分别确认本地发现、实际调用、文件存在和内容核对。复制或名称可见只能说明其中一部分。'
    },
    troubles: [
      ['下载页或 App 名称与旧教程不同', '以本课当前官方快速入门为准。当前桌面产品称 ChatGPT App，内部可选 Codex；不要从相似名称的第三方下载替代。'],
      ['登录后看不到 Codex 或可用模型', '检查当前版本、本人账号、计划和官方功能可用性说明。下载或登录成功不能替代权益核对，先保留准备记录。'],
      ['Skill 没有显示', '核对主要目录、.agents/skills 下直接包含 SKILL.md 的文件夹、name/description 与纯文本格式。重开会话或重启后仍不可见时记录实际路径和版本，不把它移到任意目录试错。'],
      ['只给了聊天文本，没有文件', '确认当前任务已选本地目录且可写输出，要求报告第一处失败与缺少的能力。自己保存聊天文本时注明是手工保存，不能当作 Codex 已写文件。'],
      ['同一个 Skill 在另一工具成功，这里却失败', '检查当前工具名、资源相对路径、执行依赖和文件权限。文字说明可复用，执行兼容性仍由各工具的实际练习分别证明。']
    ],
    sources: [
      ['OpenAI：当前桌面安装、登录与 Codex 快速入门', U.codexStart],
      ['OpenAI：桌面 App 与 Codex 入口', U.codexApp],
      ['OpenAI：本地项目与主要目录', U.codexProjects],
      ['OpenAI：Codex Skill 格式、目录与显式调用', U.codexSkills],
      ['OpenAI：订阅用量与 API 计费边界', U.codexPricing],
      ['OpenAI：插件入口与连接条件', U.codexPlugins]
    ],
    notes: '公开原文核对：2026-10-10。OpenAI 官方资料当前把桌面产品称为 ChatGPT App，并在其中提供 Codex。本文介绍 Codex 的本地 Skill 路线，没有把普通 ChatGPT 上传文件或项目聊天视作 Codex 安装。本站未代学员登录、安装插件、购买额度或执行外部服务；账号能力和输出需本人核对。'
  }
];

export const toolStartStages = [
  {
    id: 'tool-kimi-app',
    title: '1 · Kimi App：提问、读材料、做一份文件',
    summary: '先在本人 App 或官网完成一件小事，再到受支持的电脑 Work 入口选择练习文件夹。手机聊天与电脑本地任务分别确认。',
    lessonIds: ['first-task', 'files-check', 'kimi-work'],
    checks: ['本人登录可用入口，能提问、追问并保存结果。', '确认上传或本地读取的材料范围，核对三条原文。', '在支持的 Kimi Work 中选择练习目录，打开一份实际新文件；不支持时记录待完成原因。'],
    optional: false,
    links: [{title: 'Kimi 官方下载', url: U.kimiDownload}, {title: 'Kimi Work 入口与设备要求', url: U.kimiWork}, {title: 'Kimi Agent 技能入口', url: U.kimiAgentSkills}]
  },
  {
    id: 'tool-kimi-cli',
    title: '2 · Kimi CLI：从终端启动，明确调用 Skill',
    summary: '使用当前 Kimi Code CLI。本人核对权益与 Windows / Mac / Linux 环境，进入练习目录，先只读，再调用一个文字技能。',
    lessonIds: ['kimi-code-cli-start'],
    checks: ['记录实际 CLI 版本、本人登录渠道与工作目录。', '知道 Kimi Code 会员权益与开放平台 API 计费不同。', '用 /skill:名称 明确调用一项，打开检查记录并核对缺项。'],
    optional: false,
    links: [{title: '当前 Kimi Code CLI 原仓库', url: U.kimiCode}, {title: '官方安装与首次启动', url: U.kimiCodeStart}, {title: 'Code Skill 目录与调用', url: U.kimiCodeSkills}]
  },
  {
    id: 'tool-harness',
    title: '3 · DeepSeek Harness：工作区、内置技能与文件',
    summary: '按官网当前设备入口使用 Harness，确认本人模型配置与用量。先用内置办公技能完成短任务，再理解自己的 Skill 放在哪里。',
    lessonIds: ['harness-desktop', 'first-skill'],
    checks: ['选匹配系统的官方版本和本人练习工作区，认证与计费渠道按当前引导核对。', '明确请求一项当前实际可用的内置技能，记录读取和执行结果。', '打开真实文档或 PPT；本地 Skill 按 .dsh/skills 或 .agents/skills 等官方发现规则分别确认。'],
    optional: false,
    links: [{title: 'Harness 官网与当前桌面下载', url: U.harness}, {title: '官方桌面文档', url: U.harnessDesktop}, {title: '模型与工作区指南', url: U.harnessGuide}, {title: '本地 Skill 发现规则', url: U.harnessSkills}]
  },
  {
    id: 'tool-codex',
    title: '4 · Codex：本地目录、小任务与一个 Skill',
    summary: '在当前官方桌面 App 中明确选择 Codex。本人登录，打开主要练习目录，生成新文件，再按 Codex 的目录与提及方式调用技能。',
    lessonIds: ['codex-app-start'],
    checks: ['确认当前 Codex 模式、本人权益与本地主要目录。', '先核对读取结果，再生成并打开一份实际新文件。', '在 Codex 中显式提及一项 Skill，确认技能路径、输出和内容；订阅与 API 费用分别记录。'],
    optional: false,
    links: [{title: '当前官方快速入门', url: U.codexStart}, {title: 'Codex 本地 Skill', url: U.codexSkills}, {title: '本人计划与用量说明', url: U.codexPricing}]
  },
  {
    id: 'tool-skill-reuse',
    title: '5 · Skill 复用：自己写一项，再检查跨工具使用',
    summary: '先整理一项自己反复用的文字规则，再学正式安装与资源完整性。Kimi Work、Kimi Code、Harness、Codex 的入口和位置分别核对。',
    lessonIds: ['own-skill', 'skill-codex-install', 'skill-cross-agent', 'skill-personal-kit'],
    checks: ['说明技能何时使用、需要哪些输入、按什么标准检查。', '保留完整文件夹和相对资源，记录每个宿主的实际位置与调用方式。', '在自己可用的工具中换两份材料测试；另一宿主尚未执行时标未运行，形成个人记录。'],
    optional: false,
    links: [{title: 'Kimi Code Skills', url: U.kimiCodeSkills}, {title: 'Harness Skill 目录', url: U.harnessSkills}, {title: 'OpenAI Skill 格式与安装', url: U.codexSkills}, {title: 'OpenAI 插件入口', url: U.codexPlugins}]
  },
  {
    id: 'tool-workbuddy-optional',
    title: '选修 · WorkBuddy：用同一个办公任务比较',
    summary: '主线已有可用文件后，再按需要体验 WorkBuddy。用同一材料比较文档、表格、修改方便程度和当前费用。',
    lessonIds: ['workbuddy', 'wb-feature-map', 'wb-documents'],
    checks: ['按本人设备、账号和当前官方条件选择入口。', '用同一材料完成一份真实文件并打开核对。', '说明增加这个工具解决了哪一步问题，留下实际比较记录。'],
    optional: true,
    links: [{title: 'WorkBuddy 官方入口', url: U.workbuddy}]
  },
  {
    id: 'tool-claude-optional',
    title: '选修 · Claude Code：条件具备再试工作区与 Skill',
    summary: '本人先核对支持地区、账号和计划。条件具备时用同一份练习材料做一个文件任务，Skill 按 Claude Code 自己的官方路线处理。',
    lessonIds: ['claude-code'],
    checks: ['本人核对当前访问与账号条件，不把其他工具的权益当作 Claude 权益。', '选择练习目录，完成一个实际文件任务或记录条件不足。', '按 Claude Code 官方说明处理技能入口、目录与依赖，不能照抄 Codex 调用方式。'],
    optional: true,
    links: [{title: 'Claude Code 桌面快速入门', url: U.claude}, {title: 'Claude Code Skills', url: U.claudeSkills}]
  }
];
