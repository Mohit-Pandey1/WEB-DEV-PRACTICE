/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav__menu')
const navToggle = document.getElementById('nav__toggle')
const navClose = document.getElementById('nav__close')

// DARK/LIGHT THEME
const themeButton = document.getElementById('theme-toggle')
const darkTheme = 'dark-theme'
const body = document.body;

const selectedTheme = localStorage.getItem('selected-theme')
const getCurrentTheme = () => body.classList.contains(darkTheme) ? 'dark' : 'light';

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navlink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav__menu')
    navMenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER SNEAKERS ===============*/
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

// Logic for Dark/Light theme

if(selectedTheme){
  body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.checked = (selectedTheme === 'dark')
}

themeButton.addEventListener('change', () => {
  body.classList.toggle(darkTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
})

// swiperImages.controller.control = swiperTitles
// swiperTitles.controller.control = swiperImages


/*=============== CHANGE BACKGROUND HEADER ===============*/

const bgHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('bg-header')
                     : header.classList.remove('bg-header')
}

window.addEventListener('scroll', bgHeader)