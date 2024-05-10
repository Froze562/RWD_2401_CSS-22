let light = document.querySelector('.light');
let on = document.querySelector('.on');
let off = document.querySelector('.off');

on.addEventListener('click', function(){
    light.src = "https://www.w3schools.com/js/pic_bulbon.gif"
})
off.addEventListener('click', function(){
    light.src = "https://www.w3schools.com/js/pic_bulboff.gif"
})



let inc = document.querySelector('.inc');
let result = document.querySelector('.result');
let dec = document.querySelector('.dec');

inc.addEventListener('click', function(){

    if (result.value < 5){
        result.value = Number(result.value) + 1;
    }else{
        inc.style.backgroundColor = '#00ffff40'
    }
})
dec.addEventListener('click', function(){

    if (result.value > 1){
        result.value = Number(result.value) - 1;
    }else{
        dec.style.backgroundColor = '#00ffff40'
    };

})



let range = document.querySelector('.range');
let contain = document.querySelector('.contain');

range.addEventListener('input', function(){
    
    let result = Number(range.value);
    contain.innerHTML = result;

})



let menu = document.querySelector('.fa-solid fa-bars fa-beat-fade');

menu.addEventListener('click', function(){
    let menu = document.querySelector('.menu');
    menu.classList.toggle('active');
})



const navMenu = document.getElementById('menu'),
      navToggle = document.getElementById('btn'),
      navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', function(){
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', function(){
        navMenu.classList.remove('show-menu')
    })
}