import 'normalize.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss';

import Swiper, { Navigation, Pagination } from 'swiper';

var swiper = new Swiper('.offerSwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    modules: [Navigation, Pagination],
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1000: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
});

var swiper = new Swiper('.trendsSwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    modules: [Navigation, Pagination],
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
});

var swiper = new Swiper('.categorySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const links = document.querySelectorAll(
    '.offer-smooth, .about-smooth, .trends-smooth, .catalog-smooth, .delivery-smooth, .contact-smooth'
);
for (const link of links) {
    link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');

    document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
    });
}

const mobMenuBtn = document.querySelector('.menu-btn');
const mobMenu = document.querySelector('.mob-menu');

mobMenuBtn.addEventListener('click', () => {
    mobMenu.classList.toggle('active');
    mobMenuBtn.classList.toggle('active');
});
