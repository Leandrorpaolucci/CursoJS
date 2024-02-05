function simularProbabilidadeDeObtencao() {
    const CHANCE_SS = 0.01;
    const CHANCE_S = 0.02;
    const CHANCE_RANK_A = 0.20;
    const CHANCE_RANK_B = 0.77;

    let contadorSS = 0;
    let contadorS = 0;
    let contadorRankA = 0;
    let contadorRankB = 0;

    for (let i = 0; i < 10; i++) {
        const chance = Math.random();

        if (chance < CHANCE_SS) {
            contadorSS++;
        } else if (chance < CHANCE_SS + CHANCE_S) {
            contadorS++;
        } else if (chance < CHANCE_SS + CHANCE_S + CHANCE_RANK_A) {
            contadorRankA++;
        } else {
            contadorRankB++;
        }
    }

    console.log("Resultados após 10 tentativas:");
    console.log("SS:", contadorSS);
    console.log("S:", contadorS);
    console.log("Rank A:", contadorRankA);
    console.log("Rank B:", contadorRankB);
}

// Chamando a função para simular a probabilidade em 10 tentativas
simularProbabilidadeDeObtencao();
