// nav bar btn 
let btn_nav = document.getElementById('btn');
let nav_bar = document.querySelector('nav');
btn_nav.addEventListener('click' , function(){
    if(nav_bar.classList.contains('cancello')){
        nav_bar.classList.remove('cancello');
        nav_bar.classList.add('active');
    }else {
        nav_bar.classList.remove('active');
        nav_bar.classList.add('cancello');
    }
})
// 
let arrow = document.querySelector('.li-sub-main');
let sub = document.querySelector('.sub');
arrow.addEventListener('click', function(){
    if(sub.classList.contains('cancello')){
        sub.classList.remove('cancello');
        sub.classList.add('active');
    }else {
        sub.classList.remove('active');
        sub.classList.add('cancello');
    }})
// 
let a_mode = document.querySelector('.mode');
let switch_btn = document.getElementById('switch-round');
a_mode.addEventListener('click', function(){
    if(switch_btn.getAttribute('checked') == null){
        switch_btn.setAttribute('checked' , 'true')
    }else {
    switch_btn.removeAttribute('checked');

    }
    
})
let icon_mode = document.getElementById('icon_mode')
let text_mode = document.getElementById('text_mode')
a_mode.addEventListener('click', function(){
    if(switch_btn.getAttribute('checked') == 'true'){
        icon_mode.innerHTML = `<ion-icon name="sunny-outline"></ion-icon>`
        text_mode.innerHTML = `light mode`
        document.body.style.background = '#000';
    }else {
        icon_mode.innerHTML = `<ion-icon name="moon-outline"></ion-icon>`
        text_mode.innerHTML = `dark mode`
        document.body.style.background = '#fff';

    }
}  )
