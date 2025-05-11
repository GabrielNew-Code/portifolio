document.addEventListener("DOMContentLoaded", () => {
  // Project Tabs Functionality
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabPanes = document.querySelectorAll(".tab-pane")

  if (tabButtons.length > 0 && tabPanes.length > 0) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons and panes
        tabButtons.forEach((btn) => btn.classList.remove("active"))
        tabPanes.forEach((pane) => pane.classList.remove("active"))

        // Add active class to clicked button
        this.classList.add("active")

        // Show corresponding tab pane
        const tabId = this.getAttribute("data-tab")
        document.getElementById(tabId).classList.add("active")
      })
    })
  }

  // Gallery Image Lightbox (simple version)
  const galleryItems = document.querySelectorAll(".gallery-item img")

  if (galleryItems.length > 0) {
    galleryItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Create lightbox elements
        const lightbox = document.createElement("div")
        lightbox.className = "lightbox"

        const lightboxContent = document.createElement("div")
        lightboxContent.className = "lightbox-content"

        const lightboxImg = document.createElement("img")
        lightboxImg.src = this.src

        const closeBtn = document.createElement("span")
        closeBtn.className = "lightbox-close"
        closeBtn.innerHTML = "&times;"

        // Append elements
        lightboxContent.appendChild(lightboxImg)
        lightboxContent.appendChild(closeBtn)
        lightbox.appendChild(lightboxContent)
        document.body.appendChild(lightbox)

        // Prevent scrolling
        document.body.style.overflow = "hidden"

        // Close lightbox on click
        lightbox.addEventListener("click", () => {
          document.body.removeChild(lightbox)
          document.body.style.overflow = "auto"
        })

        // Prevent propagation
        lightboxContent.addEventListener("click", (e) => {
          e.stopPropagation()
        })

        // Close button
        closeBtn.addEventListener("click", () => {
          document.body.removeChild(lightbox)
          document.body.style.overflow = "auto"
        })
      })
    })

    // Add lightbox styles
    const style = document.createElement("style")
    style.textContent = `
            .lightbox {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
            }
            
            .lightbox-content {
                position: relative;
                max-width: 90%;
                max-height: 90%;
            }
            
            .lightbox-content img {
                max-width: 100%;
                max-height: 90vh;
                display: block;
                margin: 0 auto;
            }
            
            .lightbox-close {
                position: absolute;
                top: -40px;
                right: 0;
                font-size: 30px;
                color: white;
                cursor: pointer;
            }
        `
    document.head.appendChild(style)
  }
})
