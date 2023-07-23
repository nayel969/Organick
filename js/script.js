"use strict";

/*----- Open/Close Navbar Menu -----*/
const btnNavbar = document.querySelectorAll('[data-nav-btn]'),
    navbar = document.querySelector('[data-navbar]'),
    overlay = document.querySelector('[data-overlay]');

for (const btn of btnNavbar) {

    btn.addEventListener('click', () => {

        navbar.classList.toggle('active');
        overlay.classList.toggle('active');

    });
}


/*----- Open/Close Sub-Menu -----*/
const dropLink = document.querySelector('[data-dropdown-link]'),
subMenu = document.querySelector('[data-submenu]');

dropLink.addEventListener('click', (e) => {
    e.preventDefault();
    subMenu.classList.toggle('active');
    
});


/*----- Testimonials Swiper Slide -----*/
const swiper = new Swiper('.swiper', {

  loop: true,

  pagination: {
    el: '.swiper-pagination',
    },
  
});