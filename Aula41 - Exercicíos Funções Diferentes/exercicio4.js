// escreva uma função que recebe um numero e retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Numero é divisivel por 5 = Buzz
// numero é divisivel por 3 e 5 Fizzbuzz
// Numero NÃO é divisivel por 3 e 5 retorna o propriop número
// checar se o numero é realmente um número =
// use a função com números de 0 a 100

function FizzBuzz(numero) {
  if (typeof numero !== "number") return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
  if (numero % 3 === 0) return "Fizz";
  if (numero % 5 === 0) return "Buzz";
  return numero;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, FizzBuzz(i));
}
