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
exports.localPath = exports.gitmojiUnicode = exports.gitmojiCodes = void 0;

var path_1 = require('path');

var fs_1 = require('fs');

var dotenv_1 = require('dotenv');

var emoji_name_map_1 = __importDefault(require('emoji-name-map'));

var isTest = process.env.IS_TEST === '1';
dotenv_1.config(
  isTest
    ? {
        path: path_1.join(__dirname, '../test', './test.env'),
      }
    : {},
); // if there is GITMOJI_PATH env, use as local file path

var gitmojiPath = process.env.GITMOJI_PATH;
var filePath = gitmojiPath
  ? path_1.join(process.cwd(), gitmojiPath) // or use gitmoji file
  : path_1.join(__dirname, 'gitmojis.json'); // Download gitmojis.json if it doesn't exist yet

if (!fs_1.existsSync(filePath)) {
  var url =
    process.env.GITMOJI_URL ||
    'https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json';

  try {
    // eslint-disable-next-line global-require
    var result = require('child_process').execFileSync(
      'curl',
      ['--silent', '-L', url],
      {
        encoding: 'utf8',
        maxBuffer: Infinity,
      },
    );

    fs_1.writeFileSync(filePath, result);
  } catch (e) {
    /* istanbul ignore next */
    throw Error(
      'Failed to fetch gitmoji JSON, please refer to https://github.com/arvinxx/gitmoji-commit-workflow/tree/master/packages/commitlint-plugin#fetch-error for help.',
    );
  }
} // eslint-disable-next-line import/no-dynamic-require

var gitmojis = require(filePath).gitmojis;

exports.gitmojiCodes = gitmojis.map(function (gitmoji) {
  return gitmoji.code;
});
exports.gitmojiUnicode = gitmojis.map(function (gitmoji) {
  return emoji_name_map_1.default.get(gitmoji.code);
});
exports.localPath = filePath;
