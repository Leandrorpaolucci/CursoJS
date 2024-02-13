// IIFE -> immediately invoked function expression
(function (idade, peso, altura) {
  sobrenome = "Ribeiro";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Leandro"));
  }

  falaNome();
  console.log(idade, peso, altura);
})(17, 83, 1.83);

const nome = "Qualquer coisa";
console.log(nome);
