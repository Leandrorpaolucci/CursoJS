// construtora - > molde(classe)

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// instancia
const p1 = new Pessoa('Leandro', 'P.'); // Pessoa = Função construtora
const p2 = new Pessoa('Camila', 'P.'); // Pessoa = Função construtora
console.log(p1);
console.log(p2);