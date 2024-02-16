
//               0         1        2          3         4
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];

//1º arg = 0 , onde eu quero começar? 
//2º arg = 1 , quantos eu quero remover?

//nomes.splice(índice, delete, elem1, elem2, elem3);

const removidos = nomes.splice(3,2);
console.log(nomes, removidos);