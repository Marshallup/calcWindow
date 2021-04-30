//= ../../../node_modules/tiny-slider/dist/tiny-slider.js

const sliderColor = tns({
  container: '.calculator-form-color-slider',
  items: 3.2,
  slideBy: 1,
  autoplay: false,
  swipeAngle: false,
  // fixedWidth: 75,
  // edgePadding: 50,
  loop: false,
  nav: false,
  responsive: {
    450: {
      items: 4.7,
    },
  },
});
console.log(sliderColor);
