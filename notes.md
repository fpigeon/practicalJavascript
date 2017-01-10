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

## Version 9: Escape the Console

Add view object and displayTodos function that grabs ul from html. Then it clears all html before moving on. Then for each todo item, it appends an `li` element.

To actually add the data from the todos array, we have to setup the `todoLi`. We access the content of the it by accessing the `todoLi.textContent` method. Next we set the it to the current todo item's text that we are iterating on.

```javascript
todoLi.textContent = todosList.todos[i].todoText;
```

## Version 10: Functions inside of Functions

You can run functions inside of other functions in Javascript.

### Foreach

Will iterate over items in an array using bult in javascript method `forEach(function)`. Say you have some students in an array.

```javascript
var students = ['jon', 'frank', 'paul'];
```
and you have a function called `logName()` that just prints the student's name in the console.

```javascript
function logName(name) {
    console.log(name);
}
```
You could use `forEach` to iterate over the students in the array.

```javascript
students.forEach(logName);
// jon
// frank
// paul
```

If we built a forEach function ourselves it would look like this.

```javascript
function forEach(myArray, myFunction) {
    for (var i = 0; i < myArray.length; i++) {
        myFunction(myArray[i]);
    }
}
```

To execute the new `forEach` function we would do that like this.

```javascript
forEach(students, logName);
//jon
//frank
//paul
```
### Event Listeners
You can use $0 for any element that is selected in the Inspector.

```javascript
  var tutorialElement = $0;
  tutorialElement.addEventListener('click', function(event){
      console.log(event);
      console.log('tuts element was logged')
  });
```

You can gain a lot of metadata from the `event` object but it is **optional**.

### B