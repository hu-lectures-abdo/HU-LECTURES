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
  auto.style.color = '#fff';
}
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

  //

  document.body.style.background = "#e6eff5";
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
  sub.style.backgroundColor = `#ebeaf1`;
  sub_a.forEach((e) => {
    e.style.color = `#000`;
  });
  let auto = document.querySelector(".auto-writing");
  auto.style.color = '#000';
}

let counter = setInterval(() => {
  let date = document.querySelector("footer span");
  let d = moment(new Date()).format("L");
  let t = moment(new Date()).format("LT");
  date.innerHTML = `${d} ${t}`;
}, 1000);
