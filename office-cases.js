export const officeCases = [
  {
    "id": "office-case-english",
    "topic": "english",
    "title": "A2 成人英语：让 AI 成为点餐练习伙伴",
    "basis": "依据 British Council《My AI teacher》的两个角色提示与教师示范流程改编。下面的提示词与示范对话是教学编辑示例，不是逐字转载或本次产品生成结果。",
    "input": "学习者：虚构成人角色 Alex；程度 A2；主题 ordering food；目标：能说出需求、礼貌请求与价格问题。准备 6 个词：menu, soup, rice, water, bill, please。",
    "prompt": "你是一位耐心的英语练习伙伴。我以虚构成人 Alex 的身份练习，英语程度 A2。场景是餐厅点餐。每次只问一个短问题，等我回答后再继续。只使用基础词汇；若我说不懂，先用更简单英语解释，仍不懂再用中文提示。不要询问真实住址、姓名或联系方式。完成五轮后，用中文指出一处可以改进的表达。\n第二个任务：为 A2 成人设计餐厅点餐词汇练习：3 道配对、2 道填空、1 道情景句。先不给答案，等我提交作答后再核对。",
    "sampleOutput": {
      "status": "人工编写的示范片段，实际 AI 回答会不同。",
      "dialogue": [
        "AI: What would you like to eat?",
        "Alex: I want soup.",
        "AI: Good. You can say, “I'd like some soup, please.” Would you like water?",
        "Alex: Yes, please."
      ],
      "exercise": [
        "Match: menu → 菜单；bill → 账单；water → 水。",
        "I'd like some soup, ______.（完成后再请求答案）",
        "情景：你想知道这道菜的价格，说一句礼貌的英文。"
      ],
      "expectedCheck": "情景题可接受 “How much is it?”；教师仍需核对题目是否适合本班。"
    },
    "walkthrough": [
      "教师先从官方页面下载或查看 worksheet，定位第二页的两种角色。",
      "用虚构角色明确英语等级和话题，将上面的改编提示粘贴到本校批准的聊天工具。",
      "完成五轮，每次只回答当前问题；遇到不懂的词，主动请求简化。",
      "发第二段任务，先做练习，再请求答案；教师检查语法与难度。",
      "保存一段去除个人信息的对话，并记录自己学会的一句表达。"
    ],
    "acceptance": [
      "AI 每轮只问一个问题，并等待答复。",
      "练习始终围绕点餐与 A2 基础表达。",
      "先作答后给答案；教师能复核题目与答案。",
      "学员能独立说出一句礼貌点餐句和一句问价句。"
    ],
    "sources": [
      {
        "title": "My AI teacher 官方教案页",
        "url": "https://www.teachingenglish.org.uk/teaching-resources/teaching-secondary/lesson-plans/pre-intermediate-a2/my-ai-teacher"
      },
      {
        "title": "My AI teacher student worksheet，第 2 页",
        "url": "https://www.teachingenglish.org.uk/sites/teacheng/files/My%20AI%20teacher%20student%20worksheet%20%281%29.pdf"
      },
      {
        "title": "My AI teacher lesson plan，第 2–3 页",
        "url": "https://www.teachingenglish.org.uk/sites/teacheng/files/My%20AI%20teacher%20lesson%20plan.pdf"
      }
    ],
    "executionStatus": "NOT_RUN：本次未登录聊天工具、未开展课堂；流程有官方依据，示范片段为人工编写。"
  },
  {
    "id": "office-case-ppt",
    "topic": "ppt",
    "title": "PPT Master：三页课件测试稿与一轮修改",
    "basis": "依据原项目 Windows Installation Guide 的 Hello World 最小测试和中文快速入门改编；用三页先学会交付与编辑，再做复杂课件。",
    "input": "主题：Hello World；页 1 封面；页 2 三句欢迎语；页 3 今日练习。受众是初学者，16:9，中文说明，深蓝标题，白底。",
    "prompt": "请使用 PPT Master 快速生成一份 3 页测试 PPT，主题 Hello World，无需额外确认。第 1 页封面；第 2 页列出 Hello / Good morning / Thank you 三个短语及中文解释；第 3 页给出一个两人打招呼练习。16:9，白底深蓝标题，保留可编辑文字和形状。每页备注补一句讲解。交付时告诉我活动项目目录和 .pptx 的完整路径。",
    "sampleOutput": {
      "status": "人工编写的预期内容，不代表本次已经生成文件。",
      "slides": [
        {
          "page": 1,
          "title": "Hello World",
          "body": "用三句话开始第一堂英语课",
          "notes": "先请学员观察标题，再一起朗读 Hello。"
        },
        {
          "page": 2,
          "title": "三句欢迎语",
          "body": "Hello — 你好；Good morning — 早上好；Thank you — 谢谢",
          "notes": "带读三句，再请学员选择一种日常场景。"
        },
        {
          "page": 3,
          "title": "开口练习",
          "body": "两人一组：A 打招呼，B 回应；交换角色再试一次。",
          "notes": "观察是否双方都开口，并给出一句具体反馈。"
        }
      ],
      "expectedArtifact": "<活动项目>/exports/<项目名>_<时间戳>.pptx；以 Agent 报告的实际路径为准。"
    },
    "walkthrough": [
      "先按当前原项目中文安装指南准备 Python 3.10+、依赖和已鉴权 Agent host；本站本次未执行这些操作。",
      "在可写工作目录启动 Agent，提供上面的内容简报，避免把安装缓存当工作目录。",
      "让 Agent 交付文件和完整路径；快速模式不要求有 svg_final 预览目录。",
      "用 PowerPoint 打开 PPTX，选中第二页文字，修改中文解释，保存副本。",
      "再提出一条明确修改：“把第三页标题改成两人对话，不改其他内容”，对照修改前后。"
    ],
    "acceptance": [
      "PPTX 存在且能在自己的 PowerPoint 打开。",
      "恰有 3 页；英文短语与中文释义正确。",
      "文字与形状可分别选中编辑。",
      "每页有讲解备注；标题未重叠或截断。",
      "第二轮只实现所要求的局部修改。"
    ],
    "sources": [
      {
        "title": "PPT Master 中文快速入门",
        "url": "https://github.com/hugohe3/ppt-master/blob/main/docs/zh/getting-started.md"
      },
      {
        "title": "Windows Installation Guide，Step 5 最小示例",
        "url": "https://github.com/hugohe3/ppt-master/blob/main/docs/windows-installation.md"
      },
      {
        "title": "Microsoft：在 PowerPoint 中创建演示文稿",
        "url": "https://support.microsoft.com/zh-cn/powerpoint/training/create-a-presentation-in-powerpoint"
      },
      {
        "title": "原作者真实视觉案例：中国早餐图鉴",
        "url": "https://hugohe3.github.io/ppt-master-examples/viewer.html?project=ppt169_pixel_breakfast_atlas"
      }
    ],
    "executionStatus": "NOT_RUN：本次未安装 PPT Master、未生成或打开 PPTX；样例内容与验收要求可用于课堂实操。"
  },
  {
    "id": "office-case-workbuddy",
    "topic": "workbuddy",
    "title": "WorkBuddy：六行销售表变成月度图表",
    "basis": "依据官方《实践三：数据分析并可视化》的导入、描述指标和图表、预览流程改编；输入为虚构训练数据，sales（销售额）和profit（利润）的单位均为人民币元，预期数字可手算。",
    "input": "month,product,sales,profit\n2026-01,A,1000,200\n2026-01,B,800,120\n2026-02,A,1200,260\n2026-02,B,900,150\n2026-03,A,1100,230\n2026-03,B,1000,180",
    "prompt": "读取我提供的 sales-demo.csv。按月份汇总 sales 和 profit，再按 product 汇总。生成一张月销售额柱状图、一张月利润折线图和一份简短分析报告。输出放到当前练习文件夹的 output 目录。把原始数据、统计结果与图表分别保留；报告注明数据是虚构训练数据，不要补入外部市场数字。完成后给出产物路径与统计表，方便我验收。",
    "sampleOutput": {
      "status": "人工手算的预期值，不代表 WorkBuddy 已执行。",
      "monthly": [
        {
          "month": "2026-01",
          "sales": 1800,
          "profit": 320
        },
        {
          "month": "2026-02",
          "sales": 2100,
          "profit": 410
        },
        {
          "month": "2026-03",
          "sales": 2100,
          "profit": 410
        }
      ],
      "byProduct": [
        {
          "product": "A",
          "sales": 3300,
          "profit": 690
        },
        {
          "product": "B",
          "sales": 2700,
          "profit": 450
        }
      ],
      "total": {
        "sales": 6000,
        "profit": 1140
      },
      "sampleConclusion": "2 月销售额比 1 月增加 300；3 月与 2 月相同。不能仅凭这六行数据判断长期市场趋势。"
    },
    "walkthrough": [
      "建立独立练习文件夹，把上述 CSV 保存进去；不要使用真实客户或公司数据。",
      "在 WorkBuddy 新建任务，选择这个工作空间；将 CSV 拖入输入框或引用实际文件路径。",
      "发送上面的完整要求，先观察其是否读对列名和月份。",
      "在右侧产物查看统计表、图表、报告，再在工作空间文件里核对保存位置。",
      "逐项与手算预期值比对；若月份乱序或汇总错误，在同一对话中指出具体月份和应有结果。"
    ],
    "acceptance": [
      "总销售额为 6000，总利润为 1140。",
      "月销售额依次为 1800、2100、2100；月利润为 320、410、410。",
      "A、B 产品销售额分别为 3300 和 2700。",
      "图表月份顺序正确，标题、坐标轴和数值可理解。",
      "报告注明虚构训练数据；所有交付文件可打开且位于 output。",
      "金额单位与输入一致，不补真实市场或客户资料。"
    ],
    "sources": [
      {
        "title": "WorkBuddy：实践三：数据分析并可视化",
        "url": "https://www.codebuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Practice-Cases/Practice-Three"
      },
      {
        "title": "WorkBuddy：创建任务",
        "url": "https://www.codebuddy.cn/docs/workbuddy/Create-Task"
      },
      {
        "title": "WorkBuddy：结果查看",
        "url": "https://www.codebuddy.cn/docs/workbuddy/Results"
      }
    ],
    "executionStatus": "NOT_RUN：本次未登录 WorkBuddy、未上传数据或创建任务；预期数值已逐项手算核对。",
    "inputNotes": "以下是可直接复制保存的纯CSV，文件名sales-demo.csv。sales与profit统一人民币元，全部为虚构训练数据；说明不写进CSV。"
  }
];
