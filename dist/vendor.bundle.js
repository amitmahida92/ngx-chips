(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rxjs"));
	else if(typeof define === 'function' && define.amd)
		define(["rxjs"], factory);
	else if(typeof exports === 'object')
		exports["ngx-chips"] = factory(require("rxjs"));
	else
		root["ngx-chips"] = factory(root["rxjs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_24__) {
return webpackJsonpngx_chips([0],{

/***/ 24:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(12);
__webpack_require__(5);
__webpack_require__(11);
__webpack_require__(24);
module.exports = __webpack_require__(8);


/***/ })

},[83]);
});
//# sourceMappingURL=vendor.map