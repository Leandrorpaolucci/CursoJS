const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

// essa função escuta a tecla enter do teclado
inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
}); // pressionar

//Quando uma tarefa é enviada, essa função limpa o input
function limpaInput() {
  inputTarefa.value = ""; // limpa a caixa input para " nada "
  inputTarefa.focus(); // é como se eu tivesse clicado dentro da caixa, pra deixar o foco na caixa input
}

function criaBotaoApagar(li) {
  li.innerText += " ";
  const botaoApagar = document.createElement("button");
  //botaoApagar.classList.add('apagar');  // adiciona uma classe para que possamos criar uma função para apagar
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "apagar");
  botaoApagar.innerText = "Apagar";
  li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

btnTarefa.addEventListener("click", function (e) {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener("click", function (e) {
  const elemento = e.target;
  if (elemento.classList.contains("apagar")) {
    elemento.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim(); //trim, remove espaços o array string
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas); // converte o array em string
  localStorage.setItem("tarefas", tarefasJSON); // salva na memoria do navegador
  console.log(tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(tarefas);
    
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas()