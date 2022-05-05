import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _Promise from "core-js-pure/stable/promise/index.js";
import _Map from "core-js-pure/stable/map/index.js";
import _Set from "core-js-pure/stable/set/index.js";

var TestClass = /*#__PURE__*/function () {
  function TestClass() {
    _classCallCheck(this, TestClass);
  }

  _createClass(TestClass, [{
    key: "usePromise",
    value: function usePromise() {
      return new _Promise(function (resolve) {
        resolve('using promise');
      });
    }
  }, {
    key: "useMap",
    value: function useMap() {
      var newMap = new _Map();
      newMap.set('key', 'value');
      return newMap;
    }
  }, {
    key: "useSet",
    value: function useSet() {
      var newSet = new _Set();
      newSet.add('value');
      return newSet;
    }
  }]);

  return TestClass;
}();

export { TestClass as default };

function createTestClass() {
  return _createTestClass.apply(this, arguments);
}

function _createTestClass() {
  _createTestClass = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var x;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            x = new TestClass();
            _context.next = 3;
            return x.usePromise();

          case 3:
            return _context.abrupt("return", _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createTestClass.apply(this, arguments);
}