export default function showProgramPopup() {
  const programPopup = document.querySelectorAll(".map-box");
  const circles = document.querySelectorAll(".program-map__map .circle");
  const content = document.querySelector(".program-map__map");

  programPopup.forEach((popup) => {
    if (popup) {
      const closeBtn = popup.querySelector(".map-box__close");
      closeBtn.addEventListener("click", (e) => {
        popup.classList.remove("active");

        circles.forEach((circle) => {
          circle.classList.remove("active");
        });
      });

      circles.forEach((circle, index) => {
        circle.addEventListener("click", (e) => {
          programPopup.forEach((el) => {
            el.classList.remove("active");
          });

          circles.forEach((el) => {
            el.classList.remove("active");
          });

          circle.classList.add("active");
          programPopup[index].classList.add("active");
        });
      });
    }
  });
}
