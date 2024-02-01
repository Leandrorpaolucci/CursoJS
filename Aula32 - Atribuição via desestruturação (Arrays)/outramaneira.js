// ...rest, ... spread
//                   0          1          2
//                 0  1  2   0   1  2    0  1  2
//EX 1
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [, [, , seis]] = numeros;
console.log(seis);

//EX 2

const numeros1 = [ [10, 11, 12], [13, 14, 15], [16, 17, 18] ];
const [lista1, lista2, lista3] = numeros1;
console.log(lista1[0]); // 10
