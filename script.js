let btn_nav=document.getElementById("btn"),nav_bar=document.querySelector("nav"),arrow_a=document.querySelector(".arrow-a");btn_nav.addEventListener("click",(function(){nav_bar.classList.contains("cancello")?(nav_bar.classList.remove("cancello"),nav_bar.classList.add("active")):(nav_bar.classList.remove("active"),nav_bar.classList.add("cancello"))}));let arrow=document.querySelector(".li-sub-main"),sub=document.querySelector(".sub");arrow.addEventListener("click",(function(){sub.classList.contains("cancello")?(sub.classList.remove("cancello"),sub.classList.add("active"),arrow_a.innerHTML='<ion-icon name="chevron-up-outline"></ion-icon>'):(sub.classList.remove("active"),sub.classList.add("cancello"),arrow_a.innerHTML='<ion-icon name="chevron-down-outline"></ion-icon>')}));let a_mode=document.querySelector(".mode"),switch_btn=document.getElementById("switch-round");"true"==localStorage.getItem("check")&&switch_btn.setAttribute("checked","true"),a_mode.addEventListener("click",(function(){null==switch_btn.getAttribute("checked")?(switch_btn.setAttribute("checked","true"),localStorage.setItem("check","true")):(switch_btn.removeAttribute("checked"),localStorage.removeItem("check"))}));let dark_animation=document.querySelector("#dark_animation"),icon_mode=document.getElementById("icon_mode"),text_mode=document.getElementById("text_mode");function dark_open(){dark_animation.setAttribute("checked","true"),work(),document.querySelector("#particles-js").style.width="100%"}function work(){const e=document.createElement("script");e.src="particles.js",e.onload=()=>{const e=document.createElement("script");e.src="app.js",e.onload=()=>{console.log("Script loaded successfully")},document.body.appendChild(e)},document.body.appendChild(e)}function dark_close(){dark_animation.removeAttribute("checked"),document.querySelector("#particles-js").style.width="0%"}function off(){22==document.body.lastElementChild.src.indexOf("app",0)&&document.body.lastElementChild.remove(),22==document.body.children[17].nextElementSibling.src.indexOf("particles",0)&&document.body.children[17].nextElementSibling.remove()}localStorage.getItem("check")&&(icon_mode.innerHTML='<ion-icon name="sunny-outline"></ion-icon>',text_mode.innerHTML="light mode",localStorage.getItem("check-dark-op")&&dark_open(),null===localStorage.getItem("check-dark-op")&&dark_close(),dark_mode()),a_mode.addEventListener("click",(function(){"true"==switch_btn.getAttribute("checked")?(icon_mode.innerHTML='<ion-icon name="sunny-outline"></ion-icon>',text_mode.innerHTML="light mode",localStorage.getItem("check-dark-op")&&dark_open(),null===localStorage.getItem("check-dark-op")&&dark_close(),dark_mode()):(icon_mode.innerHTML='<ion-icon name="moon-outline"></ion-icon>',text_mode.innerHTML="dark mode",light_mode())})),"true"==localStorage.getItem("check-dark-op")&&(dark_animation.setAttribute("checked","true"),dark_open()),dark_animation.addEventListener("click",(function(){null==dark_animation.getAttribute("checked")?(dark_animation.setAttribute("checked","true"),localStorage.setItem("check-dark-op","true"),dark_open()):(dark_animation.removeAttribute("checked"),localStorage.removeItem("check-dark-op"),dark_close(),off())})),localStorage.getItem("check-dark-op")&&dark_open(),null===localStorage.getItem("check-dark-op")&&dark_close();let search=document.getElementById("search"),boxResult=document.querySelector(".box-result"),item=document.querySelectorAll(".info");for(let e=0;e<item.length;e++)item[e].setAttribute("data_id",Date.now()+e),item[e].parentElement.setAttribute("id",Date.now()+e);let array=[];function check(){ch();for(let t=0;t<item.length;t++){let o=item[t].innerHTML.toLocaleLowerCase(),c=item[t].cloneNode();if(c.classList.add("clone"),o.indexOf(search.value.toLocaleLowerCase())>-1&&0!==search.value.length&&" "!==search.value){function e(){item.forEach((e=>{e.parentElement.style.backgroundColor="#ffffff80"})),item[t].parentElement.style.backgroundColor="#a1c1f4",item[t].parentElement.onclick=function(){item[t].parentElement.style.backgroundColor="#ffffff80"}}c.innerHTML=`<a href='#${item[t].parentElement.getAttribute("id")}'<span><ion-icon name="checkmark-done-outline"></ion-icon></span>${item[t].innerHTML.toLocaleLowerCase()}</a><br>`,boxResult.appendChild(c),array.push(c),c.addEventListener("click",e)}}}function ch(){let e=document.querySelectorAll(".clone");for(let t=0;t<array.length;t++)e.forEach((e=>{e.getAttribute("data_id")===array[t].getAttribute("data_id")&&e.remove()}))}if(search.addEventListener("input",check),"true"!==localStorage.getItem("check")){document.querySelector("#particles-js").style.width="0%"}if("true"===localStorage.getItem("check")&&"true"==localStorage.getItem("check-dark-op")){document.querySelector("#particles-js").style.width="100%"}function dark_mode(){let e=document.querySelector("nav"),t=document.querySelectorAll(".logo a"),o=document.querySelector(".logo-abdo"),c=document.querySelectorAll(".main-li"),r=document.querySelector(".search-box"),l=document.querySelector(".search-box input"),n=document.querySelector(".sub"),a=document.querySelectorAll(".sub a"),d=document.querySelector(".auto-writing"),i=document.querySelector(".title p"),u=document.querySelector(".title p span"),s=document.querySelector(".pl"),m=document.querySelectorAll("x-sign");document.querySelectorAll(".l-b").forEach((e=>{e.addEventListener("click",(function(){document.querySelector(".box-lect").style.cssText="height:300px; background-color :#292626; color:#fff !important; box-shadow: inset -4px -4px 5px rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4) 10px 6px 39px;",document.querySelectorAll(".btn-l").forEach((e=>{e.style.color="#fff"}))}))})),document.body.style.background="#292626",e.style.backgroundColor="#353132",c.forEach((e=>{e.style.color="#fff"})),t.forEach((e=>{e.style.color="#fff"})),o.style.borderLeft="2px solid #fff",r.style.backgroundColor="#91898c",r.style.color="#fff",l.style.color="#fff",n.style.backgroundColor="#585151",a.forEach((e=>{e.style.color="#fff"})),d.style.color="#fff",i.style.cssText="color:#ddd;border-top: 4px double #ddd;border-bottom: 4px double #ddd;",u.style.cssText="-webkit-text-fill-color: transparent;",s.style.display="none",m.forEach((e=>{e.style.cssText="  color: yellow; --color1: goldenrod; --color2: orangered; --color3: mediumblue; --color4: purple; font-family: Gruppo; --interval: 1s; display: block; text-shadow:    0 0 10px var(--color1),   0 0 20px var(--color2),   0 0 40px var(--color3),   0 0 80px var(--color4); will-change: filter, color; filter: saturate(60%);  text-transform: uppercase; white-space: nowrap; font-weight: 400; animation: flicker steps(100) var(--interval) 1s infinite;"}))}function light_mode(){let e=document.querySelector("nav"),t=document.querySelectorAll(".logo a"),o=document.querySelector(".logo-abdo"),c=document.querySelectorAll(".main-li"),r=document.querySelector(".search-box"),l=document.querySelector(".search-box input"),n=document.querySelector(".sub"),a=document.querySelectorAll(".sub a");document.querySelector("#particles-js").style.width="0%";let d=document.querySelector(".title p"),i=document.querySelector(".title p span"),u=document.querySelector(".pl"),s=document.querySelectorAll("x-sign");document.body.style.background="rgb(211 208 208 / 74%)",e.style.backgroundColor="#f6f5ff",c.forEach((e=>{e.style.color="#000"})),t.forEach((e=>{e.style.color="#000"})),o.style.borderLeft="2px solid #000",r.style.backgroundColor="#cfcfd1",r.style.color="#000",l.style.color="#000",n.style.backgroundColor="rgb(211 208 208 / 74%)",a.forEach((e=>{e.style.color="#000"})),document.querySelector(".auto-writing").style.color="#000",d.style.cssText="color:#000;border-top: 4px double #000;border-bottom: 4px double #000;",i.style.cssText="-webkit-text-fill-color: #000;",u.style.display="block",s.forEach((e=>{e.style.cssText="  color: black; font-family: Gruppo; display: block; text-shadow:    0 0 10px var(--color1),   0 0 20px var(--color2),   0 0 40px var(--color3),   0 0 80px var(--color4); will-change: filter, color; filter: saturate(60%);  text-transform: uppercase; white-space: nowrap; font-weight: 400; animation: flicker steps(100) var(--interval) 1s infinite;"})),document.querySelectorAll(".l-b").forEach((e=>{e.addEventListener("click",(function(){document.querySelector(".box-lect").style.cssText="  height:300px; color:#000;background-color: #ffff;box-shadow: inset 4px 4px 5px rgba(255, 255, 255, 0.3), inset -4px -4px 5px rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.4) 10px 6px 39px;",document.querySelectorAll(".btn-l").forEach((e=>{e.style.color="#000"}))}))}))}let counter=setInterval((()=>{document.querySelector("footer span")}),1e3);setTimeout((e=>{ityped.init(document.querySelector("#ityed-mes"),{strings:["beta version is devaloped by A|B|D|O"],loop:!1})}),2e3);let to=document.querySelector(".to-top");document.body.onscroll=function(){scrollY>=1e3?to.style.display="block":to.style.display="none"},to.onclick=function(){window.scrollTo(0,0)};let back_bth=document.querySelector("#back");function dis_background(){let e=document.querySelector(".mode"),t=document.createElement("div");t.classList="c-block",e.style.cssText="z-index:-1; color:#7c7c7c",t.style.cssText="height:70px;width:250px;position:absolute;right: 0px;z-index: 99999;",e.append(t),document.querySelector("#switch-round").setAttribute("disabled","true"),change_color()}function en_background(){if("true"==localStorage.check){document.querySelector(".mode").style.cssText="z-index:20;color:#fff"}else{document.querySelector(".mode").style.cssText="z-index:20;color:#000"}document.querySelector("#switch-round").removeAttribute("disabled"),window.localStorage.removeItem("dis-change-d-l")}function change_color(){light_mode();let e=document.querySelectorAll("#color"),t=document.querySelector("nav");document.body.style.cssText=`background-color:${window.localStorage.getItem("color")};color:#000;`,t.style.backgroundColor=`${window.localStorage.getItem("color")}`,document.querySelectorAll(".sub a").forEach((e=>{e.style.color=`${window.localStorage.getItem("text")}`})),document.querySelectorAll(".main-li").forEach((e=>{e.style.color=`${window.localStorage.getItem("text")}`})),e.forEach((o=>{o.onclick=function(){e.forEach((e=>{e.classList.remove("cl")})),o.classList.add("cl"),document.body.style.backgroundColor=`${o.getAttribute("data-color")}`,window.localStorage.setItem("color",`${o.getAttribute("data-color")}`),window.localStorage.setItem("text",`${o.getAttribute("data-text")}`),t.style.backgroundColor=`${o.getAttribute("data-color")}`,location.reload()}}))}back_bth.addEventListener("click",(function(){null===back_bth.getAttribute("checked")?(window.localStorage.setItem("dis-change-d-l","true"),dis_background()):en_background()})),window.localStorage.getItem("dis-change-d-l")?dis_background():en_background();