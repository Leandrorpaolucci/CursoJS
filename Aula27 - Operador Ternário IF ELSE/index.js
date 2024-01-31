// (condicão) ? 'Valor para verdadeiro' : 'valor para falso';

//EX 1
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário Normal';
console.log(nivelUsuario);
// EX 2

const corUsuario = null;
const corPadrao = corUsuario || 'Padrão';
console.log(corPadrao);