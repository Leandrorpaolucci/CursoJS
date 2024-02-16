// Para salvar um Array em outra variavel, temos que abrir os colchetes, adicionar ... + a variavel de array

const nomes = new Array("Leandro", "Cecília", "Camila", "Agatha");
const nomesEspelhados = [...nomes];

console.log(nomes);
console.log(nomesEspelhados);

// Agora o que eu fizer na variavel nome, não interfere na variavel espelhada

// removendo o ultimo elemento
nomes.pop();

console.log(nomes);
console.log(nomesEspelhados);
