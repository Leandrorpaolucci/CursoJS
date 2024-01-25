/*
FALSY
false
0
'' "" ``
null / undefined
NaN
*/

//console.log(0 || false || null || 'Leandro Ribeiro' || true);

// const corUsuario = 'vermelho';
// const corPadrao = corUsuario || 'preto';
// console.log(corPadrao);

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || 'Joao' || c || e || e);
