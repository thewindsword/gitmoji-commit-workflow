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
/* istanbul ignore file */

var parserOpts_1 = __importDefault(require('./parserOpts'));

exports.default = {
  parserOpts: parserOpts_1.default,
  whatBump: function whatBump(commits) {
    var level = 2;
    var breakings = 0;
    var features = 0;
    commits.forEach(function (commit) {
      if (commit.notes.length > 0) {
        breakings += commit.notes.length;
        level = 0;
      } else if (commit.type === 'feat') {
        features += 1;

        if (level === 2) {
          level = 1;
        }
      }
    });
    return {
      level: level,
      reason:
        breakings === 1
          ? 'There is ' +
            breakings +
            ' BREAKING CHANGE and ' +
            features +
            ' features'
          : 'There are ' +
            breakings +
            ' BREAKING CHANGES and ' +
            features +
            ' features',
    };
  },
};
module.exports = exports.default;
