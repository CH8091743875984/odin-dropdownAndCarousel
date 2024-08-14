import "./style.css";
import {
  shiftLeftAndSetActive,
  shiftRightAndSetActive,
  startSlideshow,
  reorderToSpecific,
} from "./carousel";

console.log("calling from index.js");

// const menu = document.querySelector(".menu");
// const menuButton = document.querySelector(".menuButton");
// const closeIcon = document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".menuIcon");

// function toggleMenu() {
//   if (menu.classList.contains("showMenu")) {
//     menu.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     menu.classList.add("showMenu");
//     closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }

// menuButton.addEventListener("click", toggleMenu);

const menuButton = document.querySelector(".menuButton");
const menuDropdown = document.querySelector(".menuDropdown");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  menuDropdown.classList.toggle("show");
  menuIcon.classList.toggle("show");
  closeIcon.classList.toggle("show");
}

menuButton.addEventListener("click", toggleMenu);

window.onclick = function (event) {
  if (!event.target.matches(".material-icons")) {
    if (menuDropdown.classList.contains("show")) {
      toggleMenu();
    }
  }
};

const images = document.querySelectorAll(".imageContainer img");

images.forEach((image) => {
  image.addEventListener("click", function (event) {
    reorderToSpecific(event.target);
  });
});

const rightButton = document.querySelector("#shiftImageRight");
rightButton.addEventListener("click", shiftLeftAndSetActive);

const leftButton = document.querySelector("#shiftImageLeft");
leftButton.addEventListener("click", shiftRightAndSetActive);

// startSlideshow();
