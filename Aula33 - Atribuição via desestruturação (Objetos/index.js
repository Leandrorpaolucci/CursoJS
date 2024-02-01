const pessoa = {
  nome: "Leandro",
  sobrenome: "Ribeiro",
  idade: 26,
  endereco: {
    rua: "Inácios Pais",
    numero: 42,
  },
};

// atribuição normal
// const nome = pessoa.nome;
// console.log(nome);

//Atrivuição via desestruturação
const {
  endereco: { rua, numero },
} = pessoa;
console.log(rua, numero);
