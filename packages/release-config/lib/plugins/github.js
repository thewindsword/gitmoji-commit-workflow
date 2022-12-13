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

var __rest =
  (void 0 && (void 0).__rest) ||
  function (s, e) {
    var t = {};

    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];

    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };

Object.defineProperty(exports, '__esModule', {
  value: true,
});
/**
 * github
 * @param options
 */

var github = function github(options) {
  if (options === void 0) {
    options = {};
  }

  var noOpts =
    options &&
    Object.values(options).filter(function (i) {
      return typeof i !== 'undefined';
    }).length === 0;
  if (!options || noOpts) return '@semantic-release/github';

  var githubAssets = options.githubAssets,
    config = __rest(options, ['githubAssets']);

  return [
    '@semantic-release/github',
    __assign(
      {
        assets: githubAssets,
      },
      config,
    ),
  ];
};

exports.default = github;
module.exports = exports.default;
