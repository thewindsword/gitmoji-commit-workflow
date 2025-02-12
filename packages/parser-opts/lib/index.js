'use strict';

function _wrapRegExp(re, groups) {
  _wrapRegExp = function _wrapRegExp(re, groups) {
    return new BabelRegExp(re, undefined, groups);
  };
  var _RegExp = _wrapNativeSuper(RegExp);
  var _super = RegExp.prototype;
  var _groups = new WeakMap();
  function BabelRegExp(re, flags, groups) {
    var _this = _RegExp.call(this, re, flags);
    _groups.set(_this, groups || _groups.get(re));
    return _this;
  }
  _inherits(BabelRegExp, _RegExp);
  BabelRegExp.prototype.exec = function (str) {
    var result = _super.exec.call(this, str);
    if (result) result.groups = buildGroups(result, this);
    return result;
  };
  BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
    if (typeof substitution === 'string') {
      var groups = _groups.get(this);
      return _super[Symbol.replace].call(
        this,
        str,
        substitution.replace(/\$<([^>]+)>/g, function (_, name) {
          return '$' + groups[name];
        }),
      );
    } else if (typeof substitution === 'function') {
      var _this = this;
      return _super[Symbol.replace].call(this, str, function () {
        var args = [];
        args.push.apply(args, arguments);
        if (typeof args[args.length - 1] !== 'object') {
          args.push(buildGroups(args, _this));
        }
        return substitution.apply(this, args);
      });
    } else {
      return _super[Symbol.replace].call(this, str, substitution);
    }
  };
  function buildGroups(result, re) {
    var g = _groups.get(re);
    return Object.keys(g).reduce(function (groups, name) {
      groups[name] = result[g[name]];
      return groups;
    }, Object.create(null));
  }
  return _wrapRegExp.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  return self;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === 'function' ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== 'function') {
      throw new TypeError('Super expression must either be null or a function');
    }
    if (typeof _cache !== 'undefined') {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf('[native code]') !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = {
  // Test URL: https://regex101.com/r/gYkG99/1
  headerPattern: /*#__PURE__*/ _wrapRegExp(
    /^(?::[0-9A-Z_a-z]*:|(?:\uD83C[\uDF00-\uDFFF])|(?:\uD83D[\uDC00-\uDE4F\uDE80-\uDEFF])|[\u2600-\u2B55])[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]([0-9A-Z_a-z]*)(?:\((.*)\))?!?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]((?:(?!#).)*(?:(?![\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]).))(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]\(?(#[0-9]*)\)?)?$/,
    {
      type: 1,
      scope: 2,
      subject: 3,
      ticket: 4,
    },
  ),
  headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
};
module.exports = exports.default;
