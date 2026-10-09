// Original-site media only. checkedAt records this research session, not account execution.
// Videos stay on the source CDN/player; none are downloaded or rehosted.
const checkedAt = '2026-10-09';
const klingGuide = 'https://kling.ai/quickstart/klingai-video-3-model-user-guide';
const klingLipGuide = 'https://kling.ai/quickstart/ai-lip-sync-guide';
const editingGuide = 'https://xjzx.hnfnu.edu.cn/info/1099/3311.htm';
const pdfGuide = 'https://support.microsoft.com/zh-cn/powerpoint/training/save-powerpoint-presentations-as-pdf-files';
const videoGuide = 'https://support.microsoft.com/zh-cn/powerpoint/turn-your-presentation-into-a-video';

const frameControls = {
  kind: 'image',
  src: 'https://static-31.klingai-cdn-aws.com/kling-blog/file_by_url/00026823c2ab4dde7414c64780caa218ee97686206016a18fa5d2619e9abae33.png?x-oss-process=image%2Fresize%2Cw_1872%2Fformat%2Cwebp',
  title: '可灵 3.0：首帧、可选尾帧、主体绑定与分镜开关',
  caption: '官方操作截图：先认出首/尾帧输入与主体绑定，再核对底部 Multi-Shot。做单镜时按当前界面关闭多镜；不要直接复制图中复杂动作。',
  sourceUrl: klingGuide,
  sourceLabel: 'Kling AI 官方指南 · 2026-02-06',
  scope: '已读官方 Multi-Shot / Image-to-Video 章节并打开原图看见界面；图中 Multi-Shot 开启。截图为官方英文端示范，不证明本人账号、国内端型号、积分或按钮一致。'
};
const customShots = {
  kind: 'image',
  src: 'https://static--8.klingai-cdn-aws.com/kling-blog/file_by_url/f48977394b75e028819b8af40357098c50e4de45d8593176b2431929249b45bb.png?x-oss-process=image%2Fresize%2Cw_1872%2Fformat%2Cwebp',
  title: '可灵 3.0：为每个分镜填写说明与时长',
  caption: '官方操作截图：Custom Multi-Shot 显示 Shot 1 / Shot 2、各自时长和 + Shot。先试两镜；图中的 7 秒与 8 秒只是示范，练习时按本人模式允许值填写。',
  sourceUrl: klingGuide,
  sourceLabel: 'Kling AI 官方指南 · 自定义分镜',
  scope: '原图已打开并视觉确认分镜表单；没有登录、提交或核验当前账号可选时长。'
};
const elementVoice = {
  kind: 'image',
  src: 'https://static--72.klingai-cdn-aws.com/kling-blog/file_by_url/b43c867b6d000374839ef371b1517af6c40b3f64ab3d314ea64109946c92ee1c.png?x-oss-process=image%2Fresize%2Cw_1872%2Fformat%2Cwebp',
  title: '可灵 3.0：多角度角色参考与声音选择',
  caption: '官方操作截图：Create Element 中放入同一角色的多角度图；下方区分 No Voice、预设声音与 Voices。外观和声音分别验收，先确认授权再使用自己的音频。',
  sourceUrl: klingGuide,
  sourceLabel: 'Kling AI 官方指南 · 主体与声音',
  scope: '已打开原图，视觉确认三张角色图、可选角度、声音卡和名称说明字段；这是官方示范素材，未替学员创建资产或试听、授权该音色。'
};
const lipUpload = {
  kind: 'image',
  src: 'https://d1extl9qtlpf43.cloudfront.net/kling-blog/file_by_url/0167f03bb846bcb594e023e6a4b5d06e6331ae9fa5748efe817221b9a2bf6ac8.png?x-oss-process=image%2Fresize%2Cw_1872%2Fformat%2Cwebp',
  title: '旧版可灵 Lip Sync：本地配音与人物视频',
  caption: '官方旧版操作截图：Upload Local Dubbing 将配音波形与人物视频并列，便于比较声音长度和视频长度。原指南只列 Kling 1.0 / 1.5；先核对当前型号兼容，不照图推定 3.0 或今天的报价。',
  sourceUrl: klingLipGuide,
  sourceLabel: 'Kling AI 官方旧版口型指南 · 2025-11-24',
  scope: '原页正文及原图已打开；视觉确认本地配音标签、波形、人物视频和付费按钮。图中旧积分不是当前报价，未上传音频或运行口型。'
};
const lipExample = {
  kind: 'video',
  typeLabel: '成片效果参考',
  src: 'https://v15-kling.klingai.com/bs2/upload-ylab-stunt-sgp/kling-docs-file/fcABSHMaBzjBL9bjmPRF_kv5w/docs_enclosure_2bb148ef-4a07-4d63-ba93-16cda6fc46e1_drag-upload-1728876980169-0.mp4?x-kcdn-pid=112372',
  title: '旧版可灵官方口型效果示例',
  caption: '成片效果示例，供观察开口、停嘴与声音的关系；不展示按钮操作，也不保证你的片段会达到相同效果。本次读取原播放器的媒体地址，未完整观看。',
  sourceUrl: klingLipGuide,
  sourceLabel: 'Kling AI 官方口型指南 · 示例视频',
  scope: '原页视频缩略图的 data-video-src 原值已读取；直接在浏览器打开 MP4 返回 ERR_ABORTED，未下载、未完整播放或逐句核验。保留原站视频源和原指南回退链接。'
};
const jimengExample = {
  kind: 'video',
  typeLabel: '成片效果参考',
  src: 'https://lf3-lv-buz.vlabstatic.com/obj/image-lvweb-buz/growth/jimeng/landing_page/static/media/0.485b16d2.mp4',
  title: '即梦官网：图生视频与运镜能力样片',
  caption: '官方功能区的成片样片，供比较静帧与动态表现；不展示提交步骤。操作入口用旁边真实截图理解，再回本人即梦账号核对模型、首尾帧、费用与下载条件。',
  sourceUrl: 'https://jimeng.jianying.com/',
  sourceLabel: '即梦国内官网 · 文/图生视频功能区',
  scope: '官网 DOM 的原视频 src 已读取，浏览器 readyState=4、时长4秒；所在章节包含运镜与首尾帧说明。未完整观看、未确认某次模型请求或学员账号能力。'
};
const importMedia = {
  kind: 'image',
  src: 'https://xjzx.hnfnu.edu.cn/__local/2/90/C7/32A8876190B9D5A6FE83E960C90_1BD42358_95A8.png',
  title: '剪映专业版：导入素材的位置',
  caption: '湖南第一师范学院 2024 年教学截图：导入后素材先进入素材库，再拖入时间线。先使用自己的练习副本，当前界面以本人版本为准。',
  sourceUrl: editingGuide,
  sourceLabel: '湖南第一师范学院 · 原作者教学页（2024-03）',
  scope: '机构官方原作者操作教程，非剪映厂商文档；原页步骤已读，IAB原图已打开并视觉确认素材库导入框、空时间线与右侧参数区。原教程的免费、系统和语种说法没有作为2026年产品事实采用。'
};
const subtitleControls = {
  kind: 'image',
  src: 'https://xjzx.hnfnu.edu.cn/__local/7/7B/91/309A1C0B96D0A7B35477A4C4A64_911D4258_FCB0.png',
  title: '剪映专业版：识别字幕与文稿匹配',
  caption: '2024 年真实操作截图：文本 → 智能字幕，区分“开始识别”和“文稿匹配”。字幕生成后仍要对照真实声音逐句校对；按钮、语种和收费按当前版本核对。',
  sourceUrl: editingGuide,
  sourceLabel: '湖南第一师范学院 · 原作者字幕教学图',
  scope: 'web原图抓取超时，IAB已实际打开原图并视觉确认文本/智能字幕/识别与匹配两栏；没有实测当前剪映字幕或导入SRT。'
};
const subtitleTimeline = {
  kind: 'image',
  src: 'https://xjzx.hnfnu.edu.cn/__local/B/81/A0/B3D659D868DA961F93F02B7DC68_4B15A86A_D534.png',
  title: '剪映专业版：字幕轨与画面轨分开',
  caption: '原教程在字幕识别后展示字幕轨。选中一条字幕，定位文字与出现时间，再核对英语、姓名和数字；这张旧图只帮助认识轨道关系。',
  sourceUrl: editingGuide,
  sourceLabel: '湖南第一师范学院 · 原作者时间线教学图',
  scope: '原页字幕步骤已读；web原图抓取超时后IAB成功打开并视觉确认字幕轨位于视频轨上方。未在当前剪映中实测识别或校准字幕。'
};
const exportControls = {
  kind: 'image',
  src: 'https://xjzx.hnfnu.edu.cn/__local/8/3C/F3/165B8DA096057DB1872846C064B_73C04BED_205F4.png',
  title: '剪映专业版：导出名称、目录与视频参数',
  caption: '2024 年真实导出窗口：先核对文件名和保存目录，再看分辨率、编码、格式与帧率。图中默认参数只是原教程示例；最终按自己的项目和平台要求设置并重播导出文件。',
  sourceUrl: editingGuide,
  sourceLabel: '湖南第一师范学院 · 原作者导出教学图',
  scope: 'web原图超时后IAB已实际打开并视觉确认导出窗口和三处标注；未替学员导出，不用图中参数推定所有平台要求或当前付费权益。'
};
const templateGallery = {
  kind: 'image',
  src: 'https://support.microsoft.com/zh-cn/powerpoint/media/ppweb-templates-all.png',
  title: 'PowerPoint 网页版：模板与主题的入口示意',
  caption: '微软帮助页的模板图，用于认识从模板开始制作的方式。它是 PowerPoint 网页端示意；PPT Master 仍需你提供实际模板副本和清楚的保留/替换要求。',
  sourceUrl: 'https://support.microsoft.com/zh-cn/powerpoint/using-templates-in-powerpoint-for-the-web',
  sourceLabel: 'Microsoft Support · PowerPoint 网页版模板',
  scope: '官方帮助正文与页面内真实img.src已读；IAB原图已打开并视觉确认Templates and Themes列表。没有登录模板库或核验PPT Master模板调用。'
};
const destinationTheme = {
  kind: 'image',
  src: 'https://support.microsoft.com/zh-hk/powerpoint/media/ppt365-pasteoptions-usedestinationtheme-001.png',
  title: 'PowerPoint：粘贴时选择目标主题',
  caption: '微软官方示意图：把已有幻灯片复制到模板副本时，粘贴选项会影响采用哪套主题。人工复核颜色、字体和版式；这不能代替 PPT Master 的模板工作区。',
  sourceUrl: 'https://support.microsoft.com/zh-hk/powerpoint/apply-a-template-to-an-existing-presentation',
  sourceLabel: 'Microsoft Support · 将模板用于已有演示文稿',
  scope: '官方正文及图注已读；web原图读取超时后IAB成功打开并视觉确认粘贴选项中的使用目的地主題。页面为繁体中文，未操作实际PPTX，不证明所有软件兼容。'
};
const pdfWindows = {
  kind: 'image',
  src: 'https://support.microsoft.com/zh-cn/powerpoint/media/o15-pp-saveaspdf.png',
  title: 'PowerPoint Windows：导出 PDF 备份',
  caption: '微软官方旧界面图：文件 → 导出 → 创建 PDF/XPS。导出后重新打开检查页数、内容和布局；PDF 用于查看，编辑时继续保留 PPTX。',
  sourceUrl: pdfGuide,
  sourceLabel: 'Microsoft Support · PDF 导出（Windows）',
  scope: '官方正文已读；IAB原图已打开并视觉确认Export中的Create PDF/XPS Document。旧界面截图，不证明当前按钮位置；未在学员PowerPoint/WPS中导出或检验文件。'
};
const pdfMac = {
  kind: 'image',
  src: 'https://support.microsoft.com/zh-cn/powerpoint/media/powerpoint-2016-for-mac-export-pdf.png',
  title: 'PowerPoint Mac：选择 PDF 文件格式',
  caption: '微软 PowerPoint 2016 for Mac 的官方旧界面图：导出时将文件格式设为 PDF。当前 Mac 界面可能变化，按自己版本的导出选项核对。',
  sourceUrl: pdfGuide,
  sourceLabel: 'Microsoft Support · PDF 导出（Mac旧界面）',
  scope: '官方正文与图注已读；web原图读取超时后IAB成功打开并视觉确认File Format中的PDF选项。没有进行Mac导出或WPS兼容测试。'
};
const powerpointVideo = {
  kind: 'external-video',
  src: 'https://learn-video.azurefd.net/vod/player?id=fc4582c1-fc05-46c3-8dfe-a21959b788f7',
  title: '微软操作视频：把演示文稿保存为视频',
  caption: '真正的操作演示：查看 Create Video 与另存为 MP4、选择输出目录的流程。中文帮助页标 51 秒，当前原播放器显示约 58 秒；按实际版本核对旁白、计时与导出质量。',
  sourceUrl: videoGuide,
  sourceLabel: 'Microsoft Support / Microsoft Learn 原播放器',
  scope: '原帮助页iframe.src已读取；点击原播放器后readyState=4，duration=58.083秒，实际播放中看见保存MP4窗口和选择目录操作（约36秒）。未完整听写、未替学员导出或核验PPT Master配音。'
};

