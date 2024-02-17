//SEM ARROW FUNCTION
const numeros1 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares1 = numeros1.filter(function(valor){
    return valor % 2 === 0;
}).map(function(valor){
    return valor * 2;
}).reduce(function(acumulador, valor){
    return acumulador + valor;
});

console.log(numerosPares1);

//COM ARROW FUNCTION

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor);


//[ 50, 80, 2, 8, 22 ]
//[ 100, 160, 4, 16, 44 ]
console.log(numerosPares);
