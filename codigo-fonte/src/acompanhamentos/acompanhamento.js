// Função para gerar um ID de 5 números
function generateUniqueId() {
    return Math.floor(10000 + Math.random() * 90000).toString();
}












const nutrientData = {
"Abóbora cozida": {
    "Proteinas": 1.1,
    "Vitaminas": { "A": 2450, "C": 9, "E": 1.1 },
    "Minerais": { "Calcio": 22, "Ferro": 0.8, "Potassio": 230 },
    "Gorduras": 0.1,
    "Carboidratos": 6.5,
    "Fibras": 1.1,
    "Calorias": 26
},
"Abobrinha cozida": {
    "Proteinas": 1.2,
    "Vitaminas": { "A": 384, "C": 17, "K": 5.3 },
    "Minerais": { "Calcio": 16, "Ferro": 0.3, "Potassio": 280 },
    "Gorduras": 0.4,
    "Carboidratos": 7,
    "Fibras": 2.1,
    "Calorias": 27
},
"Arroz integral cozido": {
    "Proteinas": 2.6,
    "Vitaminas": { "B1": 0.1, "B3": 1.5, "B6": 0.1 },
    "Minerais": { "Magnésio": 44, "Fosforo": 83, "Zinco": 0.6 },
    "Gorduras": 0.9,
    "Carboidratos": 23,
    "Fibras": 1.8,
    "Calorias": 111
},
"Aveia cozida": {
    "Proteinas": 2.5,
    "Vitaminas": { "B1": 0.1, "B5": 0.1 },
    "Minerais": { "Ferro": 0.7, "Magnésio": 27, "Fosforo": 77 },
    "Gorduras": 1.4,
    "Carboidratos": 12,
    "Fibras": 1.7,
    "Calorias": 71
},
"Azeite de oliva": {
    "Proteinas": 0,
    "Vitaminas": { "E": 14.4, "K": 60.2 },
    "Minerais": { "Ferro": 0.6 },
    "Gorduras": 100,
    "Carboidratos": 0,
    "Fibras": 0,
    "Calorias": 884
},
"Batata cozida": {
    "Proteinas": 1.8,
    "Vitaminas": { "C": 12.5, "B6": 0.3 },
    "Minerais": { "Calcio": 8, "Ferro": 0.8, "Potassio": 379 },
    "Gorduras": 0.1,
    "Carboidratos": 20.1,
    "Fibras": 1.8,
    "Calorias": 87
},
"Batata-doce cozida": {
    "Proteinas": 1.6,
    "Vitaminas": { "A": 19218, "C": 2.4, "B6": 0.2 },
    "Minerais": { "Calcio": 17, "Fosforo": 30, "Potassio": 230 },
    "Gorduras": 0.1,
    "Carboidratos": 20,
    "Fibras": 3,
    "Calorias": 86
},
"Beterraba cozida": {
    "Proteinas": 1.7,
    "Vitaminas": { "A": 33, "C": 3.6, "Folate": 80 },
    "Minerais": { "Calcio": 16, "Ferro": 1.1, "Potassio": 305 },
    "Gorduras": 0.2,
    "Carboidratos": 13,
    "Fibras": 3.8,
    "Calorias": 59
},
"Óleo de coco": {
    "Proteinas": 0,
    "Vitaminas": { "E": 0.09, "K": 0.5 },
    "Minerais": { "Ferro": 0.04 },
    "Gorduras": 100,
    "Carboidratos": 0,
    "Fibras": 0,
    "Calorias": 862
},
"Espinafre cozido": {
    "Proteinas": 3,
    "Vitaminas": { "A": 9435, "C": 9.8, "K": 482.9 },
    "Minerais": { "Calcio": 136, "Ferro": 3.6, "Magnésio": 87 },
    "Gorduras": 0.5,
    "Carboidratos": 6.7,
    "Fibras": 2.4,
    "Calorias": 41
},
"Ossos moídos": {
    "Proteinas": 18,
    "Vitaminas": { "A": 0, "C": 0 },
    "Minerais": { "Calcio": 800, "Fosforo": 300 },
    "Gorduras": 5,
    "Carboidratos": 0,
    "Fibras": 0,
    "Calorias": 130
},
"Carne bovina magra cozida": {
    "Proteinas": 26,
    "Vitaminas": { "B12": 2.6, "B6": 0.4 },
    "Minerais": { "Ferro": 2.6, "Zinco": 6, "Fosforo": 200 },
    "Gorduras": 7.6,
    "Carboidratos": 0,
    "Fibras": 0,
    "Calorias": 186
},
"Brócolis cozido": {
    "Proteinas": 2.4,
    "Vitaminas": { "C": 64.9, "K": 141.1, "A": 1085 },
    "Minerais": { "Calcio": 40, "Ferro": 0.7, "Magnésio": 21 },
    "Gorduras": 0.3,
    "Carboidratos": 7.2,
    "Fibras": 3.3,
    "Calorias": 35
},
"Óleo de linhaça": {
    "Proteinas": 0,
    "Vitaminas": { "E": 0.47 },
    "Minerais": { "Ferro": 0.1 },
    "Gorduras": 100,
    "Carboidratos": 0,
    "Fibras": 0,
    "Calorias": 884
},
"Cenoura cozida": {
    "Proteinas": 0.8,
    "Vitaminas": { "A": 17185, "C": 3.6, "K": 13.2 },
    "Minerais": { "Calcio": 30, "Ferro": 0.3, "Potassio": 320 },
    "Gorduras": 0.2,
    "Carboidratos": 8.2,
    "Fibras": 3,
    "Calorias": 35
},
"Sardinha cozida (com ossos)": {
    "Proteinas": 25,
    "Vitaminas": { "B12": 8.9, "D": 4.8 },
    "Minerais": { "Calcio": 382, "Ferro": 2.9, "Fosforo": 490 },
    "Gorduras": 11,
    "Carboidratos": 0,
    "Fibras": 0,
    "Calorias": 208
},
"Salmão cozido": {
    "Proteinas": 25,
    "Vitaminas": { "B12": 3.5, "D": 9.3 },
    "Minerais": { "Selenio": 36.5, "Fosforo": 252 },
    "Gorduras": 13,
    "Carboidratos": 0,
    "Fibras": 0,
    "Calorias": 206
},
"Quinoa cozida": {
    "Proteinas": 4.1,
    "Vitaminas": { "B1": 0.1, "B2": 0.1, "B6": 0.1 },
    "Minerais": { "Ferro": 1.5, "Magnésio": 64, "Fosforo": 152 },
    "Gorduras": 1.9,
    "Carboidratos": 21,
    "Fibras": 2.8,
    "Calorias": 120
},
"Ervilhas cozidas": {
    "Proteinas": 5.2,
    "Vitaminas": { "A": 792, "C": 9.7, "K": 24.8 },
    "Minerais": { "Calcio": 25, "Ferro": 1.5, "Magnésio": 33 },
    "Gorduras": 0.4,
    "Carboidratos": 14.5,
    "Fibras": 5.5,
    "Calorias": 84
},
"Óleo de peixe": {
    "Proteinas": 0,
    "Vitaminas": { "A": 500, "D": 2.5 },
    "Minerais": { "nenhum":0 },
    "Gorduras": 100,
    "Carboidratos": 0,
    "Fibras": 0,
    "Calorias": 902
},
"Couve-flor cozida": {
    "Proteinas": 1.9,
    "Vitaminas": { "C": 44.3, "K": 16.1 },
    "Minerais": { "Calcio": 22, "Ferro": 0.4, "Magnésio": 15 },
    "Gorduras": 0.3,
    "Carboidratos": 5.1,
    "Fibras": 2,
    "Calorias": 28
},
"Queijo cottage": {
    "Proteinas": 11.1,
    "Vitaminas": { "B12": 0.9, "A": 94 },
    "Minerais": { "Calcio": 83, "Fosforo": 155 },
    "Gorduras": 4.3,
    "Carboidratos": 3.4,
    "Fibras": 0,
    "Calorias": 98
},
"Carne de cordeiro cozida": {
    "Proteinas": 25,
    "Vitaminas": { "B12": 2.3, "B6": 0.2 },
    "Minerais": { "Ferro": 2.1, "Zinco": 5.2, "Fosforo": 180 },
    "Gorduras": 21,
    "Carboidratos": 0,
    "Fibras": 0,
    "Calorias": 294
},
"Pimentão cozido": {
    "Proteinas": 0.9,
    "Vitaminas": { "A": 3726, "C": 45, "B6": 0.2 },
    "Minerais": { "Calcio": 8, "Ferro": 0.3, "Potassio": 185 },
    "Gorduras": 0.2,
    "Carboidratos": 4.6,
    "Fibras": 1.5,
    "Calorias": 23
},
"Ossos de carne moídos": {
    "Proteinas": 18,
    "Vitaminas": { "A": 0, "C": 0 },
    "Minerais": { "Calcio": 800, "Fosforo": 300 },
    "Gorduras": 5,
    "Carboidratos": 0,
    "Fibras": 0,
    "Calorias": 130
},
"Ovo cozido": {
    "Proteinas": 6.3,
    "Vitaminas": { "B12": 0.6, "A": 270, "D": 1.1 },
    "Minerais": { "Ferro": 1, "Fosforo": 86, "Zinco": 0.6 },
    "Gorduras": 5.3,
    "Carboidratos": 0.6,
    "Fibras": 0,
    "Calorias": 77
},
"Espargos cozidos": {
    "Proteinas": 2.2,
    "Vitaminas": { "A": 756, "C": 6.9, "K": 55.7 },
    "Minerais": { "Calcio": 24, "Ferro": 1.6, "Potassio": 271 },
    "Gorduras": 0.2,
    "Carboidratos": 3.7,
    "Fibras": 1.8,
    "Calorias": 20
},
"Óleo de abacate": {
    "Proteinas": 0,
    "Vitaminas": { "E": 14, "K": 60 },
    "Minerais": { "zero": 0},
    "Gorduras": 100,
    "Carboidratos": 0,
    "Fibras": 0,
    "Calorias": 884
},
"Leite de cabra": {
    "Proteinas": 3.6,
    "Vitaminas": { "A": 185, "C": 1.3, "D": 0.2 },
    "Minerais": { "Calcio": 134, "Fosforo": 111, "Potassio": 180 },
    "Gorduras": 4.1,
    "Carboidratos": 4.5,
    "Fibras": 0,
    "Calorias": 69
}
    // Adicione mais alimentos aqui
};











