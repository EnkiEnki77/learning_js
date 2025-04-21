// These are really bad functions, they're not very reusable. The data is hardcoded in,
// so if we wanted to utilize the same functionality but with different data we'd then
// have to make a whole new function. It's very repetitive and not very DRY (Don't Repeat Yourself)

function tenSquared() {
    return 10 * 10;
}

function nineSquared() {
    return 9 * 9;
}

function eightSquared() {
    return 8 * 8;
}

function sevenSquared() {
    return 7 * 7;
}

// That's where arguments/parameters come into play. They allow us to generalize the data
// of our function definitions, so that the data isnt defined until the function is called
// this makes the functionality reusable. We don't have to define multiple functions, just
// the one. You'd only really define a paramterless function if you want to abstract away
// some logic to make things more readble/declarative

function numSquared(num) {
    return num * num;
}


// Functions allow us to generalize our data and determine it when the function is invoked.
// Higher order functions go a step further, they allow us to generalize the functionality
// of our functions. They take other functions as arguments.

// For example, if we had a function like this, this is a useful function, but what if instead of multiplying by 2 we
// wanted to add by 2, or subtract by 2? The functionality is hardcoded in, and unfortunately it cant be generalized by
// parameters alone. So using normal functions, we end up having to duplicate the function and just changing the small
// little piece we want to be different. This again is not very DRY (Don't Repeat Yourself) and is very repetitive.
function copyArrayAndMultiplyByTwo(arr) {
    let output = []
    for (let i = 0; i < arr.length; i++) {
        output.push(arr[i] * 2);
    }
    return output;
}

// Very similar functionality, but instead of multiplying by 2 we want to divide by 2. But because functionality was all hardcoded
// we still need a whole new function. 
function copyArrayAndDivideByTwo(arr) {
    let output = []
    for (let i = 0; i < arr.length; i++) {
        output.push(arr[i] / 2);
    }
    return output;
}


// We could instead use a higher order function, which takes a function as an argument. Allowing us to generalize the part
// of the funcitonality we might want to change while keeping the rest that will always be the same static. 

function myMap(arr, func){
    let mappedArr = []
    for (let i = 0; i < arr.length; i++) {
        mappedArr.push(func(arr[i], i, arr));
    }

    return mappedArr;
}

// Our functions functionality is now generalized, so we can pass in the functionality we want for each invocation.

console.log(myMap([1, 2, 3], (num) => num * 2))
console.log(myMap([1, 2, 3], (num) => num + 2))
console.log(myMap([1, 2, 3], (num) => num - 2))
console.log(myMap([1, 2, 3], (num) => num * 6))



function myFilter(arr, func){
    let filteredArr = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

function myForEach(arr, func){
    for (let i = 0; i < arr.length; i++) {
        func(arr[i], i, arr);
    }
}

// when a variable is assigned the invocation of a function its value in memory is undefined until the function returns a value.
let result = myMap([1, 2, 3], (num) => num * 2)


// The environment in which the thread executes code line by line and stores data in memory is called the execution context.


// We know the execution context should be popped off the stack when the return is hit in the function. Either implicitly or
// explicitly.  


// functions in JS are really first-class objects, meaning they have a lot of the same properties as objects.
// They can be passed around as arguments, returned from other functions, and assigned to variables/object properties.

// Functions stored as properties of objects are called methods.


// Any function that takes a function as input or returns a function as output is called a higher-order function.

// Any function that is passed as an argument to another function is called a callback function.


// Callbacks and higher order functions allow us to keep our code more DRY, they also allow us to run async code.



// Callbacks are functions that satisfy two conditions:
// 1. They are passed as an argument to another function.
// 2. They are invoked inside that function.

// Higher order functions are functions that satisfy at least one of two conditions:
// 1. They take a function as an argument.
// 2. They return a function as their result.