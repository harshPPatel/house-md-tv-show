var input = document.querySelector('#options-per-view-input')

var glide = new Glide('#options-per-view', {
  hoverpause: true,
  autoplay: 4000,
  dragThreshold: 120,
  touchRatio: 0.5,
  rewind: true,
  rewindDuration: 2000,
  animationDuration: 2000,
  perView: 3,
  breakpoints: {
    600: {
      perView: 1
    }
  }
});


glide.mount();
