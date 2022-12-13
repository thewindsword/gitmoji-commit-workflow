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

var rule_1 = __importDefault(require('./rule'));

var plugin = {
  rules: {
    'start-with-gitmoji': rule_1.default,
  },
};
exports.default = plugin;
module.exports = exports.default;
