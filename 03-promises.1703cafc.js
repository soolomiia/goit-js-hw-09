function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},u=t.parcelRequired7c6;null==u&&((u=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var u={id:e,exports:{}};return r[e]=u,t.call(u.exports,u,u.exports),u.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=u);var o=u("eWCmQ");const l=document.querySelector("form"),i=document.querySelector("button"),d=document.querySelectorAll("input")[0],a=document.querySelectorAll("input")[1],c=document.querySelectorAll("input")[2];l.addEventListener("submit",(e=>{e.preventDefault()})),i.addEventListener("click",(function(){let t=Number(d.value),r=Number(d.value);for(let n=1;n<=c.value;n+=1)setTimeout((()=>{var r,u;r=n,u=t,Math.random()>.3?e(o).Notify.success(`✅ Fulfilled promise ${r} in ${u}ms`):e(o).Notify.failure(`❌ Rejected promise ${r} in ${u}ms`),t+=Number(a.value)}),r),r+=Number(a.value)}));
//# sourceMappingURL=03-promises.1703cafc.js.map