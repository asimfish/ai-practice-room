export const videoWorkshops = [
  {
    "id": "workshop-video-series",
    "topic": "video",
    "title": "三条 30 秒英语知识系列：从定位、脚本到一致的分镜",
    "basis": "做一个“英语一句话”小系列，面向能读简单单词、容易混淆 can 用法的中文学习者。三条分别讲能力、否定、开窗场景里的许可与请求。先用原创文字卡和几何小人完成可读的版本，再选做图片或视频生成。学习重点是系列可复用的规范与人审知识点，而非一次生成一条漂亮片子。英语用法由 British Council 原页核对；定位、文案、时间分配与验收线是本站原创教学设计。",
    "level": "零基础主线 · 可复用系列",
    "minutes": 95,
    "prerequisites": [
      "能创建文件夹、保存文字文件与图片。",
      "有一个自己能使用的剪辑工具；菜单以自己的版本为准。",
      "能读 swim、sing、draw、open、window；不需要会编程。"
    ],
    "deliverables": [
      "3 份 30 秒目标脚本及各 5 镜分镜。",
      "1 张系列规范卡：受众、色彩、字体、角色特征、版式和命名。",
      "3 条由学员实际剪辑的练习视频；本课程提供设计稿，未代生成。",
      "1 份例句与字幕人工核对记录。"
    ],
    "input": "受众：能读简单单词的中文英语学习者；每条只解决一个能开口使用的问题。\n系列名：英语一句话；01 能力 I can swim；02 否定 I can't swim；03 开窗情境 Can I / Can you。\n系列视觉：奶油底 #FFF7ED、深蓝字 #183153、青绿重点 #0F766E；固定圆头小人、青绿色上衣、左手小卡片；小人是原创几何示意，不要求真人口型。\n版式：顶部“英语一句话 · 0X”，中部例句，下部中文字幕；不让模型生成画面内文字，文字在编辑器里加。\n练习参数：9:16、1080×1920、30fps，每条30秒；这是练习目标，不是各平台统一要求。",
    "inputNotes": "先下载系列包与分镜示意。三条都用同一个项目副本制作，人物、字号、例句区域保持一致。页面例句描述这些指定场景；不要把“Can you 总是请求”“can 只表示能力”当作普遍语法规则。录音后要按真实语速调整字幕；30秒是目标，尚未录音实测。",
    "prompt": "你是中文英语短视频的脚本助教。只依据以下已核对的范围写三条系列：01 用 I can + 动词原形表示能力；02 用 I can't + 动词原形表示没有这个能力；03 在开窗情境对比 Can I open the window?（我请求许可）与 Can you open the window?（我请对方帮忙）。面向能读简单单词的中文学习者，每条只讲一个问题，目标30秒，5镜，每镜6秒。输出：定位一句话、每镜时间/画面/旁白/屏幕文字/检查点、固定视觉规范、例句核对表。画面使用相同原创几何小人和文字卡，不要求口型，不加入未经核对的发音结论、考试规则或效果承诺。把需要人工读稿计时、复核的项单列。实际说不完时删说明，不加速掩盖问题。不要上传或发布。",
    "sampleOutput": "系列定位：每条学会在一个具体场景说一句英语。\n\n01《我会游泳，怎么说？》\n0–6秒：泳池图标＋问题卡；旁白“我会游泳，英语怎么说？”\n6–12秒：例句卡 I can swim.；旁白“I can swim. 这里的 can 表示有这个能力。”\n12–18秒：can＋swim 两张卡；旁白“can 后面接动词原形，写 swim。”\n18–24秒：唱歌图标；旁白“换一个动作：I can sing.”\n24–30秒：画笔图标＋练习；旁白“我会画画。你来说：I can draw.”\n\n02《不会，就加 can't》\n0–6秒：泳池图标＋问号；“我不会游泳，改哪里？”\n6–12秒：I can't swim.，只给 can't 加青绿框；“I can't swim. can't 是 cannot 的缩写。”\n12–18秒：can / can't 并排，动词都写 swim；“否定变了，动词还是原形。”\n18–24秒：字幕核对小卡；“字幕别漏掉 n't，意思会相反。”\n24–30秒：麦克风图标；“我不会唱歌：I can't sing.”\n\n03《开窗：我来还是你来？》\n0–6秒：同一扇窗＋I / you卡；“开窗是我来，还是你来？”\n6–12秒：I 指向小人；“Can I open the window? 我可以开窗吗？”\n12–18秒：you 指向对方；“Can you open the window? 请你帮忙开窗。”\n18–24秒：两句并排，圈出 I / you；“同一个动作，先看谁做。”\n24–30秒：椅子图标；“我可以坐这里吗？Can I sit here?”\n\n三条开头不加长片头，编号和颜色固定。分镜中的6秒是人工规划，实际旁白太长先删字。未生成成片。",
    "walkthrough": [
      "定位：填系列包第一栏，只写一个受众与一个使用场景。不要把“零基础到精通”塞进30秒；本轮只让观众用对一个句型。",
      "核知识：打开两个 British Council 原页，核对 can/can't 表示能力、情态动词后用原形，以及开窗情境的许可/请求；把例句与自己的解释逐项勾选。第三条解释限于本场景。",
      "写脚本：复制提示词，先得到三条文字稿。每条按“问题—例句—拆解—替换—练习”分5段；删除来源里没有依据的发音、考试与学习效果结论。",
      "读稿计时：自己正常读一次，记录每段实际秒数。若某句超出6秒，先删一句解释；保留英文例句的自然语速。三条旁白目标在28.5秒内说完，最后留下至少1.5秒看答案。",
      "定规范：在系列卡固定三种颜色、标题区域、字幕区域、角色三个辨识点与编号方式。文字卡可以完全不生成图；这条路线没有视频模型请求。",
      "做分镜：看下载的三行分镜示意，将每段对应一张卡。一个镜头只承担一个教学任务；强调 can/can't/I/you 时用编辑器框线，不让生成模型拼写。",
      "检查一致性：将三条第一镜并排，再看三条例句镜。角色上衣、手中卡片、背景色与字幕位置一致；如果选做生成图，先修母图和参考图，文字仍由编辑器添加。",
      "建项目：新建30秒竖屏时间线，5段各6秒。做好01后另存02与03副本，只替换内容；先做直切，保留稳定阅读区。",
      "加声音：主线用自己录音，也可用当前工具的通用朗读音色。分段试听英文词和 can't 是否清楚。声音不合适时重录这一句，再生成字幕；不要只改字幕却留下相反的口播。",
      "校字幕：按最后一版音频逐句核对。首要检查 can't 的否定、动词拼写、I / you 与问号；如果编辑器识别到的是错误口播，先修改录音。套同一字号与位置，手机预览可读。",
      "导出验收：三条各导出本地练习文件，完整播放，再在第0、6、12、18、24、29.9秒停看。每一段都有正确内容、尾帧不黑、英文例句看得清。参数是本课目标，工具收费和可用导出能力需自己查看。",
      "系列复用：把03的项目另存为04草稿，仅替换主题和例句，并写下三项可复用内容。选修才用已有 Remotion 课程将文字卡模板化；需要代码与环境基础，本课不安装或运行。",
      "保存制作记录：记原素材、工具版本、人工校对人和AI使用范围。课程内停在本地文件；需要发布时由本人按当前平台选项完成声明与提交。"
    ],
    "acceptance": [
      "有3份独立脚本，三条各5镜，分镜时间合计均为30秒。",
      "01与02的 can/can't 后都用动词原形；03明确是指定开窗场景，没有把用法绝对化。",
      "三条在同一规范下使用相同角色或图标、字幕区域与强调颜色，英文文字由编辑器排版。",
      "正常朗读能完成，尾镜留出答案阅读时间；超时已删稿或重排，没有靠整体快放解决。",
      "学员实际制作后须完整播放3个本地导出文件，核对否定、I/you、标点和末尾，不以设计稿替代成片验证。",
      "制作记录可说明哪些图为自制、哪些内容由AI辅助、哪些知识与字幕由人复核。",
      "本轮仅提供原创设计稿和下载材料；生成、录音、剪辑、导出与教学效果均未实测。"
    ],
    "milestones": [
      {
        "name": "一个可用定位",
        "action": "填一行受众、场景、每条目标。",
        "expected": "“中文学习者用一句英语表达能力或开窗请求。”",
        "verify": "让同伴读定位后说出三条分别解决什么。",
        "fix": "若回答“学英语”，缩小到一种句型和一个场景。"
      },
      {
        "name": "三条知识核对",
        "action": "逐句对照原始语法来源；圈出动词原形与I/you。",
        "expected": "本例所有核心例句与中文解释互相对应。",
        "verify": "能解释为什么不是 I can swimming，以及本场景里谁开窗。",
        "fix": "删掉缺依据的扩展结论；不确定例句换成已核对的一句。"
      },
      {
        "name": "30秒分镜",
        "action": "每条拆成5个教学任务并读稿计时。",
        "expected": "5×6=30秒，声音能留出尾部答案阅读区。",
        "verify": "计时表写真实朗读秒数，非仅复制计划数。",
        "fix": "先删长解释，再调整段长；保持总长30秒。"
      },
      {
        "name": "系列规范冻结",
        "action": "用01项目确定版式，再复制02/03。",
        "expected": "3个首镜和例句镜能看出属于同一系列。",
        "verify": "并排比较色彩、角色三个特征、字号和位置。",
        "fix": "以01为母版，逐项恢复漂移；生成图不合格则回到几何卡。"
      },
      {
        "name": "声音与字幕闭合",
        "action": "按最终口播核对所有字幕，重点听 can't。",
        "expected": "声音、屏幕英文和中文解释表达同一意思。",
        "verify": "同伴仅听声音和仅看字幕分别复述含义。",
        "fix": "口播有误重录；识别有误改字幕，不能互相代替。"
      },
      {
        "name": "三条本地验收",
        "action": "导出后完整播放并检查6个镜头边界。",
        "expected": "可播放的3条成片和一份检查记录。",
        "verify": "文件能打开、末尾有答案、无黑帧或截断声音。",
        "fix": "回到项目补齐缺段，再重导出并重看发生改动的文件。"
      }
    ],
    "workedExample": {
      "before": "泛提示：“做三条英语爆款视频，人物随便，语法要全。”输出把 can 的能力、许可、发音与考试技巧混在一条；三条画风各异。",
      "after": "改为“每条只讲一个指定问题，5镜各6秒，固定几何角色与三种颜色；核对 can + 原形，第三条只解释开窗场景”。脚本能对应15个可检查镜头。",
      "why": "明确受众、范围、母版和镜头任务后，AI能提供可编辑的稿件；知识正确、朗读时长与画面一致性仍由人验收。"
    },
    "rubric": [
      {
        "criterion": "教学范围",
        "pass": "每条一句目标，看完能完成该条替换练习。",
        "fail": "一条塞入多种语法和未经核对的发音结论。"
      },
      {
        "criterion": "英语正确性",
        "pass": "例句、解释、口播一致，can't 与 I/you 没有丢失。",
        "fail": "动词用错形式、否定丢失，或将情境结论写成通用规则。"
      },
      {
        "criterion": "系列一致性",
        "pass": "三条共享固定版式、颜色和角色特征。",
        "fail": "同一角色换衣、字幕跳位，或每条像不同栏目。"
      },
      {
        "criterion": "时间与可读性",
        "pass": "真实朗读计时通过，尾部能读到答案。",
        "fail": "只有纸面30秒，没有实际读稿；字幕一闪而过。"
      },
      {
        "criterion": "交付证据",
        "pass": "学员有3个可播放文件、项目副本和校对记录。",
        "fail": "只有生成截图或脚本，却称系列成片已完成。"
      }
    ],
    "sources": [
      {
        "title": "Ability | British Council LearnEnglish",
        "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/ability"
      },
      {
        "title": "Can, could and would for invitations, offers, requests and permission | British Council",
        "url": "https://learnenglishteens.britishcouncil.org/grammar/b1-b2-grammar/can-could-would-invitations-offers-requests-permission"
      },
      {
        "title": "How to Use Keyframing on CapCut Desktop App with Horchata Soto! | CapCut 101 | CapCut",
        "url": "https://www.youtube.com/watch?v=kQXGHAoCusM"
      },
      {
        "title": "Remotion 官方 Hello World 源码模板（v5 已收录，选修）",
        "url": "https://github.com/remotion-dev/template-helloworld"
      }
    ],
    "executionStatus": "NOT_RUN：外部文案模型、图/视频模型、通用配音、剪辑器、Remotion、录音、渲染和发布均未运行。本轮已人工编写三条目标脚本、系列规范与原创SVG分镜材料；30秒为规划目标，学员需按实际录音验收。",
    "figure": "video-flow",
    "downloads": [
      "v6-video-series-kit.md",
      "v6-video-series-storyboard.svg"
    ]
  },
  {
    "id": "workshop-video-static-motion",
    "topic": "video",
    "title": "30 秒课堂作品展示：静态图关键帧与一镜图生视频的成本对比",
    "basis": "用自己做的“Can I / Can you”句型卡完成一条30秒展示片。A版仅用5张自摄或自制静态图和轻微缩放；B版保持同一脚本，只把第四镜替换为可选图生视频。这能把“内容有没有讲清楚”和“运动值不值得花额度”分别检验。关键帧职责参考 CapCut 官方材料；可选图生视频参考 Runway 当前指南。比较流程、镜头文案、预算上限和验收阈值是本站原创，未实测成本或成功率。",
    "level": "零基础主线 · 先静态再选做",
    "minutes": 75,
    "prerequisites": [
      "自己完成一张纸质或电子句型卡，确认可展示。",
      "会把图片放入剪辑时间线并调整时长。",
      "B版仅适用于自己已有可用生成工具、已看清单次额度的情况。"
    ],
    "deliverables": [
      "一条A版30秒静图展示片。",
      "可选一条B版30秒展示片，仅替换一镜。",
      "5镜分镜、作品三特征核对表和实际成本记录。",
      "一句选择A或B的理由，基于可用片段与实际时间。"
    ],
    "input": "作品：自己制作的句型卡，两句为 Can I open the window? / Can you open the window?，中文说明“我请求许可 / 我请你帮忙”。v6-video-class-card.png（1080×1920）是含字参照卡，01/02/03可静态使用或裁切；SVG留作源稿。这份PNG，用来核对字幕和编辑器叠字；不要将它当作第四镜生成输入。\n5镜输入：01整张卡；02突出I；03突出you；04无文字窗户+双人物底图（优先下载v6-video-clean-scene.png，1080×1920；另保留SVG源稿）；05一句总结卡。01/02/03/05可自摄、自制；04的英语例句与I/you标签全部在编辑器后加。拍纸卡时使用同一背景、光线与相机方向。\n5镜：0–6 / 6–12 / 12–18 / 18–24 / 24–30秒。画面以真实作品为准，不承诺学习效果或虚构学生反馈。\n底图辨识点：奶油底、深蓝框同一扇窗、两个青绿上衣人物。编辑器文字规范：深蓝例句、青绿I/you标签。A/B使用同一底图构图、叠字、配音、字幕、画幅和总长。",
    "inputNotes": "主线直接下载本站已从原创SVG渲染并检查的v6-video-clean-scene.png（1080×1920），静态底图和关键帧即可交付，不必先转换SVG或调用视频模型。含字v6-video-class-card.png（1080×1920）是另一份素材，可用于01/02/03静态镜头、校对与编辑器叠字参照，禁止用于第四镜生成输入；第四镜使用无字PNG。PNG/JPEG是否受当前编辑器或生成工具支持仍需确认，导入后先核对预览为9:16、没有拉伸/裁掉人物与窗框，也没有可见文字。SVG保留作可编辑源稿，不保证任何工具直接接收；需要其他格式时按当前编辑器/图像工具官方支持方式处理，本站未在外部编辑器测试。格式或生成扣费未确认时，只做静态A，B标未执行。编辑器、字体、模板、配音或导出收费按当前提示确认。",
    "prompt": "根据我的五镜素材写30秒作品展示分镜。每镜6秒，目标是让观众看懂开窗场景的“我做/你做”。01/02/03/05使用自制句型卡与总结；第四镜必须用无文字窗户+两个简化人物底图v6-video-clean-scene.png（1080×1920，本站由原创SVG本地渲染），含英文的v6-video-class-card.png仅作字幕与叠字参照，不能上传整张参照卡作为生成输入。不要编造教学成绩、学生评价、制作耗时或产品性能。给A路线：静态底图+轻微位置/缩放关键帧；给B路线：仅第四镜可选图生视频，保留同一底图构图、奶油背景、深蓝窗框和青绿上衣人物，只允许缓慢推近。两版的英语例句和I/you标签都由编辑器在底图或视频之上后加，不要求模型生成文字。优先使用已提供PNG，不让零基础先转换SVG；仍需按当前工具官方说明确认PNG/JPEG支持。导入后先检查9:16预览、没有拉伸或裁掉窗框/人物、无文字。SVG只作源稿，不声称任何工具通用支持；需要其他格式时再按当前编辑器官方支持方式处理。格式或扣费未确认只做静态A也能交付。列出每镜旁白、A/B变化、生成前额度字段和失败回退方法。最多规划2次第四镜尝试；当前时长、价格和商用条件需要本人核对，不猜数字。不上传或发布。",
    "sampleOutput": "0–6秒，整张卡，固定画面；“两句开窗英语，差在哪？”\n6–12秒，I标签近景，A版缩放100%→104%；“Can I，问我可不可以做。”\n12–18秒，you标签近景，A版固定；“Can you，请你帮忙做。”\n18–24秒，无文字窗户/双人物底图，A版底图缩放100%→103%，两句英文和I/you标签在编辑器另轨叠加；“动作一样，先看谁做。”\n24–30秒，结论卡；“自己来用I，请对方用you。”此句仅概括本课开窗请求场景。\n\nB版仅第四镜替换为生成候选，其他音画与A一致。第四镜优先使用已提供的v6-video-clean-scene.png无文字窗户/双人底图（1080×1920），不上传含字参照卡；先按当前工具确认PNG/JPEG支持并检查9:16导入预览。SVG只保留作源稿。构图和辨识点保持，英语例句、I/you标签在剪辑器后加，A/B使用相同叠字；运动提示为“相机缓慢推近，两个示意人物保持静止，构图与衣服稳定，连续镜头”。模型并不保证稳定；任何脸形、衣服或窗框变形都退回A版。\n\n成本示例用符号而非价目：若单次当前显示扣C额度、准备最多2次，则计划最多2C；实际调用一次便记C，失败调用也记。A版视频生成请求=0；这不等于编辑软件或配音永久免费。",
    "walkthrough": [
      "确定展示事实：拿出真实句型卡，核对两句、中文解释和三个视觉特征。使用课堂作品时移除学生姓名、脸和私人资料；这个练习展示作品结构，不用虚构成绩证明效果。",
      "准备五镜素材：01整卡、02突出I、03突出you可直接使用已提供的v6-video-class-card.png并在静态剪辑中裁切；05总结可自制，所有文字仍需核对；第四镜优先下载无文字窗户/双人物底图v6-video-clean-scene.png（1080×1920），本站已从原创SVG本地渲染。含字v6-video-class-card.png可用于上述静态镜头、核字与叠字参照，不当生成输入。不要用生成图冒充学生真实作业。",
      "核格式与底图：直接使用已提供PNG，先查当前编辑器官方支持的图像格式，再导入并检查9:16预览；人物和窗框完整、无拉伸、无可见英文/I/you。PNG/JPEG仍需按当前工具确认支持，不保证所有工具通用。SVG为可编辑源稿，不必先转换；若确需其他格式按当前图像工具官方支持方式处理。格式或生成扣费未确认时只做静态A，B标未执行。",
      "读稿计时：用示范五句先试读，给每段留约0.5秒停顿。若读不完6秒，删说明；时间表里同时写计划与实际，实际字幕以录音为准。",
      "建A版：新建30秒项目，五镜各6秒，素材等比例适配画幅。第四镜主轨放无文字底图，另建编辑器文字层后加两句英文和I/you标签；含字参照卡仅用于核字。先全部固定，直切完整看一遍，确认I/you差别。",
      "加关键帧：第二镜图可设100%→104%；第四镜只给无文字底图设100%→103%，英文/标签在独立文字层保持可读，A/B使用相同文字层。这两个数是本课建议，非平台标准。先选中正确素材；CapCut官方帮助说明未选素材时可能看不到关键帧，国内剪映按自己界面定位。",
      "检查裁切：在镜头开始、居中和结束各停一次；看英文和I/you是否被裁掉。若边缘出画，降低放大幅度或回到固定；保证阅读比运动优先。",
      "加同一声音字幕：录音或选择自己可用的通用音色；按最终音频校对字幕。A版导出后完整播放，这条成片即可完成主线；不要求购买生成额度。",
      "做B版准备：复制A项目。在费用表填工具、当前模型、时长选项、分辨率、单次扣费单位、可用额度和自己上限。不能确认扣费或不愿消耗额度时，B版标“未执行”，仍可完成比较练习。",
      "可选生成第四镜：确认当前工具支持PNG/JPEG等实际格式和扣费后，才输入第四镜无文字底图；不上传含字参照卡。核奶油背景、同一深蓝窗框、两个青绿上衣人物及构图，提示词只安排缓慢推近。Runway指南解释输入图提供外观与构图，不代表任意工具支持SVG或必定稳定。返回剪辑器后再加相同英文和I/you标签。",
      "限制尝试：第一次结果只检查角色/窗框稳定、是否有可用6秒、运动是否帮助理解。第二次仅改一个问题；仍失败则停用，记录失败额度与分钟数。若工具不支持6秒，查看可用时长后截取稳定片段，不能把缺秒处默默留黑。",
      "替换与对照：B版只换18–24秒主轨底图为生成候选，英语/标签文字层、声音、字幕和总长不变。比较两版第18、21、23.9秒的构图与辨识点；让同伴指出I/you意思和第四镜是否干扰阅读。",
      "填写成本：分别记录制作分钟、每次请求、扣费单位、失败与采纳镜头数。货币只按实际账单或当前显示换算；不知道写“未知”，不同服务的积分不相加。",
      "做取舍：若B版增加人物漂移、文字难读或重试时间，保留A版；如果B版可用且有明确表达收益，把理由写具体。只比较这一次自己的素材，不得推出“某模型最好/固定便宜”。",
      "留存：保存A/B项目副本、最终素材来源与AI范围说明。选修可以用既有Remotion文字卡路线做可复用时间线，本轮未安装或运行代码制片。"
    ],
    "acceptance": [
      "A版5镜时间合計为30秒，静图等比例，无英文被裁切；可不做B版。",
      "A/B仅第四镜主轨运动画面变化，其余时长、英文/标签叠字、口播、字幕与画幅相同；第四镜两版都从同一无文字底图开始。",
      "第四镜原输入无可见英文或I/you标签；奶油背景、同一深蓝窗框、两个青绿上衣人物保持，深蓝例句与青绿I/you标签均在编辑器后加。",
      "优先使用已提供1080×1920 PNG，导入预览已核对9:16、无拉伸或主体裁切、底图无字；按当前工具确认PNG/JPEG支持，不声明SVG或PNG适用于所有工具。格式或扣费未确认时仅交静态A，B明确未执行。",
      "自己正常朗读和手机播放通过，字幕不压住例句；通过的文件须完整本地播放。",
      "B版未做写“未执行”，做了则记录所有尝试与失败；采纳视频须有完整稳定的6秒，无黑帧补时。",
      "没有固定价格或“零成本/百分百成功”承诺；实际记录区分分钟、额度单位与货币。",
      "本次示范是分镜、成本模板与原创静态卡；外部编辑、录音、图生视频和成片未实测。"
    ],
    "milestones": [
      {
        "name": "输入与格式齐备",
        "action": "准备01/02/03/05作品图，第四镜优先下载已提供PNG，并按当前编辑器官方说明导入。",
        "expected": "1080×1920无字PNG与正确9:16预览；含字参照卡只用于核字；SVG留作可编辑源稿。",
        "verify": "导入预览无拉伸、无可见文字、人物/窗框完整；英文/标签另轨后加。",
        "fix": "先核对当前PNG/JPEG支持与比例；需要其他格式按官方路线处理；格式或扣费未知不做B，静态A即可交付。"
      },
      {
        "name": "A版能讲清楚",
        "action": "全部静图先剪30秒，读稿配字幕。",
        "expected": "观众理解开窗场景I/you差别。",
        "verify": "只看A版后让同伴用中文复述谁开窗。",
        "fix": "修解释与排序，再考虑运动。"
      },
      {
        "name": "轻微运动合格",
        "action": "给第二镜图片与第四镜无文字底图加轻微缩放；第四镜文字层保持可读。",
        "expected": "轻微推近且英文始终完整。",
        "verify": "0%、50%、100%进度处截图/停看核对。",
        "fix": "缩放降到更小，或取消关键帧。"
      },
      {
        "name": "B版预算明确",
        "action": "本人查看当前单次扣费并设置最多两次。",
        "expected": "费用表有模型、单位、上限或明确未执行。",
        "verify": "计划数能用2×单次额度复算；不把积分写成钱。",
        "fix": "未知项写未知，不能确认时停留A版。"
      },
      {
        "name": "单镜生成评审",
        "action": "可选生成第四镜并记录每次结果。",
        "expected": "采用或弃用都有具体理由。",
        "verify": "无文字底图构图及衣服/窗框稳定、有6秒；返回剪辑器后再加相同英文/标签。",
        "fix": "只改一个变量再试一次；仍失败回A版。"
      },
      {
        "name": "同条件取舍",
        "action": "比较同一脚本的A/B与实际记录。",
        "expected": "写出“保留哪版、为什么、实际多花多少”。",
        "verify": "没有把这一次观察泛化为平台性能结论。",
        "fix": "删掉无证据评价，只陈述自己的这次结果。"
      }
    ],
    "workedExample": {
      "before": "“用AI做一条产品大片，镜头旋转、人物讲话、文字飞出。”一次同时要求角色、口型和文字，预算表只记最终采用的一次。",
      "after": "先用无文字窗户/双人物底图剪A版，英文/标签在编辑器另轨后加；B版仅用该无字底图的受支持格式请求缓慢推近，复用同一文字层。含字参照卡不上模型，失败请求仍记账。",
      "why": "有可完成的基线与单镜变化，才能判断运动是否增加理解；限制尝试保护预算，而非保证生成成功。"
    },
    "rubric": [
      {
        "criterion": "内容忠实",
        "pass": "实际作品与展示一致，语法解释限于本场景。",
        "fail": "生成虚假学生作品/反馈，或写成普遍语法口诀。"
      },
      {
        "criterion": "可完成基线",
        "pass": "静态无文字底图配编辑器叠字即可完成A；格式或扣费未确认可不做B。",
        "fail": "必须抽卡或购买后才有完整时间线。"
      },
      {
        "criterion": "对照公平",
        "pass": "只有第四镜主轨运动变化，底图构图与所有叠字、声音、时间条件相同。",
        "fail": "换配音、脚本和时长后声称B版更好。"
      },
      {
        "criterion": "成本透明",
        "pass": "记录失败请求、单位、实际分钟和未知项。",
        "fail": "把积分当货币、漏掉失败或标固定价格。"
      },
      {
        "criterion": "运动质量",
        "pass": "采用镜头稳定可读，弃用有明确理由。",
        "fail": "主体变形仍采纳，或缺秒用黑画面凑时长。"
      }
    ],
    "sources": [
      {
        "title": "How to Use Keyframing on CapCut Desktop App with Horchata Soto! | CapCut 101 | CapCut",
        "url": "https://www.youtube.com/watch?v=kQXGHAoCusM"
      },
      {
        "title": "Why Can't I See Keyframes in CapCut on PC? | CapCut",
        "url": "https://www.capcut.com/help/keyframes-in-capcut-pc"
      },
      {
        "title": "Image to Video Prompting Guide | Runway",
        "url": "https://help.runwayml.com/hc/en-us/articles/48324313115155-Image-to-Video-Prompting-Guide"
      },
      {
        "title": "Can, could and would for invitations, offers, requests and permission | British Council",
        "url": "https://learnenglishteens.britishcouncil.org/grammar/b1-b2-grammar/can-could-would-invitations-offers-requests-permission"
      },
      {
        "title": "Remotion 官方 Hello World 源码模板（v5 已收录，选修）",
        "url": "https://github.com/remotion-dev/template-helloworld"
      }
    ],
    "executionStatus": "已用现有Sharp 0.35.5将原创无文字场景SVG与含字参照卡SVG直接渲染为两份1080×1920 PNG，并检查尺寸、格式与可见画面；未调整构图或调用模型。无字PNG为第四镜底图，含字PNG用于01/02/03静态镜头及校对，禁止作第四镜生成输入。NOT_RUN：外部编辑器导入、PNG/JPEG兼容性、拍摄、配音/录音、图生视频、A/B成片导出与实际费用均未实测。",
    "figure": "video-flow",
    "downloads": [
      "v6-video-clean-scene.png",
      "v6-video-class-card.png",
      "v6-video-static-motion-kit.md",
      "v6-video-clean-scene.svg",
      "v6-video-class-card.svg",
      "v6-video-cost-log.csv"
    ]
  },
  {
    "id": "workshop-video-subtitles",
    "topic": "video",
    "title": "中英口播字幕校对：用真实 SRT 完成导入与逐句复核",
    "basis": "用两份原创30秒目标台词练习：中文夹英语的讲解版，以及英文口播版。先分清“真实说了什么”“字幕转写什么”“中文翻译什么”，再把UTF-8 SRT导入支持的桌面/网页剪辑器，改字、校时间和样式。本课交付的是可下载且经本地格式检查的SRT；时间是人工规划，尚未与真实音频对齐。CapCut官方帮助支持SRT导入职责；Whisper原作者仓库与源码说明转写和翻译参数，作为代码选修。",
    "level": "零基础主线 · 字幕必须人审",
    "minutes": 60,
    "prerequisites": [
      "能在电脑找到下载文件，认识 .srt 和 .txt 后缀。",
      "有支持SRT导入的剪辑器；CapCut国际版文档不能照抄为国内剪映按钮。",
      "录一份自己的台词或使用有权使用的通用配音；课程未提供声音。"
    ],
    "deliverables": [
      "一份自己的口播录音或配音。",
      "与最终音频逐字对应的转写SRT，以及可选中英双语SRT。",
      "一份校对表：原识别、正确字、实际时间和修改原因。",
      "一个本地字幕样式预览或练习导出，完整播放记录。"
    ],
    "input": "下载三份字幕：中文夹英语口播 zh-mixed.srt；英文口播 en.srt；英文口播对应中文翻译 en-bilingual.srt。后两份使用同一8段时间轴，第一份为不同9段时间轴，不能混配音频。\n中文夹英语稿：我来开窗，英语怎么问？ / Can I open the window? / 这里问：我可以开窗吗？ / 你来开窗，这样问。 / Can you open the window? / 这里请你帮忙开窗。 / 先看I和you，谁做动作。 / 我可以坐这里吗？ / Can I sit here?\n英文稿：Can I, or can you? / Can I open the window? / I am asking for permission. / Can you open the window? / I am asking you to help. / Look at who does the action. / Your turn. May I sit here? / Say: Can I sit here?\n情境：窗边请求许可或请人帮忙。英文与中文稿是两个版本，不要求逐句长度一样。",
    "inputNotes": "SRT写的是字幕编号、开始/结束时间和文本，不包含音频、字体或视频。下载文件可实际保存导入，但时间轴是本站人工预设而非语音识别结果；录音后需要重定时。没有录音时可以先在30秒色卡项目做字幕格式预览，验收状态写“音频对齐未执行”。",
    "prompt": "我会提供最终口播台词、自动识别结果和SRT。请先标出你能确认的文字错误，不要假装听过未提供的音频。分开列转写修正与翻译修正；字幕转写须忠于真实口播，不能悄悄把错误口播改成正确语法。重点核对 Can I / Can you、permission / help、can't 的否定、英文大小写和问号。SRT保持连续编号、HH:MM:SS,mmm --> HH:MM:SS,mmm、每段开始小于结束、同轨不重叠、UTF-8。每条双语最多2行；太长就合理拆段。用已提供的人工时间轴仅作预览，不说已精确对齐。需要听音确认的时间、词和停顿写“待人工听音”。输出校对表、修正版SRT和导入后检查清单，不上传或发布。",
    "sampleOutput": "校对示例（人为设置的练习错误，不是实测识别）：\n“Can eye open the window” → “Can I open the window?”：I是代词；须听音和台词一起核对。\n“Can I open the window?”出现在请对方帮忙的镜头 → 先查真实口播；如果音频说you，只改字幕；如果音频说I却想表达请对方帮忙，重录音频再改字幕。\n“I am asking for position.” → “I am asking for permission.”：依据本练习最终英文台词；未听音时不能断言原音频是什么。\n“请我帮忙开窗”作为Can you句的翻译 → “我请你帮忙开窗”：保留谁做动作。\n\n有效SRT片段（对应英文口播文件）：\n2\n00:00:03,600 --> 00:00:06,700\nCan I open the window?\n\n双语版对应同一时间段：\n2\n00:00:03,600 --> 00:00:06,700\nCan I open the window?\n我可以开窗吗？\n\n本地检查已确认三份SRT均有有效时间戳、连续编号、非空字幕和非重叠时间段；尚未导入剪辑器，也没有真实音频可验收同步。",
    "walkthrough": [
      "选版本：中文夹英语配zh-mixed；英文口播配en或en-bilingual。先在文件夹写一句“音频版本=___、字幕文件=___”，避免下载三份后随便混用。",
      "理解格式：用文本编辑器打开SRT，找到编号、时间行、字幕文字和空行。时间毫秒前是逗号；不要用文字处理软件另存为带排版的文档，也不要让文件变成.srt.txt。",
      "先预览：若尚未录音，新建30秒纯色或句型卡项目导入SRT，检查能否出现8或9个文字片段。这个步骤只验证格式与样式，不能证明音频同步。",
      "录最终台词：按台词包分段正常朗读，每段前后留短停顿。中文夹英语与英文版二选一先完成；英文例句说清楚，必要时重录短句，不能靠字幕掩盖口播错误。",
      "自动转写（可选）：使用自己现有编辑器识别最终语音，记录所选语言；中英混合识别容易出现代词或英文误字，逐段人工听。不要把识别稿直接当成校对答案。",
      "文字校对：将最终台词和音频对照，重点查I/you、can't、window、permission及问号。台词仅是目标稿，实际口播若临时改了话，字幕按最终音频；若知识点说错，要重录。",
      "翻译校对：双语版第一行对应英文口播，第二行是给中文学习者的意思。检查“我请求许可”和“我请你帮忙”有没有角色颠倒；翻译不必逐词直译，但不能改变场景。",
      "调整时间：在时间线上听每句的首词与末词，将字幕起点靠近实际说话起点，末尾留自然停顿；本课可把明显偏差大于约0.2秒作为重调触发点，这是练习标准，不是通用平台规范。",
      "导入支持的端：CapCut官方Help当前介绍Desktop与Web导入SRT，Web只列SRT，移动端不提供直接导入。先确认自己的端与版本；Desktop可在Captions/Add Captions附近寻找导入入口，Web在Captions的上传入口。国内剪映按钮需查自己的当前界面，不按英文路径硬找。",
      "处理导入失败：先确认扩展名和UTF-8，检查时间行逗号、箭头、空行与编号；用下载原文件在新项目做最小导入。如果按钮不存在，记版本与端，换明确支持导入的工具或手动建字幕，不反复付费。",
      "排样式：选一条设置清晰字体、背景或描边，放在不挡I/you例句的位置；双语每段最多两行是本课阅读建议，手机缩小看。如果长句太密，拆两段并按音频分别设时间，不只是减小字号。",
      "选修Whisper：已有本地环境的人才读openai/whisper README与transcribe.py。它需要Python/FFmpeg等准备，代码与模型为MIT；transcribe保留原语言，translate目标是英语，并不会自动输出中文翻译。中文夹英语也要人工复核，本课未安装、跑模型或测速度。",
      "最终闭合：导出练习文件后按正常速度完整听看，再静音看字幕、闭眼听口播各一次。保存最后SRT和时间校对表；没有声音或未导入的项明确写未执行。",
      "传递修改：后续改了一句录音，就重查该句及相邻段时间；不能继续使用旧SRT。文件命名加版本，保留原目标稿与最终转写的区别。"
    ],
    "acceptance": [
      "下载的3份SRT是UTF-8纯文本；编号连续、开始早于结束、同轨不重叠，中文夹英语9段、英文及双语各8段。",
      "英文与双语SRT使用同一时间轴；zh-mixed是另一份台词，能解释不能混用。",
      "学员实际执行后，I/you、否定、例句和翻译与最终口播一致；错误口播已重录而非只改字幕。",
      "时间调整有真实音频依据；未录音时不得勾“同步通过”，应写音频对齐未执行。",
      "导入后有预期文字片段数，字幕可编辑、两行以内可读、不挡例句，尾句在画面结束前读完。",
      "Whisper选修不误称中文翻译器；没有安装运行就标未执行，不把MIT源码免费理解成设备、云算力和所有服务免费。",
      "课程本轮检查的是本地字幕格式，外部编辑器导入、声音、识别准确率、渲染和发布均未实测。"
    ],
    "milestones": [
      {
        "name": "版本配对",
        "action": "选一个台词版本并绑定对应SRT。",
        "expected": "中文混合9段或英文8段，文件关系清楚。",
        "verify": "文件夹记录能指向一个确定的音频/SRT组合。",
        "fix": "重新配对，不把中文混合字幕套到英文音频。"
      },
      {
        "name": "格式可读",
        "action": "查看SRT第一段、第二段与末段结构。",
        "expected": "编号、标准时间行、文本、空行齐全。",
        "verify": "本地格式检查通过，文本打开无乱码。",
        "fix": "回到UTF-8纯文本并修格式，再做最小导入。"
      },
      {
        "name": "口播知识正确",
        "action": "按最终录音逐句听I/you与请求含义。",
        "expected": "真实口播表达本课目标意思。",
        "verify": "能听出英文代词，中文解释不颠倒。",
        "fix": "知识说错重录，语音不清单句重录。"
      },
      {
        "name": "转写与翻译分开",
        "action": "分别修改原语言转写和中文译文。",
        "expected": "转写忠于音频，译文忠于语境。",
        "verify": "每个修改写原因，不假装听过缺失音频。",
        "fix": "未听音处标待确认；语法目标和真实口播冲突先查录音。"
      },
      {
        "name": "导入与时间复核",
        "action": "在支持的端导入，并按波形/听音重定时。",
        "expected": "8或9个可编辑字幕段，与最终音频大致同步。",
        "verify": "逐段检查首尾、无重叠和截断。",
        "fix": "先修单段起止；按钮缺失就记录环境并换明确支持路线。"
      },
      {
        "name": "完整播放",
        "action": "导出后听看、静音看和单听各一遍。",
        "expected": "可播放文件、最后SRT、校对记录完整。",
        "verify": "文字、声音、时间和中文含义全部对应。",
        "fix": "修改后重导出；未执行项保留未执行标签。"
      }
    ],
    "workedExample": {
      "before": "自动识别字幕显示“Can eye open the window”，作者只凭稿件改字，直接写“已精准同步”。第三镜口播说I却用字幕改成you。",
      "after": "把代词误识别、口播错误和时间待核分别记下。听到实际说I但目标是请对方开窗时重录；录音后重调起止时间；未导入的文件只报告格式有效。",
      "why": "字幕校对既要忠于音频，也要保证知识正确。目标台词和格式检查不能证明模型听到了什么，更不能证明声画同步。"
    },
    "rubric": [
      {
        "criterion": "文字忠实",
        "pass": "转写来自最终音频，错误口播先修声音。",
        "fail": "只改字幕，留下相反或错误口播。"
      },
      {
        "criterion": "翻译语义",
        "pass": "中文正确区分我请求许可与我请你帮忙。",
        "fail": "代词角色颠倒，或Whisper输出被误称中文翻译。"
      },
      {
        "criterion": "文件完整性",
        "pass": "标准UTF-8 SRT、编号和时序通过。",
        "fail": "乱码、.srt.txt、时间行缺失或重叠。"
      },
      {
        "criterion": "同步证据",
        "pass": "真实听音重定时，完整播放记录明确。",
        "fail": "仅有人工预设时间就称精准同步。"
      },
      {
        "criterion": "端与限制",
        "pass": "写明编辑器/端/版本；未执行项保留。",
        "fail": "把国际CapCut教程硬写成国内剪映手机通用按钮。"
      }
    ],
    "sources": [
      {
        "title": "How Do I Import Subtitles? | CapCut Help",
        "url": "https://www.capcut.com/help/how-to-import-subtitles"
      },
      {
        "title": "openai/whisper：原作者仓库与 README",
        "url": "https://github.com/openai/whisper"
      },
      {
        "title": "Whisper transcribe.py：SRT 与 transcribe / translate 参数",
        "url": "https://github.com/openai/whisper/blob/main/whisper/transcribe.py"
      },
      {
        "title": "Can, could and would for invitations, offers, requests and permission | British Council",
        "url": "https://learnenglishteens.britishcouncil.org/grammar/b1-b2-grammar/can-could-would-invitations-offers-requests-permission"
      }
    ],
    "executionStatus": "已完成本地材料编写与SRT格式/时间区间检查；NOT_RUN：没有提供或录制真实音频，未使用外部自动识别、Whisper、剪辑器导入、配音、渲染或发布。字幕起止是人工规划，尚未验证与实际声音同步。",
    "figure": "video-flow",
    "downloads": [
      "v6-video-subtitle-kit.md",
      "v6-video-voice-zh-mixed.srt",
      "v6-video-voice-en.srt",
      "v6-video-voice-en-bilingual.srt",
      "v6-video-subtitle-audit.csv"
    ]
  },
  {
    "id": "workshop-video-publish-review",
    "topic": "video",
    "title": "同一作品的四平台封面、标题与发布前清单：离线复盘练习",
    "basis": "把同一条“开窗：我来还是你来？”30秒英语片准备为B站、抖音、小红书与YouTube的发布包。变的是标题、封面文字和说明口吻，核心例句与事实保持一致；课程内只完成离线审稿。发布由学员本人决定并在当时的实际界面完成。标题/缩略图原则和留存解释参考YouTube官方帮助；B站AI标识参考公告。四平台具体标题与检查单为本站原创编辑练习，未承诺流量、参数通用或平台规则已全部覆盖。",
    "level": "零基础主线 · 离线审稿与复盘",
    "minutes": 50,
    "prerequisites": [
      "已有一条实际完整播放过的本地视频；没有时先把状态写“成片待制作”。",
      "能核对字幕、素材来源与AI参与范围。",
      "能够自己查看目标平台当前发布页；课程不登录或代发布。"
    ],
    "deliverables": [
      "四份平台标题、封面文字与简介草稿。",
      "一份素材与AI使用记录及发布前检查单。",
      "一张发布/未发布状态表。",
      "一份离线模拟复盘或本人发布后的真实观察记录，清楚标来源。"
    ],
    "input": "固定作品：英语一句话03，30秒目标，中文解释+两句开窗英语。实际时长、画幅、声音与工具填写自己的真实版本。\n事实：在开窗请求情境，Can I open the window?问我可以做吗；Can you open the window?请你帮忙做。自制图/自摄作品、AI辅助脚本、是否AI声音均按实际制作填。\n目标平台：B站、抖音、小红书、YouTube；这里只准备内容版本，不列未经核验的全部发布规格。\n封面原稿：一扇原创窗户、I / you两张卡；主文字“开窗：我来 / 你来？”；同系列青绿+深蓝。例句通过编辑器排版。\n复盘表没有真实播放量；默认填“未发布”。如用课程模拟数必须逐行标模拟。",
    "inputNotes": "YouTube官方帮助在核验日已经列出电脑Studio的自定义Shorts封面入口与账号验证条件，2026年7月公告还提示逐步开放；不能套用旧教程“Shorts永远无法上传封面”。不同账号可能有差异，必须看自己的可用选项。本课不登录、上传、提交或付费。",
    "prompt": "为我的真实英语短视频准备离线发布包。面向中文学习者，内容是开窗场景Can I/Can you，30秒为计划值，实际导出信息我会填。分别写B站、抖音、小红书、YouTube的一条准确标题、封面主字、简短说明、观众练习题。不写爆款、保证学会、收益或虚构反馈；不能编造平台最新尺寸、字数限制、最佳发布时间或算法规则。列出本人在实际发布页需核对的文件/封面/裁切/AI声明/可见性项目。按我的真实素材和声音来源写AI说明，有未知项标待填。再给复盘表与单变量下一轮改法；课程内保持未发布，真发布由本人操作。",
    "sampleOutput": "B站：标题“Can I 和 Can you 怎么选？30秒开窗例句｜英语一句话03”；封面“开窗：我来 / 你来？”；说明“面向中文学习者，用开窗场景区分请求许可与请对方帮忙。例句已人工核对；AI使用范围按实际填写。”\n抖音：标题“我来还是你来？两句开窗英语”；封面“Can I / Can you”；说明“开窗这个场景里，先看谁做动作。你能说‘我可以坐这里吗’吗？”\n小红书：标题“Can I / Can you：开口前先看谁做动作”；封面“同一动作，谁来做？”；说明“今天只练一个场景。Can I open the window? / Can you open the window? 不是can全部用法总结。素材和AI使用范围按实际填写。”\nYouTube：标题“Can I or Can You? 开窗请求｜English in 30s 03”；封面“CAN I? / CAN YOU?”；说明“中文讲解英语开窗请求。Practice: Can I sit here? 人工校对了例句与字幕；AI参与范围按实际写。”\n\n统一互动题：“我可以坐这里吗？”参考答案 Can I sit here? 不伪装已有评论。\nAI说明模板：“画面为[本人自摄/自制/AI生成的具体部分]；脚本使用[实际工具]辅助，例句与字幕由本人核对；声音为[本人录音/工具通用AI音色]。”空项未填完不能提交。\n模拟复盘：若A版30秒里同口径平均观看18秒，手算18÷30=60%；只能写该模拟口径的平均观看时长占比，不等于完播率、平台留存或真实流量。真实数据尚无。",
    "walkthrough": [
      "确认母版：先完整播放实际导出视频，记时长、画幅、声音和字幕版本。没有成片就先完成前面工作坊；发布包里不能把30秒目标写成已经实际导出。",
      "写封面承诺：封面只写视频确实解决的“我来/你来开窗”。不写“一分钟学会全部can”“看完考试满分”；标题、第一镜和结尾练习要说同一件事。",
      "做四份文字稿：使用示范标题与说明为草稿，替换为自己真实制作信息。四份可以使用不同口吻，但Can I/Can you、目标受众与AI范围不能互相矛盾。",
      "做封面构图：以原创窗户图与I/you卡为主，减少小字。在本地做竖向和横向构图草稿；比例只是练习方便，真正上传尺寸、裁切和文件限制以所选平台当前提示为准。",
      "缩小检查：把封面缩到手机列表大小，5秒内能读到主字并理解问题；检查四边和底部是否可能被按钮遮挡。裁切后仍完整显示I与you，不能让最重要的字落边缘。",
      "核真实说明：逐项填自摄、自制、AI图、AI声音和脚本辅助。保留生成工具已有标识；说明模板与平台自带AI声明不是同一项。B站公告给出创作声明AI选项，其当前菜单由本人查看。",
      "核平台差异：B站、抖音、小红书各自查当时发布页的封面预览、标题显示、AI选项和可见性，不假定规则相同。只读教程不能证明自己的账号已经开放某功能。",
      "核YouTube封面：当前官方帮助提供电脑Studio的Shorts自定义封面和账号验证说明；公告记录功能逐步开放。自己看有无上传入口；没有就使用当前可用的帧选项并把状态写清。课程不代验证账号，也不把2026新增能力写成人人保证可用。",
      "离线预填：在发布检查单填待上传文件、最终封面、标题、说明、素材权利和AI范围；发布状态统一写“未发布/本人待操作”。本课到此可验收，不需要消耗流量或开放账号。",
      "本人真实发布（课外可选）：学员自己打开目标平台，复查所有预览与声明、选择自己打算的可见性后决定提交。记录实际链接或原生作品ID和发布时间。此课程与助手没有执行提交，未发布者不填虚构链接。",
      "收集同口径观察：若本人已发布，分别在自选的24小时与7天记录当时可见的数据、统计窗口、指标名称和单位；没有数据写“不可用”，0必须来自实际显示。各平台播放、完播等定义不可直接混算。",
      "定位内容问题：看真实可用的留存曲线或评论问题，写出证据对应的具体秒点，如第12秒代词解释太快；YouTube官方帮助说明留存报告反映不同片段留住注意力的情况，但小样本和账号数据可能不足。",
      "离线模拟也可完成：使用清单中的模拟例子练手算，明确“模拟、非发布结果”。平均观看秒数÷片长只是本练习的占比，不冒称平台完播率；公开播放量不能推算留存。",
      "下一轮只改一件：例如把第0–3秒由系列片头换成开窗问题，其他条件尽量保持；另存v2，记录预期改善与实际观察。没有随机分配或足够样本，不能声称修改导致流量变化或百分比提升。",
      "归档：保留原项目、导出版本、四份发布草稿与检查表。真实发布后只更新实际完成的行；本轮无账号操作、无发布证据。"
    ],
    "acceptance": [
      "四份标题与说明忠于同一作品，英文例句、受众和AI参与范围一致，无流量或学习效果承诺。",
      "封面主字在小屏可读，I/you不被裁切；平台参数以本人当前发布页核对，不套统一规格。",
      "素材和声音来源能逐项追溯，AI说明与真实制作一致；需要的平台自带声明由本人另行选择。",
      "离线清单完整，未发布状态保持明确；没有虚构链接、评论、播放量或把模板当发布完成。",
      "复盘记录保留指标原名、窗口、单位与来源；无数据写不可用，不把模拟当真实。",
      "能复算18÷30=60%的模拟平均时长占比，并明确它不是完播率或平台留存；不跨平台直接比较不同口径。",
      "下一轮只提出一个具体改动与观察点，未建立因果证据时不声称标题/封面必定提升流量。",
      "本轮未登录、上传、投稿或发布；官方教程元数据已核验，未完整观看也未执行外部功能。"
    ],
    "milestones": [
      {
        "name": "实际母版确认",
        "action": "记录真实导出信息与文件版本。",
        "expected": "目标稿与实际文件状态区分清楚。",
        "verify": "完整播放母版并检查尾句。",
        "fix": "没成片先标待制作，不推进真实提交。"
      },
      {
        "name": "四平台内容稿",
        "action": "填四份准确标题、封面主字、说明和练习题。",
        "expected": "口吻可不同，知识和事实一致。",
        "verify": "每份标题的承诺都能在成片里找到。",
        "fix": "删去夸大效果与没出现的知识点。"
      },
      {
        "name": "封面可读",
        "action": "缩小预览并尝试横竖构图。",
        "expected": "主字和I/you无需放大可辨。",
        "verify": "5秒可读、核心词不落裁切边缘。",
        "fix": "减少文字，移动重点；平台最终裁切由本人确认。"
      },
      {
        "name": "声明与状态闭合",
        "action": "按实际素材填写AI范围，发布状态记未发布。",
        "expected": "检查单无占位符被误当事实。",
        "verify": "图、声音、脚本每项说明有真实依据。",
        "fix": "未知项留待填，真实提交前本人核对。"
      },
      {
        "name": "指标有口径",
        "action": "填真实数据或标注模拟/不可用。",
        "expected": "平台、窗口、指标名称、单位和来源齐全。",
        "verify": "能指出18秒/30秒的60%只是哪种练习数。",
        "fix": "缺定义不算率，不把0填进未知格。"
      },
      {
        "name": "下一轮可检验",
        "action": "只选一个镜头/标题/封面改动并写观察点。",
        "expected": "v2假设具体，结果与因果不混淆。",
        "verify": "说明需要什么真实证据才能支持改进。",
        "fix": "删“必爆/提升X%”，改为待观察假设。"
      }
    ],
    "workedExample": {
      "before": "封面写“30秒学会所有can”，发布表填四个平台“已发布”，用18秒平均观看就声称完播率60%。",
      "after": "封面改成“开窗：我来/你来？”，四平台保存为未发布草稿；模拟数18÷30=60%注明平均时长占比；真实发布后才填作品ID与平台原指标。",
      "why": "标题承诺要对应作品内容，动作状态要有证据，指标名称要有定义。这样下一轮知道该修哪一段，而不是根据不存在的数据追热点。"
    },
    "rubric": [
      {
        "criterion": "承诺准确",
        "pass": "标题封面只承诺本片已讲清的场景。",
        "fail": "全语法/保证学会/虚构成绩与流量。"
      },
      {
        "criterion": "发布边界",
        "pass": "离线材料明确未发布；真实提交由本人执行。",
        "fail": "草稿或只读教程被报告成实际发布。"
      },
      {
        "criterion": "AI与素材透明",
        "pass": "说明按实际内容填写，平台声明另核对。",
        "fail": "照抄自摄或真人录音模板却与素材不符。"
      },
      {
        "criterion": "数据可解释",
        "pass": "原指标、窗口、单位和来源完整，模拟有标签。",
        "fail": "跨平台混率、未知填0、平均时长当完播率。"
      },
      {
        "criterion": "改进审慎",
        "pass": "单项修改有具体观察点，因果结论留待验证。",
        "fail": "一次波动就宣称算法规律或保证提升。"
      }
    ],
    "sources": [
      {
        "title": "Thumbnail & title tips | YouTube Help",
        "url": "https://support.google.com/youtube/answer/12340300?hl=en"
      },
      {
        "title": "Add custom thumbnails on YouTube | YouTube Help",
        "url": "https://support.google.com/youtube/answer/72431?hl=en"
      },
      {
        "title": "✨HOW TO✨ UPLOAD a Custom Shorts Thumbnail | YouTube Creators",
        "url": "https://www.youtube.com/watch?v=Gtv6ozZYPjY"
      },
      {
        "title": "Understand your YouTube engagement | YouTube Help",
        "url": "https://support.google.com/youtube/answer/9313698?hl=en"
      },
      {
        "title": "关于AI生成内容有序标识的公告 | 哔哩哔哩治理小分队",
        "url": "https://www.bilibili.com/opus/1106496554576904197"
      }
    ],
    "executionStatus": "NOT_RUN：未登录任何平台，未上传文件、验证账号、选择发布选项、提交、发布或读取真实后台数据。已编写四平台离线内容稿和模拟复盘材料；官方封面视频只核验原页标题、频道与简介，未完整播放。",
    "figure": "video-flow",
    "downloads": [
      "v6-video-publish-kit.md",
      "v6-video-release-review.csv"
    ]
  }
];

