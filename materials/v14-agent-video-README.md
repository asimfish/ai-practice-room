# 在自己的Agent里制作真实视频

本包提供可运行的Node脚本，供本人Codex/Harness等具备本地执行能力的Agent使用。网页不运行这些脚本，不提供共享模型账号。缺账号、素材或软件会停止；本包不生成剧本内容，也不提供AI视频额度。

## 先选自己的路线

- 入门：在本人已经可用的即梦/可灵等网站生成镜头，下载原片到本包media/；交回Agent核对文件、修改请求，再用剪映或本包剪辑。网站会员与API权限不能混用。
- 进阶：本人已能使用MiniMax官方API时，用下面的本地连接器。只支持本轮核对的MiniMax-H3/H3-Max v2协议；不把其他平台key或第三方转发地址塞进去。

## 1. 解压与打开

将ZIP解压到自己的练习文件夹，保留agent-video-kit/整个目录。在Codex/Harness中打开其父目录，再把从课程下载的“开始使用Agent-短剧.md”放进去。Windows使用实际PowerShell/工具终端，Mac使用实际终端；路径有空格时用引号，不改变API地址。

给Agent：

> 请先读agent-video-kit/README.md与scripts的源代码，再检查你当前是否有本地读取、写文件和运行命令的能力。运行node --version、node agent-video-kit/scripts/video-task.mjs doctor和node agent-video-kit/scripts/edit-video.mjs doctor，只报告版本和是否配置，不显示密钥，不提交收费任务。将实际结果写入records/工具检查.md并读回。缺能力时列缺项并停，不假装工具已连接。

本包使用Node 22或更新版本的内置功能，不需要npm install。FFmpeg与FFprobe在自己的PATH中；缺失时请从https://ffmpeg.org/download.html查看本人设备的安装入口，让Agent说明来源和方案后由本人处理。本轮在Node 25.8.1、含libass的FFmpeg 7.1及FFprobe 8.0.1上进行本地测试；Windows/Mac其他环境须本人运行doctor确认。

若doctor显示subtitle_filter:false，当前FFmpeg构建不能烧入字幕；不要仅凭版本号继续。选择本人已安装、含libass的完整构建，可以在运行脚本的进程环境中设置AI_PRACTICE_FFMPEG为其实际可执行文件路径，AI_PRACTICE_FFPROBE为相应ffprobe路径，或将它们放入PATH；这些路径由本人确认，不是请求JSON字段。重新运行doctor，确认字幕滤镜、H264和AAC能力，再检查中文字幕的实际显示。本包不会自动安装二进制。

## 2. 本人配置API认证（只适用于进阶路线）

登录本人官方API控制台核对可用条件、模型和单次报价。本人在自己的本地编辑器将.env.example另存为.env.local并填写MINIMAX_API_KEY，或者在启动脚本的进程环境中设置同名变量。不要在聊天、网页表单、终端命令参数或共享仓库里填写key；不要让Agent读出或复制这个文件。.gitignore已排除.env.local和实际任务/媒体/输出。本包不安装其他人的Skill，也不修改全局配置。

doctor的api_key_configured只表示本机字段存在；认证、余额、付费请求和结果都需要在实际调用时分别确认。未配置时继续入门路线，不能把“未运行”写成成功。

## 3. Agent写出一个单镜请求，本人核对

> 读取我的剧本、镜表和角色资料。先只为一个动作镜编写agent-video-kit/requests/S01-request.json，按现有模板字段填实际提示词。不要提交；预算未知保留null，列出需要我从本人控制台核对的型号、单次报价、计费单位和日期。不得补造价格、模型权限或授权。

模板默认5秒和768P只用于认识字段，不是最便宜报价。图生视频images可用{"path":"../media/A01.png","role":"first_frame"}，路径相对请求JSON；ratio使用adaptive。角色参考可用reference_image，不能与首尾帧混用。本地PNG/JPG/WebP会通过本人API发送给服务；请先确认用途。图片像素、内容审查和本人账号能力仍由官方接口检查。本包不提供参考视频/音频或原生对白参数；需要这些能力时使用本人工具当前完整接口，不能假装本连接器已经支持口型绑定。

本人填写budget的currency、estimated_cost、max_cost、checked_at和source。最多使用7天内本人核对的报价；这只是请求前的估算检查，不是服务端账单保证。账号费用与本次实际消费另在控制台记录。

```text
node agent-video-kit/scripts/video-task.mjs validate agent-video-kit/requests/S01-request.json
```

