function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function conectarBD(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("Erro");
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + " Passei na promise.");
      return;
    }, tempo);
  });
}

//Promisse.all
//Promisse.race
//Promisse.resolve
//Promisse.reject

const promises = [
  "Primeiro Valor",
  conectarBD("Promisse 1", 3000),
  conectarBD("Promisse 2", 500),
  conectarBD("Promisse 3", 1000),
  //conectarBD(1222, 1000),
  "Outro Valor",
];

Promise.all(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (error) {
    console.log(error);
  });
