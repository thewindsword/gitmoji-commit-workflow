'use strict';

var __importDefault =
  (void 0 && (void 0).__importDefault) ||
  function (mod) {
    return mod && mod.__esModule
      ? mod
      : {
          default: mod,
        };
  };

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var types_1 = require('@commitlint/types');

var commitlint_plugin_gitmoji_1 = __importDefault(
  require('commitlint-plugin-gitmoji'),
);

var parser_opts_1 = __importDefault(require('@gitmoji/parser-opts'));

var commit_types_1 = __importDefault(require('@gitmoji/commit-types'));

var Error = types_1.RuleConfigSeverity.Error;
var rules = {
  // gitmoji 规则
  'start-with-gitmoji': [Error, 'always'],
  // 使用 Angular 的类型
  'type-enum': [Error, 'always', commit_types_1.default],
  // 内容以空行开始
  'body-leading-blank': [Error, 'always'],
  // 结尾以空行开始
  'footer-leading-blank': [Error, 'always'],
  // 标题最大长度 72 个字符
  'header-max-length': [Error, 'always', 72],
  // Scope 永远小写
  'scope-case': [Error, 'always', 'lower-case'],
  // 不允许标题空着
  'subject-empty': [Error, 'never'],
  // 不允许使用句号
  'subject-full-stop': [Error, 'never'],
  // type 必须小写
  'type-case': [Error, 'always', 'lower-case'],
  // type 不能为空
  'type-empty': [Error, 'never'],
};
var parserPreset = {
  parserOpts: parser_opts_1.default,
  plugins: {
    gitmoji: commitlint_plugin_gitmoji_1.default,
  },
};
exports.default = {
  rules: rules,
  parserPreset: parserPreset,
  plugins: [commitlint_plugin_gitmoji_1.default],
};
module.exports = exports.default;
