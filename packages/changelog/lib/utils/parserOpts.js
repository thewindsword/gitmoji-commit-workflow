'use strict';

var __assign =
  (void 0 && (void 0).__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

    return __assign.apply(this, arguments);
  };

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

var parser_opts_1 = __importDefault(require('@gitmoji/parser-opts'));

exports.default = __assign(__assign({}, parser_opts_1.default), {
  noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
  revertPattern: /revert:\s([\s\S]*?)\s*This reverts commit (\w*)\./,
  revertCorrespondence: ['header', 'hash'],
});
module.exports = exports.default;
