// Capturar evento de submit do formulário
const form = document.querySelector("#formulario");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector("#peso");
  const inputAltura = event.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso Inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura Inválida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;
  setResultado(msg, true);


});

function getNivelImc(imc) {
  const nivel = [
    "Abaixo do Peso",
    "Peso Normal",
    "Sobrepeso",
    "Obesidade grau I",
    "Obesidade grau II, Obesidade grau III",
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

// Função que CRIA PARAGRAFO

function criaParagrafo() {
  const p = document.createElement("p");
  return p;
}

//Função que coloca um resultado na div com ID resultado com o filtro querySelector
function setResultado(msg, isValid) {
  //Mensagem é o parametro da msg na função acima
  const resultado = document.querySelector('#resultado'); //Variável responsável por pegar o ID="Resultado" DO HTML
  resultado.innerHTML = "";

  const p = criaParagrafo();
  
  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
