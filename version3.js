// store todos in an object
var todosList = {
    todos: ['item2', 'item2', 'item3'],
    displayTodos: function() {
        console.log('My Todos: ', this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }

};

todosList.displayTodos();
todosList.addTodo('item4');
todosList.changeTodo(0, 'first item');
todosList.deleteTodo(0);
