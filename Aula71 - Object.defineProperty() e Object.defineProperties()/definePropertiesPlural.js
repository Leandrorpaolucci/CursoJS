// defineProperty - > uma propriedade singular
// definePropertys - > várias

function Produto(nome, preco, estoque) {
  Object.defineProperty(this, "estoque", {
    enumerable: true, //Mostra a chave
    value: estoque, // valor
    writable: false, // pode alterar o valor ou não
    configurable: false, // pode apagar a chave? reconfigurar a chave? TRUE PODE | FALSE NÃO
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, //Mostra a chave
      value: nome, // valor
      writable: false, // pode alterar o valor ou não
      configurable: false, // pode apagar a chave? reconfigurar a chave? TRUE PODE | FALSE NÃO
    },
    preco: {
      enumerable: true, //Mostra a chave
      value: preco, // valor
      writable: false, // pode alterar o valor ou não
      configurable: false, // pode apagar a chave? reconfigurar a chave? TRUE PODE | FALSE NÃO
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(Object.keys(p1));

for (let chave in p1) {
  console.log(chave);
}