valid:true且submitted:false表示只做本机检查。缺报价/图片/参数会停止，没有任何生成任务。

## 4. 本人确认单次请求后，由Agent或本人提交

> 我已核对S01的实际输入、上传用途、本次报价与上限，允许仅提交这一个请求一次。请运行下面的submit命令，报告真实task_id与本地记录位置；不要追加其他镜头或自动重试。

```text
node agent-video-kit/scripts/video-task.mjs submit agent-video-kit/requests/S01-request.json --confirm
```

成功返回任务编号，并保存agent-video-kit/jobs/S01-task.json。拿到task_id只表示已提交，不是生成成功。再次提交同一镜号会被本地记录挡住。网络超时、服务端异常或缺task_id记为submission-uncertain；先去本人官方任务记录确认，不能删除记录直接重发。确认要重做时，核费用、次数与变更，另用S01-t02等新尝试ID；失败同样计入总费用。

## 5. 查询同一任务，取回真实文件

```text
node agent-video-kit/scripts/video-task.mjs status agent-video-kit/jobs/S01-task.json
```

queued/running时保留原任务，间隔至少10秒再查询；failed/cancelled时先读实际错误和控制台记录，不自动生成。未知格式/任务ID不覆盖原记录。只有succeeded才继续：

```text
node agent-video-kit/scripts/video-task.mjs download agent-video-kit/jobs/S01-task.json agent-video-kit/media/S01.mp4
```

download先查询原任务，再从受支持的官方HTTPS媒体域名下载，不把API认证发给媒体服务器；不跟随重定向或覆盖旧文件，拒绝把错误页/MOV伪装为MP4。若官方当前返回另一CDN或格式，回控制台手动下载原片并保留实际后缀，不重新生成。下载记录只证明取回与容器头，不能证明角色、动作和口型好。

> 请检查刚取回的实际S01：读取可用的视频信息，抽取首中尾帧；如果你不能直接看视频，写清限制，让我正常速度播放后给镜号和时间码。把我的反馈保存到records/S01-检查.md，指出下一次仅改哪一项；在我确认前不重提。

## 6. Agent把实际素材剪成MP4

将两镜实际原片、最终对应音轨和实际校准SRT放入media/。让Agent复制edit/EP01-edit.json为当前版本，填写真实file/in/out、最终audio、subtitles和新的output。所有路径相对edit JSON并位于本包内。这里的建议路径不代表文件存在。

```text
node agent-video-kit/scripts/edit-video.mjs check agent-video-kit/edit/EP01-edit.json
node agent-video-kit/scripts/edit-video.mjs render agent-video-kit/edit/EP01-edit.json
```

check只读取文件和实际时长，拒绝超范围时间、缺声音、错字幕与已有输出。render用FFmpeg统一尺寸、按实际区间剪接，配最终声音并将SRT烧入画面，再实际输出MP4和.check.json。两镜各4秒的模板需要约8秒最终音轨；先对齐声音和画面，不能靠填文件名继续。

若每镜确实有原生音轨，可将audio设为"clips"；任一镜缺音频会停。只有经本人确认的无字幕设计才将subtitles设为null；有对白仍要校准字幕。已配音或口型素材不叠第二条声音。程序检查尺寸/时长/音轨，不评价台词、口型、叙事和授权；中文字幕是否显示清楚须实际查看，缺字体先处理。

输出已存在则另用EP01-v2.mp4，不覆盖v1。导入本人剪映精修与另存真实工程；本包不会生成剪映工程、替代逐镜审片或自动发布。公开发布仍由本人核对平台条件和素材来源后完成。

## 证据与范围

本轮协议/失败/路径行为以模拟官方响应作契约测试；本地FFmpeg用原创工具测试素材真实输出并核查MP4。工具测试素材不是AI生成短剧。本人认证、收费视频生成、真实AI对白口型、剪映工程及公开发布尚未在本轮执行。

官方依据（2026-10-10核对）：
- https://platform.minimax.io/docs/api-reference/video-generation-v2-create
- https://platform.minimax.io/docs/api-reference/video-generation-v2-query
- https://ffmpeg.org/ffmpeg.html
- https://ffmpeg.org/ffmpeg-filters.html

脚本为本站原创教学实现，按官方公开协议独立编写；第三方服务、软件与本人素材遵循其各自条件。维护网站时不得把.env.local、jobs真实记录、原视频或输出混进公开ZIP。
