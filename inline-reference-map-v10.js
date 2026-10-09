// Curated from the 125 existing learningResources; no new external verification.
// Exact lesson sources and lessonSourceHints take priority. Related material is
// supplemental; it does not replace the lesson's current official source URLs.
// An empty videoIds array deliberately records that no suitable video exists.
// See docs/INLINE-MAPPING-v10.md for selection reasons and known source gaps.
const refs = (resourceIds = [], videoIds = []) => ({resourceIds, videoIds});

export const lessonInlineReferences = {
  // 01 · Human judgement, task definition and repeatable checks.
  'human-ai-role': refs(['ref-23', 'ref-24', 'ref-27']),
  'task-contract': refs(['ref-23', 'ref-27', 'ref-25']),
  'quality-loop': refs(['ref-23', 'ref-22', 'ref-27']),
  'automation-inventory': refs(['ref-25', 'ref-26', 'ref-29']),
  'automation-cost': refs(['ref-34']),

  // 02 · Kimi Chat. Work guides are not substituted for basic chat buttons.
  'first-task': refs(['ref-22', 'ref-23']),
  'better-questions': refs(['ref-23', 'ref-22']),
  'files-check': refs(['ref-22']),
  'ai-judgement': refs(['ref-23', 'ref-22']),

  // 03 · Choose the host before following its installation or Skill route.
  'kimi-work': refs(['ref-24', 'ref-25', 'ref-26']),
  'harness-desktop': refs(['ref-34', 'ref-36', 'ref-37'], ['ref-46']),
  'first-skill': refs(['ref-30', 'ref-29', 'ref-24', 'tools-v6-ref-harness-office']),
  'ppt-master-install': refs(['ref-8', 'ref-9', 'ref-10', 'ref-11']),
  'own-skill': refs(['ref-30', 'ref-29', 'parent-v6-ref-spec']),

  // 04 · Consumer ChatGPT source gaps remain explicit. Codex videos do not
  // explain ChatGPT file/voice buttons, account regions or payment settings.
  'chatgpt-start': refs(['ref-31']),
  'chatgpt-files-voice': refs(),
  'chatgpt-projects': refs(['ref-32', 'ref-31']),
  'account-payment': refs(),

  // 05 · Skill discovery, source reading and controlled trial.
  'skill-discovery': refs(['ref-30', 'ref-29', 'ref-24']),
  'skill-trial': refs(['ref-32', 'parent-v6-ref-spec']),
  'skill-chain': refs(['ref-32', 'ref-30', 'tools-v6-ref-skill-mcp']),
  'skill-maintenance': refs(['ref-32', 'ref-30', 'ref-33']),
  'skill-codex-catalog': refs(['ref-32', 'ref-project-openai-plugins', 'ref-project-openai-old-skills', 'tools-v6-ref-current-plugins']),
  'skill-live-reading': refs(['tools-v6-ref-current-plugins', 'ref-project-openai-plugins']),
  'skill-community-find': refs(['ref-project-skills-discovery', 'ref-project-voltagent-index', 'ref-project-anthropic-skills']),
  'skill-codex-install': refs(['ref-32', 'ref-project-superpowers-repo', 'tools-v6-ref-current-plugins'], ['ref-48']),
  'skill-cross-agent': refs(['ref-project-vercel-skills-cli', 'ref-project-anthropic-skills', 'ref-34', 'parent-v6-ref-spec']),
  'skill-personal-kit': refs(['ref-project-anthropic-skills', 'ref-8', 'ref-project-vercel-agent-skills', 'ref-14'], ['ref-50']),

  // 06 · Real teaching tasks and official material structures.
  'english-profile': refs(['ref-3', 'ref-4', 'ref-5'], ['ref-6']),
  'english-plan': refs(['ref-1', 'ref-4', 'ref-2', 'ref-3'], ['ref-7']),
  'english-materials': refs(['office-v6-ref-dale-handout', 'office-v6-ref-reading-a2', 'office-v6-ref-reading-b1', 'ref-1'], ['ref-6']),
  'english-feedback': refs(['ref-3', 'ref-1', 'ref-5'], ['ref-6', 'ref-7']),

  // 07 · PPT Master source files, native editing and delivery checks.
  'ppt-outline': refs(['ref-9', 'ref-14', 'ref-13']),
  'ppt-template': refs(['ref-8', 'office-v6-ref-template-guide', 'office-v6-ref-edit-native', 'ref-14']),
  'ppt-delivery': refs(['ref-8', 'ref-11', 'ref-12', 'ref-13']),
  'ppt-design-system': refs(['office-v6-ref-template-guide', 'ref-14', 'office-v6-ref-edit-native']),
  'ppt-data': refs(['ref-11', 'office-v6-ref-chart-check']),
  'ppt-source-pack': refs(['ref-9', 'ref-8', 'ref-14']),
  'ppt-live-edit': refs(['office-v6-ref-edit-native', 'ref-9', 'ref-11']),
  'ppt-narration': refs(['ref-13', 'ref-14']),

  // 08 · A first video, consistent shots, then an AI drama and its release.
  'video-script': refs(['ref-23', 'ref-65']),
  'video-storyboard': refs(['ref-51', 'ref-55', 'ref-52'], ['ref-59']),
  'video-generate': refs(['ref-51', 'ref-52', 'ref-53'], ['ref-59']),
  'video-edit': refs(['ref-55', 'ref-56', 'ref-57', 'video-v6-ref-capcut-srt'], ['ref-60']),
  'video-publish': refs(['ref-65', 'ref-64', 'ref-63']),
  'video-audience': refs(['ref-23', 'ref-51', 'ref-55']),
  'video-consistency': refs(['v8-gen-ref-kling3', 'ref-53', 'ref-51', 'ref-54'], ['ref-58', 'ref-59']),
  'video-shot-control': refs(['ref-51', 'ref-53', 'ref-52', 'ref-55'], ['ref-59']),
  'video-sound': refs(['ref-55', 'v8-gen-ref-kling3', 'ref-53', 'ref-57'], ['ref-60']),
  'video-platforms': refs(['ref-65', 'ref-64', 'ref-63']),
  'video-batch': refs(['ref-51', 'ref-55', 'ref-53', 'ref-65'], ['ref-59']),
  'drama-start-package': refs(['v8-release-ref-nrta', 'v8-release-ref-terms', 'ref-65']),
  'drama-story-script': refs(['v8-story-elements'], ['v8-gen-ref-film-cn']),
  'drama-edit-delivery': refs(['v8-edit-training', 'v8-jl-edit', 'ref-55', 'ref-56'], ['ref-60']),
  'drama-series-plan': refs(['v8-edit-training', 'v8-release-ref-nrta', 'v8-story-elements'], ['v8-gen-ref-film-en']),
  'drama-gen-test': refs(['ref-51', 'v8-gen-ref-kling3', 'ref-53'], ['ref-59']),
  'drama-character-scene': refs(['ref-51', 'v8-gen-ref-seedance2', 'ref-53'], ['ref-58', 'v8-gen-ref-film-en']),
  'drama-shot-prompt': refs(['ref-51', 'v8-gen-ref-seedance2', 'v8-gen-ref-kling3', 'v8-gen-ref-hailuo-frames'], ['ref-59', 'v8-gen-ref-film-en']),
  'drama-dialogue-sound': refs(['v8-gen-ref-kling3', 'ref-53', 'v8-gen-ref-kling-lip', 'v8-gen-ref-minimax-h3'], ['v8-gen-ref-film-cn', 'ref-59']),
  'drama-defect-repair': refs(['ref-51', 'v8-gen-ref-kling-o1', 'v8-gen-ref-minimax-h3']),
  'drama-cost-control': refs(['ref-51', 'v8-gen-ref-kling3', 'v8-gen-ref-kling-lip', 'v8-gen-ref-minimax-h3']),
  'drama-release-check': refs(['v8-release-ref-terms', 'v8-release-ref-nrta', 'ref-65']),
  'drama-douyin-publish': refs(['v8-release-ref-nrta', 'v8-release-ref-classes', 'ref-65', 'ref-64']),
  'drama-feedback': refs(['v8-release-ref-terms', 'v8-edit-training']),
  'drama-skill-reuse': refs(['v8-release-ref-nrta', 'v8-release-ref-terms', 'parent-v6-ref-spec', 'ref-29']),

  // 09 · WorkBuddy's own task/Office explanations and original demo.
  'workbuddy': refs(['ref-15', 'ref-17', 'ref-16', 'ref-18'], ['ref-21']),
  'wb-feature-map': refs(['ref-15', 'ref-16', 'ref-18'], ['ref-21']),
  'wb-documents': refs(['office-v6-ref-office-suite', 'ref-19', 'ref-16', 'ref-18'], ['ref-21']),
  'wb-sheets': refs(['office-v6-ref-office-suite', 'ref-20', 'ref-16', 'ref-18'], ['ref-21']),
  'wb-research': refs(['ref-16', 'ref-18', 'office-v6-ref-library']),
  'wb-plugins': refs(['ref-15', 'office-v6-ref-office-suite']),
  'wb-scheduled': refs(['ref-16', 'ref-18', 'office-v6-ref-content-management']),

  // 10 · File automation, Feishu records and public financial originals.
  'auto-files': refs(['ref-34', 'ref-35', 'ref-37'], ['ref-47']),
  'auto-feishu-draft': refs(['ref-feishu-workflow', 'ref-feishu-agent', 'tools-v6-ref-feishu-lookup']),
  'auto-feishu-delivery': refs(['ref-feishu-workflow', 'tools-v6-ref-feishu-button', 'tools-v6-ref-feishu-lookup']),
  'auto-finance': refs(['ref-finance-original', 'ref-finance-reports']),
  'auto-recovery': refs(['ref-feishu-workflow', 'tools-v6-ref-feishu-lookup', 'ref-35', 'ref-37']),

  // 11 · Anygent / Whalent has verified illustrated guides, no original video
  // in this resource set. Do not borrow a Codex app video for phone UI.
  'anygent-invite': refs(['ref-38', 'ref-40']),
  'anygent-computer': refs(['ref-39', 'ref-40', 'ref-45']),
  'anygent-codex': refs(['ref-41', 'ref-40', 'ref-44']),
  'anygent-workbench': refs(['tools-v6-ref-anygent-basic', 'tools-v6-ref-anygent-layout', 'ref-42']),
  'anygent-mobile': refs(['ref-40', 'ref-42']),
  'anygent-recovery': refs(['ref-40', 'ref-45', 'ref-44', 'ref-39']),

  // 12 · Optional Claude material is supplemental Skill source reading.
  'claude-code': refs(['ref-project-anthropic-skills']),
  'harness-cli': refs(['ref-35', 'ref-34', 'ref-36', 'ref-37'], ['ref-47', 'ref-46']),

  // 13 · Repeated delivery, methods and teaching another learner.
  'mastery-portfolio': refs(['ref-24', 'ref-27', 'ref-29']),
  'mastery-learning': refs(['ref-30', 'ref-24', 'ref-29']),
  'mastery-teach': refs(['ref-23', 'ref-29', 'ref-30'])
};

