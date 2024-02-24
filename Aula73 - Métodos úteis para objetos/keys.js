const produto = { nome: "Produto", preco: 1.8 };

const caneca = Object.assign(
  {},
  produto,
  { material: "porcelana" },
  { personalizada: "não" }
);

// Mostra as chaves dos produtos.
console.log(Object.keys(caneca));
