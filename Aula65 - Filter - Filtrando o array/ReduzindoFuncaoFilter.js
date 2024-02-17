const pessoas = [
    { nome: 'Leandro', idade: 27 },
    { nome: 'Maria', idade: 67 },
    { nome: 'Camila', idade: 22 },
    { nome: 'Cecília', idade: 1 },
    { nome: 'Agatha', idade: 7 },
    { nome: 'Ana', idade: 36 },
];

const funcaoGrande = pessoas.filter(function (obj) {
    return obj.nome.length >= 7;
});
console.log(funcaoGrande);

//EX 2 Reduzindo a função

const funcaoMedia = pessoas.filter((obj) => {
    return obj.nome.length > 6;
});

console.log(funcaoMedia);

// EX 3 Funcao Pequena

const funcaoPequena = pessoas.filter(obj => obj.nome.length > 5);
console.log(funcaoPequena);




