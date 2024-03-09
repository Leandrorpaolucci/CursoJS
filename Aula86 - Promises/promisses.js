function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function conectarBD(msg, tempo) {
  setTimeout(() => {
    console.log(msg);
  }, tempo);
}

conectarBD("Frase 1", aleatorio(1,3));
conectarBD("Frase 2", aleatorio(1,3));
conectarBD("Frase 3", aleatorio(1,3));
