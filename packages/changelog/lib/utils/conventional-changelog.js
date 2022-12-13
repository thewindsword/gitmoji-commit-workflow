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

var parserOpts_1 = __importDefault(require('./parserOpts'));

var writerOpts_1 = __importDefault(require('./writerOpts'));

exports.default = {
  parserOpts: parserOpts_1.default,
  writerOpts: writerOpts_1.default,
};
module.exports = exports.default;
