// Object Constructor

const pessoa1 = new Object();
pessoa1.nome = 'Leandro';
pessoa1.sobrenome = 'Ribeiro';
pessoa1.idade = 28;

pessoa1.falarNome = function () {
    return `${this.nome} Está falando o seu nome.`
};

pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (chave in pessoa1) {
    console.log(pessoa1[chave]);
}


//console.log(pessoa1.getDataNascimento());
// delete pessoa1.nome;
//pessoa1.falarNome();

