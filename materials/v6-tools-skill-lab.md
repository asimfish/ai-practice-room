# 只试一项 Skill：阅读、安装、修订、回退操作卡

这是文字教程。本站没有执行以下命令、没有安装外部技能、没有改Codex配置。复制前先检查自己的版本、目录、原项目和授权范围；命令的成功信号由你实际观察。

## 选定的任务和候选

任务：检查一页给成人的AI家庭练习说明，使它能照着操作并验收。

选用 [Vercel writing-guidelines 的 SKILL.md](https://github.com/vercel-labs/agent-skills/blob/main/skills/writing-guidelines/SKILL.md)。本轮读到版本元数据为1.0.0，当前目录只有SKILL.md；文件会引用 [Vercel原规则](https://github.com/vercel-labs/writing-guidelines/blob/main/command.md)，并用WebFetch这个宿主工具名。实际安装时重新读当前文件，不能推定未来目录和版本仍相同。Vercel agent-skills README 声明MIT，下载时核对实际许可材料。

对比 [Anthropic doc-coauthoring](https://github.com/anthropics/skills/blob/main/skills/doc-coauthoring/SKILL.md)：适合共同编写较完整文档。它是另一种工作过程，本课只阅读对比，不同时安装。Anthropic仓库中不同技能许可情况不同，不因仓库热度推定每项同许可。

Skill是重复任务的说明；Plugin是安装包，可含Skill及可选连接器等；MCP提供工具和受控数据或动作。写作Skill不自动获得飞书权限。

当前官方例子看 [openai/plugins](https://github.com/openai/plugins)。[openai/skills](https://github.com/openai/skills)首页已声明弃用，作为历史资料阅读。Codex当前本地发现位置以 [Build skills](https://learn.chatgpt.com/docs/build-skills) 的 `.agents/skills` 为准。

## 阅读卡

- 原作者与原链接：待填。
- 读取日期/分支/版本：待填。
- name与description如何描述触发：待填。
- 输入、输出与停止条件：待填。
- 除SKILL.md外还会读取什么：待填。
- 脚本、外部网络、工具、账号或费用：待填。
- 许可声明和文件：待填。
- 中文与当前宿主不适用的地方：待填。
- 安装计划中的电脑、目录、范围：待填。

来源或权限无法解释时，先完成阅读卡，不安装。

## 项目范围的命令路线：只选择一种方法

以下命令依据 [Vercel skills CLI README](https://github.com/vercel-labs/skills)。需可用的Node/npm/npx，并在自己建的“Skill试验室”目录打开终端。`npx`会下载并执行工具自身，`--list`只表示不安装库里的Skill，不表示完全没有本地执行或网络活动。

先列候选，不安装库里的技能：

```sh
npx skills add vercel-labs/agent-skills --list
```

预期信号：列表含所选writing-guidelines。名字不同、网络失败或源已变时停止，重新读原项目。

本人决定试用后，仅安装一项到Codex，采用复制方式，保留交互：

```sh
npx skills add vercel-labs/agent-skills --skill writing-guidelines -a codex --copy
```

不加`-g`，不加`--all`，不加跳过确认参数。项目为CLI默认范围，仍要读实际提示并确认路径。当前Codex项目级目录应核对为 `.agents/skills/`；安装工具也可能有内部副本或记录，按实际结果填写，不自行猜位置。

查看对应安装项：

```sh
npx skills list -a codex
```

预期信号：项目中的指定技能能被列出，Codex选择器能定位到相同来源。若Codex未发现，按当前官方文档检查目录和文件，新建会话或重启；不要覆盖另一项同名Skill。

官方 `$skill-installer` 是另一条Codex对话调用路线，可以给原仓库目录URL。它不是普通shell命令，其具体范围与位置需要安装前确认。本课不同时运行两种安装路线。

## 测试和本地规则改动

将另一个下载文件里的T1–T4分别保存。显式调用示例：

```text
$writing-guidelines
请检查 input/T2-夸大说明.md。只报告表达、步骤和结构问题；未经核实的费用或产品事实列待确认。缺网页读取工具时如实说明，不假装读到了规则。不要发消息或连接外部账号。
```

这是一条教学测试请求，不保证每个宿主具有同名工具。技能触发、原规则读取、输出与事实复核需要分别观察。

本地修改前备份实际副本的完整文件。以下为课程原创补充规则，可在自己的复制版本中采用，不提交到上游，也不把它说成Vercel官方规则：

```text
本地适用范围：中文成人AI练习说明。
保留原材料事实，不猜价格、权限和产品功能；未核实事项单列。
优先检查每步的对象、动作、输入、产物和验收信号。
英语sentence case、英文词数和Vercel元数据规则，只在对应文档语境适用。
写作建议不能作为知识正确性或费用真实的证据。
没有输入文件先问范围；发消息或登录账号不属于本Skill职责。
```

记录是哪份测试暴露了缺口、改了哪里、为什么。重做该测试，并用一份新材料检查。若目录仍是链接，先查明指向，不修改共享原件。

## 停用、移除和恢复

停用方式依据当前OpenAI官方文档，先记录真实SKILL.md路径，保留已有配置。以下路径是占位示例，必须替换成自己的绝对路径；不要直接把例子写入配置。

```toml
[[skills.config]]
path = "/your_actual_project/.agents/skills/writing-guidelines/SKILL.md"
enabled = false
```

编辑本人 `~/.codex/config.toml` 后按官方说明重启Codex，再核对该项启用状态。仅声明停用尚未证明新会话不再触发，应实际查看选择器和测试结果。

若采用Vercel路线安装，也可以在同一项目目录单项移除，保留交互并核对项目范围：

```sh
npx skills remove writing-guidelines -a codex
```

不移除所有技能，不删除整个目录。恢复时使用本次备份或明确重新安装的源版本；还原后重跑T1，并写保留/停用理由。安装工具再次更新可能覆盖本地改动，未来更新前先保留自己的规则与测试记录。

## 结果记录

每次填写：日期、实际客户端/CLI版本、源版本或读取时间、目录、输入编号、是否触发、是否读到规则、输出路径/文本、问题、人工核查、实际费用、决定、未运行项。空白不能算通过。
