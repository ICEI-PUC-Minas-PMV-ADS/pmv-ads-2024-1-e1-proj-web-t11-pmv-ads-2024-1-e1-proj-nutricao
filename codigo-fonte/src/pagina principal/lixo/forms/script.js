function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedUser = localStorage.getItem(username);
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
            alert('Login bem-sucedido!');
            localStorage.setItem('loggedInUser', JSON.stringify(user)); // Armazena o usuário logado
            window.location.href = 'dashboard.html'; // Redireciona para a página do usuário após o login
        } else {
            alert('Senha incorreta!');
        }
    } else {
        alert('Usuário não encontrado!');
    }
}

function register() {
    const email = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (validateEmail(email) && password) {
        const user = {
            email: email,
            password: password
        };

        localStorage.setItem(email, JSON.stringify(user));
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'login.html'; // Redireciona para a página de login após o cadastro
    } else {
        alert('Por favor, preencha um e-mail válido e a senha.');
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

if (window.location.pathname.includes("dashboard.html")) {
    // Função para criar elementos de formulário no histórico
    function renderForm(formData) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <p><strong>E-mail:</strong> ${formData.email}</p>
            <p><strong>Peso:</strong> ${formData.weight}kg</p>
            <p><strong>Raça:</strong> ${formData.breed}</p>
            <p><strong>Mensagem:</strong> ${formData.message}</p>
        `;
        document.getElementById('form-history').appendChild(listItem);
    }

    // Adiciona o evento de envio de formulário
    document.getElementById('new-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('form-email').value;
        const weight = document.getElementById('form-weight').value;
        const breed = document.getElementById('form-breed').value;
        const message = document.getElementById('form-message').value;

        if (email && weight && breed && message) {
            // Verifica se o e-mail pertence ao usuário logado
            if (isUserEmail(email)) {
                const formData = {
                    email: email,
                    weight: weight,
                    breed: breed,
                    message: message
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
                alert('Você só pode enviar formulários com o seu e-mail de login.');
            }

            // Limpa os campos após enviar o formulário
            document.getElementById('form-email').value = '';
            document.getElementById('form-weight').value = '';
            document.getElementById('form-breed').value = '';
            document.getElementById('form-message').value = '';
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
        } else {
            alert('Nenhum usuário logado encontrado. Por favor, faça login.');
            window.location.href = 'login.html'; // Redireciona para a página de login
        }
    });
}



// Adiciona o evento de logout ao botão
document.getElementById('logout-button').addEventListener('click', function() {
    localStorage.removeItem('loggedInUser'); // Remove o usuário logado do localStorage
    alert('Você saiu com sucesso!');
    window.location.href = 'login.html'; // Redireciona para a página de login após o logout
});