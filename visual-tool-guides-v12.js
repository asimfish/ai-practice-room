export const toolGuides={
 'kimi-code-cli-start':{
  title:'Kimi CLI：从练习目录到真实文件',question:'怎样确认CLI使用了正确目录，并实际调用自己的Skill？',kind:'files',
  input:{title:'自己准备的练习目录',lines:['inputs：去掉个人信息的活动材料','项目技能：.agents/skills','先核安装、登录与当前额度']},
  output:{title:'生成文件，再回原文检查',lines:['outputs：活动通知_v1.md','Skill检查：三条事实与未知项','实际打开文件，不只看完成消息']},
  moves:[{title:'从官方安装',detail:'Windows先准备Git Bash；按当前Kimi Code说明安装登录'},{title:'选练习目录',detail:'启动前确认当前目录，只给AI材料副本'},{title:'明确调用Skill',detail:'按Kimi自己的调用方式使用检查技能'},{title:'打开核查文件',detail:'核时间、地点和人数，缺项保留待确认'}],
  checks:['工作目录与生成文件位置可以找到','明确调用了自己的文字检查Skill','三条事实与输入一致，缺项没有编造'],
  contrast:{before:'AI说已经完成了，所以文件和Skill肯定都正常。',after:'打开outputs中的实际文件，核对三条原文；让CLI报告技能来源和检查结果。',why:'读懂提示词、发现技能和生成真实文件要分别确认。'},
  sample:{title:'教学示范：活动通知的文件检查记录',lines:['输入：自己准备的活动材料副本。','目录：inputs保存材料；outputs保存新文件。','技能：检查来源、事实和未知项，不负责发送。','结果：活动通知_v1.md需本人打开。','核查：时间、地点、人数逐项对原文。','未实际运行：本图是步骤示意，不是工具执行证明。']}
 },
 'codex-app-start':{
  title:'Codex：选目录、用Skill、检查输出',question:'怎样在桌面Codex入口创建任务并确认本地Skill确实被使用？',kind:'workspace',
  input:{title:'桌面入口与自己的工作区',lines:['当前产品菜单：选择Codex','New chat：选择练习文件夹','项目Skill：.agents/skills/<名称>']},
  output:{title:'同一目录中的可检查成果',lines:['确认材料范围与实际文件路径','显式调用：$skill-name','打开输出，再记录检查与修改']},
  moves:[{title:'进入Codex',detail:'按当前官方桌面入口登录，选择Codex并新建任务'},{title:'选择目录',detail:'核对练习文件夹，确认材料副本能读取'},{title:'指定Skill',detail:'发现并显式调用自己的文字检查技能'},{title:'检查成果',detail:'在文件管理器打开输出，回材料核三条事实'}],
  checks:['清楚普通聊天与Codex工作区的差别','能指出Skill目录与实际调用名称','输出文件可打开，检查和修改有记录'],
  contrast:{before:'在普通聊天中提了一下Skill，就当成已经安装和调用。',after:'在Codex工作区确认.agents/skills，使用$技能名调用，并核对输出文件。',why:'入口、目录和调用方式要以所用产品的实际能力为准。'},
  sample:{title:'教学示范：Codex文字Skill练习',lines:['任务：根据副本材料写活动通知。','先报告：工作目录、能读取的文件和缺失项。','调用：$activity-fact-check（示例技能名）。','检查：时间、地点和人数回原文对照。','输出：通知文件与修改记录分别保存。','图为操作示意；登录、安装、模型执行由本人完成。']}
 }
};
