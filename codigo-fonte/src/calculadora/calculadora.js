document.getElementById('pet-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtendo os valores dos campos
    const porte = document.getElementById('porte').value;
    const raca = document.getElementById('raca').value;
    const peso = parseFloat(document.getElementById('peso').value);

    // Parâmetros de cálculo (exemplo)
    let factorPorte = 0;
    let factorRaca = 0;

    // Definindo os fatores de acordo com o porte
    switch (porte) {
        case 'miniatura':
            factorPorte = 0.07;
            break;
            case 'miniatura2':
            factorPorte = 0.06;
            break;
        case 'pequeno':
            factorPorte = 0.045;
            break;
        case 'medio':
            factorPorte = 0.04;
            break;
         case 'grande':
            factorPorte = 0.04;
            break;
        case 'grande2':
            factorPorte = 0.035;
            break;
        case 'gigante':
            factorPorte = 0.03;
            break;
    }

    // Definindo os fatores de acordo com a raça
    switch (raca) {
        case 'normais':
            factorRaca = 1.0;
            break;
        case 'tendencia_peso':
            factorRaca = 1.2;
            break;
        case 'dificuldade_peso':
            factorRaca = 0.8;
            break;
    }

    // Cálculo: quantidade diária de alimento (em gramas)
    const quantidadeAlimento = peso * factorPorte * factorRaca * 1000;

    // Distribuição dos tipos de alimentos
    const quantidadeOssosCarnudos = quantidadeAlimento * 0.5;
    const quantidadeCarnes = quantidadeAlimento * 0.25;
    const quantidadeVegetais = quantidadeAlimento * 0.15;
    const quantidadeVisceras = quantidadeAlimento * 0.1;

    // Exibindo o resultado
    document.getElementById('resultado').innerText = `
        Quantidade de ossos carnudos: ${quantidadeOssosCarnudos.toFixed(2)} gramas\n
        Quantidade de carnes: ${quantidadeCarnes.toFixed(2)} gramas\n
        Quantidade de vegetais: ${quantidadeVegetais.toFixed(2)} gramas\n
        Quantidade de vísceras: ${quantidadeVisceras.toFixed(2)} gramas
    `;
});
