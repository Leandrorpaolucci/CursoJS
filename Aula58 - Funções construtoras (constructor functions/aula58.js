//Função construtora retorna objetos  -> Pessoa (New)
//Função Fabrica/Factory - objetos    -> criaPessoa

//Construtora :  Pessoa ()

function Pessoa(nome, sobrenome) {
//Atributos ou métodos privados
  const ID = 123456;
  const metodoInterno = function () {

  };

  // Atributos ou métodos publicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + ": Sou um método!");
  };
}

//Pessoa.nome = ''

const p1 = new Pessoa("Leandro", "Ribeiro");
const p2 = new Pessoa("Camila", "Oliveira");

console.log(p1.nome);
console.log(p2.nome);
p2.metodo();
