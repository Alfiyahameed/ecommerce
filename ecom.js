// sticky navbar
const header=document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('sticky',this.window.scrollY>0);
})

// hamburger menu
const navbar=document.querySelector('.navbar');
const menu=document.querySelector('#menu');
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}