const prompt=require("prompt-sync")({sigint:true});

// /*
// let x = 10;
// let y = 20;

// console.log(`addition of 10 and 20 is ${x} and ${y} is ${x+y}`)

// const h = "hira"
// console.log(h)

// const n1 = Boolean("64")
// console.log((n1))

// // 0, false, null, undefined, NaN - False
// // All other values are true

// string = prompt("Enter a name: ")
// console.log(string)
// */

// /*
// let amount = Number(prompt("Enter amount: "))
// let taxed_amount = amount + (0.2 * amount)
// console.log(taxed_amount)
// */

// // IF - ELSE STATEMENTS

// /*
// console.log(0 == false) // true - loose comparison
// console.log(0 === false) // false - strict comparison
// */

// /*
// console.log(2 == true) // false - since it implicitly converts the second value "true"
// console.log(Boolean(2) == true) // true - since we explicitly converted
// */

// // SWITCH CASE STATEMENTS

// /*
// let x = "abc"
// switch (x) {
//     case "abc":
//         {console.log("OK")}
//         break
//     case "def":
//         {console.log("Not OK")}
//         break
// }
// */

// // LOOPS
// // Known number of iterations, use For
// // Unknown number of iterations, use While

// const string = "test"
// console.log("for of")
// for (let x of string) {
//     console.log(x)
// }

// console.log("\nfor in")
// for (let x in string) {
//     console.log(x)
// }

/*
const str = "hira"

for (let x of str) {
    console.log(x)
}

// OBJECTS

const obj = {
    fname: "hira",
    age:30,
    lname:"tahir"
}

// console.log(obj["fname"])

for(let x in obj) {
    console.log(obj[x])
}
*/

// FUNCTIONS

/*
function myFUNC() {
    console.log("gg")
}

myFUNC()
*/

/*
function myFUNC(n, a) {
    console.log(`my name is ${n} and my age is ${a}`)
}

myFUNC("tanzeel", 21)
*/

/*
const a = function myFUNC(n, a) {
    console.log(`my name is ${n} and my age is ${a}`)
}

a()
*/

/*
const a = (n, a) => {
    console.log(`my name is ${n} and my age is ${a}`)    
}

a("Tanzeel", 21)
*/

/*
const a = (n, a) => console.log(`my name is ${n} and my age is ${a}`)   // concise ver
*/

/*
const sum = function(x, y) {
    let result = x + y
    return result
}

const sum = (x, y) => return x + y      // concise ver

const sum = (x, y) => x + y             // even more concise, automatically returns val
*/

/*
const num = (x) => x * x                // or u can do x**2
console.log(`${num(5)}`)
*/

/*
let empty = function(){}
empty()                                 // returns undefined
*/

// Tidbit: Undefined vs Null
// let x (x is undefined)
// let x = null; (x is defined but has the value of null)
// you can't declare a variable again in Js

/*
let a = 5
let a1 = 5

function addOne(a) {
    a = a + 1
    return a
}

console.log(`${addOne(a1)}`)            // Value passed by value, a copy was made
console.log(`${a1}`)
*/

/*
function maxVal(arr) {
    let max = -99999
    for (let x of arr) {
        if (max < x) {
            max = x
        }
    }
    return max
}

console.log(`${maxVal([47, 20, 68, 4])}`)

function update(arr) {
    arr[0] = 3
}

array = [47, 20, 68, 4]
update(array)
console.log(`${array}`)                 // arrays are passed by reference
*/

/*
const max = (arr) => {Math.min([20, 40, 50, 2])}
*/

// ARRAYS
const movies = ["Titanic", "Oppenheimer", "Barbie"]

/*
// Array length
console.log(`${movies.length}`)

// Arrays are iterable, objects are not
for (let w of movies) {
    console.log(w)
}
*/

// If array is const "const arr = []"
// the values inside the array can be updated
// but another array can't be assigned to the const array i.e arr = n1 would throw an error

/*
movies[3] = "new movie" // will work
let qq = [1, 2, 3]
movies = qq // won't work
*/

// Since objects are not iterable, you'll have to iterate over them manually
/*
let qq = [1, "yy", 3, {name: "xyz", youtube: "hi"}, "yet"]
for(let w of qq) {
    if(typeof(w) == "object") {
        for(let x of Object.values(w)) console.log(x)
    }
    else console.log(w)
}
*/

/*
movies.push("cars")                         // insert at last index
console.log(`${movies}`)

movies.unshift("app")                       // insert at 0th index
console.log(`${movies}`)
*/

// movies.splice(0, 1)                      // delete from 0 (inclusive) till 1 (exclusive)
/*
movies.splice(3, 7)
console.log(`${movies}`)
*/

/*
function func(x) {
    console.log(x)
}
movies.forEach(func)                        // takes a function as parameter
*/

let qq = [1, "yy", 3, {name: "xyz", youtube: "hi"}, "yet"]
qq.forEach((x, y) => {
    console.log(`${x} has index ${y}`)
})