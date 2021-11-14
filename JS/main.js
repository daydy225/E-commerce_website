const navBouton = document.querySelector('.header1_btn');

navBouton.addEventListener('click', () => {
  document.body.classList.toggle('nav-open')
})


const navSticky = document.querySelector('.header2 .nav')

const sticky = navSticky.offsetTop

window.onscroll = () => {
  if (window.pageYOffset >= sticky) {
    navSticky.classList.add("sticky")
    } else {
    navSticky.classList.remove("sticky")
    }
}

window.onload = () => {
  if (window.pageYOffset >= sticky) {
    navSticky.classList.add("sticky")
    } else {
    navSticky.classList.remove("sticky")
    }
}

const swiper = new Swiper(".product_slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});