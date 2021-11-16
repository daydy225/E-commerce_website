/*
=================
Glide Js Carousel
=================
 */

const slider1 = document.getElementById("glide_1");

/*
================
Slider Gadjet
================
*/

if (slider1) {
  new Glide(slider1, {
    type: "carousel",
    startAt: 0,
    autoplay: 3000,
    hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: "linear"
  }).mount();
}

/*
=============
Latest Products
=============
 */

/*
=============
Related Products
=============
 */
