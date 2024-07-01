let todoList = [];

function showAddTodo() {
  let inputContainer = document.getElementById("todoInputContainer");
  inputContainer.style.display =
    inputContainer.style.display === "none" ||
    inputContainer.style.display === ""
      ? "block"
      : "none";
}

function addTodo() {
  let input = document.getElementById("todoInput");
  let todoText = input.value.trim();

  if (todoText !== "") {
    let todo = {
      text: todoText,
      time: new Date().toISOString(),
    };
    todoList.push(todo);
    input.value = "";
    displayTodos();
  }
}

function displayTodos() {
  let ul = document.getElementById("todoList");
  ul.innerHTML = "";

  todoList.sort((a, b) => new Date(a.time) - new Date(b.time));

  todoList.forEach((todo, index) => {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = todo.text;
    li.appendChild(span);

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-button");
    editButton.onclick = () => editTodo(index);
    li.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTodo(index);
    li.appendChild(deleteButton);

    ul.appendChild(li);
  });
}

function editTodo(index) {
  let newTodoText = prompt("Edit todo:", todoList[index].text);
  if (newTodoText !== null && newTodoText.trim() !== "") {
    todoList[index].text = newTodoText.trim();
    displayTodos();
  }
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  displayTodos();
}
