/*=========================================================
                NETDESTEK V3
=========================================================*/

/*==============================
        STICKY HEADER
==============================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/*==============================
        PROGRESS BAR
==============================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});

/*==============================
        BACK TO TOP
==============================*/

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*==============================
        HERO PARALLAX
==============================*/

const hero = document.querySelector(".hero");

const scene = document.querySelector(".tech-scene");

const core = document.querySelector(".digital-core");

const modules =
document.querySelectorAll(".hero-module");

hero.addEventListener("mousemove",(e)=>{

const rect = hero.getBoundingClientRect();

const x =
(e.clientX-rect.left)/rect.width-.5;

const y =
(e.clientY-rect.top)/rect.height-.5;

scene.style.transform=
`translate(${x*18}px,${y*18}px)`;

core.style.transform=
`translate(-50%,-50%)
rotate(${x*12}deg)
scale(1.02)`;

modules.forEach((card,index)=>{

const speed=(index+1)*6;

card.style.transform=
`translate(${x*speed}px,
${y*speed}px)`;

});

});

hero.addEventListener("mouseleave",()=>{

scene.style.transform="";

core.style.transform="translate(-50%,-50%)";

modules.forEach(card=>{

card.style.transform="";

});

});

/*==============================
        COUNTER
==============================*/

const counters =
document.querySelectorAll(".counter");

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=
+counter.dataset.target;

let current=0;

const step=
Math.ceil(target/120);

const timer=
setInterval(()=>{

current+=step;

if(current>=target){

counter.innerText=target+"+";

clearInterval(timer);

}else{

counter.innerText=current+"+";

}

},18);

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>{

observer.observe(counter);

});

/*==============================
        SCROLL REVEAL
==============================*/

const revealItems =
document.querySelectorAll(

".card,\
.why-card,\
.reference-card,\
.about-item,\
.contact-card"

);

const revealObserver =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

revealItems.forEach(item=>{

revealObserver.observe(item);

});

