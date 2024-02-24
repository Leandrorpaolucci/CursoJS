const produto = { nome: "Produto", preco: 1.8 };

const caneca = Object.assign(
  {},
  produto,
  { material: "porcelana" },
  { personalizada: "não" }
);

caneca.nome = "Outro Nome";
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);
console.log(caneca.material);
console.log(caneca.personalizada);
