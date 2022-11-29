import "simplebar";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

// * ===== Nice Select
$("select").niceSelect();

import {
  postsSlider,
  tagsInner,
  newsDetailsSlider,
  popupProjectsSlider,
  tickerSlider,
  projectsGrantSlider,
  mediaSlider,
  topicsSlider,
  partnersSlider,
  howAcceptSlider,
  quoteSlider,
} from "./components/slider";
import sentForm from "./components/sentForm";
import fixedHeader from "./components/fixedHeader";
import showMenu from "./components/showMenu";
import someTabs from "./components/tabs";
import modals from "./components/modals";
import showFilters from "./components/showFilters";
import accordion from "./components/accordion";
import toggleAccordion from "./components/toggleAccordion";

import showProgramPopup from "./components/showProgramPopup";

sentForm();
postsSlider();
tagsInner();
newsDetailsSlider();
popupProjectsSlider();
showMenu();
fixedHeader();
someTabs(
  ".projects-tabs",
  ".projects-tabs__nav-btn",
  ".projects-tabs__panel",
  "active"
);
someTabs(
  ".projects-all-tab",
  ".projects-all-tab-btn",
  ".projects-all-tab-content",
  "active"
);
someTabs(
  ".projects-grant-tab",
  ".projects-grant-tab-btn",
  ".projects-grant-tab-content",
  "active"
);

modals();
showFilters();
tickerSlider();
projectsGrantSlider();
quoteSlider();
// accordion();
someTabs(".tabs", ".tabs-btn", ".tabs-content", "active");
someTabs(".faq-tabs", ".faq-tabs__btn", ".faq-tabs__content", "active");
showProgramPopup();
mediaSlider();
topicsSlider();
partnersSlider();
howAcceptSlider();
toggleAccordion(".accordion-control", ".accordion-content", ".accordion");

function showMore() {
  const showMoreBtn = document.querySelector(".museums-course__more");

  const showP = document.querySelectorAll(".museums-course__text p");
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", (e) => {
      showP.forEach((el) => {
        el.classList.remove("hide");
      });

      showMoreBtn.style.display = "none";
    });
  }
}
showMore();

function animateCard() {
  const container = document.querySelectorAll(".card-animation");

  container.forEach((c) => {
    if (c) {
      c.addEventListener("mousemove", (e) => {
        const card = c.querySelector(".card-animation__content");
        let xOffset = e.offsetX;
        let yOffset = e.offsetY;
        let cardHeight = card.clientHeight;
        let cardWidth = card.clientWidth;
        let heightCenter = Math.round(cardHeight / 2);
        let widthCenter = Math.round(cardWidth / 2);
        let rotateBaseValue = 20;
        let rotateXValue =
          ((yOffset - heightCenter) / heightCenter) * rotateBaseValue;
        let rotateYValue =
          ((widthCenter - xOffset) / widthCenter) * rotateBaseValue;
        card.style.transform = `scale(1.01) rotateX(${rotateXValue}deg) rotateY(${rotateYValue}deg)`;
      });
    }
  });

  container.forEach((c) => {
    c.addEventListener("mouseout", (e) => {
      const card = c.querySelector(".card-animation__content");
      card.style.transform = "";
    });
  });
}
animateCard();

function scrollAnimate() {
  const cotnent = document.querySelectorAll(".hero-anim");
  cotnent.forEach((el) => {
    if (el) {
      let count = window.pageYOffset;
      let countForLeftCol = window.pageYOffset - 250;
      const colLeft = document.querySelector(".col-left");
      const colRight = document.querySelector(".col-right");
      colLeft.style.transform = `translateY(${countForLeftCol}px)`;
      colRight.style.transform = `translateY(${-count}px)`;
    }
  });
}

window.addEventListener("scroll", scrollAnimate);
