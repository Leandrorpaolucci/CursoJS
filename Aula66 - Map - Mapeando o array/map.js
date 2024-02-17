//Dobre os numeros.
// ......        0  1   2   3  4 ...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map((valor) => valor * 2);
console.log(numerosEmDobro);


// 
const pessoas = [
    { nome: 'Leandro', idade: 27 },
    { nome: 'Maria', idade: 67 },
    { nome: 'Camila', idade: 22 },
    { nome: 'Cecília', idade: 1 },
    { nome: 'Agatha', idade: 7 },
    { nome: 'Ana', idade: 36 },
];

nomePessoa = pessoas.map((obj) => obj.nome);
console.log(nomePessoa);

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ nome: obj.idade }));
const comIds = pessoas.map(function (obj, indice) {
    const newObj = { ...obj };
    newObj.id = indice + 1;
    return newObj;
});
//console.log(pessoas);
console.log(comIds);
//console.log(comIds);
