const maxSlides = 4;
// const section = [];
// section[0]="";

// const init = () => {
//     for(i=0, i<maxSlides; i++;){

//     section[i+1] = document.querySelector(`.section${i+1}`);
//         console.log(section[i+1]);
//     }
// }
// onload = init();

const hero1 = document.querySelector('.hero1');
const slider1 = document.querySelector('.slider1');
const logo = document.querySelector('#logo');
const infos = document.querySelector('.infos');
const headline1 = document.querySelector('.headline1');
const menu = document.querySelector('.menu');
const main = document.querySelector('.main');
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');
const section4 = document.querySelector('.section4');
const slider2 = document.querySelector('.slider2');
const slider3 = document.querySelector('.slider3');
const slider4 = document.querySelector('.slider4');
const headline2 = document.querySelector('.headline2');
const headline3 = document.querySelector('.headline3');
const headline4 = document.querySelector('.headline4');
const loader = document.querySelector('.loader');
const desc = document.querySelector('.desc');





const tl = new TimelineMax();

onload = setTimeout("endLoader()", 6000);
onload = setTimeout("Timeline()", 6000);

function endLoader(){
    loader.style.display = "none";
    main.style.visibility = "visible";
}

function Timeline(){
    tl.fromTo(hero1, 1, {height: "0%"}, {height:"80%", ease: Power2.easeInOut})
    .fromTo(
        hero1, 
        1.2, 
        { transform:"scale(1.3)"}, 
        { transform:"scale(1)", ease: Power2.easeInOut}
        )
    .fromTo(slider1, 1.2, {x:"-100%"}, {x:"0%", ease: Power2.easeInOut}, 1.2)
    .fromTo(logo, 0.5,{opacity: 0, x:30 }, { opacity: 1, x: 0}, 0.5)
    .fromTo(infos, 0.5,{opacity: 0, x:30 }, { opacity: 1, x: 0}, 1)
    .fromTo(headline1, 1,{opacity: 0, marginTop:"100px"}, { opacity: 1, marginTop:"0"}, 2);
}


infos.addEventListener("click",() =>{
    menu.classList.toggle('menu-active');
})
document.onkeydown = checkKey;


function appearSlide(numSlide){
        const section = `section${numSlide-1}`;
        console.log(section);
        console.log(eval(section));
        eval(section).classList.add("transition-page");
        setTimeout(`section${numSlide}.classList.add('reset-margin')`, 300);
        setTimeout(`slider${numSlide}.classList.add('margin-slide')`, 500);
        setTimeout(`headline${numSlide}.classList.add('fade-up')`, 800);

}

function removeSlide(numSlide){

    setTimeout(`headline${numSlide}.classList.remove('fade-up')`, 100);
    setTimeout(`slider${numSlide}.classList.remove('margin-slide')`,300);
    setTimeout(`section${numSlide}.classList.remove('reset-margin')`,500);
    setTimeout(`section${numSlide }.classList.remove('transition-page1')`,700);

}

let counter = 1; 


function checkKey(e) {

    e = e || window.event;


    if (e.keyCode == '37') {
       // left arrow
       if(counter == 1){
            removeSlide(1);
       }
       if(counter == 2){
            removeSlide(2);
       }
       if(counter == 3){
            removeSlide(3);
        }
        if(counter == 4){
            removeSlide(4);
        }

       if(counter > 1){
        counter--;
        }
       
       console.log(counter);
    }
    else if (e.keyCode == '39') {
    // right arrow
    if(counter == 0){
        appearSlide(1);
     }
        if(counter == 1){
           appearSlide(2);
        }
        if(counter == 2){
            appearSlide(3);
        }
        if(counter == 3){
            appearSlide(4);
        }
        if(counter < maxSlides){
            counter++;
        }
       console.log(counter);
    }

}

infos.addEventListener("click", () => {
  menu.classList.toggle("open");
  setTimeout('desc.classList.toggle("fade-up")', 500);    

});