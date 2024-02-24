const produto = { nome: "Produto", preco: 1.8 };
console.log(Object.getOwnPropertyDescriptors(produto, "nome"));

Object.defineProperty(produto, "nome", {
  writable: false,
  configurable: false,
  value: 'Qualquer outra coisa',
});

console.log(Object.getOwnPropertyDescriptors(produto, "nome"));

produto.nome = "Outra coisa";
console.log(produto.nome);
