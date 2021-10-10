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