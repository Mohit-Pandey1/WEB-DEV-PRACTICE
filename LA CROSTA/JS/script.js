/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)
/*=============== SWIPER POPULAR ===============*/
const swiperPopular = new Swiper('.popular__swiper', {
  loop: true,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto'
});

/*=============== SWIPER TESTIMONIALS ===============*/ 
const swiperTestimonials = new Swiper('.testimonials__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    spaceBetween: 24,
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                   : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const header = document.getElementById('header')

const scrollActive = () => {
    const scrollDown = window.scrollY
    const headerHeight = header.offsetHeight

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - headerHeight,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(sectionsClass){
            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true,  FOr repeating animation  
})


sr.reveal(`.home__data, .popular__container, .footer`)
sr.reveal(`.home__board`, {delay: 700, distance: '100px', origin: 'right'})
sr.reveal(`.home__pizza`, {delay: 1400, distance: '100px', origin: 'bottom', rotate: {z: -90}})
sr.reveal('.home__ingredient', {delay: 2000, interval: 100})
sr.reveal('.about__data, .recipe__list, .recipe__image, .contact__data, .special__data, .testimonials__container', {origin: 'right'})
sr.reveal('.about__img, .recipe__img, .contact__image', {origin: 'left'})
sr.reveal('.special__image-container', {
    origin: 'left',
    afterReveal: function (el) {
        el.classList.add('is-visible');
    }
})
sr.reveal('.products__card', {interval: 100})


const detailsOverlay = document.querySelector('.details__overlay'),
      detailsClose = document.querySelector('.details__close'),
      infoButtons = document.querySelectorAll('.products__info-button')

const detailsImg = document.querySelector('.details__img'),
      detailsName = document.querySelector('.details__name'),
      detailsDescription = document.querySelector('.details__description'),
      detailsPrice = document.querySelector('.details__price'),
      ingredientsList = document.querySelector('.details__ingredients')


infoButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const card = button.closest('.products__card')

        const name = card.getAttribute('data-name'),
              price = card.getAttribute('data-price'),
              img = card.getAttribute('data-img'),
              description = card.getAttribute('data-description'),
              ingredients = card.getAttribute('data-ingredients').split(',');

              detailsImg.src = img;
              detailsName.textContent = name;
              detailsDescription.textContent = description;
              detailsPrice.textContent = price;

              ingredientsList.innerHTML = '';
              ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.textContent = ingredient.trim();
                ingredientsList.appendChild(li);
              })

              detailsOverlay.classList.add('show-details');
    })
})

const closeDetails = () => {
    detailsOverlay.classList.remove('show-details');
}

detailsClose.addEventListener('click', closeDetails);


detailsOverlay.addEventListener('click', (e) => {
    if(e.target === detailsOverlay){
        closeDetails();
    }
})