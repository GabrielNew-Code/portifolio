document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: "ease",
    once: true,
    offset: 100,
  })

  // Get member parameter from URL
  const urlParams = new URLSearchParams(window.location.search)
  const memberParam = urlParams.get("member")

  // Team members data
  const teamMembers = {
    "andre-silveira": {
      name: "André Silveira",
      position: "Engenheiro Civil",
      image: "../../assets/midia/socio/andre-silveira.jpg",
      bio: [
        "André Silveira é o Diretor Executivo da Construtora, com mais de 25 anos de experiência no setor de construção civil. Formado em Engenharia Civil pela Universidade de São Paulo (USP), com MBA em Gestão Empresarial pela Fundação Getúlio Vargas (FGV).",
        "Sob sua liderança, a empresa expandiu suas operações para todo o território nacional, consolidando-se como uma das principais construtoras do país. João é reconhecido por sua visão estratégica e capacidade de identificar oportunidades de negócios inovadores.",
        "Sua filosofia de trabalho é baseada na excelência técnica, ética nos negócios e compromisso com a satisfação do cliente, valores que permeiam toda a cultura organizacional da empresa.",
      ],
      education: [
        "Engenharia Civil - Universidade de São Paulo (USP)",
        "MBA em Gestão Empresarial - Fundação Getúlio Vargas (FGV)",
        "Especialização em Gestão de Projetos - PMI",
      ],
      experience: [
        "Diretor Executivo - Construtora (2005 - Presente)",
        "Diretor de Operações - Grupo Construtor Nacional (1998 - 2005)",
        "Gerente de Projetos - Engenharia Técnica S.A. (1992 - 1998)",
      ],
      projects: [
        "Complexo Empresarial Paulista - São Paulo",
        "Residencial Alto Padrão Jardins - Rio de Janeiro",
        "Centro Comercial Horizonte - Belo Horizonte",
        "Edifício Corporativo Inovação - Brasília",
      ],
      email: "andre.silveira@construtora.com.br",
      linkedin: "#",
      instagram: "#",
    }
  }

  // Get current member data
  const currentMember = teamMembers[memberParam] || teamMembers["andre-silveira"]

  // Update page title
  document.title = `${currentMember.name} | Ideprol`

  // Update header content
  document.getElementById("member-header-content").innerHTML = `
        <h1 data-aos="fade-up">${currentMember.name}</h1>
        <p data-aos="fade-up" data-aos-delay="100">${currentMember.position}</p>
    `

  // Update member details
  document.getElementById("member-image").src = currentMember.image
  document.getElementById("member-image").alt = currentMember.name
  document.getElementById("member-name").textContent = currentMember.name
  document.getElementById("member-position").textContent = currentMember.position

  // Update bio
  const bioContainer = document.getElementById("member-bio")
  bioContainer.innerHTML = ""
  currentMember.bio.forEach((paragraph) => {
    const p = document.createElement("p")
    p.textContent = paragraph
    bioContainer.appendChild(p)
  })

  // Update education
  const educationList = document.getElementById("member-education")
  educationList.innerHTML = ""
  currentMember.education.forEach((item) => {
    const li = document.createElement("li")
    li.textContent = item
    educationList.appendChild(li)
  })

  // Update experience
  const experienceList = document.getElementById("member-experience")
  experienceList.innerHTML = ""
  currentMember.experience.forEach((item) => {
    const li = document.createElement("li")
    li.textContent = item
    experienceList.appendChild(li)
  })

  // Update projects
  const projectsList = document.getElementById("member-projects")
  projectsList.innerHTML = ""
  currentMember.projects.forEach((item) => {
    const li = document.createElement("li")
    li.textContent = item
    projectsList.appendChild(li)
  })

  // Update contact info
  document.getElementById("member-email").querySelector("span").textContent = currentMember.email
  document.getElementById("member-linkedin").href = currentMember.linkedin
  document.getElementById("member-instagram").href = currentMember.instagram

  // Generate related members
  const relatedMembersContainer = document.getElementById("related-members")
  relatedMembersContainer.innerHTML = ""

  // Get other members (excluding current one)
  const otherMembers = Object.keys(teamMembers).filter((key) => key !== memberParam)

  // Display up to 3 related members
  otherMembers.slice(0, 3).forEach((memberKey) => {
    const member = teamMembers[memberKey]
    const memberElement = document.createElement("a")
    memberElement.href = `team-member.html?member=${memberKey}`
    memberElement.className = "team-member"
    memberElement.setAttribute("data-aos", "fade-up")

    memberElement.innerHTML = `
            <div class="member-img">
                <img src="${member.image}" alt="${member.name}">
            </div>
            <div class="member-info">
                <h3>${member.name}</h3>
                <p class="member-position">${member.position}</p>
                <p class="member-bio">${member.bio[0].substring(0, 100)}...</p>
            </div>
        `

    relatedMembersContainer.appendChild(memberElement)
  })
})
