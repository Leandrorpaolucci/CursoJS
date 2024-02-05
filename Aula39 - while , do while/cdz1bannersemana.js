function simularProbabilidadeDeObtencao(chanceBannerSemana) {
    const CHANCE_SS = 0.01;
    const CHANCE_S = 0.02;
    const CHANCE_RANK_A = 0.20;
    const CHANCE_RANK_B = 0.77;

    const CHANCE_BANNER_SEMANA = chanceBannerSemana;

    let contadorSS = 0;
    let contadorS = 0;
    let contadorRankA = 0;
    let contadorRankB = 0;
    let bannerSaiu = false;

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

        if (chance < CHANCE_BANNER_SEMANA) {
            bannerSaiu = true;
        }
    }

    console.log("Resultados após 10 tentativas:");
    console.log("SS:", contadorSS);
    console.log("S:", contadorS);
    console.log("Rank A:", contadorRankA);
    console.log("Rank B:", contadorRankB);
    
    if (bannerSaiu) {
        console.log("O banner da semana saiu!");
    }
}

// Chamando a função para simular a probabilidade em 10 tentativas
// Vamos supor que o banner da semana tenha uma chance de 1%
simularProbabilidadeDeObtencao(0.01);
