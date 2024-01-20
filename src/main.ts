import "./style.scss";
import { translationData } from "./data/translation-data";

let toggleBtn = document.getElementById("navbar-toggle")!;
let menu = document.getElementById("navbar-menu")!;
const enBtn = document.querySelector(".en-btn");
const jpBtn = document.querySelector(".jp-btn");
const spBtn = document.querySelector(".sp-btn");

toggleBtn.addEventListener("click", function () {
  if (menu.style.display !== "block") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

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

// Function to translate the page
function translatePage(language: "en" | "jp" | "es") {
  // Get all the elements that need to be translated
  const elementsToTranslate = document.querySelectorAll("[data-translate]");

  // Translate each element
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

console.log(translationData);

// Add event listeners to the buttons
enBtn?.addEventListener("click", () => translatePage("en"));
jpBtn?.addEventListener("click", () => translatePage("jp"));
spBtn?.addEventListener("click", () => translatePage("es"));
