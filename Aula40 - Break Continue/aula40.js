const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];


//Continue continua para a próxima iteração
//Break sai do laço

for (let numero of numeros) {
  if (numero === 2) {
    console.log('Pulei o numero 2');
    continue;
  }

  console.log(numero);
  if (numero ===7) {
    console.log('Achei o o número 7')
    break;
  }

}
