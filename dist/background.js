/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/background/background.js ***!
  \**************************************/
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
chrome.runtime.onInstalled.addListener(function () {
  chrome.tabs.query({}, function (tabs) {
    var _iterator = _createForOfIteratorHelper(tabs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var tab = _step.value;
        console.log(tab);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXLENBQUNDLFdBQVcsQ0FBQyxZQUFNO0VBQ3pDSCxNQUFNLENBQUNJLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQUNELElBQUksRUFBSztJQUFBLElBQUFFLFNBQUEsR0FBQUMsMEJBQUEsQ0FDVkgsSUFBSTtNQUFBSSxLQUFBO0lBQUE7TUFBdEIsS0FBQUYsU0FBQSxDQUFBRyxDQUFBLE1BQUFELEtBQUEsR0FBQUYsU0FBQSxDQUFBSSxDQUFBLElBQUFDLElBQUEsR0FBd0I7UUFBQSxJQUFiQyxHQUFHLEdBQUFKLEtBQUEsQ0FBQUssS0FBQTtRQUNWQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDO01BQ3BCO0lBQUMsU0FBQUksR0FBQTtNQUFBVixTQUFBLENBQUFXLENBQUEsQ0FBQUQsR0FBQTtJQUFBO01BQUFWLFNBQUEsQ0FBQVksQ0FBQTtJQUFBO0VBQ0wsQ0FDQSxDQUFDO0FBQ0wsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKCgpID0+IHtcclxuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHt9LCAodGFicykgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgdGFiIG9mIHRhYnMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGFiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICApO1xyXG59KTsiXSwibmFtZXMiOlsiY2hyb21lIiwicnVudGltZSIsIm9uSW5zdGFsbGVkIiwiYWRkTGlzdGVuZXIiLCJ0YWJzIiwicXVlcnkiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwidGFiIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZSIsImYiXSwic291cmNlUm9vdCI6IiJ9