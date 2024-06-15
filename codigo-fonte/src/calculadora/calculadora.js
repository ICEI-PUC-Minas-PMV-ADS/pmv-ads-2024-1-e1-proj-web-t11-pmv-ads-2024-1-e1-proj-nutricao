document.getElementById('pet-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtendo os valores dos campos
    const porte = document.getElementById('porte').value;
    const raca = document.getElementById('raca').value;
    const peso = parseFloat(document.getElementById('peso').value);

    // Parâmetros de cálculo (exemplo)
    let fatorPorte = 0;
    let fatorRaca = 0;

    // Definindo os fatores de acordo com o porte
    switch (porte) {
        case 'miniatura':
            fatorPorte = 0.07;
            break;
            case 'miniatura2':
            fatorPorte = 0.06;
            break;
        case 'pequeno':
            fatorPorte = 0.045;
            break;
        case 'medio':
            fatorPorte = 0.04;
            break;
         case 'grande':
            fatorPorte = 0.04;
            break;
        case 'grande2':
            fatorPorte = 0.035;
            break;
        case 'gigante':
            fatorPorte = 0.03;
            break;
    }

    // Definindo os fatores de acordo com a raça
    switch (raca) {
        case 'normais':
            fatorRaca = 1.0;
            break;
        case 'tendencia_peso':
            fatorRaca = 0.8;
            break;
        case 'dificuldade_peso':
            fatorRaca = 1.1;
            break;
    }

    // Cálculo: quantidade diária de alimento (em gramas)
    const quantidadeAlimento = peso * fatorPorte * fatorRaca * 1000;

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
