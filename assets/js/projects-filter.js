document.addEventListener("DOMContentLoaded", () => {
  // Inicializar AOS
  AOS.init({
    duration: 800,
    easing: "ease",
    once: true,
    offset: 100,
  })

  // Elementos DOM
  const projectCards = document.querySelectorAll(".project-card")
  const filterTags = document.querySelectorAll(".filter-tag")
  const searchInput = document.getElementById("projectSearch")
  const searchBtn = document.getElementById("searchBtn")

  // Função para filtrar projetos por categoria
  const filterProjects = (filterValue) => {
    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category")

      if (filterValue === "all" || category === filterValue) {
        card.style.display = "block"

        // Adicionar animação
        setTimeout(() => {
          card.style.opacity = "1"
          card.style.transform = "translateY(0)"
        }, 100)
      } else {
        card.style.opacity = "0"
        card.style.transform = "translateY(20px)"

        setTimeout(() => {
          card.style.display = "none"
        }, 300)
      }
    })
  }

  // Função para pesquisar projetos
  const searchProjects = (searchTerm) => {
    searchTerm = searchTerm.toLowerCase().trim()

    projectCards.forEach((card) => {
      const title = card.querySelector(".project-info h3").textContent.toLowerCase()
      const location = card.querySelector(".project-info p").textContent.toLowerCase()
      const category = card.getAttribute("data-category").toLowerCase()
      const type = card.getAttribute("data-type").toLowerCase()

      if (
        title.includes(searchTerm) ||
        location.includes(searchTerm) ||
        category.includes(searchTerm) ||
        type.includes(searchTerm)
      ) {
        card.style.display = "block"

        // Adicionar animação
        setTimeout(() => {
          card.style.opacity = "1"
          card.style.transform = "translateY(0)"
        }, 100)
      } else {
        card.style.opacity = "0"
        card.style.transform = "translateY(20px)"

        setTimeout(() => {
          card.style.display = "none"
        }, 300)
      }
    })
  }

  // Event Listeners para os filtros
  filterTags.forEach((tag) => {
    tag.addEventListener("click", function () {
      // Remover classe active de todos os botões
      filterTags.forEach((btn) => btn.classList.remove("active"))

      // Adicionar classe active ao botão clicado
      this.classList.add("active")

      // Obter valor do filtro
      const filterValue = this.getAttribute("data-filter")

      // Filtrar projetos
      filterProjects(filterValue)

      // Limpar campo de pesquisa
      searchInput.value = ""
    })
  })

  // Event Listener para o botão de pesquisa
  searchBtn.addEventListener("click", () => {
    const searchTerm = searchInput.value
    searchProjects(searchTerm)

    // Remover classe active de todos os botões de filtro
    filterTags.forEach((btn) => btn.classList.remove("active"))
  })

  // Event Listener para pesquisa ao pressionar Enter
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const searchTerm = searchInput.value
      searchProjects(searchTerm)

      // Remover classe active de todos os botões de filtro
      filterTags.forEach((btn) => btn.classList.remove("active"))
    }
  })

  // Event Listener para limpar pesquisa quando o campo estiver vazio
  searchInput.addEventListener("input", () => {
    if (searchInput.value === "") {
      // Encontrar o filtro ativo
      const activeFilter = document.querySelector(".filter-tag.active")
      const filterValue = activeFilter ? activeFilter.getAttribute("data-filter") : "all"

      // Aplicar o filtro ativo
      filterProjects(filterValue)
    }
  })
})
