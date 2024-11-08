const todos = [];

function addTodo() {
  const titleInput = document.getElementById('todo-title');
  const dateInput = document.getElementById('date-picker');
  const title = titleInput.value;
  const dueDate = dateInput.value;

  if (title) {
    todos.push({ title, dueDate });
    render();
    titleInput.value = '';
    dateInput.value = '';
  }
}

function render() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  todos.forEach((todo, index) => {
    const todoItem = document.createElement('div');
    todoItem.innerText = `${todo.title} - ${todo.dueDate}`;
    todoItem.onclick = () => removeTodo(index);
    todoList.appendChild(todoItem);
  });
}

function removeTodo(index) {
  todos.splice(index, 1); // delete entries from the array
  render();
}