function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome

    Object.freeze(this); // trava para que os atributos não sejam alteradas...
    //implicito, return this 
}

// new cria um objeto vazio {} e também a palavra this que atrela o this ao objeto.
const p3 = new Pessoa('Leandro', 'Ribeiro');
console.log(p3);