// Group choices give a short path across the group's actual tasks. A video's
// relevance is to a named task, not a claim that every lesson shares its host.
export const groupInlineReferences = {
  mindset: refs(['ref-23', 'ref-24', 'ref-26', 'ref-27']),
  basics: refs(['ref-22', 'ref-23']),
  skills: refs(['ref-24', 'ref-34', 'ref-29', 'ref-8'], ['ref-46', 'ref-47']),
  chatgpt: refs(['ref-31', 'ref-32']),
  explore: refs(['ref-32', 'ref-project-openai-plugins', 'ref-project-vercel-skills-cli', 'ref-project-voltagent-index'], ['ref-48', 'ref-50']),
  english: refs(['ref-1', 'ref-3', 'office-v6-ref-dale-handout', 'office-v6-ref-reading-a2'], ['ref-6', 'ref-7']),
  ppt: refs(['ref-8', 'ref-9', 'office-v6-ref-template-guide', 'ref-14']),
  video: refs(['ref-51', 'ref-53', 'v8-story-elements', 'v8-edit-training'], ['ref-58', 'ref-59', 'v8-gen-ref-film-cn']),
  workbuddy: refs(['ref-15', 'ref-16', 'ref-18', 'office-v6-ref-office-suite'], ['ref-21']),
  automation: refs(['ref-feishu-workflow', 'ref-feishu-agent', 'tools-v6-ref-feishu-button', 'ref-finance-original'], ['ref-47']),
  anygent: refs(['ref-38', 'ref-40', 'tools-v6-ref-anygent-basic', 'ref-42']),
  optional: refs(['ref-34', 'ref-35', 'ref-project-anthropic-skills'], ['ref-46', 'ref-47']),
  mastery: refs(['ref-24', 'ref-27', 'ref-29', 'ref-30'])
};
