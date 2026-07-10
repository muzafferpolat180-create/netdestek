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

