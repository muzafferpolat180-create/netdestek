// ==============================
// NetDestek v2 Script
// ==============================

// Menü linklerinde yumuşak geçiş
document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({

                behavior: 'smooth'

            });

        }

    });

});

// Sayfa kayınca header efekti
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "#083b7a";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.25)";

    }else{

        header.style.background = "#0b4ea2";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    }

});

// Kartlara görünürken animasyon
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition=".6s";

    observer.observe(card);

});

// Footer yılı otomatik
const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML = `© ${year} NetDestek • Tüm Hakları Saklıdır.`;

}
