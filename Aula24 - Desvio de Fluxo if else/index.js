/**
 * Entre 0 - 11 - bom dia 
 * Entre 12 - 17 - boa tarde
 * Entre 18 - 23 - boa noite
 */

// if pode ser usado sozinho
// Sempre que utilizo a palavra else, eu preciso de um IF antes
// Eu posso ter vários else ifs na checagem 
// Só posso te rum ELSE na checagem 
// Podemos utilizar condições sem else if

const hora = 24;

if (hora >=0 && hora <=11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >=18 && hora <= 23) {
    console.log('Boa noite')
} else {
    console.log('Problema na Hora');
}

const tenhoGrana = false
if (tenhoGrana) {
    console.log('Vou sair de casa, pois tenho dinheiro');
}
else {
    console.log('Não vou sair de casa, não tenho dinheiro');
}
