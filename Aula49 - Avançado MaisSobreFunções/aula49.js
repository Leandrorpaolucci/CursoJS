// Declaração de função (Function Hoisting)

// Engine do java vai elevar as declações de funções e variaveis declaradas com a palavra VAR
exemplo2()

//==============================================================================================
function exemplo1 () {
    console.log('EXEMPLO1: Declaro a função e chamo ela em seguida');
}
exemplo1();

//==============================================================================================
function exemplo2 () {
    console.log('EXEMPLO2: Declaro a função e chamo ela em qualquer lugar do meu código');
}

// First-class objects (Objetos de primeira Classe)
// Function expression
const souUmDado = function () {
    console.log('sou um dado.');
};
souUmDado()

function executaFuncao(funcao) {
    console.log('Vou executar a sua função abaixo');
    funcao();
}

executaFuncao(souUmDado);


// Arrow Function
