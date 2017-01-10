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

## Version 10
Introduction to HyperDev

### return statement

In order to get `result` out of the function you have to use the `return result;`

```javascript
function multiplyTwoNumbers(a, b) {
    var result = a * b;

    return result;
}
```
### Create Delete button

* Create DOM elements using `createElement('elementName');`
* Create Text inside DOM element using `textContent` property.
* Add CSS Classes via the `className` property.

```javascript
createDeleteButton: function() {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';

        return deleteButton;
    }
```

### Adding IDs
Add an id to an item by using the `.id` and assign it from the iterator.

```javascript
todoLi.id = i;
```

### Delete Buttons should have acess to the todo id

Next we want to access the `ul` element that holds our todo items that are `li`. We add an event listener to the `ul` so that anytime we click on the delete button we have all the data aka `event` associated with the `li` that contains the id. Next we console the `event.target.parentNode.id` that contains the id from the li element.

```javascript
var todosUl = document.querySelector('ul');
todosUl.addEventListener('click', function(event){
    console.log(event.target.parentNode.id);
});
```