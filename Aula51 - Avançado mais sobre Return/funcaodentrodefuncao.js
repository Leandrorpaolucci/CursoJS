function primeiraFrase(primeiraParte) {
  function segundaFrase(segundaParte) {
    return primeiraParte + ' ' + segundaParte;
  }
  return segundaFrase;
}

const frase = primeiraFrase('Olá');
console.log(frase('Mundo!'));