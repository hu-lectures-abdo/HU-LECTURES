let btn_nav=document.getElementById("btn"),nav_bar=document.querySelector("nav"),arrow_a=document.querySelector(".arrow-a");function open_nav(){nav_bar.classList.contains("cancello")?(nav_bar.classList.remove("cancello"),nav_bar.classList.add("active")):(nav_bar.classList.remove("active"),nav_bar.classList.add("cancello")),control_menu()}function control_menu(){document.querySelector(".button").querySelector("span").classList.toggle("is-closed")}btn_nav.addEventListener("click",open_nav),document.addEventListener("keydown",(function(e){"ArrowRight"==e.code&&(open_nav(),nav_bar.classList.contains("active")&&window.addEventListener("keydown",(function(e){e.code})))})),document.addEventListener("keydown",(function(e){(e.keyCode>=65&&e.keyCode<=90||18==e.keyCode)&&nav_bar.classList.contains("cancello")&&(control_menu(),nav_bar.classList.remove("cancello"),nav_bar.classList.add("active"))}));let arrow=document.querySelector(".li-sub-main"),sub=document.querySelector(".sub");arrow.addEventListener("click",(function(){sub.classList.contains("cancello")?(sub.classList.remove("cancello"),sub.classList.add("active"),arrow_a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width=\'25px\' viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 328l144-144 144 144"/></svg>'):(sub.classList.remove("active"),sub.classList.add("cancello"),arrow_a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width=\'25px\' viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"/></svg>')}));let a_mode=document.querySelector(".mode"),switch_btn=document.getElementById("switch-round");"true"==localStorage.getItem("check")&&switch_btn.setAttribute("checked","true"),a_mode.addEventListener("click",(function(){null==switch_btn.getAttribute("checked")?(switch_btn.setAttribute("checked","true"),localStorage.setItem("check","true")):(switch_btn.removeAttribute("checked"),localStorage.removeItem("check"))}));let dark_animation=document.querySelector("#dark_animation"),icon_mode=document.getElementById("icon_mode"),text_mode=document.getElementById("text_mode");function dark_open(){dark_animation.setAttribute("checked","true"),document.querySelector("#particles-js").style.width="100%"}function work(){const e=document.createElement("script");e.src="particles.js",e.onload=()=>{const e=document.createElement("script");e.src="app.js",e.onload=()=>{console.log("Script loaded successfully")},document.body.appendChild(e)},document.body.appendChild(e)}function dark_close(){dark_animation.removeAttribute("checked"),document.querySelector("#particles-js").style.width="0%"}function off(){let e=document.querySelectorAll("script");for(let t=0;t<e.length;t++)e[t].src.includes("app",0)&&e[t].remove(),e[t].src.includes("particles",0)&&e[t].remove()}localStorage.getItem("check")&&(icon_mode.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width=\'27px\' viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"/><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>',text_mode.innerHTML="light mode",localStorage.getItem("check-dark-op")&&dark_open(),null===localStorage.getItem("check-dark-op")&&dark_close(),dark_mode()),a_mode.addEventListener("click",(function(){"true"==switch_btn.getAttribute("checked")?(icon_mode.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width=\'27px\' viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"/><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>',text_mode.innerHTML="light mode",localStorage.getItem("check-dark-op")&&dark_open(),null===localStorage.getItem("check-dark-op")&&dark_close(),dark_mode()):(icon_mode.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width=\'27px\' viewBox="0 0 512 512"><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>',text_mode.innerHTML="dark mode",light_mode())})),"true"==localStorage.getItem("check-dark-op")&&(dark_animation.setAttribute("checked","true"),dark_open(),work()),dark_animation.addEventListener("click",(function(){null==dark_animation.getAttribute("checked")?(dark_animation.setAttribute("checked","true"),localStorage.setItem("check-dark-op","true"),dark_open(),work()):(dark_animation.removeAttribute("checked"),localStorage.removeItem("check-dark-op"),dark_close(),off())})),localStorage.getItem("check-dark-op")&&dark_open(),null===localStorage.getItem("check-dark-op")&&dark_close();let search=document.getElementById("search"),boxResult=document.querySelector(".box-result"),item=document.querySelectorAll(".info"),box_search_result=document.querySelector(".box-search-result");for(let e=0;e<item.length;e++)item[e].setAttribute("data_id",Date.now()+e),item[e].parentElement.setAttribute("id",Date.now()+e);let array=[];function check(){ch();for(let t=0;t<item.length;t++){let o=item[t].innerHTML.toLocaleLowerCase(),l=item[t].cloneNode();if(l.classList.add("clone"),o.indexOf(search.value.toLocaleLowerCase())>-1&&0!==search.value.length&&" "!==search.value){function e(){item.forEach((e=>{e.parentElement.style.backgroundColor="#ffffff80"})),item[t].parentElement.style.backgroundColor="#a1c1f4",item[t].parentElement.onclick=function(){item[t].parentElement.style.backgroundColor="#ffffff80"}}l.innerHTML=`<a href='#${item[t].parentElement.getAttribute("id")}'<span class='vv'><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width='20px' viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284"/></svg></span>${item[t].innerHTML.toLocaleLowerCase()}</a><br>`,boxResult.appendChild(l),array.push(l),l.addEventListener("click",e)}}}function ch(){let e=document.querySelectorAll(".clone");for(let t=0;t<array.length;t++)e.forEach((e=>{e.getAttribute("data_id")===array[t].getAttribute("data_id")&&e.remove()}))}if(search.addEventListener("input",check),"true"!==localStorage.getItem("check")){document.querySelector("#particles-js").style.width="0%"}if("true"===localStorage.getItem("check")&&"true"==localStorage.getItem("check-dark-op")){document.querySelector("#particles-js").style.width="100%"}function dark_mode(){let e=document.querySelector("nav"),t=document.querySelectorAll(".logo a"),o=document.querySelector(".logo-abdo"),l=document.querySelectorAll(".main-li"),r=document.querySelector(".search-box"),c=document.querySelector(".search-box input"),n=document.querySelector(".sub"),a=document.querySelectorAll(".sub a"),s=document.querySelector(".auto-writing"),d=document.querySelector(".title p"),i=document.querySelector(".title p span"),u=document.querySelector(".pl"),m=document.querySelectorAll("x-sign");document.querySelectorAll(".l-b").forEach((e=>{e.addEventListener("click",(function(){document.querySelector(".box-lect").style.cssText="height:300px; background-color :#292626; color:#fff !important; box-shadow: inset -4px -4px 5px rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4) 10px 6px 39px;",document.querySelectorAll(".btn-l").forEach((e=>{e.style.color="#fff"}))}))})),document.body.style.background="#292626",e.style.backgroundColor="#353132",l.forEach((e=>{e.style.color="#fff"})),t.forEach((e=>{e.style.color="#fff"})),o.style.borderLeft="2px solid #fff",r.style.backgroundColor="#91898c",r.style.color="#fff",c.style.color="#fff",n.style.backgroundColor="#585151",a.forEach((e=>{e.style.color="#fff"})),s.style.color="#fff",d.style.cssText="color:#ddd;border-top: 4px double #ddd;border-bottom: 4px double #ddd;",i.style.cssText="-webkit-text-fill-color: transparent;",u.style.display="none",m.forEach((e=>{e.style.cssText="  color: yellow; --color1: goldenrod; --color2: orangered; --color3: mediumblue; --color4: purple; font-family: Gruppo; --interval: 1s; display: block; text-shadow:    0 0 10px var(--color1),   0 0 20px var(--color2),   0 0 40px var(--color3),   0 0 80px var(--color4); will-change: filter, color; filter: saturate(60%);  text-transform: uppercase; white-space: nowrap; font-weight: 400; animation: flicker steps(100) var(--interval) 1s infinite;"}));let y=document.querySelector("footer"),g=document.querySelector("footer a");y.style.color="#fff",g.style.color="#fff",document.querySelectorAll(".box-2").forEach((e=>{e.setAttribute("style","--cv:#fff")})),document.querySelectorAll(".lab").forEach((e=>{e.style.cssText="color:#fff;border-top: 2px solid #fff;border-right: 2px solid #fff;"})),document.querySelector(".box-alert").style.cssText="background-color:rgb(41, 38, 38);color:#fff;"}function light_mode(){let e=document.querySelector("nav"),t=document.querySelectorAll(".logo a"),o=document.querySelector(".logo-abdo"),l=document.querySelectorAll(".main-li"),r=document.querySelector(".search-box"),c=document.querySelector(".search-box input"),n=document.querySelector(".sub"),a=document.querySelectorAll(".sub a");document.querySelector("#particles-js").style.width="0%";let s=document.querySelector(".title p"),d=document.querySelector(".title p span"),i=document.querySelector(".pl"),u=document.querySelectorAll("x-sign");document.body.style.background="rgb(211 208 208 / 74%)",e.style.backgroundColor="#f6f5ff",l.forEach((e=>{e.style.color="#000"})),t.forEach((e=>{e.style.color="#000"})),o.style.borderLeft="2px solid #000",r.style.backgroundColor="#cfcfd1",r.style.color="#000",c.style.color="#000",n.style.backgroundColor="rgb(211 208 208 / 74%)",a.forEach((e=>{e.style.color="#000"})),document.querySelector(".auto-writing").style.color="#000",s.style.cssText="color:#000;border-top: 4px double #000;border-bottom: 4px double #000;",d.style.cssText="-webkit-text-fill-color: #000;",i.style.display="block",u.forEach((e=>{e.style.cssText="  color: black; font-family: Gruppo; display: block; text-shadow:    0 0 10px var(--color1),   0 0 20px var(--color2),   0 0 40px var(--color3),   0 0 80px var(--color4); will-change: filter, color; filter: saturate(60%);  text-transform: uppercase; white-space: nowrap; font-weight: 400; animation: flicker steps(100) var(--interval) 1s infinite;"})),document.querySelectorAll(".l-b").forEach((e=>{e.addEventListener("click",(function(){document.querySelector(".box-lect").style.cssText="  height:300px; color:#000;background-color: #ffff;box-shadow: inset 4px 4px 5px rgba(255, 255, 255, 0.3), inset -4px -4px 5px rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.4) 10px 6px 39px;",document.querySelectorAll(".btn-l").forEach((e=>{e.style.color="#000"}))}))}));let m=document.querySelector("footer"),y=document.querySelector("footer a");m.style.color="#000",y.style.color="#000",document.querySelectorAll(".box-2").forEach((e=>{e.setAttribute("style","--cv:#000")})),document.querySelectorAll(".lab").forEach((e=>{e.style.cssText="color:#000;border-top: 2px solid #000;border-right: 2px solid #000;"})),document.querySelector(".box-alert").style.cssText="background-color:rgb(238, 235, 235);color:#000;"}let counter=setInterval((()=>{document.querySelector("footer span")}),1e3);setTimeout((e=>{ityped.init(document.querySelector("#ityed-mes"),{strings:["version 1.0.0 made with love by A|B|D|O"],loop:!1})}),2e3);let to=document.querySelector(".to-top");document.body.onscroll=function(){scrollY>=1e3?to.style.display="block":to.style.display="none"},to.onclick=function(){window.scrollTo(0,0)};let back_bth=document.querySelector("#back");function dis_background(){let e=document.querySelector(".mode"),t=document.createElement("div");t.classList="c-block",e.style.cssText="z-index:-1; color:#7c7c7c ; opacity:0.4;",t.style.cssText="height:70px;width:250px;position:absolute;right: 0px;z-index: 99999;",e.append(t),document.querySelector("#switch-round").setAttribute("disabled","true"),change_color()}function en_background(){if("true"==localStorage.check){document.querySelector(".mode").style.cssText="z-index:20;color:#fff"}else{document.querySelector(".mode").style.cssText="z-index:20;color:#000"}document.querySelector("#switch-round").removeAttribute("disabled"),window.localStorage.removeItem("dis-change-d-l")}function change_color(){light_mode();let e=document.querySelectorAll("#color"),t=document.querySelector("nav");document.body.style.cssText=`background-color:${window.localStorage.getItem("color")};color:#000;`,document.querySelectorAll(".l-b").forEach((e=>{e.addEventListener("click",(function(){document.querySelector(".box-lect").style.cssText="background:red;"}))})),t.style.backgroundColor=`${window.localStorage.getItem("color")}`,e.forEach((o=>{o.onclick=function(){e.forEach((e=>{e.classList.remove("cl")})),o.classList.add("cl"),document.body.style.backgroundColor=`${o.getAttribute("data-color")}`,window.localStorage.setItem("color",`${o.getAttribute("data-color")}`),t.style.backgroundColor=`${o.getAttribute("data-color")}`}})),color_c()}back_bth.addEventListener("click",(function(){null===back_bth.getAttribute("checked")?(window.localStorage.setItem("dis-change-d-l","true"),dis_background()):en_background()})),window.localStorage.getItem("dis-change-d-l")?dis_background():en_background();let colors=document.querySelectorAll("#color"),sec_color=document.querySelector("#sect_color");function change_color_color(){let e=document.querySelector("#c_c"),t=document.querySelector(".box-c-v"),o=document.querySelector(".block-cv "),l=document.querySelector("#close_c");function r(){t.style.display="none",o.style.display="none",e.removeAttribute("checked")}e.addEventListener("click",(function(){change_color(),e.setAttribute("checked","true"),"true"==e.getAttribute("checked")?(t.style.display="flex",o.style.display="block"):(t.style.display="none",o.style.display="none")})),l.onclick=e=>r(),o.onclick=e=>r()}function color_c(){let e=document.querySelectorAll("#e_21"),t=document.querySelectorAll(".logo a"),o=document.querySelector(".logo-abdo"),l=document.querySelectorAll(".main-li"),r=document.querySelector(".search-box"),c=document.querySelector(".search-box input"),n=(document.querySelector(".sub"),document.querySelectorAll(".sub a"));document.querySelector("#particles-js").style.width="0%";let a=document.querySelector(".title p"),s=document.querySelector(".title p span"),d=document.querySelectorAll("x-sign");function i(){l.forEach((e=>{e.style.color=localStorage.getItem("color_text")})),t.forEach((e=>{e.style.color=localStorage.getItem("color_text")})),o.style.borderLeft=`2px solid ${localStorage.getItem("color_text")}`,r.style.color=localStorage.getItem("color_text"),c.style.color=localStorage.getItem("color_text"),n.forEach((e=>{e.style.color=localStorage.getItem("color_text")})),document.querySelector(".auto-writing").style.color=localStorage.getItem("color_text"),a.style.cssText=`color:${localStorage.getItem("color_text")};border-top: 4px double ${localStorage.getItem("color_text")};border-bottom: 4px double ${localStorage.getItem("color_text")};`,s.style.cssText=`-webkit-text-fill-color: ${localStorage.getItem("color_text")}`,d.forEach((e=>{e.style.cssText=`  color: ${localStorage.getItem("color_text")}; font-family: Gruppo; display: block; text-shadow:    0 0 10px var(--color1),   0 0 20px var(--color2),   0 0 40px var(--color3),   0 0 80px var(--color4); will-change: filter, color; filter: saturate(60%);  text-transform: uppercase; white-space: nowrap; font-weight: 400; animation: flicker steps(100) var(--interval) 1s infinite;`})),document.querySelectorAll(".l-b").forEach((e=>{e.addEventListener("click",(function(){document.querySelector(".box-lect").style.cssText=`height:300px; color:${localStorage.getItem("color_text")};background-color:${window.localStorage.getItem("color")};box-shadow:  inset -4px -4px 5px rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.4) 10px 6px 39px;`,document.querySelectorAll(".btn-l").forEach((e=>{e.style.color=localStorage.getItem("color_text")}))}))}));let e=document.querySelector("footer"),i=document.querySelector("footer a");e.style.color=localStorage.getItem("color_text"),i.style.color=localStorage.getItem("color_text"),document.querySelectorAll(".box-2").forEach((e=>{e.setAttribute("style",`--cv:${localStorage.getItem("color_text")}`)})),document.querySelectorAll(".lab").forEach((e=>{e.style.cssText=`color:${localStorage.getItem("color_text")};border-top: 2px solid ${localStorage.getItem("color_text")};border-right: 2px solid ${localStorage.getItem("color_text")};`}))}i(),e.forEach((e=>{e.addEventListener("click",(function(){window.localStorage.setItem("color_text",e.getAttribute("data-color")),i()}))}))}window.localStorage.getItem("c_c")&&(sec_color.value=`${window.localStorage.getItem("c_c")}`,colors[3].setAttribute("data-color",window.localStorage.getItem("c_c")),colors[3].setAttribute("style",`--cl:${window.localStorage.getItem("c_c")}`)),sec_color.oninput=function(){let e=document.querySelectorAll("#color");e[3].setAttribute("data-color",sec_color.value),e[3].setAttribute("style",`--cl:${sec_color.value}`),window.localStorage.setItem("c_c",sec_color.value),e[3].click()},change_color_color();let color_v_select=document.querySelector("#color_v"),e_21=document.querySelectorAll("#e_21");e_21[2].setAttribute("data-color",window.localStorage.getItem("text_aaa")),e_21[2].setAttribute("style",`--cll:${window.localStorage.getItem("text_aaa")}`),color_v_select.value=window.localStorage.getItem("text_aaa"),color_v_select.oninput=function(){e_21[2].setAttribute("data-color",color_v_select.value),e_21[2].setAttribute("style",`--cll:${color_v_select.value}`),window.localStorage.setItem("text_aaa",color_v_select.value),e_21[2].click()},window.onload=function(){const e=document.createElement("script");e.src="https://aomarah8.github.io/hu-lectures/data.js",document.body.appendChild(e)};