function calcularNutrientes() {
    const foodInputs = document.querySelectorAll('input[name^="food"]');
    const amountInputs = document.querySelectorAll('input[name^="amount"]');
    let totalProteinas = 0;
    let totalVitaminasB3 = 0;
    let totalVitaminasB6 = 0;
    let totalVitaminasB12 = 0;
    let totalMineraisFosforo = 0;
    let totalMineraisPotassio = 0;
    let totalMineraisSelenio = 0;
    let totalGorduras = 0;
    let totalCarboidratos = 0;
    let totalFibras = 0;
    let totalCalorias = 0;

    // Calcular totais de nutrientes com base nos alimentos selecionados
    for (let i = 0; i < foodInputs.length; i++) {
        const foodName = foodInputs[i].value;
        const amount = parseFloat(amountInputs[i].value) * 1000; // Converter para quantidade por grama

        if (nutrientData.hasOwnProperty(foodName)) {
            const nutrientInfo = nutrientData[foodName];

            // Adicionar os nutrientes encontrados
            if (nutrientInfo.Proteinas) {
                totalProteinas += nutrientInfo.Proteinas * amount / 100;
            }
            if (nutrientInfo.Vitaminas) {
                totalVitaminasB3 += (nutrientInfo.Vitaminas.B3 || 0) * amount / 100;
                totalVitaminasB6 += (nutrientInfo.Vitaminas.B6 || 0) * amount / 100;
                totalVitaminasB12 += (nutrientInfo.Vitaminas.B12 || 0) * amount / 100;
            }
            if (nutrientInfo.Minerais) {
                totalMineraisFosforo += (nutrientInfo.Minerais.Fosforo || 0) * amount / 100;
                totalMineraisPotassio += (nutrientInfo.Minerais.Potassio || 0) * amount / 100;
                totalMineraisSelenio += (nutrientInfo.Minerais.Selenio || 0) * amount / 100;
            }
            if (nutrientInfo.Gorduras) {
                totalGorduras += nutrientInfo.Gorduras * amount / 100;
            }
            if (nutrientInfo.Carboidratos) {
                totalCarboidratos += nutrientInfo.Carboidratos * amount / 100;
            }
            if (nutrientInfo.Fibras) {
                totalFibras += nutrientInfo.Fibras * amount / 100;
            }
            if (nutrientInfo.Calorias) {
                totalCalorias += nutrientInfo.Calorias * amount / 100;
            }
        }
    }

    return {
        Proteinas: totalProteinas,
        VitaminasB3: totalVitaminasB3,
        VitaminasB6: totalVitaminasB6,
        VitaminasB12: totalVitaminasB12,
        MineraisFosforo: totalMineraisFosforo,
        MineraisPotassio: totalMineraisPotassio,
        MineraisSelenio: totalMineraisSelenio,
        Gorduras: totalGorduras,
        Carboidratos: totalCarboidratos,
        Fibras: totalFibras,
        Calorias: totalCalorias
    };
}











