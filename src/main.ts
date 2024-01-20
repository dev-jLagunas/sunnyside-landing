import "./style.scss";

let toggleBtn = document.getElementById("navbar-toggle")!;
let menu = document.getElementById("navbar-menu")!;

toggleBtn.addEventListener("click", function () {
  if (menu.style.display === "none") {
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
