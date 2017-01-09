# Notes from Practical Javascript

## HTML
Add onclick attribute to element to fire js code

```html
<button onclick="handlers.displayTodos()">Display Todos</button>
```

## Javascript
### Objects
Object in JS like a class that can hold many methods

```javascript
var todosList = {};
```
### Methods
Methods in JS are inside the object and called via `object.method()`.

```javascript
displayTodos: function() {
    ///code here
}
```
### Looping

Loop thru all array elements with a for loop like this. Take note of the `i < this.todos.length` inside the for statement.

```javascript
for (var i = 0; i < this.todos.length; i++) {
    if (this.todos[i].completed) {
        console.log('(x)',this.todos[i].todoText)
    } else {
        console.log('( )',this.todos[i].todoText)
    }
}
```
### Debugger
Run the debugger using the debugger command and then step thru the logic a step at a time.

```javascript
displayTodos: function() {
    debugger;
}
```
### Accessing the DOM

Use `query selector` to search the DOM and assign to a variable.

```javascript
var todosUl = document.querySelector('ul');
```
 
Create html elements using `createElement`

```javascript
var todoLi = document.createElement('li');
```

Build specifically under a parent element using the `appendChild`

```javascript
todosUl.appendChild(todoLi);
```

## Version 9

Add view object and displayTodos function that grabs ul from html. Then it clears all html before moving on. Then for each todo item, it appends an `li` element.

To actually add the data from the todos array, we have to setup the `todoLi`. We access the content of the it by accessing the `todoLi.textContent` method. Next we set the it to the current todo item's text that we are iterating on.

```javascript
todoLi.textContent = todosList.todos[i].todoText;
```