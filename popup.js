parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"PUqo":[function(require,module,exports) {
"use strict";function e(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0});var a=function(){function t(){n(this,t)}return r(t,[{key:"sendMessage",value:function(n){var t=n.name,r=n.action,a=n.payload;chrome.storage.local.set(e({},t,a)),chrome.tabs.query({active:!0,currentWindow:!0},function(e){chrome.tabs.sendMessage(e[0].id,{action:r,payload:a})})}}]),t}();exports.default=a;
},{}],"p+7Z":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}function r(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?c(t):n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var f=l(require("./eventhandler")),p=function(e){function n(){var e;return t(this,n),(e=r(this,u(n).call(this))).default_value="20",chrome.storage.local.get({opacity:e.default_value},function(e){document.querySelector("#opacity").value=e.opacity}),e.handler=e.handler.bind(c(c(e))),e}return i(n,f.default),o(n,[{key:"handler",value:function(e){this.sendMessage({name:"opacity",action:"OPACITY",payload:e.target.value})}},{key:"watch",value:function(){document.querySelector("#opacity").addEventListener("change",this.handler,!1)}}]),n}();exports.default=p;
},{"./eventhandler":"PUqo"}],"Oa8N":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SET_OPACITY="SET_OPACITY",exports.SET_PROPERTY="SET_PROPERTY",exports.SET_FILE="SET_FILE",exports.setOpacity=function(e){return{type:exports.SET_OPACITY,payload:e}},exports.setProperty=function(e){return{type:exports.SET_PROPERTY,payload:e}},exports.setFile=function(e){return{type:exports.SET_FILE,payload:e}};
},{}],"18Tz":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?c(t):n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var f=l(require("./eventhandler")),p=require("../common/actions"),s=function(e){function n(){var e;return t(this,n),(e=o(this,u(n).call(this))).default_value="auto",chrome.storage.local.get({opacity:e.default_value},function(e){document.querySelector("#property").value=e.property}),e.handler=e.handler.bind(c(c(e))),e}return i(n,f.default),r(n,[{key:"handler",value:function(e){this.sendMessage({name:"property",action:p.SET_PROPERTY,payload:e.target.value})}},{key:"watch",value:function(){document.querySelector("#property").addEventListener("change",this.handler,!1)}}]),n}();exports.default=s;
},{"./eventhandler":"PUqo","../common/actions":"Oa8N"}],"2z4o":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?f(t):n}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var l=c(require("./eventhandler")),s=function(e){function n(){var e;return t(this,n),(e=o(this,i(n).call(this))).handler=e.handler.bind(f(f(e))),e}return u(n,l.default),r(n,[{key:"handler",value:function(e){var t=this,n=e.target;if(null!==n){var r=n.files[0];if(r.type.match("image.*")){var o=new FileReader;o.addEventListener("load",function(){t.sendMessage({name:"file",action:"FILE",payload:o.result})}),o.readAsDataURL(r)}}}},{key:"watch",value:function(){document.querySelector("#file").addEventListener("change",this.handler,!1)}}]),n}();exports.default=s;
},{"./eventhandler":"PUqo"}],"GW8s":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("./opacity")),r=e(require("./property")),a=e(require("./file"));chrome.runtime.sendMessage("activate"),(new t.default).watch(),(new r.default).watch(),(new a.default).watch();
},{"./opacity":"p+7Z","./property":"18Tz","./file":"2z4o"}]},{},["GW8s"], null)
//# sourceMappingURL=/popup.map