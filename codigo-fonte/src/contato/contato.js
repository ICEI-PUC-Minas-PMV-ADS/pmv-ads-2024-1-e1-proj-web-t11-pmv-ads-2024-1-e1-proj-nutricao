function cadastrar() {}

    if (nome.value == "" || nome.value.length < 4) {
      alert("Preencha o formulário corretamente!");
      nome.focus();
      return;
    }
    if (email.value == "") {
      alert("Preencha o formulário corretamente!");
      email.focus();
      return;
    }
    if (telefone.value == "" || telefone.value.length < 11) {
      alert("Preencha o formulário corretamente!");
      telefone.focus();
      return;
    }
    