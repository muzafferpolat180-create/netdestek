document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
      ELEMENTLER
    =========================================*/

    const header = document.getElementById("header");
    const progressBar = document.getElementById("progress-bar");
    const backToTop = document.getElementById("backToTop");

    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const sections = document.querySelectorAll("section");
    const counters = document.querySelectorAll(".counter");

    /*=========================================
      HEADER + PROGRESS + TOP BUTTON
    =========================================*/

    function handleScroll() {

        const scrollTop = window.scrollY;

        if (header) {
            if (scrollTop > 70) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }

        if (progressBar) {

            const pageHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const progress =
                (scrollTop / pageHeight) * 100;

            progressBar.style.width = progress + "%";

        }

        if (backToTop) {

            if (scrollTop > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        }

        updateActiveMenu();

    }

    window.addEventListener("scroll", handleScroll);

    /*=========================================
      BACK TO TOP
    =========================================*/

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*=========================================
      SMOOTH SCROLL
    =========================================*/

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target =
                document.querySelector(this.getAttribute("href"));

            if (!target) return;

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });

    /*=========================================
      COUNTER
    =========================================*/

    const counterObserver =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;

                const target =
                    parseInt(counter.dataset.target);

                let current = 0;

                const increment =
                    Math.max(1, Math.ceil(target / 80));
					
                function animateCounter() {

                    current += increment;

                    if (current >= target) {

                        counter.textContent = target + "+";

                        return;

                    }

                    counter.textContent = current;

                    requestAnimationFrame(animateCounter);

                }

                counter.textContent = "0";

                animateCounter();

                counterObserver.unobserve(counter);

            });

        }, {

            threshold: 0.45

        });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

    /*=========================================
      SCROLL REVEAL
    =========================================*/

    const revealItems = document.querySelectorAll(

        ".card, .stat-box, .contact-card, .about-list div, .refs img"

    );

    const revealObserver =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            });

        }, {

            threshold: 0.15

        });

    revealItems.forEach(item => {

        item.style.opacity = "0";

        item.style.transform = "translateY(40px)";

        item.style.transition =

            "opacity .6s ease, transform .6s ease";

        revealObserver.observe(item);

    });

    /*=========================================
      ACTIVE MENU
    =========================================*/

    function updateActiveMenu() {

        let currentSection = "";

        sections.forEach(section => {

            const top = section.offsetTop - 140;

            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                currentSection = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    }

    handleScroll();
	
	
    /*=========================================
      INITIALIZE
    =========================================*/

    updateActiveMenu();

    if (header) {

        if (window.scrollY > 70) {

            header.classList.add("scrolled");

        }

    }

});

/*=========================================
  END OF FILE
=========================================*/
