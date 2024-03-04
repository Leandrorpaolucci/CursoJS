class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVolume() {
    this.volume += 2;
  }

  // Método de instância
  diminuiVolume() {
    this.volume -= 2;
  }

  // Método estático
  static canalPrimeVideo() {
    console.log("Carregando o Prime Video");
  }
}

const controle = new ControleRemoto("LG");
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
console.log(controle);
ControleRemoto.canalPrimeVideo();
