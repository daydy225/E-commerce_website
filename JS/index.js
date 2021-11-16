/*
=============
Naviguation
=============
 */

const navOpen = document.querySelector(".nav__hamburger");
const navClose = document.querySelector(".close__toggle");
const menu = document.querySelector(".nav__menu");
const scrollLink = document.querySelectorAll(".scroll-link");
const navContainer = document.querySelector(".nav__menu");

/*
Action: click sur le menu, ajout de la classe "open" et "active(qui rend le body sombre)"
*/

navOpen.addEventListener("click", () => {
  menu.classList.add("open");
  document.body.classList.add("active");
  // navContainer.style.left = "0";
  // navContainer.style.width = "30rem";
});

/*
Action: Click sur le bouton close, ferme le menu. 
*/
navClose.addEventListener("click", () => {
  menu.classList.remove("open");
  document.body.classList.remove("active");
  // navContainer.style.left = "-30rem";
  // navContainer.style.width = "0";
});
