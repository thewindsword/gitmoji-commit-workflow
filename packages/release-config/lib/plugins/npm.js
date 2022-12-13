'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
}); // eslint-disable-next-line @typescript-eslint/no-unused-vars

var npm = function npm(options) {
  if (
    !options ||
    (typeof options.pkgRoot !== 'string' &&
      typeof options.npmPublish !== 'boolean' &&
      typeof options.tarballDir === 'undefined')
  )
    return '@semantic-release/npm';
  return ['@semantic-release/npm', options];
};

exports.default = npm;
module.exports = exports.default;
