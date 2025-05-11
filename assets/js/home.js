import Swiper from "swiper/bundle"
import "swiper/css/bundle"

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar o slider de depoimentos
  const testimonialsSlider = new Swiper(".testimonials-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // quando a largura da janela é < 576px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // quando a largura da janela é >= 576px
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // quando a largura da janela é >= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  })
})
