const numero = Number(prompt('* * * Digite um numero * * * '));
const numeroTitulo = document.getElementById('numero-titulo');
numeroTitulo.innerHTML = numero;

// RAIZ DE OUTRA FORMA NUMERO ** 0.5
const raizq = document.getElementById('raiz-quadrada');
raizq.innerHTML = `<p>Raiz quadrada: <strong>${(Math.sqrt(numero))}<strong> <p/>`;

const inteiro = document.getElementById('inteiro');
inteiro.innerHTML = `<p> É inteiro? : <strong>${Number.isInteger(numero)}. Numero Digitado é  ${numero}.<strong> </p>`;

const nan = document.getElementById('nan');
nan.innerHTML = `<p> É NaN ? : <strong>${Number.isNaN(numero)}. </strong> </p>`;

const arredondarCima = document.getElementById('arredondandoCima')
arredondarCima.innerHTML = `<p>Arredondando o número para cima: <strong> ${Math.ceil(numero)}. Número Digitado anteriormente: ${numero} </strong> </p>`;

const arrendondarBaixo = document.getElementById('arredondandoBaixo');
arrendondarBaixo.innerHTML = `<p>Arrendando para baixo: <strong>${Math.floor(numero)}. Número Digitado anteriormente: ${numero}</strong>  </p>`;

const duasCasasDecimais = document.getElementById('duasCasasDecimais');
duasCasasDecimais.innerHTML = `<p> Arredondando o número float para duas casas decimais <strong>${numero.toFixed()}. </p> </strong>`;

