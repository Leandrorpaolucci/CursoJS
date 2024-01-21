/**
 *  Primitivos = (imutáveis)  - string, number, boolean, undefined
 * null, (bigint, simbol) - > valores copiados
 * 
 * Referência (mutável) - Array, object, Function - > espelho, passados por referência
 * 
 */

console.log('---------   Dados Primitivos -------')
let c = 'Leandro';
let d = c;
console.log(`A variavel C: ${c}, A variável D: recebeu uma copia ${d}`)

c = 'Camila';
console.log(`A variavel C: ${c}, A variável D: manteve a variavel original '${d}'`)

console.log('*****************************************************************************')
//Referência
console.log('---------   Dados por Referência são diferentes dos dados Primitivos -------')
let a = [1,2,3];
let b = a; // espelho

console.log(`A variavel A ${a}, e a Variável B ${b} recebem o tipo de dado de referência.`);

a.push(4);
console.log(`Adicionei um valor a Variavel A: ${a}`);
console.log(`A variavel B recebeu o valor de referência em A: ${b}`);

b.pop();
console.log(`Removi o último valor da variavel B sendo o npumero '4' ${b}`);
console.log(`A variável A: ${a} foi atualizada também, por eu ter removido em B: ${b}`);
console.log(`A Variável B ${b} recebem o tipo de dado de referência.`);
console.log(`A variavel A ${a} recebem o tipo de dado de referência.`);
console.log(`A variavel A ${a}, e a Variável B ${b} recebem o tipo de dado de referência.`);