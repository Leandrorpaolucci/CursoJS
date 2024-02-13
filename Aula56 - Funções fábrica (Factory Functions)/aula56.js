//Factory Function (Fabrica de função)
// Constructor Function(Função Construtora)

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    //Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
      console.log(valor);
    },

    fala: function (assunto) {
      return `${this.nome} está ${assunto}.`;
    },
    altura: altura,
    peso: peso,

    //Getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Leandro", "Ribeiro", 1.8, 83);
p1.nomeCompleto = "Camila Ribeiro Paolucci";
console.log(p1.nomeCompleto);
