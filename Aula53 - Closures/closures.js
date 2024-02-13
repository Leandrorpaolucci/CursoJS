//Global

function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao('Leandro');
const funcao2 = retornaFuncao('Camila');
console.log(funcao);
console.dir(funcao2);