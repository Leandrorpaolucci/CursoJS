// Se eu criar um array e fizer com que outra variavel tenha os valores de "nomes"
// Ambas as variaveis apontarão para o mesmo lugar.
// Exemplo abaixo: 

const nomes = new Array("Leandro", "Cecília", "Camila", "Agatha");
const nomesEspelhados = nomes;

console.log(nomes);
console.log(nomesEspelhados);

// Tudo o que eu fizer em uma variavel interfere na outra....

// removendo o ultimo elemento
nomes.pop();

console.log(nomes);
console.log(nomesEspelhados);


