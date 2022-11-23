// * ===== Modal
export default function modals() {
  function bindModal(openBtn, modal, close) {
    const openBtnEl = document.querySelectorAll(openBtn);
    const modalEl = document.querySelector(modal);
    const closeEl = document.querySelectorAll(close);
    const body = document.querySelector("body");
    if (modalEl) {
      openBtnEl.forEach((el) => {
        el.addEventListener("click", (e) => {
          if (e.target) {
            e.preventDefault();
          }
          modalEl.classList.add("active");
          body.classList.add("no-scroll");
        });
      });
      closeEl.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          modalEl.classList.remove("active");
          body.classList.remove("no-scroll");
        });
      });
      modalEl.addEventListener("click", (e) => {
        if (e.target === modalEl) {
          modalEl.classList.remove("active");
          body.classList.remove("no-scroll");
        }
      });
    }
  }
  bindModal(".projects-top__btn", ".popup--projects", ".popup__close");
}