// Função para salvar os dados do cão no Local Storage
function saveDogDataToLocalStorage(dogData) {
    localStorage.setItem('dogData', JSON.stringify(dogData));
}











function calcularEGuardarDadosCao(nomeCao, racaCao, idadeCao, pesoCao, porteCao) {
    const nutrientes = calcularNutrientes();
    const necessidadeCaloricaDiaria = calcularNecessidadeCalorica(pesoCao);

    const statusNutrientes = {
        Proteinas: calcularStatusNutriente(nutrientes.Proteinas, 50, 90),
        VitaminasB3: calcularStatusNutriente(nutrientes.VitaminasB3, 0.2, 1),
        VitaminasB6: calcularStatusNutriente(nutrientes.VitaminasB6, 0.1, 0.5),
        VitaminasB12: calcularStatusNutriente(nutrientes.VitaminasB12, 0.002, 0.01),
        MineraisFosforo: calcularStatusNutriente(nutrientes.MineraisFosforo, 700, 1200),
        MineraisPotassio: calcularStatusNutriente(nutrientes.MineraisPotassio, 1800, 2500),
        MineraisSelenio: calcularStatusNutriente(nutrientes.MineraisSelenio, 0.05, 0.2),
        Gorduras: calcularStatusNutriente(nutrientes.Gorduras, 20, 70),
        Carboidratos: calcularStatusNutriente(nutrientes.Carboidratos, 100, 300),
        Fibras: calcularStatusFibras(nutrientes.Fibras, nutrientes.Calorias, 1, 2),
        Calorias: calcularStatusCalorias(nutrientes.Calorias, necessidadeCaloricaDiaria)
    };

    const dogData = {
        id: generateUniqueId(),
        nomeCao: nomeCao,
        racaCao: racaCao,
        idadeCao: idadeCao,
        pesoCao: pesoCao,
        porteCao: porteCao,
        statusNutrientes: statusNutrientes
    };

    return dogData;
}











