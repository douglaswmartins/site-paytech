"use strict";

/*-----------------------------------
 * FIXED  MENU - HEADER
 *-----------------------------------*/
function menuScroll() {
  const navmenu = document.querySelector(".nav-menu");
  if (window.scrollY > 50) {
    navmenu.classList.add("is-scrolling");
  } else {
    navmenu.classList.remove("is-scrolling");
  }
}
menuScroll();
window.addEventListener("scroll", () => {
  menuScroll();
});

/*-----------------------------------
 * NAVBAR CLOSE ON CLICK
 *-----------------------------------*/
const itemsNavbar = document.querySelectorAll(
  ".navbar-nav > li:not(.dropdown) > a"
);

itemsNavbar.forEach((item) => {
  item.addEventListener("click", (e) => {
    const navbar = document.getElementById("navbarCollapse");
    new bootstrap.Collapse(navbar);
  });
});
