//Literal
// '' "" ``
// []
// 123
//function
// todos eles possuem construtores e são literais.


//Vantagem dos colchetes, posso inserir um valor dinamico
const pessoa = {
    //chave      // valor
    nome: 'Leandro',
    sobrenome: 'Ribeiro'
};
const chave = 'nome';
// console.log(pessoa['nome']);
// console.log(pessoa['sobrenome']);
console.log(pessoa[chave]);
