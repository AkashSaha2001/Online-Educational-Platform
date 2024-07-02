
    document.addEventListener("DOMContentLoaded", function() {
        const marquee = document.querySelector('.marquee');
        const companies = marquee.innerHTML;

        // Clone the companies to create a seamless loop
        marquee.innerHTML += companies;
    });

