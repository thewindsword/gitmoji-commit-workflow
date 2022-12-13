'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var cosmiconfig_1 = require('cosmiconfig');

var explorer = cosmiconfig_1.cosmiconfigSync('changelog');
var config = (
  explorer.search() || {
    config: {},
  }
).config;
exports.default = config;
module.exports = exports.default;
