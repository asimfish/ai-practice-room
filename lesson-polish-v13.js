// Final learner-journey repairs. Existing IDs, input materials and native quality gates remain.
export function applyFinalLessonPolish(lessons,templates){
 const by=id=>{const l=lessons.find(l=>l.id===id);if(!l)throw Error('Missing lesson '+id);return l;};
 const changed=['auto-files','auto-feishu-draft','auto-recovery','anygent-codex','anygent-mobile','anygent-recovery','skill-codex-install','skill-cross-agent'];
 const files=by('auto-files');
 files.steps[1]=['准备六份输入和单独的命名说明','建AI自动化练习/input、output、records。下载v7-practice-file-inputs.zip，只把其中6个TXT解压到input；下载v7-practice-file-kit.md保存到records/v7-practice-file-kit.md。先打开说明和六份正文，核对原名与内容。无法解压时按说明逐个新建六个TXT。input保持六份，命名说明不混进去，output先留空。'];
 files.prompts[0].text=files.prompts[0].text.replace('按v7-practice-file-kit.md读取','先确认能读取records/v7-practice-file-kit.md与input中六份正文。缺说明或无法读取时先询问，不猜规则。按该说明读取');
 files.checks[0]='我准备了input中的6个TXT及records/v7-practice-file-kit.md，AI确认读到规则和六份正文。';

 const daily=by('auto-feishu-draft');
 daily.goal='用本课R01—R04四条虚构记录，筛出2026-10-09且可分享测试组的三条，完成可核对的日报初稿、修订稿和审阅记录。';
 daily.steps=[
  ['下载记录，确定日期与分享范围','建report-practice/input、output、records。从本课练习材料下载飞书日报练习材料.md到input，打开确认R01—R04四条。此次练习固定日期2026-10-09、范围测试组；R04是前一天且仅自己可见，不能进入这份日报。换自己材料时重新写日期、读者和允许分享范围。'],
  ['先核筛选结果和各项实际状态','给AI提供实际文件或正文，要求列记录编号、日期、可分享范围及采用/排除理由。应采用R01/R02/R03，排除R04。R01只是词卡初稿完成且例句待核查，R02只是大纲审核完成，R03只是口播试读和分镜准备完成；都不能升级成完整成品已交付。'],
  ['手动写第一份草稿，再对照修改','生成output/日报草稿-v1.md，每项附R编号，分清已完成的具体步骤、进行中、阻碍和下一步。自己逐项对原记录核查，指出至少一处误写或可更清楚之处，修订另存output/日报草稿-v2.md，并在records/审阅记录.md写依据与改动。这条手动路线可完成本课。'],
  ['要练工作流，先建两张表','有本人允许的账号与功能时，按当前官方说明建立工作日志表和日报草稿表。工作日志保留编号、日期、事项、实际状态、证据、阻碍、下一步、分享范围；草稿表先建报告日期、草稿正文、审核状态、审核意见、分享范围、版本。没有这些条件就保留手动路线，不能声称测试过流程。'],
  ['只配置草稿，不配置群消息','按本人端当前节点名称，用单次按钮触发或官方测试入口，查找指定日期且允许分享的记录，AI生成草稿，再写入日报草稿表，初始状态为待审阅。先检查配置和额度；不添加群消息节点。只有保存配置时记录尚未运行。具备测试条件时本人单次测试，应产生一条可找回的待审阅草稿，正文能回到原记录。'],
  ['测试无记录日期并保存结果','手动路线提供一个没有记录的日期，结果只能说明无记录，不虚构进展；已有流程者再按官方测试方式单次运行同样条件，检查实际记录与状态，然后停用练习流程。分别记录手动结果、实际流程测试或未运行。自建五条虚构日志属于另一次独立练习，不把它与本课四条输入混用。']
 ];
 daily.prompts=[{title:'按四条原记录筛选并写日报草稿',text:'请只根据我实际提供的飞书日报练习材料.md。\n目标日期：2026-10-09；允许分享范围：测试组。先逐条列R01—R04的日期、范围、采用/排除理由，我核对后再写草稿。\n应采用R01/R02/R03，排除R04。把初稿完成、审核通过、试读或分镜准备写成对应步骤完成，不写成整份作品已交付。\n草稿分已完成的具体步骤、进行中、阻碍、下一步，每项附记录编号；未知信息不补造。\n在可写工作目录保存output/日报草稿-v1.md；我指出问题后另存v2，保留v1。只有聊天能力时给完整正文，我自己保存。不要发送群消息。'}];
 daily.practice='用本课四条记录完成筛选、v1/v2日报草稿和审阅记录，说明R04排除理由。再测试无记录日期；流程路线另记录实际草稿表、测试状态和停用位置，没有运行就写未运行。';
 daily.checks=['输入确有R01—R04四条，日期和分享范围同时筛选，只采用R01/R02/R03。','每项进展能回原文，初稿、审核、试读与完整成品没有混写。','v1/v2及审阅记录可找回，至少一项改动有依据；无记录日期没有虚构进展。','手动与实际流程运行状态分开，草稿经过本人审阅，没有群消息发送。'];
 daily.notes='本课下载输入为四条，筛选后为三条。可选的自建五条日志是新输入的复做练习。只有保存工作流配置不等于实际运行；账号不具备节点时使用手动路线并如实记录。';
 daily.practiceEstimate='先用本课四条记录筛选出三条并写手动草稿；飞书表、节点与权限配置另安排。';
 daily.reflection[0]='R01/R02/R03分别完成了哪个具体步骤，哪些内容仍未完成？R04为什么不能进入本次日报？';
 daily.reflectionGuide='给出四条记录的筛选理由、三条采用记录与草稿对照，以及无记录日期结果；流程未运行时明确标记，手动草稿也可完成本课。';

 const recovery=by('auto-recovery');
 recovery.steps[0]=['先选本课要恢复的路线','文件路线：准备原输入副本、预览/执行记录和输出目录。手动日报路线：准备原日志、草稿和审阅记录。已配置流程路线：再准备实际流程名、停用位置和运行记录。写在records/恢复说明.md，选一路做完整练习；没配置自动任务就不声称测试过定时或停用开关。'];
 recovery.steps[4]=['按所选路线练停止和恢复','文件路线先找到执行工具的停止方式；仅对练习副本做空输入或错误路径测试，核输出和日志，从保留输入恢复。手动日报路线不启动自动任务，用无记录日期或缺项检查，并从原日志重做草稿。已配置流程者再确认停用开关、运行记录和重复触发；未知执行状态先查实际输出，能确认未完成才重试。已发消息不能当未发生，须由有权限的人检查并处理。'];
 recovery.practice='选文件、手动日报或已配置流程中的一路，保存records/恢复说明.md与一次故障演练记录：实际输入、停止或人工替代方式、观察到的结果、恢复步骤。不适用项写不适用，未做项写未运行；不向真实群发送。';
 recovery.checks=['我区分明确失败与执行状态未知；未知时先查实际结果。','我的所选路线有可找到的停止或人工替代方式、记录和备份。','仅对练习副本或草稿做过一次故障测试，恢复过程有实际记录。','原输入与已检查版本保留，不适用或未运行项目标记准确。','费用与用量来自实际记录或写未知，没有把低价预期当实测账单。'];

 by('anygent-codex').intro+=' 本文Workspace指练习目录，daemon指电脑上维持连接与任务执行的进程；看到历史消息不能证明当前在线。';
 const mobile=by('anygent-mobile');
 mobile.steps[1][1]=mobile.steps[1][1].replace('原生端是否可用','iPhone/iPad客户端是否可用');
 mobile.steps[0]=['记录上一步的会话与文件','从电脑课记录找到自己机器、Workspace、Codex会话和实际生成的教案提纲-v1.md完整路径。打开核对，确定本次只继续这个文件；原教案-v1.md保留。电脑联网、连接进程运行、认证可用时，确认当前在线。'];
 mobile.steps[3]=['明确输入，另存指定v2文件','先让同一会话报告目录并读取教案提纲-v1.md。要求补3道符合原目标与词表的口头练习，教师答案另存教师答案-v2.md；教案提纲另存教案提纲-v2.md，保留v1。按实际权限流程读清必要确认；不能用一个“v2”回复代替实际文件。'];
 mobile.steps[4]=['手机查看指定的输出','要求报告两份新文件的完整路径与改动。通过当前文件入口或结果链接查看/下载教案提纲-v2.md和教师答案-v2.md，自己核对3题和答案；打不开时先记录实际路径与失败情况，不写查看成功。'];
 mobile.steps[5]=['回电脑重开同一版本','同一会话应有手机提出的要求；在记录的目录打开教案提纲-v2.md和教师答案-v2.md，逐题核语言与答案，确认v1仍在。文件不存在时先查会话状态与输出路径，不另建同名任务重复执行。'];
 mobile.prompts=[{title:'手机继续上一课文件，另存明确版本',text:'我在手机继续同一Anygent Codex会话。\n电脑/Workspace/会话：[实际记录]。输入为上一课实际生成的教案提纲-v1.md：[完整路径]。\n先报告当前目录、实际读取内容和未找到的材料；目录不符或无法读取时先停下问我。\n在原目标与词表范围补3道口头练习，题目放学生可见稿，答案单独保存。教案提纲另存同目录的教案提纲-v2.md，教师答案另存教师答案-v2.md；保留v1，不对外发送。\n先列修改计划，按实际权限流程处理必要写入，再报告真实完整路径、题号和改动。只是给了正文或无法保存时明确说明，我会自己在软件中保存并重开。'}];
 mobile.practice='手机在记录的同一会话修改上一课教案提纲-v1.md，查看教案提纲-v2.md与教师答案-v2.md，回电脑重开同一文件逐题核对；v1保留。';
 const anyRecovery=by('anygent-recovery');
 anyRecovery.steps[0]=['记录四种不同情况','先确认没有正在进行的写入，再观察手机锁屏、展示窗口关闭、连接进程停止和电脑休眠。锁屏或关闭展示窗口不必然等于电脑离线；记录机器在线、会话、目标输出路径与实际执行情况。'];
 anyRecovery.steps.splice(2,0,['恢复连接后，先查原任务结果','按原电脑、目录和会话恢复后，先查看原任务状态、约定输出路径和文件内容。若v2已经写入，打开核对并补记录，不再重做；能确认未完成才继续或重试。无法确认时保留待核，不另建同名任务。必要时从保留的v1副本重新开始，由本人确认。']);
 anyRecovery.prompts[0].text+='\n原会话和目标输出路径：[记录]。连接恢复后，先查原任务与实际文件是否已写入；状态未知时不要重跑，能确认未完成才继续。';
 anyRecovery.practice=anyRecovery.practice.replace('整理交接清单','整理手机接续任务记录');
 anyRecovery.checks[0]='我区分四种情况，记录第一处失败；恢复连接后查原会话与实际输出，再决定是否继续。';
 anyRecovery.checks[1]='手机接续任务记录有设备、目录、会话、输入/v2路径、停止和恢复步骤，没有真实Token。';

 const install=by('skill-codex-install');
 install.steps.push(['用与技能匹配的材料做一次试用','在练习目录建input、output、records。文字资料检查Skill可从本课材料下载v7-practice-notice.md放到input；PPT型Skill按PPT跟做课做三页测试稿，其他类型选其说明中的最小任务。先确认技能名称、实际调用方式、输入与真实输出格式，再试用。打开实际结果，核一项内容，保存records/技能试用记录.md；缺依赖就记录未运行。']);
 install.prompts.push({title:'安装后：明确调用并保存试用记录',text:'我要试用已确认安装的Skill：[完整名称/来源]，当前工具与练习目录：[说明]。\n输入材料：[实际文件完整路径或已提供正文]；任务：[与该技能功能匹配的最小任务]；应输出：[真实格式、文件名与output路径]。\n先核对它能否处理本输入、所需工具与依赖，按当前工具的明确调用方式使用，不把名称可见当已执行。只读检查型技能保存检查记录；生成型技能必须报告实际产物或失败原因，不把文本改后缀当PPTX/DOCX/MP4。\n我打开结果核查后，在records/技能试用记录.md记录输入、所用技能、实际输出或失败原文、检查与未运行项。缺关键条件时先给解决方法，未经完成不声称试用成功。'});

 const cross=by('skill-cross-agent');
 cross.steps[0]=['先选实际工具，读候选原说明','写清Codex、Harness或WorkBuddy中的一个实际目标；先看候选SKILL.md、完整资源和依赖。CLI示范按Vercel原项目核对，npx会下载执行工具，需要本人了解来源和Node环境。只看目录、只读说明与安装分别记录。'];
 cross.steps[1]=['按所选工具分支操作','Codex可在自己的练习目录使用下方完整CLI语法示范，先列候选，再替换仓库与确实存在的技能名称，单项安装并保留交互。示范的web-design-guidelines只用于说明命令，不要求安装不适合自己的技能。Harness/WorkBuddy不照抄-a codex，按本工具当前官方导入入口与目录处理；未确认支持就停在方案。'];
 cross.steps[2]=['确认位置与资源','Codex安装后记录实际目录和作用范围，保留整个技能文件夹及相对资源。其他工具分别核对发现目录、脚本、工具名、Python/API条件与权限。项目范围和用户范围先分清，不默认安装全库或扩大范围。'];
 cross.commands=[{title:'CLI语法示范：先列候选，不会安装技能',text:'npx skills add vercel-labs/agent-skills --list'},{title:'CLI单项示范：仅适用于选定Codex目标，执行前换成自己需要的候选',text:'npx skills add vercel-labs/agent-skills --skill web-design-guidelines --agent codex'}];
 cross.prompts[0].text=cross.prompts[0].text.replace('目标宿主','实际使用的工具').replace('另一宿主','另一个工具');
 cross.sourcesReviewed='2026-10-10';
 for(const t of templates){if(!changed.includes(t.lesson))continue;const l=by(t.lesson);if(l.prompts[0])t.text=l.prompts[0].text;t.desc=l.summary;}
}
