function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function login() {
    const email = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedUser = localStorage.getItem(email);
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
            alert('Login bem-sucedido!');
            localStorage.setItem('loggedInUser', JSON.stringify(user)); // Armazena o usuário logado
            document.getElementById('modal-title').innerText = `Bem-vindo, ${user.name}`;
            showLoggedInState(); // Atualiza a interface para o estado logado
            closeModal(); // Fecha o modal
        } else {
            alert('Senha incorreta!');
        }
    } else {
        alert('Usuário não encontrado!');
    }
}

function register() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (name && validateEmail(email) && password) {
        const user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem(email, JSON.stringify(user));
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'index.html'; // Redireciona para a página de login após o cadastro
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

function isUserEmail(email) {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        const user = JSON.parse(loggedInUser);
        return user.email === email;
    }
    return false;
}

function showLoggedInState() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        document.getElementById('modal-title').innerText = `Bem-vindo, ${loggedInUser.name}`;
        document.getElementById('login-username').style.display = 'none';
        document.getElementById('login-password').style.display = 'none';
        document.querySelector('.container-modal button[onclick="login()"]').style.display = 'none';
        document.querySelector('.container-modal a').style.display = 'none';
        document.getElementById('logout-button').style.display = 'block';
    }
}

if (window.location.pathname.includes("index.html")) {
    // Função para criar elementos de formulário no histórico
    function renderForm(formData) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <p><strong>E-mail:</strong> ${formData.nome}</p>
            <p><strong>Peso:</strong> ${formData.email}kg</p>
            <p><strong>Raça:</strong> ${formData.telefone}</p>
            <p><strong>Mensagem:</strong> ${formData.mensagem}</p>
        `;
        document.getElementById('form-history').appendChild(listItem);
    }

    // Adiciona o evento de envio de formulário
    document.getElementById('new-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const mensagem = document.getElementById('mensagem').value;

        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

        if (nome && email && telefone && mensagem) {
            // Verifica se o usuário está logado
            if (loggedInUser) {
                // Verifica se o e-mail pertence ao usuário logado
                if (isUserEmail(email)) {
                    const formData = {
                        nome: nome,
                        email: email,
                        telefone: telefone,
                        mensagem: mensagem,
                    };

                    // Obtém o histórico de formulários armazenado no Local Storage ou cria um array vazio se não existir
                    let formHistory = JSON.parse(localStorage.getItem('formHistory')) || [];

                    // Adiciona o novo formulário ao histórico
                    formHistory.push(formData);

                    // Atualiza o histórico de formulários no Local Storage
                    localStorage.setItem('formHistory', JSON.stringify(formHistory));

                    alert('Formulário enviado com sucesso!');
                    renderForm(formData); // Renderiza imediatamente no histórico
                } else {
                    alert('o campo e-mail precisa conter seu e-mail de cadastro!');
                }
            } else {
                alert('Você precisa estar logado para enviar uma mensagem!');
            }

            // Limpa os campos após enviar o formulário
            document.getElementById('nome').value = '';
            document.getElementById('email').value = '';
            document.getElementById('telefone').value = '';
            document.getElementById('mensagem').value = '';
        } else {
            alert('Por favor, preencha todos os campos antes de enviar o formulário.');
        }
    });

    // Função para exibir os formulários existentes no histórico ao carregar a página
    window.addEventListener('load', function() {
        let formHistory = JSON.parse(localStorage.getItem('formHistory')) || [];
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

        if (loggedInUser) {
            // Filtra o histórico para exibir apenas os formulários do usuário logado
            formHistory = formHistory.filter(formData => formData.email === loggedInUser.email);
            formHistory.forEach(renderForm);
        } 
    });
}

// Função para abrir o modal
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Evento para abrir o modal ao clicar no botão de login
document.getElementById('openModalBtn').addEventListener('click', openModal);

// Evento para fechar o modal ao clicar no 'X'
document.querySelector('.close').addEventListener('click', closeModal);

// Adiciona o evento de logout ao botão
document.getElementById('logout-button').addEventListener('click', function() {
    localStorage.removeItem('loggedInUser'); // Remove o usuário logado do localStorage
    alert('Você saiu com sucesso!');
    window.location.href = 'index.html'; // Redireciona para a página inicial após o logout
});

// Verifica o estado de login ao carregar a página
window.addEventListener('load', function() {
    if (localStorage.getItem('loggedInUser')) {
        showLoggedInState();
    }
});