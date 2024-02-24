/**
 *  Object.values
 *  Object.entries
 *  Object.assign(des, any)
 *  Object.getOwnPropertyDescriptor(o, 'prop)
 *  ...(spread)
 *
 *  // Já vimos
 *  Object.keys (Retorna as chaves)
 *  Object.freeze (congela o objeto)
 *  Object.defineProperties (define várias propriedades)
 *  Object.defineProperty (define uma propriedade)
 */

const produto = { nome: "caneca", preco: 1.8 };

const caneca = {...produto,
materialCaneca: 'Vidro',
}; // copio os dados do objeto produto e não faço eles acanecaara o mesmo lugar da memoria

produto.nome = "Leandro";
caneca.preco = 2.5;
console.log(produto);
console.log(caneca.materialCaneca);
