!function(){function a(){}function b(){}function c(a,b){this._loggers={},this.name=a||"",this._parent=b||null,b||(this._enabled=!0,this._level=h.WARN)}function d(){return g}function e(a){g=a}Function.prototype.bind||(Function.prototype.bind=function(a){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b=Array.prototype.slice.call(arguments,1),c=this,d=function(){},e=function(){return c.apply(this instanceof d&&a?this:a,b.concat(Array.prototype.slice.call(arguments)))};return d.prototype=this.prototype,e.prototype=new d,e});var f,g,h={DEBUG:10,INFO:20,WARN:30,ERROR:40,FATAL:50};a.prototype={output:function(a,b,c){if("undefined"!=typeof window.console&&"undefined"!=typeof console.log){a&&c.unshift(a+":");var d=c.join(" ");if(void 0===typeof console.info){var e;e=b<=h.DEBUG?"DEBUG":b<=h.INFO?"INFO":b<=h.WARN?"WARN":b<=h.ERROR?"ERROR":"FATAL",console.log("["+e+"] "+d)}else b<=h.DEBUG?(d="[DEBUG] "+d,console.log(d)):b<=h.INFO?console.info(d):b<=h.WARN?console.warn(d):console.error(d)}}},b.prototype={output:function(a,b,c){a&&c.unshift(a+":"),b<=h.DEBUG?(c.unshift("[DEBUG]"),console.log.apply(console,c)):b<=h.INFO?console.info.apply(console,c):b<=h.WARN?console.warn.apply(console,c):console.error.apply(console,c)}},c.prototype={getLogger:function(a){for(var b=a.split("."),d=this,e=this.name?[this.name]:[];b.length;){var f=b.shift();e.push(f),f in d._loggers||(d._loggers[f]=new c(e.join("."),d)),d=d._loggers[f]}return d},_getFlag:function(a){var b=this;for(a="_"+a;null!==b;){if(void 0!==b[a])return b[a];b=b._parent}return null},setEnabled:function(a){this._enabled=!!a},isEnabled:function(){this._getFlag("enabled")},setLevel:function(a){"number"==typeof a?this._level=a:"string"==typeof a&&(a=a.toUpperCase(),a in h&&(this._level=h[a]))},getLevel:function(){return this._getFlag("level")},log:function(a,b){!b.length||!this._getFlag("enabled")||a<this._getFlag("level")||(b=Array.prototype.slice.call(b),g.output(this.name,a,b))},debug:function(){this.log(h.DEBUG,arguments)},info:function(){this.log(h.INFO,arguments)},warn:function(){this.log(h.WARN,arguments)},error:function(){this.log(h.ERROR,arguments)},fatal:function(){this.log(h.FATAL,arguments)}},e(window.console&&window.console.log&&"function"==typeof window.console.log.apply?new b:new a),f=new c;for(var i,j=/loglevel(|-[^=]+)=([^&]+)/g;null!==(i=j.exec(window.location.search));){var k=""===i[1]?f:f.getLogger(i[1].slice(1));k.setLevel(i[2].toUpperCase())}var l={Level:h,getLogger:f.getLogger.bind(f),setEnabled:f.setEnabled.bind(f),isEnabled:f.isEnabled.bind(f),setLevel:f.setLevel.bind(f),getLevel:f.getLevel.bind(f),debug:f.debug.bind(f),info:f.info.bind(f),warn:f.warn.bind(f),error:f.error.bind(f),fatal:f.fatal.bind(f),getWriter:d,setWriter:e};"function"==typeof define?define("logging",[],function(){return l}):window.logging=l}(),define("pat-logger",["logging"],function(a){var b=a.getLogger("patterns");return b}),window.jQuery&&define("jquery",[],function(){return window.jQuery}),require(["jquery","pat-logger"],function(a,b,c){"use strict";window.parent===window&&a(document).ready(function(){a("body").addClass("tango-main")})}),define("/home/gomez/dev/plonetheme.tango/src/plonetheme/tango/theme/js/bundle.js",function(){});
//# sourceMappingURL=bundle-compiled.js.map