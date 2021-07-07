"use strict";

// collapsable NavBar
let headerLinks = document.querySelector(".header-links");
let harmburger = document.querySelector("#icons");
let overlay = document.querySelector(".overlay");

//when an option on the overlay, headerlink and harmburger is clicked- it is hidden the side bar is hidden

const Toggler = function () {
  headerLinks.classList.contains("header-links") &&
    headerLinks.classList.toggle("show");
  overlay.classList.toggle("overlay-filter");
};

harmburger.addEventListener("click", Toggler);

headerLinks.addEventListener("click", Toggler);

overlay.addEventListener("click", Toggler);

// Escape Key toggles the collapsable nav
document.addEventListener("keydown", (e) => {
  e.key === "Escape" && Toggler();
});
