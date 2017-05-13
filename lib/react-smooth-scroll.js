(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-motion"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-motion"], factory);
	else if(typeof exports === 'object')
		exports["ReactSmoothScroll"] = factory(require("react"), require("react-motion"));
	else
		root["ReactSmoothScroll"] = factory(root["React"], root["react-motion"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "lib/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMotion = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ManualScroll = function (_Component) {
	  _inherits(ManualScroll, _Component);
	
	  function ManualScroll() {
	    _classCallCheck(this, ManualScroll);
	
	    return _possibleConstructorReturn(this, (ManualScroll.__proto__ || Object.getPrototypeOf(ManualScroll)).apply(this, arguments));
	  }
	
	  _createClass(ManualScroll, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      window.requestAnimationFrame(function () {
	        window.scrollTo(0, Math.round(nextProps.scrollY));
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('span', null);
	    }
	  }]);
	
	  return ManualScroll;
	}(_react.Component);
	
	var SmoothScroll2 = function (_Component2) {
	  _inherits(SmoothScroll2, _Component2);
	
	  function SmoothScroll2(props) {
	    _classCallCheck(this, SmoothScroll2);
	
	    var _this2 = _possibleConstructorReturn(this, (SmoothScroll2.__proto__ || Object.getPrototypeOf(SmoothScroll2)).call(this, props));
	
	    _this2.state = {
	      scrollY: 0
	    };
	
	    _this2.onmousewheel = _this2.onmousewheel.bind(_this2);
	    _this2.onkeydown = _this2.onkeydown.bind(_this2);
	    _this2.ontouchstart = _this2.ontouchstart.bind(_this2);
	    _this2.ontouchmove = _this2.ontouchmove.bind(_this2);
	    return _this2;
	  }
	
	  _createClass(SmoothScroll2, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this3 = this;
	
	      this.pinY = window.scrollY;
	
	      window.addEventListener('wheel', this.onmousewheel);
	      window.addEventListener('keydown', this.onkeydown);
	      // window.addEventListener('touchmove', this.ontouchmove);
	      // window.addEventListener('touchstart', this.ontouchstart);
	
	      if (this.props.scrollTopWhenRouteChange) {
	        this.props.history.listen(function () {
	          window.scrollTo(0, 0);
	          _this3.setState({
	            scrollY: 0
	          });
	        });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('wheel', this.onmousewheel);
	      window.removeEventListener('keydown', this.onkeydown);
	      // window.removeEventListener('touchmove', this.ontouchmove);
	      // window.removeEventListener('touchstart', this.ontouchstart);
	    }
	  }, {
	    key: 'stayInRange',
	    value: function stayInRange(min, max, value) {
	      return Math.min(max, Math.max(min, value));
	    }
	  }, {
	    key: 'move',
	    value: function move(deltaY) {
	      var _this4 = this;
	
	      if (document.querySelector('html').style.overflowY === 'hidden') {
	        return;
	      }
	      this.setState(function (_ref) {
	        var scrollY = _ref.scrollY;
	        return {
	          scrollY: _this4.stayInRange(0, document.querySelector('html').offsetHeight - window.innerHeight, scrollY + deltaY)
	        };
	      });
	    }
	  }, {
	    key: 'onkeydown',
	    value: function onkeydown(e) {
	      if (e.target === document.body && e.key === 'ArrowDown') {
	        e.preventDefault();
	        this.move(20);
	      } else if (e.target === document.body && e.key === 'ArrowUp') {
	        e.preventDefault();
	        this.move(-20);
	      }
	    }
	  }, {
	    key: 'onmousewheel',
	    value: function onmousewheel(e) {
	      if (document.body.contains(e.target) || e.target === document.body) {
	        e.preventDefault();
	        this.move(e.deltaY);
	      }
	    }
	  }, {
	    key: 'ontouchstart',
	    value: function ontouchstart(e) {
	      this.pinY = e.layerY;
	    }
	  }, {
	    key: 'ontouchmove',
	    value: function ontouchmove(e) {
	      // Not working right now
	      if (this.container.contains(e.target) || e.target === this.container) {
	        console.log(e);
	        e.preventDefault();
	        var deltaY = this.pinY - e.layerY;
	        // this.move(deltaY * 2);
	        console.log(deltaY);
	      }
	      this.pinY = e.layerY;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;
	
	      var scrollY = this.state.scrollY;
	
	      return _react2.default.createElement(
	        'div',
	        { ref: function ref(elem) {
	            return _this5.container = elem;
	          } },
	        _react2.default.createElement(
	          _reactMotion.Motion,
	          { style: { scrollY: (0, _reactMotion.spring)(scrollY) } },
	          function (_ref2) {
	            var scrollY = _ref2.scrollY;
	            return _react2.default.createElement(ManualScroll, { scrollY: scrollY });
	          }
	        ),
	        this.props.children
	      );
	    }
	  }]);
	
	  return SmoothScroll2;
	}(_react.Component);
	
	exports.default = SmoothScroll2;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-smooth-scroll.map