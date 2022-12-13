'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.scopeMapDisplayName = void 0;

var scopeMapDisplayName = function scopeMapDisplayName(
  scope,
  scopeDisplayNameList,
) {
  var entries = Object.entries(scopeDisplayNameList); // eslint-disable-next-line no-restricted-syntax

  for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
    var _a = entries_1[_i],
      key = _a[0],
      value = _a[1];

    if (scope === key) {
      return value;
    } // 如果没有 scope 的情况下 且有通配符
    // 那么直接使用通配符的值

    if (!scope && scopeDisplayNameList['*']) {
      return scopeDisplayNameList['*'];
    }
  } // 其余情况返回原值

  return scope;
};

exports.scopeMapDisplayName = scopeMapDisplayName;
