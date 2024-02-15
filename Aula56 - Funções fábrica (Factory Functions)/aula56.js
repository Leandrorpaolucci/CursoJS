//Factory Function (Fabrica de função)
// Constructor Function(Função Construtora)

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    //Getter
    get nomeCompleto() {
      return `${this.nome} ${sobrenome}`;
    },
    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      console.log(valor);
      this.nome = valor.shift();
      console.log(valor);
      this.sobrenome = valor.join();
    },
    // #2
    fala: function (assunto) {
      return `${
        this.nome + " " + this.sobrenome
      } está falando sobre ${assunto}.`;
    },
    altura: altura,
    peso: peso,
    // getter, faz o método fingir ser um atributo
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return `${this.nome}, seu IMC: ${indice.toFixed(2)}`;
    },
  };
}

const p1 = criaPessoa("Leandro", "Ribeiro", 1.83, 84);
// #1 Executando a função
console.log(p1);
// #2 - Executando o método de fala:
console.log(p1.fala("video games"));
console.log(p1.nome);
console.log(p1.imc);
console.log(p1.nomeCompleto);
p1.nomeCompleto = "Camila Oliveira";
console.log(p1.nomeCompleto);
console.log(p1.sobrenome);

