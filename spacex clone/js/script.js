const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const scrollArrow = document.getElementsByClassName("scroll-arrow");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

scrollArrow.addEventListener("click", navSlide);

function navSlide() {
  const sectionB = document.getElementsByClassName("section-b");

  // Scroll smoothly to section-b
  sectionB.scrollIntoView({ behavior: "smooth" });
}
