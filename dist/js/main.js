var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});
const menu = document.querySelector(".menu-collapsed");
menu.addEventListener("click", () => {
  menu.classList.toggle("menu-expanded");
});