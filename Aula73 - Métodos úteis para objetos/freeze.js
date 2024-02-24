const produto = { nome: "Produto", preco: 1.8 };
Object.freeze(produto);

const caneca = Object.assign(
  {},
  produto,
  { material: "porcelana" },
  { personalizada: "não" }
);

//freeze impede a alteração dos elementos de produto.
produto.nome = "Era pra alterar, mas o freeze não permite";
console.log(produto.nome);
