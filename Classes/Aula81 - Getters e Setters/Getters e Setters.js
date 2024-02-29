const _velocidade = Symbol("Velocidade");

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  get velocidade() {
    console.log("GETTER");
    return this[_velocidade];
  }

  set velocidade(valor) {
    console.log("SETTER");
    if (typeof valor !== "number") return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  desacelerar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro("Fusca");

// for (let i = 0; i <= 200; i++) {
//   c1.acelerar();
// }

c1.velocidade = 99;
console.log(c1.velocidade);
