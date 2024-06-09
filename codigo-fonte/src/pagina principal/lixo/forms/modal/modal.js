// Obtém o modal
const modal = document.getElementById("myModal");

// Obtém o botão que abre o modal
const openModalBtn = document.getElementById("openModalBtn");

// Obtém o botão dentro do modal para abrir a página
const openPageBtn = document.getElementById("openPageBtn");

// Obtém o elemento <span> que fecha o modal
const span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, o modal é exibido
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clicar no <span> (x) ou fora do modal, o modal é oculto
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Quando o usuário clicar no botão para abrir a página, a página é aberta na mesma guia
openPageBtn.onclick = function() {
  window.location.href = "modal2.html"; 
}