function calcularStatusNutriente(total, min, max) {
    if (total < min) {
        return 'Baixo';
    } else if (total > max) {
        return 'Alto';
    } else {
        return 'Adequado';
    }
}











function calcularStatusFibras(totalFibras, totalCalorias, min, max) {
    const percentualFibras = (totalFibras / totalCalorias) * 100;
    if (percentualFibras < min) {
        return 'Baixo';
    } else if (percentualFibras > max) {
        return 'Alto';
    } else {
        return 'Adequado';
    }
}











function calcularStatusCalorias(totalCalorias, necessidadeCaloricaDiaria) {
    if (totalCalorias < necessidadeCaloricaDiaria) {
        return 'Baixo';
    } else if (totalCalorias > necessidadeCaloricaDiaria) {
        return 'Alto';
    } else {
        return 'Adequado';
    }
}











function calcularNecessidadeCalorica(peso) {
    // Fórmula simples para calcular a necessidade calórica diária aproximada
    return peso * 70; // kcal por dia para um cachorro de 20 kg
}












document.getElementById('dog-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const alreadyRegistered = document.getElementById('already-registered').checked;

    let dogData;
    if (alreadyRegistered) {
        const dogId = document.getElementById('dog-id').value;
        dogData = JSON.parse(localStorage.getItem('dogData')) || {};
        dogData.id = dogId;
    } else {
        const nomeCao = document.getElementById('name').value;
        const racaCao = document.getElementById('breed').value;
        const pesoCao = document.getElementById('weight').value;
        const idadeCao = document.getElementById('age').value;
        const porteCao = document.querySelector('input[name="gender"]:checked').value;

        dogData = calcularEGuardarDadosCao(nomeCao, racaCao, idadeCao, pesoCao, porteCao);
    }

    saveDogDataToLocalStorage(dogData);

    // Redirecionar para a página de exibição
    window.location.href = 'exibir.html';
});

// Mostrar ou ocultar o campo de entrada do ID do cão com base na caixa de marcação
document.getElementById('already-registered').addEventListener('change', function () {
    const isChecked = this.checked;
    const registeredIdContainer = document.querySelector('.registered-id-container');
    const dogFields = document.querySelectorAll('#name, #breed, #weight, #age, input[name="gender"]');

    if (isChecked) {
        registeredIdContainer.style.display = 'block';
        dogFields.forEach(field => field.disabled = true);
    } else {
        registeredIdContainer.style.display = 'none';
        dogFields.forEach(field => field.disabled = false);
    }
});














