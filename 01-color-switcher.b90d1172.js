!function(){var t,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),o=document.querySelector("body");e.addEventListener("click",(function(){t=setInterval((function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),e.disabled=!0,n.disabled=!1})),n.addEventListener("click",(function(){e.disabled=!1,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.b90d1172.js.map