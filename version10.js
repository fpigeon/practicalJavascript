var students = ['jon', 'frank', 'paul'];

function logName(name) {
    console.log(name);
}

students.forEach(logName);

// roll our own forEach
console.log('roll our own forEach:');
function forEach(myArray, myFunction) {
    for (var i = 0; i < myArray.length; i++) {
        myFunction(myArray[i]);
    }
}

forEach(students, logName);