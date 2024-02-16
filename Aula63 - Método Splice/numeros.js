//nomes.splice(índice, delete, elem1, elem2, elem3);
//              -5        -4       -3         -2        -1
//               0         1        2          3         4
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];

//Unshift com splice
nomes.splice(0, 0, 'NovoElemento');
console.log(nomes);

//Push com splice
// nomes.splice(nomes.length, 0, 'NovoElemento');
// console.log(nomes);

//1º arg = 0 , onde eu quero começar? 
//2º arg = 1 , quantos eu quero remover?


//Pop com splice
// const removidos = nomes.splice(-1, 1);
// console.log(removidos);

//shift com splice
// const removidos = nomes.splice(0, 1);
// console.log(removidos);