function cadastrar() {
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var telefone = document.getElementById('telefone').value;
  var mensagem = document.getElementById('mensagem').value;

  if (nome === "" || nome.length < 4) {
      alert("Preencha o nome corretamente!");
      document.getElementById('nome').focus();
      return;
  }

  if (email === "") {
      alert("Preencha o email corretamente!");
      document.getElementById('email').focus();
      return;
  }

  if (telefone === "" || telefone.length < 11) {
      alert("Preencha o telefone corretamente!");
      document.getElementById('telefone').focus();
      return;
  }

  var dados = {
      nome: nome,
      email: email,
      telefone: telefone,
      mensagem: mensagem
  };

  localStorage.setItem('formularioContato', JSON.stringify(dados));
  alert('Mensagem enviada com sucesso!');

  // Limpar o formulário após salvar
  document.getElementById('formulario').reset();
}