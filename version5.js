// store todos in an object
var todosList = {
    todos: [],
    displayTodos: function() {
		if (this.todos.length === 0) {
			console.log('Your todo list is empty!');
		} else {
			console.log('My Todos: ');
			for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed) {
                    console.log('(x)',this.todos[i].todoText)
                } else {
                    console.log('( )',this.todos[i].todoText)
                }
			}
		}
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
todosList.addTodo('first item');
todosList.addTodo('second item');
todosList.changeTodo(0, 'something new');
todosList.toggleCompleted(0);
