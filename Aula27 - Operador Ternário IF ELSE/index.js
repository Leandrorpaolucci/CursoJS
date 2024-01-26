// (condicão) ? 'Valor para verdadeiro' : 'valor para falso';

//EX 1
const pontuacaoUsuario = 99;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário Normal'; // if e else ternário
console.log(nivelUsuario);
// EX 2
const corUsuario = null;
const corPadrao = corUsuario || 'Default-Padrao'; //set valor padrão caso seja nula 
console.log(corPadrao);