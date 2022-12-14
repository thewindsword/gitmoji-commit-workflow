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

var fs_1 = require('fs');

var path_1 = require('path');

var transformer_1 = __importDefault(require('./transformer'));

var basePath = path_1.resolve(__dirname, './templates');
var template = fs_1.readFileSync(basePath + '/template.hbs', 'utf-8');
var header = fs_1.readFileSync(basePath + '/header.hbs', 'utf-8');
var commit = fs_1.readFileSync(basePath + '/commit.hbs', 'utf-8');
var footer = fs_1.readFileSync(basePath + '/footer.hbs', 'utf-8');
var author = fs_1.readFileSync(basePath + '/author.hbs', 'utf-8');

exports.default = function (customConfig) {
  return {
    transform: transformer_1.default(customConfig),
    groupBy: 'type',
    commitGroupsSort: 'title',
    commitsSort: ['scope', 'subject'],
    noteGroupsSort: 'title',
    mainTemplate: template,
    headerPartial: header.replace(
      /\/compare\/{{previousTag}}...{{currentTag}}\)/g,
      customConfig.isAzureRepo
        ? '/branches?baseVersion=GB{{previousTag}}&targetVersion=GB{{currentTag}}&_a=commits)'
        : '/compare/{{previousTag}}...{{currentTag}})',
    ),
    // 替换 commit.hbs 模板中的 gitUserInfo
    commitPartial: commit
      .replace(
        /{{hash}}/g,
        customConfig.commitUrlHash
          ? '{{' + customConfig.commitUrlHash + '}}'
          : '{{shortHash}}',
      )
      .replace(/{{gitUserInfo}}/g, customConfig.showAuthor ? author : ''),
    footerPartial: footer,
  };
};

module.exports = exports.default;
