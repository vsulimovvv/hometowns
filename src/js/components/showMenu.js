// * ===== Show Menu
export default function showMenu() {
  const menuBtn = document.querySelector(".header__toggle");
  const menu = document.querySelector(".mobile-menu");
  const menuCloseBtn = document.querySelector(".mobile-menu__close");
  const body = document.querySelector("body");
  const overlay = document.querySelector(".overlay");

  menuBtn.addEventListener("click", (e) => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("no-scroll");
  });

  overlay.addEventListener("click", (e) => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("no-scroll");
  });

  menuCloseBtn.addEventListener("click", (e) => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("no-scroll");
  });
}
