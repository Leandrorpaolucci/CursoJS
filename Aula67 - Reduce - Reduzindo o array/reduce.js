// Some todos os numeros (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function (acumulador, valor) {
    acumulador.push(valor * 2)
    return acumulador;
}, 0);
console.log(total);


const pessoas = [
    { nome: 'Leandro', idade: 27 },
    { nome: 'Maria', idade: 67 },
    { nome: 'Camila', idade: 22 },
    { nome: 'Cecília', idade: 72 },
    { nome: 'Agatha', idade: 7 },
    { nome: 'Ana', idade: 36 },
];


const maisVelha = pessoas.reduce(function (acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
},);
console.log(maisVelha);