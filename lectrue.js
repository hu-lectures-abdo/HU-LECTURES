let lectures = document.querySelectorAll(".l-b");
lectures.forEach((e) => {
  e.addEventListener("click", function () {
    let back_hover = document.createElement("div");
    back_hover.classList = "hov-lec";
    let box = document.createElement("div");
    box.classList = "box-lect";
    let x = document.createElement("span");
    x.innerHTML = `<ion-icon name="close-outline"></ion-icon>`;
    x.classList = "close-lect";
    function close() {
      back_hover.remove();
      box.remove();
    }
    x.onclick = close;
    back_hover.onclick = close;
    let title = document.createElement("h1");
    title.innerHTML = "lectrue info ";
    title.classList = "title";
    let p_t = document.createElement("p");
    let p_t_2 = document.createElement("p");
    let p_t_3 = document.createElement("p");
    p_t.innerHTML = `SUB:<span>${e.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.textContent}</span>`;
    p_t.classList = "p-l";
    p_t_2.innerHTML = `num:<span>${e.firstElementChild.firstElementChild.nextElementSibling.innerHTML}</span>`;
    p_t_2.classList = "p-l";
    p_t_3.innerHTML = `name:<span>${e.firstElementChild.nextElementSibling.textContent}</span>`;
    if (p_t_3.firstElementChild.innerHTML == "") {
      p_t_3.firstElementChild.textContent = `<undefined/>`;
    }
    p_t_3.classList = "p-l";
    document.body.append(back_hover);
    document.body.append(box);
    box.prepend(title);
    box.prepend(x);
    box.append(p_t);
    box.append(p_t_3);
    box.append(p_t_2);
  });
});
