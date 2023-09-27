const slides = document.querySelectorAll(".swiper-slide");
const button = document.querySelector(".brands__readmore");

let isShowAll = false;

hideElements();
window.addEventListener("resize", () => hideElements());

button.addEventListener("click", () => {
  if (isShowAll) {
    button.children[0].classList.remove("read-more__img--active");
    button.children[1].textContent = "Показать все";
    isShowAll = false;
    hideElements();
  } else {
    button.children[0].classList.add("read-more__img--active");
    button.children[1].textContent = "Скрыть";
    isShowAll = true;
    showElements(slides);
  }
});

function hideElements() {
  if (!isShowAll && window.innerWidth >= 768) {
    if (window.innerWidth >= 1048) {
      hideFrom(8);
    } else {
      hideFrom(6);
    }
  } else {
    showElements(slides);
  }
}

function hideFrom(num) {
  showElements(slides);
  for (let i = num; i < slides.length; i++) {
    slides[i].classList.add("hidden");
  }
}

function showElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.remove("hidden");
  }
}
