const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  allowTouchMove: true,
  watchSlidesProgress: true,
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
  spaceBetween: 16,
  slidesPerView: "auto",
  breakpoints: {
    768: {
      grid: {
        rows: 4,
        fill: "row",
      },
      allowTouchMove: false,
    },
    1048: {
      grid: {
        rows: 3,
        fill: "row",
      },
      allowTouchMove: false,
    },
  },
});
