document.addEventListener("DOMContentLoaded", () => {
  // Contact Form Validation
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form fields
      const nameInput = document.getElementById("name")
      const emailInput = document.getElementById("email")
      const phoneInput = document.getElementById("phone")
      const messageInput = document.getElementById("message")

      // Get feedback elements
      const nameFeedback = nameInput.nextElementSibling
      const emailFeedback = emailInput.nextElementSibling
      const phoneFeedback = phoneInput.nextElementSibling
      const messageFeedback = messageInput.nextElementSibling

      // Reset feedback
      nameFeedback.textContent = ""
      nameFeedback.className = "form-feedback"
      emailFeedback.textContent = ""
      emailFeedback.className = "form-feedback"
      phoneFeedback.textContent = ""
      phoneFeedback.className = "form-feedback"
      messageFeedback.textContent = ""
      messageFeedback.className = "form-feedback"

      // Validate name
      if (nameInput.value.trim() === "") {
        nameFeedback.textContent = "Por favor, informe seu nome"
        nameFeedback.className = "form-feedback error"
        nameInput.focus()
        return false
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(emailInput.value.trim())) {
        emailFeedback.textContent = "Por favor, informe um e-mail válido"
        emailFeedback.className = "form-feedback error"
        emailInput.focus()
        return false
      }

      // Validate phone
      const phoneRegex = /^[0-9\s\-$$$$]+$/
      if (!phoneRegex.test(phoneInput.value.trim())) {
        phoneFeedback.textContent = "Por favor, informe um telefone válido"
        phoneFeedback.className = "form-feedback error"
        phoneInput.focus()
        return false
      }

      // Validate message
      if (messageInput.value.trim() === "") {
        messageFeedback.textContent = "Por favor, escreva sua mensagem"
        messageFeedback.className = "form-feedback error"
        messageInput.focus()
        return false
      }

      // If all validations pass, show success message
      contactForm.innerHTML = `
                <div class="form-success">
                    <div class="success-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3>Mensagem Enviada com Sucesso!</h3>
                    <p>Obrigado por entrar em contato. Retornaremos em breve.</p>
                </div>
            `

      // Add success styles
      const style = document.createElement("style")
      style.textContent = `
                .form-success {
                    text-align: center;
                    padding: 30px;
                }
                
                .success-icon {
                    font-size: 60px;
                    color: #4dff4d;
                    margin-bottom: 20px;
                }
                
                .form-success h3 {
                    font-size: 24px;
                    margin-bottom: 15px;
                }
                
                .form-success p {
                    color: var(--color-gray-light);
                }
            `
      document.head.appendChild(style)

      // In a real application, you would send the form data to a server here
      return false
    })

    // Real-time validation feedback
    const inputs = contactForm.querySelectorAll("input, textarea")

    inputs.forEach((input) => {
      input.addEventListener("blur", function () {
        const feedback = this.nextElementSibling

        // Validate based on input type
        if (this.id === "name" && this.value.trim() === "") {
          feedback.textContent = "Por favor, informe seu nome"
          feedback.className = "form-feedback error"
        } else if (this.id === "email") {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(this.value.trim())) {
            feedback.textContent = "Por favor, informe um e-mail válido"
            feedback.className = "form-feedback error"
          } else {
            feedback.textContent = ""
            feedback.className = "form-feedback"
          }
        } else if (this.id === "phone") {
          const phoneRegex = /^[0-9\s\-$$$$]+$/
          if (!phoneRegex.test(this.value.trim())) {
            feedback.textContent = "Por favor, informe um telefone válido"
            feedback.className = "form-feedback error"
          } else {
            feedback.textContent = ""
            feedback.className = "form-feedback"
          }
        } else if (this.id === "message" && this.value.trim() === "") {
          feedback.textContent = "Por favor, escreva sua mensagem"
          feedback.className = "form-feedback error"
        } else {
          feedback.textContent = ""
          feedback.className = "form-feedback"
        }
      })

      // Clear error on input
      input.addEventListener("input", function () {
        const feedback = this.nextElementSibling
        feedback.textContent = ""
        feedback.className = "form-feedback"
      })
    })
  }
})
