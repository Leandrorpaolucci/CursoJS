const elementos = [
    { tag: 'p', texto: 'qualquer coisa' },
    { tag: 'div', texto: 'frase 2' },
    { tag: 'section', texto: 'frase 3' },
    { tag: 'footer', texto: 'frase 4' },
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];    //assosiação via desestruturação
    let criaTag = document.createElement(tag);
    // criaTag.innerText = texto;
    let textoCriado = document.createTextNode(texto);
    criaTag.appendChild(textoCriado);
    div.appendChild(criaTag);    //div criada acima, adicionamos a tag criada com todos elementos for       
}

container.appendChild(div);