// * ===== Accordion
export default function accordion() {
  const accordions = document.querySelectorAll(".accordion-control");
  const accordionsContent = document.querySelectorAll(".accordion-content");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      let content = accordion.previousElementSibling;
      accordion.classList.toggle('active');


      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        accordionsContent.forEach((el) => (el.style.maxHeight = null));
      } else {
        accordionsContent.forEach((el) => (el.style.maxHeight = null));
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}
