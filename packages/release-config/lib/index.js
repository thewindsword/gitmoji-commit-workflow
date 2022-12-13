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
exports.createConfig = void 0;

var createConfig_1 = __importDefault(require('./createConfig'));

var defaultConfig = createConfig_1.default();
exports.createConfig = createConfig_1.default;
exports.default = defaultConfig;
module.exports = defaultConfig;
