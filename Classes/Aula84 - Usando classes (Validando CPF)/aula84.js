// 705.484.450-52 070.987.720-03

class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  éSequência() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraNovoCPF() {
    
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.éSequência()) return false;
    if (!this.geraNovoCPF()) return false;
    return "CHEGUEI AQUI";
  }
}

let validacpf = new ValidaCPF("705.484.450-52");
validacpf = new ValidaCPF("111.111.111-11");
console.log(validacpf.valida());
