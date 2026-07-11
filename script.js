/* =====================================================
   NETDESTEK V4
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       HEADER
    ========================== */

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

    /* ==========================
       PROGRESS BAR
    ========================== */

    const progress = document.getElementById("progress-bar");

    window.addEventListener("scroll", () => {

        const total =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const current =
            (window.scrollY / total) * 100;

        progress.style.width = current + "%";

    });

    /* ==========================
       BACK TO TOP
    ========================== */

    const topBtn =
        document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

});

/* =====================================================
   COUNTER
===================================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = parseInt(counter.dataset.target);

        let current = 0;

        const step = Math.max(1, Math.ceil(target / 80));

        const timer = setInterval(() => {

            current += step;

            if (current >= target) {

                counter.textContent = target + "+";

                clearInterval(timer);

            } else {

                counter.textContent = current + "+";

            }

        }, 20);

        counterObserver.unobserve(counter);

    });

}, {
    threshold: .4
});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/* =====================================================
   ACTIVE MENU
===================================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealItems = document.querySelectorAll(

".card,.stat-box,.contact-card,.refs img,.hero-left,.hero-right"

);

const revealObserver = new IntersectionObserver((entries)=>{

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

/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        window.scrollTo({

            top: target.offsetTop - 90,

            behavior: "smooth"

        });

    });

});

/* =====================================================
   HERO IMAGE PARALLAX
===================================================== */

const heroImage = document.querySelector(".hero-image");

if(heroImage){

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/45;

const y=(window.innerHeight/2-e.clientY)/45;

heroImage.style.transform=

`translate(${x}px,${y}px)`;

});

}

/* =====================================================
   HERO BUTTON HOVER
===================================================== */

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

});

});

/* =====================================================
   SCROLL REVEAL CLASS
===================================================== */

document.querySelectorAll(

".card,.stat-box,.contact-card,.refs img"

).forEach(el=>{

el.classList.add("reveal");

});

/* =====================================================
   PRELOADER REMOVE
===================================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/* =====================================================
   CONSOLE
===================================================== */

console.log(

"%cNetDestek",

"color:#2ea8ff;font-size:18px;font-weight:bold;"

);

console.log(

"Kurumsal BT Çözümleri"

);
