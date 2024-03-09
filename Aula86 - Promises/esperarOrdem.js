function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function conectarBD(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("VALOR INVÁLIDO");
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

conectarBD("Conexao com a base de dados", aleatorio(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return conectarBD("Buscando dados da base", aleatorio(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return conectarBD("Tratando os dados da base", aleatorio(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log("Conexão realizada com sucesso");
  })
  .catch((error) => {
    console.log("ERRO", error);
  });

console.log("Isso aqui será exibido antes de qualquer promisse");
