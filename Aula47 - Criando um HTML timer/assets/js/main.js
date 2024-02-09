// new Date(123456489)

function getTimeFromSeconds(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}
let segundos = 0;
let timer;

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = getTimeFromSeconds(segundos);
  }, 1000);
}

document.addEventListener("click", function (evento) {
  const elemento = evento.target;
  console.log(elemento);
  if (elemento.classList.contains("zerar")) {
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    relogio.classList.remove('pausado');
    segundos = 0;
    alert("O cronometro será zerado");
  }

  if (elemento.classList.contains("iniciar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    iniciaRelogio();
  }

  if (elemento.classList.contains("pausar")) {
    relogio.classList.add("pausado");
    clearInterval(timer);
    alert("Você pausou o cronometro, inicie novamente para continuar.");
  }
});

console.log(getTimeFromSeconds(10));

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
