// nav bar btn
let btn_nav = document.getElementById("btn");
let nav_bar = document.querySelector("nav");
let arrow_a = document.querySelector(".arrow-a");
btn_nav.addEventListener("click", function () {
  if (nav_bar.classList.contains("cancello")) {
    nav_bar.classList.remove("cancello");
    nav_bar.classList.add("active");
  } else {
    nav_bar.classList.remove("active");
    nav_bar.classList.add("cancello");
  }
});

//
let arrow = document.querySelector(".li-sub-main");
let sub = document.querySelector(".sub");
arrow.addEventListener("click", function () {
  if (sub.classList.contains("cancello")) {
    sub.classList.remove("cancello");
    sub.classList.add("active");
    arrow_a.innerHTML = `<ion-icon name="chevron-up-outline"></ion-icon>`;
  } else {
    sub.classList.remove("active");
    sub.classList.add("cancello");
    arrow_a.innerHTML = `<ion-icon name="chevron-down-outline"></ion-icon>`;
  }
});
//
let a_mode = document.querySelector(".mode");
let switch_btn = document.getElementById("switch-round");
if (localStorage.getItem("check") == "true") {
  switch_btn.setAttribute("checked", "true");
}
a_mode.addEventListener("click", function () {
  if (switch_btn.getAttribute("checked") == null) {
    switch_btn.setAttribute("checked", "true");
    localStorage.setItem("check", "true");
  } else {
    switch_btn.removeAttribute("checked");
    localStorage.removeItem("check");
  }
});
let icon_mode = document.getElementById("icon_mode");
let text_mode = document.getElementById("text_mode");
if (localStorage.getItem("check")) {
  icon_mode.innerHTML = `<ion-icon name="sunny-outline"></ion-icon>`;
  text_mode.innerHTML = `light mode`;
  dark_mode();
}
a_mode.addEventListener("click", function () {
  if (switch_btn.getAttribute("checked") == "true") {
    icon_mode.innerHTML = `<ion-icon name="sunny-outline"></ion-icon>`;
    text_mode.innerHTML = `light mode`;
    dark_mode();
  } else {
    icon_mode.innerHTML = `<ion-icon name="moon-outline"></ion-icon>`;
    text_mode.innerHTML = `dark mode`;
    light_mode();
  }
});
//
let search = document.getElementById("search");
let boxResult = document.querySelector(".box-result");
let item = document.querySelectorAll(".container a h1 span");
// to make unique id to elements
for (let i = 0; i < item.length; i++) {
  item[i].setAttribute("data_id", Date.now() + i);
  item[i].parentElement.parentElement.setAttribute("id", Date.now() + i + 1);
}
//
let array = [];

search.addEventListener("input", check);

//
function check() {
  ch();
  for (let i = 0; i < item.length; i++) {
    let match = item[i].innerHTML.toLocaleLowerCase();
    let element_colne = item[i].cloneNode();
    element_colne.classList.add("clone");
    if (
      match.indexOf(search.value.toLocaleLowerCase()) > -1 &&
      search.value.length !== 0 &&
      search.value !== " "
    ) {
      element_colne.innerHTML = `<a href='#${item[
        i
      ].parentElement.parentElement.getAttribute("id")}'>${
        item[i].parentElement.children[0].innerHTML
      }</a><br>`;
      boxResult.appendChild(element_colne);
      array.push(element_colne);
    }
  }
}
function ch() {
  let elemnts = document.querySelectorAll(".clone");
  for (let i = 0; i < array.length; i++) {
    elemnts.forEach((e) => {
      if (e.getAttribute("data_id") === array[i].getAttribute("data_id")) {
        e.remove();
      }
    });
  }
}
if (localStorage.length == 0) {
  let app = document.querySelector("#particles-js");
  app.style.width = "0%";
}
function dark_mode() {
  let nav = document.querySelector("nav");
  let logo_h = document.querySelectorAll(".logo a");
  let logo_abdo = document.querySelector(".logo-abdo");
  let main_li = document.querySelectorAll(".main-li");
  let search_box = document.querySelector(".search-box");
  let search_box_input = document.querySelector(".search-box input");
  let sub = document.querySelector(".sub");
  let sub_a = document.querySelectorAll(".sub a");
  let auto = document.querySelector(".auto-writing");
  let app = document.querySelector("#particles-js");
  app.style.width = "100%";
  let title = document.querySelector(".title p");
  let title_span = document.querySelector(".title p span");
  let box_text = document.querySelector(".pl");

  //

  document.body.style.background = "#292626";
  nav.style.backgroundColor = "#353132";
  main_li.forEach((e) => {
    e.style.color = "#fff";
  });
  logo_h.forEach((e) => {
    e.style.color = "#fff";
  });
  logo_abdo.style.borderLeft = "2px solid #fff";
  search_box.style.backgroundColor = "#91898c";
  search_box.style.color = "#fff";
  search_box_input.style.color = "#fff";
  sub.style.backgroundColor = `#585151`;
  sub_a.forEach((e) => {
    e.style.color = `#fff`;
  });
  auto.style.color = "#fff";
  title.style.cssText =
    "color:#ddd;border-top: 4px double #ddd;border-bottom: 4px double #ddd;";
  title_span.style.cssText = "-webkit-text-fill-color: transparent;";
  box_text.style.display = "none";
}

