//            0123456
const nome = 'Leandro';
const sobrenome = 'Paolucci';

const nomes = ['Leandro', 'Camila', 'Cecília', 'Agatha'];

//EX 1
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);

}
console.log('2 ### 2###2 ### 2###2 ### 2###2 ### 2###2 ### 2###2 ### 2###2 ### 2###');
//EX 2
for (let i in sobrenome) {
    console.log(sobrenome[i]);
}

// EX 3 - PEGAR O VALOR SEM INDÍCE
console.log('3 #### 3 #####3 #### 3 #####3 #### 3 #####3 #### 3 #####3 #### 3 #####');
for (let valor of nomes) {
    console.log(valor);
}
console.log('4 FOR EACH - ');
nomes.forEach(function (valor, indice, array) {
    console.log(`Valor: ${valor} | , Indice: ${indice} | , Array: ${array}`);
});