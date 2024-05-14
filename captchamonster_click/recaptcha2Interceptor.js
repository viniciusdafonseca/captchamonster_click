(()=>{"use strict";var e={22893:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Logger=t.LogLevel=void 0;const r=o(52196);var n;!function(e){e.DEBUG="DEBUG",e.INFO="INFO",e.WARN="WARN",e.ERROR="ERROR",e.TRACE="TRACE"}(n=t.LogLevel||(t.LogLevel={}));const l=n.INFO,a=[n.DEBUG,n.INFO,n.WARN,n.ERROR,n.TRACE],c={[n.DEBUG]:0,[n.INFO]:1,[n.WARN]:2,[n.ERROR]:3,[n.TRACE]:4},i={[n.DEBUG]:"debug",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error",[n.TRACE]:"trace"},g={[n.DEBUG]:"color:blue;font-weight:bold;",[n.INFO]:"color:green;font-weight:bold;",[n.WARN]:"color:orange;font-weight:bold;",[n.ERROR]:"color:red;font-weight:bold;",[n.TRACE]:"color:grey;font-weight:bold;"},d=()=>{};let s=null;class Logger{constructor(e){this.setLevel=e=>{for(const t of a)this[i[t]]=null!==e&&c[e]<=c[t]?console[i[t]].bind(console,`%c[${this._name}]${this.uuid?`[${this.uuid}]`:""} ${i[t].toUpperCase()}:`,g[t]):d},this.enable=()=>{this.setLevel(l)},this.setUUID=e=>{this.uuid=e,this.setLevel(l)},this.disable=()=>{this.setLevel(null)},this.debug=()=>{},this.info=()=>{},this.warn=()=>{},this.error=()=>{},this.trace=()=>{};const t=(0,r.generateUUID)();this.uuid=t,this._name=e,this.setUUID(t),this.setLevel(l)}}t.Logger=Logger,Logger.getLogger=e=>(s||(s=new Logger(e)),s)},52196:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.generateUUID=void 0;t.generateUUID=()=>{let e=(new Date).getTime(),t="undefined"!=typeof performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(o){let r=16*Math.random();return e>0?(r=(e+r)%16|0,e=Math.floor(e/16)):(r=(t+r)%16|0,t=Math.floor(t/16)),("x"===o?r:3&r|8).toString(16)}))}},22822:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.logger=void 0;const r=o(22893);t.logger=r.Logger.getLogger("CapMonster Content"),t.logger.setLevel(r.LogLevel.DEBUG),t.logger.disable()}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,o),l.exports}(()=>{const e=o(22822),t={},r=(o,r)=>{if(r)return(n,l,a)=>{e.logger.debug("Patched render function invoked");const c=r.call(o,n,l,a);return(null==l?void 0:l.callback)&&("function"==typeof l.callback?t[c]=l.callback.bind(l):t[c]=l.callback),c}},n=t=>{if(!t)return;e.logger.debug("Attaching render interceptor on",t);let o=r(t,t.render);Object.defineProperty(t,"render",{set(n){o=r(t,n),e.logger.debug("Render function was redefined on",o)},get:()=>o})};(()=>{var t;let o=window.grecaptcha;n(o);const r=null===(t=Object.getOwnPropertyDescriptor(window,"grecaptcha"))||void 0===t?void 0:t.set;try{Object.defineProperty(window,"grecaptcha",{set(t){var l;t&&"object"==typeof t&&(o=!1===(null===(l=Object.getOwnPropertyDescriptor(t,"render"))||void 0===l?void 0:l.configurable)?Object.assign({},t):t,r&&r(o),e.logger.debug("Grecaptcha was redefined on",o),n(o))},get:()=>o,configurable:!0})}catch(t){e.logger.error("An error occurred when redefinition the grecaptcha",t)}})(),window.addEventListener("message",(o=>{var r,n;if("invokeReCaptcha2Callback"===o.data.type){const{responseElementId:l,response:a}=o.data.params,[,c]=l.replace(/-/g,"").split("grecaptcharesponse"),i=c?Number.parseInt(c):0,g=t[i];try{if("function"==typeof g)return e.logger.debug("Will execute callback",i,g),void g(a);if("string"==typeof g&&"function"==typeof window[g])return e.logger.debug("Will execute callback",i,g,window[g]),void window[g](a)}catch(t){e.logger.debug("An error occurred during callback execution",t)}const d=document.getElementById(l),s=null===(n=null===(r=null==d?void 0:d.parentElement)||void 0===r?void 0:r.parentElement)||void 0===n?void 0:n.parentElement;if(s instanceof HTMLElement){const t=s.querySelector(".g-recaptcha[data-callback]");if(t instanceof HTMLElement&&t.dataset.callback&&"function"==typeof window[t.dataset.callback])return e.logger.debug("Will execute callback",i,window[t.dataset.callback]),void window[t.dataset.callback](a)}}}))})()})();