// function saudaçao(nome) {
//     return `Seja bem vindo ${nome}`
// }
// const variavel = saudaçao('Leandro');
// console.log(variavel);


// primeiro jeito de criar função
function soma(x = 0, y= 0) {
    const resultado = x + y;
    return resultado;
    
}
const resultado =  soma(4, 8);
console.log('PRIMEIRA FUNÇÃO')
console.log(`A variavel Resultado recebeu a função soma e você esta printando o resultado ${resultado}`);
console.log('--------------------------------------------------------------------');

// Função Anonima
console.log('SEGUNDA FUNÇÃO');
const raiz1 = function (n) {
    return n ** 0.5;
};

n = 81
console.log(`A raiz de ${n} é ${raiz1(n).toFixed(2)}`);
console.log('--------------------------------------------------------------------');

//Maneira mais moderna de criar função
console.log('TERCEIRA FUNÇÃO');
console.log('--------------------------------------------------------------------');

const raiz2 = (n) => n ** 0.5;

console.log(raiz2(9));
console.log(raiz2(16));
console.log(raiz2(25));