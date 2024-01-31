function getDiaSemanaTexto(diaSemana) {
    let diaSemanaText;

    switch (diaSemana) {
        case 0:
            diaSemanaText = 'Domingo';
            return diaSemanaText
        case 1:
            diaSemanaText = 'Segunda-Feira';
            return diaSemanaText
        case 2:
            diaSemanaText = 'Terça-Feira';
            return diaSemanaText
        case 3:
            diaSemanaText = 'Quarta-Feira';
            return diaSemanaText
        case 4:
            diaSemanaText = 'Quinta-Feira';
            return diaSemanaText
        case 5:
            diaSemanaText = 'Sexta-Feira';
            return diaSemanaText
        case 6:
            diaSemanaText = 'Sabádo';
            return diaSemanaText
        default:
            diaSemanaText = 'Entrou no ELSE do switch';
            return diaSemanaText

    }

}

const data = new Date('1995-07-21 12:20:21');
const diaSemana = data.getDay(); //Day conforme Comentários acima, int referenciando a data

const diaSemanaText = getDiaSemanaTexto(diaSemana);

console.log(`Dia Em número da semana: ${diaSemana}, Dia Texto: ${diaSemanaText}`);
console.log('Passei do switch');