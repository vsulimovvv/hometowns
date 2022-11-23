// * ===== Toggle Tabs
export default function someTabs(
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass
) {
  const header = document.querySelectorAll(headerSelector);
  const tab = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);

  header.forEach((el) => {
    if (el) {
      hideTabContent();
      showTabContent();
      function hideTabContent() {
        content.forEach((item) => {
          item.classList.remove("active");
        });
        tab.forEach((item) => {
          item.classList.remove(activeClass);
        });
      }
      function showTabContent(i = 0) {
        content[i].classList.add("active");
        tab[i].classList.add(activeClass);
      }
      header.forEach((item) => {
        if (item) {
          item.addEventListener("click", (e) => {
            const target = e.target;
            if (target.classList.contains(tabSelector.replace(/\./, ""))) {
              tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                  hideTabContent();
                  showTabContent(i);
                }
              });
            }
          });
        }
      });
    }
  });
}
