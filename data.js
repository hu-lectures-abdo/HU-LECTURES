let array_ = [
  ["zero_null", "UserName"],
  ["zero_islam", "ahmed islam"],
  ["zero_eyad", "اياد صيام PT"],
  ['zero_fawzy' , 'muhammed ahmed'],
  ["zero_mo-abdullah", "mohammed abdullah"],
  ["zero_nour", 'nour adel "الحكومه"'],
  ["zero_salmaa", 'salmaa "سبونج بوب"'],
  ["zero_kero", "kero"],
];

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
div_input.classList = "input-wrapper";
let input = document.createElement("input");
input.setAttribute("type", "password");
input.setAttribute("id", "password");
let x = document.createElement("span");
x.innerHTML = `<ion-icon name="close-outline"></ion-icon>`;
x.classList = "close-item";
let p = document.createElement("p");
let p_end = document.createElement("p");
p_end.innerHTML = "the source code is saved for developer ";
p_end.classList = "p-end";
p.classList = "mess-t-f";
let box_load = document.createElement("div");
box_load.classList = "box-load";
box_pig.appendChild(box_alert);
box_alert.prepend(h_1);
box_alert.append(p_1);
box_alert.append(p_2);
box_alert.prepend(x);
box_alert.appendChild(div_input);
div_input.prepend(input);
box_alert.appendChild(p);
box_alert.appendChild(p_end);
document.body.append(box_pig);
box_pig.remove(); //
x.onclick = function () {
  box_pig.remove();
  p_1.innerHTML = "";
};
sett_btn.addEventListener("click", function () {
  document.body.append(box_pig);
  input.focus();
  ityped.init(document.querySelector("#p_1"), {
    strings: [`inter the pass...!`],
    loop: false,
  });
  local();
});
ch_sett();
var ch_dev = "f";
function local() {
  if (window.localStorage.getItem("access") == "admin") {
    let name_ = document.querySelector(".n-s");
    name_.innerHTML = "abdullah mamdouh";
    let i_ = document.querySelector(".p-1").nextElementSibling;
    p.innerHTML = "passed!";
    p.style.color = `rgb(5 115 5)`;
    div_input.style.display = "none";
    p_end.style.display = "none";
    i_.remove();
    p_1.remove();
    data();
    ityped.init(document.querySelector("#p_2"), {
      strings: [` DEV:Abdu11aH `],
      loop: false,
    });
    //
  }
  if (window.localStorage.getItem("access") == "user") {
    if (window.localStorage.getItem("userName")) {
      let i_ = document.querySelector(".p-1").nextElementSibling;
      p.innerHTML = "user VIP access";
      p.style.color = `rgb(5 115 5)`;
      div_input.style.display = "none";
      i_.remove();
      p_1.remove();
      ityped.init(document.querySelector("#p_2"), {
        strings: [`User: ${window.localStorage.getItem("userName")}`],
        loop: false,
      });
    }
    //
  } else {
    ch_dev = "f";
  }
}
function ch_sett() {
  input.addEventListener("input", function () {
    if (input.value === "8892" && input.value.length == 4) {
      p.innerHTML = "passed!";
      p.style.color = `rgb(5 115 5)`;
      div_input.style.display = "none";
      p_end.style.display = "none";
      p_1.remove();
      ityped.init(document.querySelector("#p_2"), {
        strings: [` DEV:Abdu11aH  `],
        loop: false,
      });
      ch_dev = "t";
      v();
      input.value = "";
      window.localStorage.setItem("access", "admin");
      loading();
      setTimeout(() => {
        location.reload();
      }, 6000);
    } else {
      if (input.value.length == 4) {
        p.innerHTML = "not pass!";
        p.style.color = `rgb(149 6 6)`;
      }
    }
    for (let i = 0; i < array_.length; i++) {
      if (array_[i][0] === input.value.toLocaleLowerCase()) {
        let i_ = document.querySelector(".p-1").nextElementSibling;
        i_.remove();
        p.innerHTML = `VIP user`;
        p_end.style.display = "none";
        p.style.color = `rgb(5 115 5)`;
        div_input.style.display = "none";
        p_1.remove();
        ityped.init(document.querySelector("#p_2"), {
          strings: [`User: ${array_[i][1]}`],
          loop: false,
        });
        window.localStorage.setItem("access", "user");
        window.localStorage.setItem("userName", ` ${array_[i][1]}`);
        loading();
        setTimeout(() => {
          location.reload();
        }, 6000);
      }
    }
  });
  function v() {
    if (ch_dev === "f" || window.localStorage.getItem("access") !== "admin") {
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
//
data();
function data() {
  if (window.localStorage.getItem("access")) {
    let lo_name = document.querySelector(".name");
    lo_name.style.display = "block";
    z();
  }
}
function loading() {
  box_alert.appendChild(box_load);
  box_load.innerHTML = ` <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="30px" height="40px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
    <rect x="0" y="13" width="4" height="5" fill="#333">
      <animate attributeName="height" attributeType="XML"
        values="5;21;5" 
        begin="0s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" attributeType="XML"
        values="13; 5; 13"
        begin="0s" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x="10" y="13" width="4" height="5" fill="#333">
      <animate attributeName="height" attributeType="XML"
        values="5;21;5" 
        begin="0.15s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" attributeType="XML"
        values="13; 5; 13"
        begin="0.15s" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x="20" y="13" width="4" height="5" fill="#333">
      <animate attributeName="height" attributeType="XML"
        values="5;21;5" 
        begin="0.3s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" attributeType="XML"
        values="13; 5; 13"
        begin="0.3s" dur="0.6s" repeatCount="indefinite" />
    </rect>
  </svg>
`;
}
function z() {
  if (window.localStorage.getItem("access") == "admin") {
    let name_ = document.querySelector(".n-s");
    name_.innerHTML = "abdullah mamdouh";
    window.localStorage.removeItem("userName");
  }
  if (window.localStorage.getItem("userName")) {
    let name_ = document.querySelector(".n-s");
    name_.innerHTML = `${window.localStorage.getItem("userName")}`;
  }
}
