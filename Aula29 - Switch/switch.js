// 0 Domingo
// 1 Segunda-Feira
// 2 Terça-Feira
// 3 Quarta-Feira
// 4 Quinta-Feira
// 5 Sexta-Feira
// 6 Sabádo

const data = new Date('1995-07-21 12:20:21');
let diaSemana = data.getDay(); //Day conforme Comentários acima, int referenciando a data
//diaSemana = 7;
let diaSemanaText;

switch (diaSemana) {
    case 0:
        diaSemanaText = 'Domingo';
        break;
    case 1:
        diaSemanaText = 'Segunda-Feira';
        break;
    case 2:
        diaSemanaText = 'Terça-Feira';
        break;
    case 3:
        diaSemanaText = 'Quarta-Feira';
        break;
    case 4:
        diaSemanaText = 'Quinta-Feira';
        break;
    case 5:
        diaSemanaText = 'Sexta-Feira';
        break;
    case 6:
        diaSemanaText = 'Sabádo';
        break;
    default:
        diaSemanaText = 'Entrou no ELSE do switch';

}

console.log(`Dia Em número da semana: ${diaSemana}, Dia Texto: ${diaSemanaText}`);
console.log('Passei do switch');