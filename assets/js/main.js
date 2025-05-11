// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    easing: "ease",
    once: true,
    offset: 100,
  })

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const mobileMenu = document.querySelector(".mobile-menu")

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      this.classList.toggle("active")
      mobileMenu.classList.toggle("active")

      // Toggle hamburger menu animation
      const spans = this.querySelectorAll("span")
      if (this.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
        spans[1].style.opacity = "0"
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)"
      } else {
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      }
    })
  }

  // Header Scroll Effect
  const header = document.querySelector(".header")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.padding = "6px 0"
      header.style.backgroundColor = "rgba(13, 18, 36, 0.9);"
    } else {
      header.style.padding = "15px 0"
      header.style.backgroundColor = "rgba(13, 18, 36, 0.9);"
    }
  })

  // Initialize Hero Slider if it exists
  if (document.querySelector(".hero-slider")) {
    new Swiper(".hero-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })
  }

  // Animate Stats Counter
  const statNumbers = document.querySelectorAll(".stat-number")

  if (statNumbers.length > 0) {
    const animateStats = () => {
      statNumbers.forEach((stat) => {
        const target = Number.parseInt(stat.getAttribute("data-count"))
        const duration = 2000 // 2 seconds
        const startTime = Date.now()
        const startValue = 0

        const updateCounter = () => {
          const currentTime = Date.now()
          const progress = Math.min((currentTime - startTime) / duration, 1)
          const value = Math.floor(progress * (target - startValue) + startValue)

          stat.textContent = value

          if (progress < 1) {
            requestAnimationFrame(updateCounter)
          } else {
            stat.textContent = target
          }
        }

        updateCounter()
      })
    }

    // Use Intersection Observer to trigger animation when stats are visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(document.querySelector(".stats-grid"))
  }
})
