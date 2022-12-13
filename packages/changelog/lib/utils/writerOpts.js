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

var customConfig_1 = __importDefault(require('../customConfig'));

var handleWriterOpts_1 = __importDefault(require('../handleWriterOpts'));

exports.default = handleWriterOpts_1.default(customConfig_1.default);
module.exports = exports.default;
