//Abstraindo, o que eles tem em comum:
//Pensando: Camiseta e caneca pode ter: cor, plastico, porcelana, preço

//Produto - > Aumento de preço e Desconto
// Camiseta, Caneca

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
};
//Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,

        get: function () {
            return estoque
        },
        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })
};

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.desconto = function (desconto) {
    this.preco = this.preco - (this.preco * (desconto / 100));
};

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'preta');
const caneca = new Caneca('Caneca', 20, 'Vidro', 20);

caneca.estoque = 100;
caneca.desconto(10);
console.log(produto);
console.log(camiseta);
console.log(caneca);