export const videoWorkshopResources = [
  {
    "id": "video-v6-ref-english-ability",
    "topic": "video",
    "type": "guide",
    "title": "Ability | British Council LearnEnglish",
    "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/ability",
    "language": "英文",
    "author": "British Council",
    "whatToLearn": "核对can/can't表示能力的例句，区分当前能力与其他用法。",
    "prerequisite": "能读简单英语；原页还有进阶内容，新手先读beginner部分。",
    "practiceAfter": "核对系列01/02的例句，手写一个I can + 动词原形和一个I can't句。",
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "已通过web打开原页并读取beginner能力段；后续定位抓取超时，未完整执行互动练习。例句稿是本站原创。"
  },
  {
    "id": "video-v6-ref-english-requests",
    "topic": "video",
    "type": "guide",
    "title": "Can, could and would for invitations, offers, requests and permission | British Council",
    "url": "https://learnenglishteens.britishcouncil.org/grammar/b1-b2-grammar/can-could-would-invitations-offers-requests-permission",
    "language": "英文",
    "author": "British Council LearnEnglish Teens",
    "whatToLearn": "核对情态动词后用无to原形、疑问句位置，以及can请求/许可的语境。",
    "prerequisite": "原课标B1-B2；新手只查与本练习相关的请求/许可段，不要求完整学完。",
    "practiceAfter": "在开窗场景圈出Can I / Can you的动作执行者，避免将情境结论写成通用规则。",
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "web原页打开后局部抓取超时；已用浏览器实际读正文、作者机构与请求/许可段。未播放嵌入视频或做互动题。"
  },
  {
    "id": "video-v6-ref-capcut-keyframes",
    "topic": "video",
    "type": "video",
    "title": "How to Use Keyframing on CapCut Desktop App with Horchata Soto! | CapCut 101 | CapCut",
    "url": "https://www.youtube.com/watch?v=kQXGHAoCusM",
    "language": "英文（原页可出现翻译标题）",
    "author": "CapCut 官方频道；示范者 Horchata Soto",
    "whatToLearn": "看关键帧怎样设置随时间变化的画面参数，先练图片轻微推近。",
    "prerequisite": "国际CapCut桌面教程；不能照抄为国内剪映按钮；需要自己的可用编辑环境。",
    "practiceAfter": "选一张自己的图片做6秒100%→104%缩放，检查首中尾是否裁字。",
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "web抓取watch原页失败；已用浏览器实际打开独立watch页，核对完整标题、CapCut/@CapCutofficial、已验证频道、3:21时长与关键帧简介。未完整播放。"
  },
  {
    "id": "video-v6-ref-capcut-srt",
    "topic": "video",
    "type": "guide",
    "title": "How Do I Import Subtitles? | CapCut Help",
    "url": "https://www.capcut.com/help/how-to-import-subtitles",
    "language": "英文",
    "author": "CapCut",
    "whatToLearn": "读UTF-8 SRT准备、Desktop/Web导入、可编辑字幕段与移动端限制。",
    "prerequisite": "国际CapCut帮助；按自己端/版本核对，国内剪映不使用同一菜单假设。",
    "practiceAfter": "将本站8段英文SRT导入30秒色卡项目，核对段数、中文显示与可编辑性。",
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "已打开官方正文，读到Desktop的UTF-8、时间层与Web/SRT说明，以及移动端直接导入限制；本轮未登录或实际导入。"
  },
  {
    "id": "video-v6-ref-runway-image-motion",
    "topic": "video",
    "type": "guide",
    "title": "Image to Video Prompting Guide | Runway",
    "url": "https://help.runwayml.com/hc/en-us/articles/48324313115155-Image-to-Video-Prompting-Guide",
    "language": "英文",
    "author": "Runway",
    "whatToLearn": "区分输入静帧提供的外观与提示词描述的主体/镜头运动，从简单动作开始迭代。",
    "prerequisite": "当前指南说明针对Gen-4.5；账号可用模型、时长、费用由本人确认，不承诺生成稳定。",
    "practiceAfter": "只给第四镜规划缓慢推近；使用同一清晰无文字原创静帧，检查角色与窗框。",
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "已打开官方指南正文，核对输入图、视觉缺陷可能被放大、简单运动与逐步迭代说明；未上传图或生成视频。"
  },
  {
    "id": "video-v6-ref-whisper-author",
    "topic": "video",
    "type": "repo",
    "title": "openai/whisper：原作者仓库与 README",
    "url": "https://github.com/openai/whisper",
    "language": "英文",
    "author": "OpenAI / openai仓库原作者",
    "whatToLearn": "理解语音转写、翻译到英语、SRT输出与本地依赖；代码和模型权重为MIT。",
    "prerequisite": "代码选修：需要自己准备Python、FFmpeg与模型资源；主线可直接使用SRT和已有编辑器。",
    "practiceAfter": "先手工核对自己的20–30秒录音；已有环境才尝试转写SRT，并保留错误与时间校对记录。",
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "已读README及原始transcribe.py的output_format、task和language参数；未克隆/安装/下载模型/运行。translate目标是英语，不会自动生成中文翻译，turbo也不适合翻译任务。"
  },
  {
    "id": "video-v6-ref-youtube-title",
    "topic": "video",
    "type": "guide",
    "title": "Thumbnail & title tips | YouTube Help",
    "url": "https://support.google.com/youtube/answer/12340300?hl=en",
    "language": "英文",
    "author": "YouTube Help",
    "whatToLearn": "学习标题准确、简短与封面易读，让标题承诺对应实际内容。",
    "prerequisite": "原则参考不保证流量，也不代表B站/抖音/小红书规则；当前界面另核对。",
    "practiceAfter": "写一条Can I/Can you准确标题，逐词对照成片能兑现的内容。",
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "已打开官方正文核对准确标题、重要词靠前和封面可读建议；未登录后台、未做流量测试。"
  },
  {
    "id": "video-v6-ref-youtube-thumbnails",
    "topic": "video",
    "type": "guide",
    "title": "Add custom thumbnails on YouTube | YouTube Help",
    "url": "https://support.google.com/youtube/answer/72431?hl=en",
    "language": "英文",
    "author": "YouTube Help",
    "whatToLearn": "查视频/Shorts封面入口、电脑Studio及账号验证说明，按当前支持项准备封面。",
    "prerequisite": "账号与功能开放可能不同；当前文档与2026公告需一起看，不照抄旧版Shorts限制。",
    "practiceAfter": "离线准备封面；本人在实际账号检查是否有上传入口或当前帧选择。",
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "已读取官方帮助当前Shorts自定义封面段，并打开2026-07-24官方更新公告确认逐步开放。未验证个人账号可用性，不承诺人人已开放。"
  },
  {
    "id": "video-v6-ref-youtube-shorts-demo",
    "topic": "video",
    "type": "video",
    "title": "✨HOW TO✨ UPLOAD a Custom Shorts Thumbnail | YouTube Creators",
    "url": "https://www.youtube.com/watch?v=Gtv6ozZYPjY",
    "language": "英文；浏览器原页显示中文翻译",
    "author": "YouTube Creators 官方频道",
    "whatToLearn": "观看官方30秒Shorts自定义封面示范，再核对自己的可用入口。",
    "prerequisite": "YouTube官方帮助直接链接此原视频；账号可用性需自己核验。",
    "practiceAfter": "与帮助页一起看，在离线发布清单写“已找到/未开放/未执行”，本课不上传。",
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "从官方帮助链接取得watch地址；web抓取受限后浏览器打开独立原页，核对初始英文标题、YouTube Creators/@youtubecreators、0:30时长与封面简介。未完整播放。"
  },
  {
    "id": "video-v6-ref-youtube-retention",
    "topic": "video",
    "type": "guide",
    "title": "Understand your YouTube engagement | YouTube Help",
    "url": "https://support.google.com/youtube/answer/9313698?hl=en",
    "language": "英文",
    "author": "YouTube Help",
    "whatToLearn": "理解留存曲线、平均观看时长和观看时长原指标，保留口径再解释数据。",
    "prerequisite": "需要本人已有真实作品和可见后台数据；没有时用明确标模拟的练习表。",
    "practiceAfter": "记录一个作品的原指标、统计窗口与单位；写一个具体掉点及单项改法。",
    "topics": [
      "video"
    ],
    "checkedAt": "2026-10-09",
    "verificationNote": "已打开官方帮助并读留存、观看时长与平均观看时长定义；没有登录、没有读取真实后台；平均时长占比不等于完播率。"
  }
];
