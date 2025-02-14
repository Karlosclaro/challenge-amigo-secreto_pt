//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// app.js
let amigos = [];

function adicionarAmigo() {
  const nomeAmigo = document.getElementById("amigo").value;

  if (nomeAmigo.trim() === "") {
    alert("Por favor, digite um nome válido.");
    return;
  }

  amigos.push(nomeAmigo);
  atualizarListaAmigos();
  document.getElementById("amigo").value = ""; // Limpar o campo de entrada
}

function atualizarListaAmigos() {
  const listaAmigosElement = document.getElementById("listaAmigos");
  listaAmigosElement.innerHTML = ""; // Limpar a lista

  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigosElement.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
  }

  const amigoSorteadoIndex = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[amigoSorteadoIndex];
  const resultadoTexto = document.getElementById("resultadoTexto");
  resultadoTexto.textContent = `O amigo sorteado foi: ${amigoSorteado}`;
  
}
