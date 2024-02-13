const nome = "Leandro";

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = "Camila";
  console.log(nome);
  falaNome();
}

usaFalaNome();
