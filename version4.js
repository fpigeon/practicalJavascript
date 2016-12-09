// store todos in an object
var todosList = {
    todos: [],
    displayTodos: function() {
        console.log('My Todos: ', this.todos);
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }

};

todosList.displayTodos();
todosList.addTodo('this is an object');
todosList.changeTodo(0, 'something new');
todosList.toggleCompleted(0);
