function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

//Exemplo I
// function funcaoDoInterval() {
//     console.log(mostraHora());
// }
// setInterval(funcaoDoInterval, 1000);

// Exemplo II - cia a função diretamente no setInterval

const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000);

// função para parar a função
setTimeout( function (){
  clearInterval(timer);
}, 3000);
// função para mostrar uma mensagem de acordo com a mesma logica da feita acima
setInterval(function (){
  console.log('Olá mundo');
}, 5000);