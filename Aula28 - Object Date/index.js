// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia =  60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); //01/01/1970 TIMESTAMP UNIX ÉPOCA UNIX
// const data = new Date(2024); // ano, mes, dia, hora, minuto, segundo, milésímo de segundo
//const data = new Date('2024-01-30T22:47:59');
const data = new Date('2024-01-30T22:47:59');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milésímo', data.getMilliseconds());
console.log('Dia Semana', data.getDay()); // 0 - domingo, 6 Sabádo
//console.log(Date.now())
console.log(data.toString());