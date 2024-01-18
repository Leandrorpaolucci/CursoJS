//            1234567
const nome = 'Leandro'
console.log(`Acessando a letra L: ${nome[0]}`)

//                  0         1        2
const alunos = ['Leandro', 'Camila', 'Luiz'];
console.log(`Array Completo: ${alunos}`);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

//contando quantos elementos eu tenho no array
console.log(`Contando quantos elementos eu possuo no Array: ${alunos.length}`);


// Editando

alunos[0] = 'Ana Cecília'
console.log(`Array Completo modificado: ${alunos}`);

// Indice que nao existe, adicionando valores

alunos[3] = 'Agatha'
console.log(`Array Completo modificado +1 elemento: ${alunos}`);

// adicionando um elemento no final dos  índices do array
alunos.push('Arthur');
console.log(alunos)

// Adicionando um elemento no inicio do array, indice 0
console.log(`Antes de colocar o primeiro array: ${alunos}`);
alunos.unshift('Leandro')
console.log(`Após adicionar o elemento no indice 0: ${alunos}`);

// Removendo elementos do array pop
alunos.pop();
console.log(`Removendo o ultimo indice da lista: ${alunos}`);

// salvando o último elemento removido em uma variavel
const ultimoElementoRemovido = alunos.pop();
console.log(`Removendo o ultimo indice da lista: ${alunos}`);
console.log(`Elemento Removido último indice: ${ultimoElementoRemovido}`);

//salvando o primeiro elemento removido em uma variavel
const primeiroElementoRemovido = alunos.shift();
console.log(`Primeiro elemento removido ${primeiroElementoRemovido}`);
console.log(alunos);

// deletando um elemento porem deixa-o vazio

delete alunos[0];
console.log(alunos[0]);