
export type Level = {
    title: string;
    color: string;
    icon: 'up' | 'down';
    imc: number[];
    yourIMC?: number;
    teste: string;
}
export const levels: Level[] = [
    { title: 'Abaixo do Peso', color: '#76a3ff', icon:'down', imc: [0, 18.5],
    teste: 'Você está abaixo do peso ideal. Isso pode ser apenas uma característica pessoal, mas também pode ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja perdendo peso sem motivo aparente, procure um médico.' },

    { title: 'Adequado', color: '#62d14d', icon:'up', imc: [18.6, 24.9],
    teste: 'Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais' },

    { title: 'Sobrepeso', color: '#d9d12c', icon:'down', imc: [25, 29.9],
    teste: 'Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos.' },

    { title: 'Obesidade Grau I', color: '#dd8d06', icon:'down', imc: [30, 34.9],
    teste: 'Sinal de alerta! O excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já traz benefícios à saúde.' },

    { title: 'Obesidade Grau II', color: '#dd4d0a', icon:'down', imc: [35, 39.9],
    teste: 'Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas está entre alto e muito alto.' },

    { title: 'Obesidade Grau III', color: '#dd0606', icon:'down', imc: [40, 99],
    teste: 'Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas é muito alto. Busque ajuda de um profissional de saúde; não perca tempo.' },
];

export const imcCalc = (height: number, weight: number) => {
    const IMC = weight / (height * height);
    
    for(let i in levels){
        if(IMC >= levels[i].imc[0] && IMC < levels[i].imc[1]){
            let levelCopy = {...levels[i]}
            levelCopy.yourIMC = parseFloat(IMC.toFixed(2));
            return levelCopy;
        }
    }
    return null;
}