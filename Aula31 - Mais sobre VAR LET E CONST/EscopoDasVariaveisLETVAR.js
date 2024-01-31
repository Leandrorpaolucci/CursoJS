
const verdadeira = true

// let tem escopo de bloco {... bloco }
// var só tem escopo de função

let nome = 'Cecília'; // Não podemos redeclarar as variaveis let | criando
var nome2 = 'Camila'; // Var permite essa alteração | criando

var nome2 = 'Paolucci' // redeclarada

if (verdadeira) {
    let nome = `Leandro Ribeiro`; // criando
    var nome2 = 'Paolucciiii' // redeclarando
    console.log(`Nome dentro do 1º IF '${nome}', VAR GLOBAL: '${nome2}'`);

    if (verdadeira) {
        let nome = 'Outra Coisa';
        console.log(`Variavel nome no 2º Escopo IF '${nome}', VAR GLOBAL: '${nome2}'`);
    }
}

console.log(`FORA DO ESCOPO IF, VARIAVEIS GLOBAIS: ${nome}, ${nome2}`);