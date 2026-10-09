const guide='https://memory.whalent.com/guide/';
const local=(file,title,caption,scope,steps,lookFor=[])=>({kind:'image',typeLabel:'界面实拍 · 按图找入口',src:'./visuals/'+file,title,caption,scope,steps,lookFor,sourceUrl:guide,sourceLabel:'Anygent当前界面实拍＋官方教程',checkedAt:'2026-10-09'});
const film={kind:'video',typeLabel:'实拍截图讲解',src:'./media/v9-anygent-workbench-walkthrough.mp4',captions:'./media/v9-anygent-workbench-walkthrough.vtt',title:'30秒逐步截图讲解：工作台与窄屏会话',caption:'来自实际打开的界面和官方演示环境，配中文字幕；是截图顺序讲解，不是连续录屏。演示会话与代码是预设样例，不是真实电脑执行结果。',sourceUrl:'https://memory.whalent.com/guide/workbench-basic/',sourceLabel:'Anygent官方交互练习与本站实拍',scope:'演示环境四项UI动作实际完成；模拟文件面板当次读取失败，不能据勾选推断文件可读。手机图为433px桌面窄屏，真机接续、模型任务与命令执行未验证。',steps:[3,4],checkedAt:'2026-10-09'};
export const anygentLocalVisualsByLesson={
 'anygent-codex':[local('v9-anygent-codex-form.jpg','新建Codex：核对机器、标题和工作目录','实拍创建前表单，类型为Codex、机器为本机；标题和目录填的是公开教学示例。家人要换成自己的电脑和专门练习目录，不照抄Mac路径。','已登录界面只读/填示例，未点击创建、升级、重启或临时终端。图里的版本号仅为录制时信息；认证、权限与实际会话结果另验。',[1,4],['类型选Codex','机器是否是自己的目标电脑','工作目录与练习副本的位置','下一步与创建按钮在底部'])],
 'anygent-workbench':[
 local('v9-anygent-create-workbench.jpg','管理页底部：给新的工作台命名','当前版本可从顶部“工作台”进入“管理工作台”，在列表底部找到“新工作台名称”。图里填了教学示例，尚未点击创建。','仅创建栏的真实截图，私人工作台列表已裁出；没有创建或改动真实工作台。后续布局练习使用官方演示环境。',[2],['填写容易认出的练习名称','确认这是自己的新工作台，再创建']),
 local('v9-anygent-drag-source.jpg','拖对话整行，分清目录与会话','官方演示机器demo-workstation下面有目录whalent-quickstart和具体对话。拖目录会打开终端；拖“演示：给服务加 /health 接口”对话整行才是Chat。','两种拖拽均实际观察；图只含官方演示条目。先在侧栏搜索完整演示标题，再拖，避免碰到自己的真实任务。',[3],['演示机器名称','上面的目录条目','下面的具体对话整行']),
 local('v9-anygent-panel-types.jpg','从“＋”选择Chat、File或Terminal','添加面板后先选类型。Chat是对话，File是文件浏览，Terminal是终端。官方演示中始终选择demo-workstation及whalent-quickstart；列表也可能出现真实机器。','演示界面实拍；未访问真实机器的文件或终端。本次演示File打开后出现身份/目录读取失败，需按实际状态记录。',[3],['Chat / File / Terminal含义','选择演示机，不选自己的其他主机','打开面板不等于已读取文件']),
 local('v9-anygent-split-menu.jpg','右键面板标签：水平分割或垂直分割','Windows右键标签，Mac可双指点按，选择分栏方向。图里其它克隆、移除等菜单无需跟做。','菜单实拍，分栏仅在官方演示工作台完成；没有重排私人工作台。',[4],['右键的是面板标签','水平分割与垂直分割']),
 local('v9-anygent-demo-layout.jpg','演示工作台：分栏与四项动作检查','对话、终端、文件面板与分栏四项UI动作已实际完成。聊天、代码、队列都是官方预设演示；不要求家人读懂或执行其中代码。','4/4仅证明演示动作。File内容读取当次报错；示例“测试通过”不代表本机运行了测试，也不证明真实Codex认证或手机接续。',[4,5],['顶部标签区分对话、文件、终端','分栏后的两个区域','右下角演示检查单的范围']),
 film
 ],
 'anygent-mobile':[
 local('v9-anygent-mobile-demo.jpg','窄屏会话：看消息、队列与审批入口','这是433px桌面窄屏中的官方演示会话，展示手机网页布局。小屏可从标签菜单“放大浏览”聚焦一个面板。发送或审批前核对机器、目录、命令及影响，不因示例说测试通过就批准。','桌面浏览器窄屏实拍，不是真手机实测；未发送、终止、审批或执行git push。真正跨设备接续需要自己手机登录并核对同一会话。',[3,4],['会话标题与目标机器/目录','消息队列和输入框是两处','审批前读操作内容，按本次范围判断']),
 {...film,steps:[3,4]}
 ]
};
export const anygentVisualLimits={
 'anygent-codex':'配图是实际创建前表单；真正创建、认证和本机目录/文件结果需要本人完成。本轮没有点击创建或运行模型。',
 'anygent-workbench':'可先进入官方“开始工作台实操”，只选demo-workstation/whalent-quickstart。四项绿只记录UI动作；当次演示文件读取失败，不能写成文件已可用。完成后再在自己的练习目录复做。',
 'anygent-mobile':'配图为桌面窄屏页面，真实手机登录、同一会话与在线电脑接续尚未验证。按自己的设备核对后再记录成果。'
};
