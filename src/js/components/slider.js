import Swiper, { Navigation, Pagination, EffectCoverflow } from "swiper";
Swiper.use([Navigation, Pagination, EffectCoverflow]);

function postsSlider() {
  const swiper = new Swiper(".posts__slider", {
    slidesPerView: "auto",
    spaceBetween: 24,
    pagination: {
      el: ".posts__slider .swiper-pagination",
    },
    breakpoints: {
      990: {
        pagination: {
          el: ".posts__slider .swiper-pagination",
          type: "fraction",
        },
      },
    },

    navigation: {
      nextEl: document.querySelector(".posts__content .swiper-button-next"),
      prevEl: document.querySelector(".posts__content .swiper-button-prev"),
    },
  });
}

function tagsInner() {
  const swiper2 = new Swiper(".tags", {
    slidesPerView: "auto",
    spaceBetween: 12,
  });
}

function newsDetailsSlider() {
  const swiper3 = new Swiper(".news-details__slider", {
    slidesPerView: "auto",
    spaceBetween: 12,
    pagination: {
      el: "news-details__slider .swiper-pagination",
    },
    breakpoints: {
      990: {
        pagination: {
          el: ".news-details__slider .swiper-pagination",
          type: "fraction",
        },
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

function popupProjectsSlider() {
  const swiper4 = new Swiper(".popup-projects__slider", {
    slidesPerView: "auto",
    spaceBetween: 12,
    pagination: {
      el: document.querySelector(".popup-projects__slider .swiper-pagination"),
    },
  });
}

function tickerSlider() {
  const sliderEl = document.querySelector(".ticker__slider");
  new Swiper(sliderEl, {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,

    breakpoints: {
      991: {
        spaceBetween: 40,
      },
    },
  });
}

function projectsGrantSlider() {
  const swiper = new Swiper(".projects-grant__slider", {
    slidesPerView: "auto",
    spaceBetween: 24,
    pagination: {
      el: ".projects-grant__slider .swiper-pagination",
    },

    navigation: {
      nextEl: document.querySelector(".projects-grant .swiper-button-next"),
      prevEl: document.querySelector(".projects-grant .swiper-button-prev"),
    },
  });
}

function mediaSlider() {
  const mediaSliders = document.querySelectorAll(".media__slider");

  mediaSliders.forEach((slider) => {
    const swiper = new Swiper(slider, {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: -1,
        stretch: "-55%",
        depth: 400,
        modifier: -1,
        slideShadows: false,
      },

      navigation: {
        nextEl: document.querySelector(".media__slider .swiper-button-next"),
        prevEl: document.querySelector(".media__slider .swiper-button-prev"),
      },
    });
  });
}

function topicsSlider() {
  const topicsSliders = document.querySelectorAll(".hometowns-topics__slider");

  topicsSliders.forEach((slider) => {
    const swiper = new Swiper(slider, {
      slidesPerView: "auto",
      spaceBetween: 20,
      breakpoints: {
        319: {
          spaceBetween: 15,
        },
        991: {
          spaceBetween: 20,
        },
      },
    });
  });
}

function partnersSlider() {
  const partnersSliders = document.querySelectorAll(".partners__slider");

  partnersSliders.forEach((slider) => {
    const swiper = new Swiper(slider, {
      slidesPerView: "auto",
      speed: 2000,
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      observer: true,
      observeParents: true,
      breakpoints: {
        319: {
          spaceBetween: 40,
        },
        768: {
          spaceBetween: 70,
        },
      },
    });
  });
}

function howAcceptSlider() {
  const topicsSliders = document.querySelectorAll(".how-accept__slider");

  topicsSliders.forEach((slider) => {
    const swiper = new Swiper(slider, {
      slidesPerView: "auto",
      spaceBetween: 20,
      breakpoints: {
        319: {
          spaceBetween: 15,
        },
        991: {
          spaceBetween: 20,
        },
      },
    });
  });
}

function quoteSlider() {
  const topicsSliders = document.querySelectorAll(".quote-slider__slider");

  topicsSliders.forEach((slider) => {
    const swiper = new Swiper(slider, {
      slidesPerView: "auto",
      spaceBetween: 20,
      breakpoints: {
        319: {
          spaceBetween: 15,
        },
        991: {
          spaceBetween: 20,
        },
      },
      navigation: {
        nextEl: document.querySelector(
          ".quote-slider__content .swiper-button-next"
        ),
        prevEl: document.querySelector(
          ".quote-slider__content .swiper-button-prev"
        ),
      },
    });
  });
}

export {
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
};
