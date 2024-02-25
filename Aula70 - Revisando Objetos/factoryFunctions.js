// Factory function / Constructor function / Classes

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa('Leandro', 'Ribeiro');
console.log(p1.nomeCompleto);