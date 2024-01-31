const h1 = document.querySelector(".container h1");
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
  let diaSemanaText;

  switch (diaSemana) {
    case 0:
      diaSemanaText = "Domingo";
      return diaSemanaText;
    case 1:
      diaSemanaText = "Segunda-Feira";
      return diaSemanaText;
    case 2:
      diaSemanaText = "Terça-Feira";
      return diaSemanaText;
    case 3:
      diaSemanaText = "Quarta-Feira";
      return diaSemanaText;
    case 4:
      diaSemanaText = "Quinta-Feira";
      return diaSemanaText;
    case 5:
      diaSemanaText = "Sexta-Feira";
      return diaSemanaText;
    case 6:
      diaSemanaText = "Sabádo";
      return diaSemanaText;
    default:
      diaSemanaText = "Entrou no ELSE do switch";
      return diaSemanaText;
  }
}

function getNomeMes(numeroMes) {
  let nomeMes;

  switch (numeroMes) {
    case 0:
      nomeMes = "Janeiro";
      return nomeMes;
    case 1:
      nomeMes = "Fevereiro";
      return nomeMes;
    case 2:
      nomeMes = "Março";
      return nomeMes;
    case 3:
      nomeMes = "Abril";
      return nomeMes;
    case 4:
      nomeMes = "Maio";
      return nomeMes;
    case 5:
      nomeMes = "Junho";
      return nomeMes;
    case 6:
      nomeMes = "Julho";
      return nomeMes;
    case 7:
      nomeMes = "Agosto";
      return nomeMes;
    case 8:
      nomeMes = "Setembro";
      return nomeMes;
    case 9:
      nomeMes = "Outubro";
      return nomeMes;
    case 10:
      nomeMes = "Novembro";
      return nomeMes;
    case 11:
      nomeMes = "Dezembro";
      return nomeMes;
  }
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}


function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(data.getDay());
    const nomeMes = getNomeMes(numeroMes);

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    ` de ${zeroAEsquerda(data.getFullYear())} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`);
}

h1.innerHTML = criaData(data);

// const h1 = document.querySelector(".container h1");
// const data = new Date();
// h1.innerHTML = data.toLocaleString("pt-BR", {
//   dateStyle: "full",
//   timeStyle: "short",
// });