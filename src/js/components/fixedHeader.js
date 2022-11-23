//* Change Background Header
export default function fixedHeader() {
  function scrollHeader() {
    const nav = document.querySelector("header");
    if (this.scrollY >= 90) {
      nav.classList.add("scroll-header");
    } else {
      nav.classList.remove("scroll-header");
    }
  }

  window.addEventListener("scroll", scrollHeader);

  // ! Change
  function changeBg() {
    const header = document.querySelector("header");
    if (window.pageYOffset >= 90) {
      header.classList.add("scroll-header");
    }
  }

  changeBg();
}
