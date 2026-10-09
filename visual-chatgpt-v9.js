// Official article <img> media checked on 2026-10-09. Preserve publisher URLs.
// Public English project examples; these do not prove a learner account was used.
const CHECKED = '2026-10-09';
const PROJECTS = 'https://help.openai.com/en/articles/10169521-projects-in-chatgpt';
const NEW_PROJECT = 'https://images.ctfassets.net/j22is2dtoxu1/intercom-img-af13531f23cdd675621b4353/ccc7528996947a4d4997b3c9d6934694/13d3472c-96a5-4a98-93ec-3ff3872cb3cd?q=80&fm=webp&w=450';
const PROJECT_SETTINGS = 'https://images.ctfassets.net/j22is2dtoxu1/intercom-img-dfd7518cb9b5ab4588cb814d/6ca9c53aec99d74eda875f16468276a2/Screenshot_2026-02-24_at_11.48.11%C3%A2__AM.png?q=80&fm=webp&w=1344';
const PROJECT_FILES = 'https://images.ctfassets.net/j22is2dtoxu1/intercom-img-64ce53ad985cb2ce9e519dec/e98675d35f6171a2b4c763ec83b7ce7b/1377c26d-c319-4567-9c99-547ee9661ff3?q=80&fm=webp&w=1180';
const m = (src, title, caption, scope, steps, lookFor) => ({kind: 'image', src, title, caption, sourceUrl: PROJECTS, sourceLabel: 'OpenAI 官方：ChatGPT 项目说明', scope, steps, lookFor, checkedAt: CHECKED});

export const chatgptVisualsByLesson = {
  // No account sign-in or ordinary first-chat screenshot was established in the bounded sources.
  'chatgpt-start': [],
  'chatgpt-files-voice': [
    m(PROJECT_SETTINGS,
      'ChatGPT 项目内：找输入框右侧的语音入口',
      '图中输入框右侧有麦克风和圆形波形按钮。口语对话看波形语音入口；麦克风听写与连续语音对话用途不同。进入后按自己客户端提示处理麦克风权限，用短句完成练习。',
      '官方英文项目场景的入口位置辅助图；没有展示语音通话、附件选择或上传完成。网页、手机与账号中的入口和可用性以当前界面为准。',
      [3],
      ['输入框右侧圆形波形按钮', '旁边独立的麦克风按钮', '本图是项目内的新聊天框'])
  ],
  'chatgpt-projects': [
    m(NEW_PROJECT,
      'ChatGPT：在侧栏找到新建项目',
      '在侧栏找到 New project（新建项目），再按当前窗口填写“英语备课练习”名称。官方图展示的是入口与示例项目列表，名称填写和创建结果仍在自己的账号中核对。',
      '官方英文侧栏示例图；没有创建表单、登录流程或本课项目创建结果。',
      [1],
      ['列表顶部的 New project', '下方已有项目的名称与图标']),
    m(PROJECT_FILES,
      'ChatGPT：检查项目中的文件与对话',
      '官方示例项目右上角显示文件数量，下方有新聊天框和已保存的项目对话。添加自己的匿名课文后，打开项目的资料列表核对文件名，再明确要求 AI 使用该文件。',
      '官方英文共享项目示例，图中是 Q4 Planning 和 4 个文件；仅辅助识别文件与对话位置，没有展示文件选择、上传动作或读取成功。',
      [1],
      ['右上角的 4 files 文件数量', '项目名称下面的新聊天框', '下方同一项目的对话列表']),
    m(PROJECT_SETTINGS,
      'ChatGPT：从项目菜单进入项目说明',
      '打开项目右上角的省略号菜单，找到 Project settings（项目设置），再按当前窗口填写本项目的备课规则。保存后用一个简单教案核对是否遵循。',
      '官方英文项目设置入口截图；没有显示说明编辑框或保存结果，项目说明与 Skill 安装分开核对。',
      [2],
      ['右上角的省略号菜单', '展开后的 Project settings'])
  ]
};
