# 自由探索Skill库

当前官方插件库：https://github.com/openai/plugins
官方技能说明：https://learn.chatgpt.com/docs/build-skills
旧Skill示例（原库已弃用）：https://github.com/openai/skills
社区发现：https://www.skills.sh/
原作者技能：https://github.com/anthropics/skills
安装工具：https://github.com/vercel-labs/skills
开发流程选修：https://github.com/obra/superpowers
跨领域目录：https://github.com/VoltAgent/awesome-agent-skills
PPT实践：https://github.com/hugohe3/ppt-master

## 探索顺序

真实任务 → 发现候选 → 读原仓库/SKILL.md/许可 → 核对宿主、依赖与权限 → 练习目录单项试用 → 显式调用 → 核对真实成果 → 换输入复现 → 决定保留/改进/停用。

插件包可能包含Skill、MCP和连接器。目录数不是Skill数；Skill不能凭空得到账号权限。页面刷新只读目录，不安装、不运行条目。

## 在自己的电脑上核对命令

以下是教学命令，本课程未替你执行。需要当前Codex或Node/npm环境，先看原说明。在Anygent手机入口使用时，核对真正执行的电脑与目录。

Codex对话中可以请求官方安装器列出候选；`$skill-installer`是对话调用方式，不当作普通shell命令。

CLI插件市场按当前官方说明：

```text
codex plugin marketplace add openai/plugins
codex plugin marketplace list
```

先用自己的Plugins入口查看并选择具体包，检查账号与连接器条件。

Vercel工具示例，npx会下载执行工具自身：

```text
npx skills find presentation
npx skills add anthropics/skills --list
npx skills add anthropics/skills --skill doc-coauthoring -a codex
npx skills list -a codex
```

保留交互，确认范围；不全装awesome目录，不把Claude插件命令直接搬到Codex。缺依赖先查当前解释器与资源位置。

## 每项记录

- 问题与目标：
- 目录类型与原链接：
- 实际读取时间 / 资料日期：
- 名称、版本与安装范围：
- 宿主、依赖、权限、费用与许可：
- 最小范围测试例与成功信号：
- 实际输出、人工核对、未检查项：
- 第二份输入与失败测试：
- 保留 / 改进 / 停用，理由：

当前网络读取失败时，区分随站资料与上次成功缓存。不要把404当成功同步零项，也不把一次读取成功当安装或作品验收通过。
