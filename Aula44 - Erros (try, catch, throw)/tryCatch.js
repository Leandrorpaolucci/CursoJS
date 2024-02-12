// NUNCA MOSTRE O ERRO PARA O SEU USUÁRIO!

try {
    console.log(naoexisto);

} catch(error) {
    console.log('Não existo');
    console.log(error);
}