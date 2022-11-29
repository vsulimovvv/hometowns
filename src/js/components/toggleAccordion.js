export default function toggleAccordion(
  accordionControl,
  accordionContent,
  accordion
) {
  const filters = document.querySelectorAll(accordionControl);
  filters.forEach((el) => {
    if (el) {
      el.addEventListener("click", (e) => {
        const target = e.target.closest(accordion);
        const content = target.querySelector(accordionContent);
        target.classList.toggle("active");
        if (target.classList.contains("active")) {
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = null;
        }
      });
    }
  });
}
