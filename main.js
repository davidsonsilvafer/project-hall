const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

/*quando clicar no item do menu, esconder o menu */

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

function changeHeaderWhenScroll() {
  const header = document.querySelector("#header");
  const navHeight = header.offsetHeight;

  if (this.window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

/*testimonial swiper carousel slider */
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

/*scrollReveal: mostrar elementos quando der scroll na pagina*/
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links
  footer .brand, footer .social 
  `,
  { interval: 100 }
);

/*Botão voltar para o topo*/
const backToTopButton = document.querySelector(".back-to-top");

function backToTop() {
  const backToTopButton = document.querySelector(".back-to-top");

  if (this.window.scrollY >= 900) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

window.addEventListener("scroll", function () {
  changeHeaderWhenScroll();
  backToTop();
});
