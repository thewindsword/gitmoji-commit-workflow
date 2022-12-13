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

var typeDisplayName_1 = require('./typeDisplayName');

var scopeMapDisplayName_1 = require('./scopeMapDisplayName');

var commit_types_1 = __importDefault(require('@gitmoji/commit-types'));

exports.default = function (customConfig) {
  return function (commit, context) {
    var _a;

    var discard = true;
    var issues = [];
    commit.notes.forEach(function (note) {
      note.title =
        ((customConfig === null || customConfig === void 0
          ? void 0
          : customConfig.withEmoji) === false
          ? ''
          : '💥 ') + 'BREAKING CHANGES';
      discard = false;
    });
    var displayTypes = commit_types_1.default;

    if (customConfig.displayTypes) {
      displayTypes = customConfig.displayTypes;
    }

    if (!displayTypes.includes(commit.type) && discard) return; // 修改 type 标题

    commit.type = typeDisplayName_1.getDisplayName(commit.type, {
      language: customConfig.titleLanguage,
      withEmoji: customConfig.withEmoji,
    });
    /** * 处理 scope ** */

    if (commit.scope === '*') {
      commit.scope = '';
    }

    if (customConfig.displayScopes) {
      if (
        !((_a = customConfig.displayScopes) === null || _a === void 0
          ? void 0
          : _a.includes(commit.scope))
      )
        return;
    }

    if (customConfig.scopeDisplayName) {
      commit.scope = scopeMapDisplayName_1.scopeMapDisplayName(
        commit.scope,
        customConfig.scopeDisplayName,
      );
    }

    if (typeof commit.hash === 'string') {
      commit.shortHash = commit.hash.substring(0, 7);
    }

    if (typeof commit.subject === 'string') {
      var url_1 = context.repository
        ? context.host + '/' + context.owner + '/' + context.repository
        : context.repoUrl;

      if (url_1) {
        url_1 = url_1 + '/issues/'; // Issue URLs.

        commit.subject = commit.subject.replace(
          /#([0-9]+)/g,
          function (_, issue) {
            issues.push(issue);
            return '[#' + issue + '](' + url_1 + issue + ')';
          },
        );
      }

      if (context.host) {
        // User URLs.
        commit.subject = commit.subject.replace(
          /\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/g,
          function (_, username) {
            if (username.includes('/')) {
              return '@' + username;
            }

            return '[@' + username + '](' + context.host + '/' + username + ')';
          },
        );
      }
    } // remove references that already appear in the subject

    commit.references = commit.references.filter(function (reference) {
      return issues.indexOf(reference.issue) === -1;
    });
    return commit;
  };
};

module.exports = exports.default;
