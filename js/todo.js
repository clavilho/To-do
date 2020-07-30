let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let btnElement = document.querySelector("#app button");

let todos = JSON.parse(localStorage.getItem("list_todos")) || [Exemplo];

function renderTodos() {
  listElement.innerHTML = "";
  for (todo of todos) {
    //percorre o array todos e adiciona os elementos na variavel todo
    let todoElement = document.createElement("li");
    let todoText = document.createTextNode(todo);

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");
    let linkText = document.createTextNode("Excluir");

    let pos = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");
    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  let todoText = inputElement.value;
  if (todoText == "" || todoText == null) {
    window.alert("Impossivel adicionar esse valor");
  } else {
    todos.push(todoText); //adicionar o elemento no array
    inputElement.value = ""; //Limpar a caixa de texto
    renderTodos();
    saveToStorage();
  }
}

btnElement.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  //remove uma quantidade de itens do array baseado na posição que for passada
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}
