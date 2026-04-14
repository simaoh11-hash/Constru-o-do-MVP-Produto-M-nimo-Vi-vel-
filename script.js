// PROJETOS (MVP obrigatório da atividade)
const projetos = [
  {
    nome: "Portfólio Pessoal",
    descricao: "Meu primeiro portfólio com HTML, CSS e JS."
  },
  {
    nome: "Landing Page",
    descricao: "Página simples responsiva de apresentação."
  },
  {
    nome: "Lista de Tarefas",
    descricao: "App básico de organização de tarefas."
  }
];

// Renderizar projetos
const lista = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
  `;

  lista.appendChild(card);
});

// MODO CLARO / ESCURO
const btnTema = document.createElement("button");
btnTema.textContent = "🌗 Mudar tema";
document.querySelector("nav").appendChild(btnTema);

btnTema.addEventListener("click", () => {
  const atual = document.documentElement.getAttribute("data-theme");

  if (atual === "dark") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
});