const at = (asset, steps) => ({...asset, steps: [...steps], checkedAt});

export const videoVisualsByLesson = {
  'video-generate': [at(frameControls, [2, 3]), at(jimengExample, [3, 5])],
  'video-consistency': [at(elementVoice, [3, 4]), at(frameControls, [3])],
  'video-shot-control': [at(frameControls, [2]), at(customShots, [4]), at(jimengExample, [3, 5])],
  'video-sound': [at(elementVoice, [2]), at(lipUpload, [2, 5]), at(subtitleControls, [4]), at(lipExample, [5])],
  'video-edit': [at(importMedia, [1]), at(subtitleControls, [3]), at(subtitleTimeline, [2, 3]), at(exportControls, [5])],
  'drama-gen-test': [at(frameControls, [2, 3, 4]), at(jimengExample, [7])],
  'drama-character-scene': [at(elementVoice, [3, 4]), at(frameControls, [4, 7])],
  'drama-shot-prompt': [at(frameControls, [3, 5]), at(customShots, [7]), at(jimengExample, [8])],
  'drama-dialogue-sound': [at(elementVoice, [4, 5]), at(lipUpload, [4]), at(lipExample, [6])],
  'drama-edit-delivery': [at(importMedia, [1]), at(subtitleControls, [5]), at(subtitleTimeline, [3, 5]), at(exportControls, [6])],
  'ppt-template': [at(templateGallery, [1, 2]), at(destinationTheme, [2, 3])],
  'ppt-delivery': [at(pdfWindows, [4]), at(pdfMac, [4])],
  'ppt-narration': [at(powerpointVideo, [3, 4])]
};
