function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: true,
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError("Mensagem de erro");
        return;
      }
      estoquePrivado = valor;
    },
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace("coisa", "");
      nome = valor;
    },
  };
}

// const p1 = new Produto("Camiseta", 20, 3);
// //console.log(p1);
// p1.estoque = "oi";
// console.log(p1.estoque);

const p2 = criaProduto("Camiseta");
console.log(p2);
console.log(p2.nome);
p2.nome = "qualquer coisa";
console.log(p2.nome);
