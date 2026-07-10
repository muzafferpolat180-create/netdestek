/*==================================================
NETDESTEK V4 PREMIUM
PART 1
==================================================*/

// Header
const header = document.getElementById("header");

// Progress Bar
const progressBar = document.getElementById("progress-bar");

// Back To Top
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    // Header

    if(window.scrollY > 70){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

    // Progress Bar

    const scrollTop = window.scrollY;

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

    // Back To Top

    if(scrollTop > 500){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

// Yukarı Çık

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// Menü Scroll

document.querySelectorAll("nav a").forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*==================================================
NETDESTEK V4 PREMIUM
PART 2
Counter + Reveal + Active Menu
==================================================*/


/*=========================
    ANIMATED COUNTER
=========================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.target);

        let current = 0;

        const speed = Math.max(1, Math.ceil(target / 60));

        function updateCounter(){

            current += speed;

            if(current >= target){

                current = target;

                counter.textContent = target + "+";

                return;

            }

            counter.textContent = current;

            requestAnimationFrame(updateCounter);

        }

        updateCounter();

        counterObserver.unobserve(counter);

    });

},{
    threshold:.45
});

counters.forEach(counter=>{

    counter.textContent="0";

    counterObserver.observe(counter);

});



/*=========================
    SCROLL REVEAL
=========================*/

const reveals=document.querySelectorAll(

".card,.stat-box,.contact-card,.about-list div,.refs img"

);

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

revealObserver.unobserve(entry.target);

}

});

},{
threshold:.15
});

reveals.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(45px)";

item.style.transition=".7s ease";

revealObserver.observe(item);

});



/*=========================
    ACTIVE MENU
=========================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.offsetHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
