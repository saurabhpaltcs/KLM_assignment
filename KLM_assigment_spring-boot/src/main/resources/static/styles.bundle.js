webpackJsonp(["styles"],{

/***/ "./node_modules/ng2-toastr-customized/ng2-toastr.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/ng2-toastr-customized/ng2-toastr.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../raw-loader/index.js!../postcss-loader/lib/index.js??embedded!./ng2-toastr.css", function() {
			var newContent = require("!!../raw-loader/index.js!../postcss-loader/lib/index.js??embedded!./ng2-toastr.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/ng2-tree/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/ng2-tree/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../raw-loader/index.js!../postcss-loader/lib/index.js??embedded!./styles.css", function() {
			var newContent = require("!!../raw-loader/index.js!../postcss-loader/lib/index.js??embedded!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/ng2-toastr-customized/ng2-toastr.css":
/***/ (function(module, exports) {

module.exports = ".toast-title {\n    font-weight: bold;\n}\n.toast-message {\n    word-wrap: break-word;\n}\n.toast-message a,\n.toast-message label {\n    color: #FFFFFF;\n}\n.toast-message a:hover {\n    color: #CCCCCC;\n    text-decoration: none;\n}\n.toast-close-button {\n    position: relative;\n    right: -0.3em;\n    top: -0.3em;\n    float: right;\n    font-size: 20px;\n    font-weight: bold;\n    color: #FFFFFF;\n    -webkit-text-shadow: 0 1px 0 #ffffff;\n    text-shadow: 0 1px 0 #ffffff;\n    opacity: 0.8;\n}\n.toast-close-button:hover,\n.toast-close-button:focus {\n    color: #000000;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: 0.4;\n}\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\nbutton.toast-close-button {\n    padding: 0;\n    cursor: pointer;\n    background: transparent;\n    border: 0;\n    -webkit-appearance: none;\n}\n.toast-top-center {\n    top: 0;\n    right: 0;\n    width: 100%;\n}\n.toast-bottom-center {\n    bottom: 0;\n    right: 0;\n    width: 100%;\n}\n.toast-top-full-width {\n    top: 0;\n    right: 0;\n    width: 100%;\n}\n.toast-bottom-full-width {\n    bottom: 0;\n    right: 0;\n    width: 100%;\n}\n.toast-top-left {\n    top: 12px;\n    left: 12px;\n}\n.toast-top-right {\n    top: 12px;\n    right: 12px;\n}\n.toast-bottom-right {\n    right: 12px;\n    bottom: 12px;\n}\n.toast-bottom-left {\n    bottom: 12px;\n    left: 12px;\n}\n#toast-container {\n    pointer-events: none;\n    position: fixed;\n    z-index: 99999;\n}\n#toast-container * {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n#toast-container > div {\n    position: relative;\n    overflow: hidden;\n    margin: 0 0 6px;\n    padding: 15px 15px 15px 50px;\n    width: 300px;\n    border-radius: 3px 3px 3px 3px;\n    background-position: 15px center;\n    background-repeat: no-repeat;\n    -webkit-box-shadow: 0 0 12px #999999;\n    box-shadow: 0 0 12px #999999;\n    color: #FFFFFF;\n    opacity: 0.8;\n}\n#toast-container > div.toast-custom {\n    padding: 15px;\n    color: #030303;\n}\n#toast-container > div.toast-custom .toast-close-button {\n    color: #999999 !important;\n}\n#toast-container > :hover {\n    -webkit-box-shadow: 0 0 12px #000000;\n    box-shadow: 0 0 12px #000000;\n    opacity: 1;\n    cursor: pointer;\n}\n#toast-container > .toast-info {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=\") !important;\n}\n#toast-container > .toast-error {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=\") !important;\n}\n#toast-container > .toast-success {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==\") !important;\n}\n#toast-container > .toast-warning {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=\") !important;\n}\n#toast-container.toast-top-center > div,\n#toast-container.toast-bottom-center > div {\n    width: 300px;\n    margin: auto;\n}\n#toast-container.toast-top-full-width > div,\n#toast-container.toast-bottom-full-width > div {\n    width: 96%;\n    margin: auto;\n}\n.toast {\n    background-color: #FFFFFF;\n    pointer-events: auto;\n}\n.toast-success {\n    background-color: #51A351;\n}\n.toast-error {\n    background-color: #BD362F;\n}\n.toast-info {\n    background-color: #2F96B4;\n}\n.toast-warning {\n    background-color: #F89406;\n}\n.toast-progress {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 4px;\n    background-color: #000000;\n    opacity: 0.4;\n}\n/*Responsive Design*/\n@media all and (max-width: 240px) {\n    #toast-container > div {\n        padding: 8px 8px 8px 50px;\n        width: 11em;\n    }\n    #toast-container .toast-close-button {\n        right: -0.2em;\n        top: -0.2em;\n    }\n}\n@media all and (min-width: 241px) and (max-width: 480px) {\n    #toast-container > div {\n        padding: 8px 8px 8px 50px;\n        width: 18em;\n    }\n    #toast-container .toast-close-button {\n        right: -0.2em;\n        top: -0.2em;\n    }\n}\n@media all and (min-width: 481px) and (max-width: 768px) {\n    #toast-container > div {\n        padding: 15px 15px 15px 50px;\n        width: 25em;\n    }\n}"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/ng2-tree/styles.css":
/***/ (function(module, exports) {

module.exports = ".node-menu {\n  position: relative;\n  width: 150px;\n}\n\n.node-menu .node-menu-content {\n  width: 100%;\n  padding: 5px;\n  position: absolute;\n  border: 1px solid #bdbdbd;\n  border-radius: 5%;\n  -webkit-box-shadow: 0 0 5px #bdbdbd;\n          box-shadow: 0 0 5px #bdbdbd;\n  background-color: #eee;\n  color: #212121;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  z-index: 999;\n}\n\n.node-menu .node-menu-content li.node-menu-item {\n  list-style: none;\n  padding: 3px;\n}\n\n.node-menu .node-menu-content .node-menu-item:hover {\n  border-radius: 5%;\n  opacity: unset;\n  cursor: pointer;\n  background-color: #bdbdbd;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n}\n\n.node-menu .node-menu-content .node-menu-item .node-menu-item-icon {\n  display: inline-block;\n  width: 16px;\n}\n\n.node-menu .node-menu-content .node-menu-item .node-menu-item-icon.new-tag:before {\n  content: '\\25CF';\n}\n\n.node-menu .node-menu-content .node-menu-item .node-menu-item-icon.new-folder:before {\n  content: '\\25B6';\n}\n\n.node-menu .node-menu-content .node-menu-item .node-menu-item-icon.rename:before {\n  content: '\\270E';\n}\n\n.node-menu .node-menu-content .node-menu-item .node-menu-item-icon.remove:before {\n  content: '\\2716';\n}\n\n.node-menu .node-menu-content .node-menu-item .node-menu-item-value {\n  margin-left: 5px;\n}\n\ntree-internal ul {\n  padding: 3px 0 3px 25px;\n}\n\ntree-internal li {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\ntree-internal .over-drop-target {\n  border: 4px solid #757575;\n  -webkit-transition: padding 0.2s ease-out;\n  transition: padding 0.2s ease-out;\n  padding: 5px;\n  border-radius: 5%;\n}\n\ntree-internal .tree {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\ntree-internal .tree li {\n  list-style: none;\n  cursor: default;\n}\n\ntree-internal .tree li div {\n  display: inline-block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\ntree-internal .tree .node-value {\n  display: inline-block;\n  color: #212121;\n}\n\ntree-internal .tree .node-value:after {\n  display: block;\n  padding-top: -3px;\n  width: 0;\n  height: 2px;\n  background-color: #212121;\n  content: '';\n  -webkit-transition: width 0.3s;\n  transition: width 0.3s;\n}\n\ntree-internal .tree .node-value:hover:after {\n  width: 100%;\n}\n\ntree-internal .tree .node-left-menu {\n  display: inline-block;\n  height: 100%;\n  width: auto;\n}\n\ntree-internal .tree .node-left-menu span:before {\n  content: '\\2026';\n  color: #757575;\n}\n\ntree-internal .tree .node-selected:after {\n  width: 100%;\n}\n\ntree-internal .tree .folding {\n  width: 25px;\n  display: inline-block;\n  line-height: 1px;\n  padding: 0 5px;\n  font-weight: bold;\n}\n\ntree-internal .tree .folding.node-collapsed {\n  cursor: pointer;\n}\n\ntree-internal .tree .folding.node-collapsed:before {\n  content: '\\25B6';\n  color: #757575;\n}\n\ntree-internal .tree .folding.node-expanded {\n  cursor: pointer;\n}\n\ntree-internal .tree .folding.node-expanded:before {\n  content: '\\25BC';\n  color: #757575;\n}\n\ntree-internal .tree .folding.node-empty {\n  color: #212121;\n  text-align: center;\n  font-size: 0.89em;\n}\n\ntree-internal .tree .folding.node-empty:before {\n  content: '\\25B6';\n  color: #757575;\n}\n\ntree-internal .tree .folding.node-leaf {\n  color: #212121;\n  text-align: center;\n  font-size: 0.89em;\n}\n\ntree-internal .tree .folding.node-leaf:before {\n  content: '\\25CF';\n  color: #757575;\n}\n\ntree-internal ul.rootless {\n  padding: 0;\n}\n\ntree-internal div.rootless {\n  display: none !important;\n}\n\ntree-internal .loading-children:after {\n  content: ' loading ...';\n  color: #6a1b9a;\n  font-style: italic;\n  font-size: 0.9em;\n  -webkit-animation-name: loading-children;\n          animation-name: loading-children;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes loading-children {\n  0%    { color: #f3e5f5; }\n  12.5% { color: #e1bee7; }\n  25%   { color: #ce93d8; }\n  37.5% { color: #ba68c8; }\n  50%   { color: #ab47bc; }\n  62.5% { color: #9c27b0; }\n  75%   { color: #8e24aa; }\n  87.5% { color: #7b1fa2; }\n  100%  { color: #6a1b9a; }\n}\n\n@keyframes loading-children {\n  0%    { color: #f3e5f5; }\n  12.5% { color: #e1bee7; }\n  25%   { color: #ce93d8; }\n  37.5% { color: #ba68c8; }\n  50%   { color: #ab47bc; }\n  62.5% { color: #9c27b0; }\n  75%   { color: #8e24aa; }\n  87.5% { color: #7b1fa2; }\n  100%  { color: #6a1b9a; }\n}\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.form-header {\nborder:1px solid cadetblue;margin-left: 10px;margin-right: 10px; \n}\n.static-form-header{\nborder:1px solid cadetblue;margin-left: 10px;margin-right: 10px;margin-top:10px;padding-bottom:10px;\n}\n.header-bar{\nmargin-right:25px;margin-left:25px !important;margin-top: 20px !important;font-family: serif;font-weight: bolder;font-size: x-large;color: white;background-color: darkcyan;margin-bottom: 25px;\n}\n.static-header-bar{\nmargin-right:25px;margin-left:25px !important;margin-top: 20px !important;font-family: serif;font-weight: bolder;font-size: x-large;color: white;background-color: darkcyan;margin-bottom: 10px;\n}\n.header-style{\nmargin-left:5px;font-family: serif;font-weight: bolder;font-size: x-large;color: white;\n}\n.searchButton{\nmargin-top: 20px;margin-left: 20px;background-color: dodgerblue;color: white;font-family: cursive;\n}\n.metricsButton{\nmargin-top: 5px;margin-left: 25px;background-color: dodgerblue;color: white;font-family: cursive;\n}\n.metricsField{\nmargin-left: 30px;font-family: initial;font-weight: 500; font-size:initial;\n}"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css", function() {
			var newContent = require("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/styles.css");
__webpack_require__("./node_modules/ng2-toastr-customized/ng2-toastr.css");
module.exports = __webpack_require__("./node_modules/ng2-tree/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map