//

function light_mode() {
  let nav = document.querySelector("nav");
  let logo_h = document.querySelectorAll(".logo a");
  let logo_abdo = document.querySelector(".logo-abdo");
  let main_li = document.querySelectorAll(".main-li");
  let search_box = document.querySelector(".search-box");
  let search_box_input = document.querySelector(".search-box input");
  let sub = document.querySelector(".sub");
  let sub_a = document.querySelectorAll(".sub a");
  let app = document.querySelector("#particles-js");
  app.style.width = "0%";
  let title = document.querySelector(".title p");
  let title_span = document.querySelector(".title p span");
  let box_text = document.querySelector(".pl");

  //

  document.body.style.background = "rgb(211 208 208 / 74%)";
  nav.style.backgroundColor = "#f6f5ff";
  main_li.forEach((e) => {
    e.style.color = "#000";
  });
  logo_h.forEach((e) => {
    e.style.color = "#000";
  });
  logo_abdo.style.borderLeft = "2px solid #000";
  search_box.style.backgroundColor = "#cfcfd1";
  search_box.style.color = "#000";
  search_box_input.style.color = "#000";
  sub.style.backgroundColor = `rgb(211 208 208 / 74%)`;
  sub_a.forEach((e) => {
    e.style.color = `#000`;
  });
  let auto = document.querySelector(".auto-writing");
  auto.style.color = "#000";
  title.style.cssText =
    "color:#000;border-top: 4px double #000;border-bottom: 4px double #000;";
  title_span.style.cssText = "-webkit-text-fill-color: #000;";
  box_text.style.display = "block";
}
//

let counter = setInterval(() => {
  let date = document.querySelector("footer span");
  let d = moment(new Date()).format("L");
  let t = moment(new Date()).format("LT");
  return (date.innerHTML = `${d} ${t}`);
}, 1000);
function tv() {
  let t = moment(new Date()).format("LT");
  return t;
}
ityped.init(document.querySelector("#ityped"), {
  strings: [
    `!DOCTYPE html`,
    ' charset="UTF-8"',
    "A|B|D|O",
    " welcome to HU lectures ",
    `${tv()}`,
    " ...",
  ],
  loop: false,
});
setTimeout((_) => {
  ityped.init(document.querySelector("#ityed-mes"), {
    strings: [`beta version is devaloped by A|B|D|O`],
    loop: false,
  });
}, 2000);

let sett_btn = document.querySelector(".settings");
let box_pig = document.createElement("div");
box_pig.classList = "box-pig";
let box_alert = document.createElement("div");
box_alert.classList = "box-alert";
let h_1 = document.createElement("h1");
h_1.innerHTML = "hello dev!";
h_1.classList = "title-alert";
let p_1 = document.createElement("span");
p_1.id = "p_1";
p_1.classList = "p-1";
let p_2 = document.createElement("span");
p_2.id = "p_2";
p_2.classList = "p-2";
let div_input = document.createElement("div");
div_input.classList = "div-input";
let input = document.createElement("input");
input.setAttribute("maxlength", "4");
input.setAttribute("type", "text");
let x = document.createElement("span");
x.innerHTML = `<ion-icon name="close-outline"></ion-icon>`;
x.classList = "close-item";
let p = document.createElement("p");
p.classList = "mess-t-f";
box_pig.appendChild(box_alert);
box_alert.prepend(h_1);
box_alert.append(p_1);
box_alert.append(p_2);
box_alert.appendChild(div_input);
box_alert.prepend(x);
box_alert.appendChild(p);
div_input.appendChild(input);
document.body.append(box_pig);
box_pig.remove(); //
x.onclick = function () {
  box_pig.remove(); //
  p_1.innerHTML = "";
};
sett_btn.addEventListener("click", function () {
  document.body.append(box_pig);
  ityped.init(document.querySelector("#p_1"), {
    strings: [`inter the pass...!`],
    loop: false,
  });
});
ch_sett();
function ch_sett() {
  var ch_dev = "f";
  input.addEventListener("input", function () {
    let i = document.querySelector(".p-1").nextElementSibling;
    if (input.value === "8892" && input.value.length == 4) {
      p.innerHTML = "passed!";
      p.style.color = `rgb(5 115 5)`;
      div_input.style.display = "none";
      i.remove();
      p_1.remove();
      ityped.init(document.querySelector("#p_2"), {
        strings: [`welcome abdullah `],
        loop: false,
      });
      ch_dev = "t";
      v();
      input.value = "";
    } else {
      if (input.value.length == 4) {
        p.innerHTML = "not pass!";
        p.style.color = `rgb(149 6 6)`;
      }
    }
  });
  function v() {
    if (ch_dev === "f" || input.value.length == 0) {
      document.oncontextmenu = function (e) {
        e.preventDefault();
      };
    } else {
      document.oncontextmenu = function (e) {
        e;
      };
    }
  }
  v();
}
