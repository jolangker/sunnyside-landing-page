const toggle = document.getElementById("toggleBtn");

toggle.addEventListener("click", function () {
  const nav = document.querySelector("nav");
  const menu = document.querySelector("nav ul");

  menu.classList.toggle("show");
  menu.classList.toggle("menu-collapse");

  const menuCollapse = document.querySelector(".menu-collapse");

  if (menu.classList.contains("menu-collapse")) {
    menuCollapse.style.top = nav.offsetTop + 70 + "px";
  }
});

function clearMenu() {
  const menu = document.querySelector("nav ul");
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    menu.classList.remove("menu-collapse");
  }
}

window.onclick = function (event) {
  if (!event.target.matches(".hamburger-icon")) {
    clearMenu();
  }
};

window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width:768px)").matches) {
    clearMenu();
  }
});
