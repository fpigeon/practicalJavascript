var todos = [
    'item1',
    'item2',
    'item3'
];

function displayTodos() {
    console.log('My todos are: ', todos);
}
function addTodo(newTodo) {
    todos.push(newTodo);
    displayTodos();
}
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

displayTodos();
addTodo('item4');
changeTodo(0, 'changed again');
deleteTodo(0);
