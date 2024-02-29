const falar = {
  falar() {
    console.log("Oie");
  },
};
const comer = {
  comer() {
    console.log("Estou comendo");
  },
};
const beber = {
  beber() {
    console.log("Estou bebendo");
  },
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa("Leandro", "Ribeiro");
const p2 = criaPessoa("Camila", "Oliveira");
console.log(p2);
