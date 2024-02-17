//Filter - > sempre retornar um array, com a mesma quantidades de elementos ou menos.

//               0 1  2  3 4  .........
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//EX1
//const numerosFiltrados = numeros.filter(valor => valor > 10)

//EX2
// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array);
//     return valor > 10;
// });

// console.log(numerosFiltrados);

const pessoas = [
    { nome: 'Leandro', idade: 27 },
    { nome: 'Maria', idade: 67 },
    { nome: 'Camila', idade: 22 },
    { nome: 'Cecília', idade: 1 },
    { nome: 'Agatha', idade: 7 },
    { nome: 'Ana', idade: 36 },
];

const pessoasNomeGrande = pessoas.filter(function (obj) {
    return obj.nome.length >= 7;
});

console.log(pessoasNomeGrande);

const pessoasMaioresDe50 = pessoas.filter((obj) => obj.idade > 50);
console.log(pessoasMaioresDe50);

const pessoasTerminaComA = pessoas.filter(function(obj) {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(pessoasTerminaComA);