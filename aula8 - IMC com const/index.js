const nome = 'Leandro';
const sobreNome = 'Paolucci';
const idade = 28;
const peso = 84;
const altura = 1.84;

let indiceMassaCorporal; // peso dividido por altura *  altura
let anoNascimento;

indiceMassaCorporal = peso / (altura * altura);
console.log(nome, 'O seu Peso é', indiceMassaCorporal);

anoNascimento = 2024 - idade;
console.log(nome, 'Você Nasceu em', anoNascimento);

console.log(nome + ' ' +  sobreNome +  ' tem' +  idade + ' anos, pesa ' + peso +  ' kg');
console.log(`tem ${altura} de ${altura} e seu IMC é de ${indiceMassaCorporal}`);

// nome = 'Leandro' - > não recomendável, variavel em escopo global que pode acabar gerando problemas em outras variáveis.