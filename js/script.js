// const hamburgerBtn = document.querySelector(".hamburger-menu-btn");
// const mainNav = document.querySelector(".main-nav");
// const menuNav = document.querySelector(".menu");

// hamburgerBtn.addEventListener("click", () => {
//   mainNav.classList.toggle("active"); // Toggle active class for menu
//   menuNav.style.display = "flex";
// });
///// Mobile: Nav Bar
//Selectors
const primaryNav = document.querySelector("#primary-navigation");
const primaryNavOverlay = document.querySelector(".menuO");
const navToggle = document.querySelector(".mobile-nav-toggle");
//function
navToggle.addEventListener("click", () => {
  const menuVisibility = primaryNav.getAttribute("data-visible");
  const overlayVisibility = primaryNavOverlay.getAttribute("data-visible");

  if (menuVisibility && overlayVisibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    primaryNavOverlay.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (menuVisibility && overlayVisibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    primaryNavOverlay.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
