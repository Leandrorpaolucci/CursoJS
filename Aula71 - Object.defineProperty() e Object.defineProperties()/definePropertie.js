// defineProperty - > uma propriedade singular
// definePropertys - > várias

function Produto(nome, preco, estoque) {
  this.nome = nome; // publica
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, //Mostra a chave
    value: estoque, // valor
    writable: false, // pode alterar o valor ou não
    configurable: false, // pode apagar a chave? reconfigurar a chave? TRUE PODE | FALSE NÃO
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(Object.keys(p1));

for (let chave in p1) {
  console.log(chave);
}
