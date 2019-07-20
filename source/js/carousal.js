// Initializing glide
var glide = new Glide('#characters-carousal', {
  hoverpause: true,
  autoplay: 10000,
  dragThreshold: 120,
  touchRatio: 0.5,
  rewind: true,
  rewindDuration: 2000,
  animationDuration: 800,
  perView: 3,
  bound: true,
  breakpoints: {
    600: {
      perView: 1
    }
  }
});

// Starting glide
glide.mount();
