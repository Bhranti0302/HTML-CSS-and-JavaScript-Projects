/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link");
navLink.forEach((link) =>
  link.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  })
);

/*=============== ADD SHADOW HEADER ===============*/
function shadowHeader() {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
  console.log(this.scrollY);
}

window.addEventListener("scroll", shadowHeader);

/*=============== SWIPER POPULAR ===============*/
const swiper = new Swiper(".popular__swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableInteraction: false,
  },
});

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 150
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  console.log(sections);

  function scrollActive() {
    const scrollDown = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      let sectionTop = current.offsetTop - 56;
      const sectionId = current.getAttribute("id");

      const sectionClass = document.querySelector(
        `.nav__menu a[href*='${sectionId}']`
      );

      if (!sectionClass) return;

      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionClass.classList.add("active-link");
      } else {
        sectionClass.classList.remove("active-link");
      }
    });
  }

  window.addEventListener("scroll", scrollActive);
  scrollActive();
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
});

sr.reveal(".home__data, .popular__container");
sr.reveal(".home__board", { delay: 700, distance: "100px", origin: "right" });
sr.reveal(".home__pizza", {
  delay: 1400,
  distance: "100px",
  origin: "bottom",
  rotate: { z: -90 },
});
sr.reveal(".home__ingredient", { delay: 2000, interval: 100 });
sr.reveal(".about__data,.recipe__list,.contact__data", { origin: "right" });
sr.reveal(".about__img,.recipe__img,.contact__image", { origin: "left" });
sr.reveal(".products__card", { interval: 100 });
