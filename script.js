const pessoas = [
    {
      nomeCompleto: "Ana Beatriz Oliveira",
      dataNascimento: "2008/05/12",
      idade: 16,
      telefone: "(11) 98765-4321",
      colegio: "Colégio Estadual de São Paulo",
      sala: "7A",
      src:""
    },
    {
      nomeCompleto: "Lucas Mendes Silva",
      dataNascimento: "2009/03/25",
      idade: 15,
      telefone: "(21) 97654-3210",
      colegio: "Escola Municipal do Rio",
      sala: "8B",
      src:""
    },
    {
      nomeCompleto: "Mariana Pereira Santos",
      dataNascimento: "2010/07/10",
      idade: 14,
      telefone: "(31) 99876-5432",
      colegio: "Colégio Monte Alto",
      sala: "6C",
      src:""
    },
    {
      nomeCompleto: "João Gabriel Costa",
      dataNascimento: "2007/11/02",
      idade: 17,
      telefone: "(41) 91234-5678",
      colegio: "Escola Estadual Curitiba",
      sala: "9A",
      src:""
    },
    {
      nomeCompleto: "Sofia Martins Lima",
      dataNascimento: "2011/01/15",
      idade: 13,
      telefone: "(51) 98765-1234",
      colegio: "Escola Municipal Porto Alegre",
      sala: "5B",
      src:""
    },
    {
      nomeCompleto: "Felipe Almeida Rocha",
      dataNascimento: "2009/09/30",
      idade: 15,
      telefone: "(61) 97654-9876",
      colegio: "Colégio Brasília Centro",
      sala: "8C",
      src:""
    },
    {
      nomeCompleto: "Isabela Souza Nogueira",
      dataNascimento: "2008/12/18",
      idade: 16,
      telefone: "(71) 99876-1234",
      colegio: "Escola Estadual Salvador",
      sala: "7B",
      src:""
    },
    {
      nomeCompleto: "Ana Beatriz Oliveira",
      dataNascimento: "2008/05/12",
      idade: 16,
      telefone: "(11) 98765-4321",
      colegio: "Colégio Estadual de São Paulo",
      sala: "7A",
      src:""
    },
    {
      nomeCompleto: "Lucas Mendes Silva",
      dataNascimento: "2009/03/25",
      idade: 15,
      telefone: "(21) 97654-3210",
      colegio: "Escola Municipal do Rio",
      sala: "8B",
      src:""
    },
    {
      nomeCompleto: "Mariana Pereira Santos",
      dataNascimento: "2010/07/10",
      idade: 14,
      telefone: "(31) 99876-5432",
      colegio: "Colégio Monte Alto",
      sala: "6C",
      src:""
    },
    {
      nomeCompleto: "João Gabriel Costa",
      dataNascimento: "2007/11/02",
      idade: 17,
      telefone: "(41) 91234-5678",
      colegio: "Escola Estadual Curitiba",
      sala: "9A",
      src:""
    },
    {
      nomeCompleto: "Sofia Martins Lima",
      dataNascimento: "2011/01/15",
      idade: 13,
      telefone: "(51) 98765-1234",
      colegio: "Escola Municipal Porto Alegre",
      sala: "5B",
      src:""
    },
    {
      nomeCompleto: "Felipe Almeida Rocha",
      dataNascimento: "2009/09/30",
      idade: 15,
      telefone: "(61) 97654-9876",
      colegio: "Colégio Brasília Centro",
      sala: "8C",
      src:""
    },
    {
      nomeCompleto: "Isabela Souza Nogueira",
      dataNascimento: "2008/12/18",
      idade: 16,
      telefone: "(71) 99876-1234",
      colegio: "Escola Estadual Salvador",
      sala: "7B",
      src:""
    }
  ];
  const name = document.querySelector(".name")
  const birthday = document.querySelector(".birthday")
  const tel = document.querySelector(".tel")
  const college = document.querySelector(".college")
  const list = document.querySelector(".list")
  const searchName = document.querySelector(".search").value.trim()
  const buttonShowAll = document.querySelector("#showall")
  let myli = ``
  pessoas.forEach(Element =>{
    myli = myli + `
    <li class="element-list">
                <img src="./img/defaultImage.webp" class="foto">
                <div class="infos">
                    <h3 class="name">${Element.nomeCompleto}</h3>
                    <p type="birthday" class="birthday">${Element.dataNascimento} idade = ${Element.idade}</p>
                    <p type="tel" class="tel">${Element.telefone}</p>
                    <p class="college">${Element.colegio}</p>
                    <button class="more">...</button>
                </div>
            </li>
    `
    list.innerHTML = myli
  });
  console.log(searchName.value)
  
  if(searchName != "") {
    buttonShowAll.style.display("block")
  }


  function searchPerson() {
   
    pessoas.forEach(pessoa =>{
        if (name === pessoa.nomeCompleto) {
            list.innerHTML = myli = `
    <li class="element-list">
                <img src="./img/defaultImage.webp" class="foto">
                <div class="infos">
                    <h3 class="name">${pessoa.nomeCompleto}</h3>
                    <p type="birthday" class="birthday">${pessoa.dataNascimento} idade = ${pessoa.idade}</p>
                    <p type="tel" class="tel">${pessoa.telefone}</p>
                    <p class="college">${pessoa.colegio}</p>
                    <button class="more">...</button>
                </div>
            </li>
    `;
        } else {
            
        }
    })
  }