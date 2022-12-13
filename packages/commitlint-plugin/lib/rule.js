'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var gitmojiCode_1 = require('./gitmojiCode');

var emoji = function emoji(parsed) {
  var raw = parsed.raw; // code regex test url: https://regex101.com/r/fSdOvB/1

  var regex = /^(:\w*:)\s.*/gm; // unicode regex test url: https://regex101.com/r/OTMgWL/2

  var unicodeRegex =
    /(\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f\ude80-\udeff]|[\u2600-\u2B55])\s.*/gm;
  var result = regex.exec(raw);
  var unicodeResult = unicodeRegex.exec(raw);
  var pass;
  var errorMsg = 'passed'; // if gitmoji code is valid

  if (result) {
    var emojiCode = result[1];
    pass = gitmojiCode_1.gitmojiCodes.includes(emojiCode);

    if (!pass) {
      errorMsg =
        emojiCode +
        ' is not in the correct gitmoji list, please check the emoji code on https://gitmoji.dev/.';
    }
  } else if (unicodeResult) {
    var unicode = unicodeResult[1];
    pass = gitmojiCode_1.gitmojiUnicode.includes(unicode);

    if (!pass) {
      errorMsg =
        unicode +
        ' is not in the correct gitmoji list, please check the emoji code on https://gitmoji.dev/.';
    }
  } else {
    // if don't has gitmoji code or emoji unicode
    pass = false;
    errorMsg =
      'Your commit should start with gitmoji code,please check the emoji code on https://gitmoji.dev/.';
  }

  return [pass, errorMsg];
};

exports.default = emoji;
module.exports = exports.default;
