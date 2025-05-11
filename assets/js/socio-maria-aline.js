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
    "maria-aline": {
      name: "Maria Aline",
      position: "Arquiteta",
      image: "../../assets/midia/socio/maria-aline.jpg",
      bio: [
        "Maria Aline é a Diretora de Arquitetura da Construtora, com formação em Arquitetura e Urbanismo pela Universidade Federal do Rio de Janeiro (UFRJ) e mestrado em Arquitetura Sustentável pela Universidade de Barcelona.",
        "Com mais de 15 anos de experiência, Ana é reconhecida internacionalmente por seus projetos inovadores que combinam estética, funcionalidade e sustentabilidade. Seu trabalho já foi premiado em diversas mostras de arquitetura no Brasil e no exterior.",
        "Maria lidera uma equipe de arquitetos talentosos, incentivando a criatividade e a busca por soluções que atendam às necessidades dos clientes e respeitem o meio ambiente.",
      ],
      education: [
        "Arquitetura e Urbanismo - Universidade Federal do Rio de Janeiro (UFRJ)",
        "Mestrado em Arquitetura Sustentável - Universidade de Barcelona",
        "Especialização em Design de Interiores - Parsons School of Design (Nova York)",
      ],
      experience: [
        "Diretora de Arquitetura - Construtora (2010 - Presente)",
        "Arquiteta Sênior - Studio Internacional de Arquitetura (2005 - 2010)",
        "Arquiteta Júnior - Escritório Moderno Arquitetura (2001 - 2005)",
      ],
      projects: [
        "Museu de Arte Contemporânea - São Paulo",
        "Residencial Eco Vida - Florianópolis",
        "Centro Cultural Urbano - Rio de Janeiro",
        "Complexo Residencial Parque das Águas - Curitiba",
      ],
      email: "maria.aline@construtora.com.br",
      linkedin: "#",
      instagram: "#",
    }
  }

  // Get current member data
  const currentMember = teamMembers[memberParam] || teamMembers["maria-aline"]

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
