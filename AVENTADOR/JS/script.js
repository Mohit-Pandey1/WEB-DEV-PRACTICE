/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

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
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER HOME ===============*/ 
const swiperHome = new Swiper('.home__swiper', {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: (index, className) => {
          return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + "</span>";
        },
    },

    // autoplay: {
    //     delay: 5000,
    // }
});

//DYNAMIC CAR INFO
const carData = [
    {
        title: "AVENTADOR LP <br/> 770-4 SVJ",
        modelNumber: "770-4",
        imageSrc: "IMG/home-car-1.png",
        power: "770 CV (566 kW) <br/> 8.500 rpm",
        speed: "350 Km/h",
        acceleration: "2.8s"
    },
    {
        title: "AVENTADOR LP <br/> 780-4 ULTIMAE",
        modelNumber: "780-4",
        imageSrc: "IMG/info-car.png",
        power: "780 CV (574 kW) <br/> 8.500 rpm",
        speed: "355 Km/h",
        acceleration: "2.8 - 2.9s"
    },
    {
        title: "AVENTADOR S <br/> ROADSTER",
        modelNumber: "740-4",
        imageSrc: "IMG/home-car-3.png",
        power: "740 CV (544 kW) <br/> 8.400 rpm",
        speed: "350 Km/h",
        acceleration: "3.0s"
    },
    {
        title: "AVENTADOR LP <br/> 750-4 SUPERVELOCE",
        modelNumber: "750-4",
        imageSrc: "IMG/home-car-4.png",
        power: "750 CV (522 kW) <br/> 8.400 rpm",
        speed: "350 Km/h",
        acceleration: "2.8s"
    }
];

const carTitleEl = document.getElementById('car-title');
const carModelNumberEl = document.getElementById('car-model-number');
const carImageEl = document.getElementById('car-image');
const carPowerEl = document.getElementById('car-power');
const carSpeedEl = document.getElementById('car-speed');
const carAccelerationEl = document.getElementById('car-acceleration');


function updateCarInfo(car){
    carTitleEl.innerHTML = car.title;
    carModelNumberEl.textContent = car.modelNumber;
    carImageEl.src = car.imageSrc;
    carPowerEl.innerHTML = car.power;
    carSpeedEl.textContent = car.speed;
    carAccelerationEl.textContent = car.acceleration;
}

swiperHome.on('slideChange', function(){
    const currentCarIndex = this.activeIndex;
    const chosenCar = carData[currentCarIndex];
    updateCarInfo(chosenCar)
})

updateCarInfo(carData[0])

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href *=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
    // reset: true,         for repeating animations
})

sr.reveal(`.home__bg`, {scale: 1.1, opacity: 1})
sr.reveal(`.home__swiper`, {origin: 'right', distance: '360px', delay: 800})
sr.reveal(`.home__data`, {origin: 'bottom', distance: '120px', delay: 1600})
sr.reveal(`.swiper-pagination-bullet`, {origin: 'top', delay: 1800, opacity: 0})
sr.reveal('.home__button', {origin: 'top', delay: 2200})
sr.reveal('.about__data, .contact__content', {origin: 'left'})
sr.reveal('.about__video, .contact__img', {origin: 'right'})
sr.reveal('.models__card', {interval: 100})
sr.reveal('.info__img', {distance: '120px'})
sr.reveal('.info__number', {origin: 'bottom', distance: '80px', delay: 800})
sr.reveal('.info__group', {interval: 100, delay: 1300})
sr.reveal('.footer__container')
