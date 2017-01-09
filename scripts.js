// store todos in an object
var todosList = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function() {
        // if everything is true, make it false
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        // get number of  completed todos
        for (var i = 0; i < totalTodos; i++ ) {
            if (this.todos[i].completed) {
                completedTodos++;
            }
        }
        if (completedTodos === totalTodos) {
            // make everything false
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
    }
};

var handlers = {    
    addTodo: function() {
        var addTodoTextTextInput = document.getElementById('addTodoText');
        todosList.addTodo(addTodoTextTextInput.value);
        addTodoTextTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todosList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todosList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
        view.displayTodos();        
    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todosList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        view.displayTodos();        
    },
    toggleAll: function() {
        todosList.toggleAll();
        view.displayTodos();        
    }
};

var view = {
    displayTodos: function() {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for (var i = 0; i < todosList.todos.length; i++) {
            var todoLi = document.createElement('li');
            var todo = todosList.todos[i];
            var todoTextWithCompletion = '';

            if (todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }

            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        }
    }
};
