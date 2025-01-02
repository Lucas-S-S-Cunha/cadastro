const pessoas = [
  {
    nomeCompleto: "Ana Beatriz Oliveira",
    dataNascimento: "2008/05/12",
    idade: 16,
    telefone: "(11) 98765-4321",
    colegio: "Colégio Estadual de São Paulo",
    sala: "7A",
    src: "ProfileImages/defaultImage.webp",
    id: 1,
    email: "ana.oliveira@email.com",
    endereco: "Rua das Acácias, 123, São Paulo, SP, 01000-000"
  },
  {
    nomeCompleto: "Lucas Mendes Silva",
    dataNascimento: "2009/03/25",
    idade: 15,
    telefone: "(21) 97654-3210",
    colegio: "Escola Municipal do Rio",
    sala: "8B",
    src: "ProfileImages/defaultImage.webp",
    id: 2,
    email: "lucas.silva@email.com",
    endereco: "Rua Rio Branco, 456, Rio de Janeiro, RJ, 20010-000"
  },
  {
    nomeCompleto: "Mariana Pereira Santos",
    dataNascimento: "2010/07/10",
    idade: 14,
    telefone: "(31) 99876-5432",
    colegio: "Colégio Monte Alto",
    sala: "6C",
    src: "ProfileImages/defaultImage.webp",
    id: 3,
    email: "mariana.santos@email.com",
    endereco: "Rua das Flores, 789, Belo Horizonte, MG, 30150-100"
  },
  {
    nomeCompleto: "João Gabriel Costa",
    dataNascimento: "2007/11/02",
    idade: 17,
    telefone: "(41) 91234-5678",
    colegio: "Escola Estadual Curitiba",
    sala: "9A",
    src: "ProfileImages/defaultImage.webp",
    id: 4,
    email: "joao.costa@email.com",
    endereco: "Avenida Paraná, 1010, Curitiba, PR, 80020-200"
  },
  {
    nomeCompleto: "Sofia Martins Lima",
    dataNascimento: "2011/01/15",
    idade: 13,
    telefone: "(51) 98765-1234",
    colegio: "Escola Municipal Porto Alegre",
    sala: "5B",
    src: "ProfileImages/defaultImage.webp",
    id: 5,
    email: "sofia.lima@email.com",
    endereco: "Rua das Palmeiras, 2020, Porto Alegre, RS, 90030-100"
  },
  {
    nomeCompleto: "Felipe Almeida Rocha",
    dataNascimento: "2009/09/30",
    idade: 15,
    telefone: "(61) 97654-9876",
    colegio: "Colégio Brasília Centro",
    sala: "8C",
    src: "ProfileImages/defaultImage.webp",
    id: 6,
    email: "felipe.rocha@email.com",
    endereco: "Rua do Sol, 3030, Brasília, DF, 70030-200"
  },
  {
    nomeCompleto: "Isabela Souza Nogueira",
    dataNascimento: "2008/12/18",
    idade: 16,
    telefone: "(71) 99876-1234",
    colegio: "Escola Estadual Salvador",
    sala: "7B",
    src: "ProfileImages/defaultImage.webp",
    id: 7,
    email: "isabela.souza@email.com",
    endereco: "Rua das Acácias, 4040, Salvador, BA, 40040-300"
  },
  {
    nomeCompleto: "Ana Beatriz Oliveira",
    dataNascimento: "2008/05/12",
    idade: 16,
    telefone: "(11) 98765-4321",
    colegio: "Colégio Estadual de São Paulo",
    sala: "7A",
    src: "ProfileImages/defaultImage.webp",
    id: 8,
    email: "ana.oliveira@email.com",
    endereco: "Rua das Acácias, 123, São Paulo, SP, 01000-000"
  },
  {
    nomeCompleto: "Lucas Mendes Silva",
    dataNascimento: "2009/03/25",
    idade: 15,
    telefone: "(21) 97654-3210",
    colegio: "Escola Municipal do Rio",
    sala: "8B",
    src: "ProfileImages/defaultImage.webp",
    id: 9,
    email: "lucas.silva@email.com",
    endereco: "Rua Rio Branco, 456, Rio de Janeiro, RJ, 20010-000"
  },
  {
    nomeCompleto: "Mariana Pereira Santos",
    dataNascimento: "2010/07/10",
    idade: 14,
    telefone: "(31) 99876-5432",
    colegio: "Colégio Monte Alto",
    sala: "6C",
    src: "ProfileImages/defaultImage.webp",
    id: 10,
    email: "mariana.santos@email.com",
    endereco: "Rua das Flores, 789, Belo Horizonte, MG, 30150-100"
  },
  {
    nomeCompleto: "João Gabriel Costa",
    dataNascimento: "2007/11/02",
    idade: 17,
    telefone: "(41) 91234-5678",
    colegio: "Escola Estadual Curitiba",
    sala: "9A",
    src: "ProfileImages/defaultImage.webp",
    id: 11,
    email: "joao.costa@email.com",
    endereco: "Avenida Paraná, 1010, Curitiba, PR, 80020-200"
  },
  {
    nomeCompleto: "Sofia Martins Lima",
    dataNascimento: "2011/01/15",
    idade: 13,
    telefone: "(51) 98765-1234",
    colegio: "Escola Municipal Porto Alegre",
    sala: "5B",
    src: "ProfileImages/defaultImage.webp",
    id: 12,
    email: "sofia.lima@email.com",
    endereco: "Rua das Palmeiras, 2020, Porto Alegre, RS, 90030-100"
  },
  {
    nomeCompleto: "Felipe Almeida Rocha",
    dataNascimento: "2009/09/30",
    idade: 15,
    telefone: "(61) 97654-9876",
    colegio: "Colégio Brasília Centro",
    sala: "8C",
    src: "ProfileImages/defaultImage.webp",
    id: 13,
    email: "felipe.rocha@email.com",
    endereco: "Rua do Sol, 3030, Brasília, DF, 70030-200"
  },
  {
    nomeCompleto: "Isabela Souza Nogueira",
    dataNascimento: "2008/12/18",
    idade: 16,
    telefone: "(71) 99876-1234",
    colegio: "Escola Estadual Salvador",
    sala: "7B",
    src: "ProfileImages/defaultImage.webp",
    id: 14,
    email: "isabela.souza@email.com",
    endereco: "Rua das Acácias, 4040, Salvador, BA, 40040-300"
  }
];

  const list = document.querySelector(".list")
  const moreAbout = document.querySelector("form")
  const mask = document.querySelector(".mask")
  const buttonShowAll = document.querySelector("#showall")
  let myli = ``
  pessoas.forEach(Element =>{
    myli = myli + `
    <li class="element-list">
                <img src="./ProfileImages/defaultImage.webp" class="foto">
                <div class="infos">
                    <h3 class="name">${Element.nomeCompleto}</h3>
                    <p type="birthday" class="birthday">${Element.dataNascimento} idade = ${Element.idade}</p>
                    <p type="tel" class="tel">${Element.telefone}</p>
                    <p class="college">${Element.colegio}</p>
                    <button onclick="showMore(); FormUpdate(${Element.id})" class="more">...</button>
                </div>
            </li>
    `
    
    list.innerHTML = myli
  });

  const formImage = document.querySelector("#form-image")
  const formName = document.querySelector("#form-name")
  const formId= document.querySelector("#form-id")
  const formBirthday = document.querySelector("#form-birthday")
  const formAge = document.querySelector("#form-age")
  const formSchool = document.querySelector("#form-school")
  const formRoom = document.querySelector("#form-room")
  const formAdress = document.querySelector("#form-adress")
  const formEmail = document.querySelector("#form-email")


  function FormUpdate(id) {
    pessoas.forEach(element => {
      
    if(id === element.id) {
      formImage.innerHTML = element.src
      formName.innerHTML = element.nomeCompleto
      formId.innerHTML = element.id
      formBirthday.innerHTML = element.dataNascimento
      formAge.innerHTML = element.idade
      formSchool.innerHTML = element.colegio
      formRoom.innerHTML = `Sala= ${element.sala}`
      formAdress.innerHTML = `Endereço= ${element.endereco}`
      formEmail.innerHTML = element.email



    } 
});
    
  }
  
  function showMore() {
    
    moreAbout.style.left = "30px"
    mask.style.display = "block"
  }
  function closeForm() {
    moreAbout.style.left = "-480px;"
    mask.style.display = "none"
  }



  function searchPerson() {
    const searchName = document.querySelector(".search").value.trim()
    pessoas.forEach(pessoa =>{

      const partes = pessoa.nomeCompleto.split(" ")
      

        if (searchName ===  partes[0] ) {
            console.log('iau') 
        }
        
    })
  }
  