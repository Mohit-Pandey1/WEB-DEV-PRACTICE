/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav__menu');
const navToggle = document.getElementById('nav__toggle');
const navClose = document.getElementById('nav__close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navlink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav__menu');
    if (navMenu) {
        navMenu.classList.remove('show-menu');
    }
};
navlink.forEach(n => n.addEventListener('click', linkAction));

/*=============== SWIPER SNEAKERS ===============*/
const swiperTitlesContainer = document.querySelector('.home__titles');
if (swiperTitlesContainer) {
    let swiperTitles = new Swiper(".home__titles", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: "auto",
        freeMode: true,
        watchSlidesProgress: true,
    });

    let swiperImages = new Swiper('.home__swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: swiperTitles,
        }
    });
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
  const header = document.getElementById('header');
  if (header) {
    window.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header');
  }
};
window.addEventListener('scroll', bgHeader);

/*=============== DARK/LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-toggle');
const darkTheme = 'dark-theme';
const body = document.body;
const themeIcon = document.querySelector('.nav__theme-icon');

if (themeButton) {
    const selectedTheme = localStorage.getItem('selected-theme');

    const getCurrentTheme = () => body.classList.contains(darkTheme) ? 'dark' : 'light';

    const updateIcon = () => {
        if (themeIcon) {
            themeIcon.classList.remove('ri-moon-line', 'ri-sun-line');
            themeIcon.classList.add(body.classList.contains(darkTheme) ? 'ri-sun-line' : 'ri-moon-line');
        }
    };

    if (selectedTheme) {
        body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
        themeButton.checked = (selectedTheme === 'dark');
    }
    updateIcon();

    themeButton.addEventListener('change', () => {
        body.classList.toggle(darkTheme);
        localStorage.setItem('selected-theme', getCurrentTheme());
        updateIcon();
    });
}