'use strict';function c(){for(var d=!1,b=document.getElementsByTagName("script"),e=b.length,a=0;a<e;++a)b[a].hasAttribute("data-src")&&(b[a].src=b[a].getAttribute("data-src"),d=!0);d||setTimeout(c,10)}document.getElementById("splashScreenFrame").addEventListener("load",c);