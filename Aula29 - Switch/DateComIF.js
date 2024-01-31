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

if (diaSemana === 0) {
    diaSemanaText = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaText = 'Segunda-Feira';
} else if (diaSemana === 2) {
    diaSemanaText = 'Terça-Feira';
} else if (diaSemana === 3) {
    diaSemanaText = 'Quarta-Feira';
} else if (diaSemana === 4) {
    diaSemanaText = 'Quinta-Feira';
} else if (diaSemana === 5) {
    diaSemanaText = 'Sexta-Feira';
} else if (diaSemana === 6) {
    diaSemanaText = 'Sabádo';
} else {
    diaSemanaText = '';
}

console.log(`Dia Em número da semana: ${diaSemana}, Dia Texto: ${diaSemanaText}`);