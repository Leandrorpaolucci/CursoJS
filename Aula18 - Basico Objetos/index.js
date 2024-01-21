const array = [1,2,3];
array.push(4); // novo valor
array[0] = 'Leandro'; // reatribuir um valor dentro do array
console.log(array);

//-----------------------------------------------------------
console.log('---------------ORIENTAÇÃO A OBJETOS I ---------------------');

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    };
}

const pessoa1 = criaPessoa('Leandro', 'Ribeiro', 28);
const pessoa2 = criaPessoa('Maria', 'Ribeiro', 28);
const pessoa3 = criaPessoa('Camila', 'Urzedo', 28);
const pessoa4 = criaPessoa('Agatha', 'Oliveira', 28);
const pessoa5 = criaPessoa('Cecília', 'Oliveira', 28);
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);

console.log('---------------ORIENTAÇÃO A OBJETOS II ---------------------');

const p1 = {
    nome: 'Leandro',
    sobrenome: 'Ribeiro',
    idade: 28,

    fala() {
        console.log(`A minha idade atual é  ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;

    }
};

p1.fala();

p1.incrementaIdade();
p1.fala();

p1.incrementaIdade();
p1.fala();