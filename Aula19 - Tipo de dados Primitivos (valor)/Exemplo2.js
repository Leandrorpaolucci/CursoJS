const a = {
    nome: 'Leandro',
    sobrenome: 'Ribeiro'
}
const b = {...a};
a.nome = 'João'

console.log(`B manteve o valor antigo de A: ${b}`);
console.log(`A trocou o valor: ${a}`);