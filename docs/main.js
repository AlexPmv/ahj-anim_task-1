(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".collapse__button"),t=document.querySelector(".collapse__text");t.addEventListener("animationend",(()=>{t.classList.contains("animation-reverse")&&t.classList.remove("animation-reverse")})),e.addEventListener("click",(()=>{if(t.classList.contains("animation"))return t.classList.remove("animation"),void t.classList.add("animation-reverse");t.classList.add("animation")}))}))})();