const nomes = new Array("Leandro", "Camila", "Cecília");
console.log(nomes);

console.log(`Lista de array Inicial: * * *  ${nomes} * * *`); //#1

console.log(
`Array Antes: ${nomes} 
Array Removendo: (pop/remover ultimo elemento e retornar ele): ${nomes.pop()};
Array Depois ${nomes}`
);

console.log(`Método Shift: Remove o primeiro e reorganiza o Array: ${nomes.shift()}`);
console.log(`Atualizado após a remoção do primeiro índice: ${nomes}`);

console.log(`Método UNSHIFT: Adiciona ao primeiro indice e reorganiza o Array: ${nomes.unshift('Clara')}`);
console.log(`Atualizado após a remoção do primeiro índice: ${nomes}`);

console.log(`Adicionando com o método PUSH um nome no final da lista: ${nomes.push("Cecília")}`);
console.log(nomes);

nomes.push(`Adicionando com o método PUSH +1 nome no final da lista: ${nomes.push('Noemi')} `);
console.log(nomes);

console.log(`Número de elementos no Array com Método Length: ${nomes.length}`); //conta o tamanho do array
console.log(nomes);


//pop remove do final
//push adiciona no final
//shift remove do começo
//unshift adiciona no começo