// IMPORTS
import "./style.scss";
import { translationData } from "./data/translation-data";

//DOM ELEMENTS
const enBtn = document.querySelector(".en-btn");
const jpBtn = document.querySelector(".jp-btn");
const spBtn = document.querySelector(".sp-btn");
const toggleBtn = document.getElementById("navbar-toggle")!;
const menu = document.getElementById("navbar-menu")!;

//HIDE NAVBAR ON SCROLL
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav")!;
  const header = document.querySelector("header")!;
  const headerHeight = header.offsetHeight;

  if (window.scrollY > headerHeight - 250) {
    nav.classList.add("nav-hidden");
  } else {
    nav.classList.remove("nav-hidden");
  }
});

//TOGGLE NAVBAR MOBILE MENU
toggleBtn.addEventListener("click", function () {
  if (menu.style.display !== "block") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

//MULTI-LANGUAGE TRANSLATION
function translatePage(language: "en" | "jp" | "es") {
  const elementsToTranslate = document.querySelectorAll("[data-translate]");

  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (key && translationData.hasOwnProperty(key)) {
      const translation = translationData[key as keyof typeof translationData];
      if (translation) {
        element.textContent = translation[language];
      }
    }
  });
}

//MULTI-LANGUAGE TRANSLATION EVENT LISTENERS
enBtn?.addEventListener("click", () => translatePage("en"));
jpBtn?.addEventListener("click", () => translatePage("jp"));
spBtn?.addEventListener("click", () => translatePage("es"));
