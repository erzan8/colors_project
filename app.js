const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');
const menu = document.querySelector('.menu');
const main = document.querySelector('.main');
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const slider2 = document.querySelector('.slider2');
const headline2 = document.querySelector('.headline2');
const loader = document.querySelector('.loader');

const tl = new TimelineMax();

onload = setTimeout("endLoader()", 8000);
onload = setTimeout("Timeline()", 8000);

function endLoader(){
    loader.style.display = "none";
    main.style.visibility = "visible";
}

function Timeline(){
    tl.fromTo(hero, 1, {height: "0%"}, {height:"80%", ease: Power2.easeInOut})
    .fromTo(
        hero, 
        1.2, 
        { transform:"scale(1.3)"}, 
        { transform:"scale(1)", ease: Power2.easeInOut}
        )
    .fromTo(slider, 1.2, {x:"-100%"}, {x:"0%", ease: Power2.easeInOut}, 1.2)
    .fromTo(logo, 0.5,{opacity: 0, x:30 }, { opacity: 1, x: 0}, 0.5)
    .fromTo(hamburger, 0.5,{opacity: 0, x:30 }, { opacity: 1, x: 0}, 1)
    .fromTo(headline, 1,{opacity: 0, marginTop:"100px"}, { opacity: 1, marginTop:"0"}, 2);
}


hamburger.addEventListener("click",() =>{
    menu.classList.toggle('menu-active');
})
document.onkeydown = checkKey;

let counter=0; 

function checkKey(e) {

    e = e || window.event;


    if (e.keyCode == '37') {
       // left arrow
       setTimeout("headline2.classList.remove('fade-up')", 100);
       setTimeout("slider2.classList.remove('margin-slide')",300);
       setTimeout("section2.classList.remove('transition-page2')",500);
       setTimeout("section1.classList.remove('transition-page1')",700);
       counter--;
    
    }
    else if (e.keyCode == '39') {
       // right arrow
       section1.classList.add('transition-page1');
       setTimeout("section2.classList.add('transition-page2')", 300);
       setTimeout("slider2.classList.add('margin-slide')", 500);
       setTimeout("headline2.classList.add('fade-up')", 800);
       counter++;
    }

}