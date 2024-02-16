function recursiva(max) {
  console.log(max);
  if (max >= 10) return;
  max++;
  recursiva(max); // chama a função novamente
}

recursiva(0);
