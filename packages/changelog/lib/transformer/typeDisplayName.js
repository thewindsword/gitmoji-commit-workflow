'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.getDisplayName = void 0;
var typeMap = {
  feat: {
    emoji: '✨',
    'en-US': 'Features',
    'zh-CN': '新特性',
  },
  fix: {
    emoji: '🐛',
    'en-US': 'Bug Fixes',
    'zh-CN': '修复',
  },
  build: {
    emoji: '👷',
    'en-US': 'Build System',
    'zh-CN': '构建系统',
  },
  chore: {
    emoji: '🎫',
    'en-US': 'Chores',
    'zh-CN': '杂项',
  },
  ci: {
    emoji: '🔧',
    'en-US': 'Continuous Integration',
    'zh-CN': '持续集成',
  },
  docs: {
    emoji: '📝',
    'zh-CN': '文档',
    'en-US': 'Documentation',
  },
  test: {
    emoji: '✅',
    'zh-CN': '测试',
    'en-US': 'Tests',
  },
  perf: {
    emoji: '⚡',
    'en-US': 'Performance Improvements',
    'zh-CN': '性能优化',
  },
  refactor: {
    emoji: '♻',
    'en-US': 'Code Refactoring',
    'zh-CN': '重构',
  },
  revert: {
    emoji: '⏪',
    'zh-CN': '回滚',
    'en-US': 'Reverts',
  },
  style: {
    emoji: '💄',
    'en-US': 'Styles',
    'zh-CN': '样式',
  },
};

var getDisplayName = function getDisplayName(type, options) {
  if (options === void 0) {
    options = {};
  }

  var _a = options.withEmoji,
    withEmoji = _a === void 0 ? true : _a,
    _b = options.language,
    language = _b === void 0 ? 'en-US' : _b;

  if (type in typeMap) {
    var item = typeMap[type];
    var emoji = item.emoji;
    return '' + (withEmoji ? emoji + ' ' : '') + item[language];
  }

  return type;
};

exports.getDisplayName = getDisplayName;
