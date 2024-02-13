function criaPessoa(nome, sobrenome) {
  return {nome, sobrenome};
}

const p1 = criaPessoa('Leandro', 'Ribeiro');

const p2 = {
    nome: 'Leandro',
    sobrenome: 'Paolucci'
}

console.log(typeof(p1));
console.log(typeof(p2));