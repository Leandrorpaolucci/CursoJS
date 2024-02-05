// for IN ler os indíces ou chaves do objeto.
//                0       1       2

const pessoa = {
    nome: 'Leandro',
    sobrenome: 'Ribeiro',
    idade: 27
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

const frutas = ['Pêra', 'Maça', 'Uva'];

for (let indice in frutas) {
    console.log(frutas[indice]);
}

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}