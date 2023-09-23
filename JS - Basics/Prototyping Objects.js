const obj = {myprop : 2}    // Built - in object

obj2 = Object.create(obj)   // Prototype of Obj

console.log(obj2.myprop)

obj3 = Object.create(obj2)  // Prototype of Prototype (Obj2) of Obj

function myTemp(n) {
    this.name = n
}

let o = new myTemp("hira")

console.log(o.name)

myTemp.prototype.display = function() {return this.anme}    // Adds method in template

// obj.prototype.add = 9 // Won't work since obj is an instance not a template

Object.prototype.addone = 9 // Unethical practice: Updates the built-in template, obviously not a good practice

function Employee(n, s) {
    this.name = n, 
    this.salary = s
}

let harry = new Employee("harry", 2000)

console.log(harry)

Employee.prototype.describe = function() {return "this is a company"}

console.log(harry.describe())

// Using constructor of Employee in HR
function HR (n, s, l) {
    Employee.call(this, n, s),
    this.language = l
}

let Sarah = new HR("Sarah", 3000, "English")

// Sarah.describe()    // Even when constructor of Employee is called, object not attached with Employee in the chain and .describe() is not called

// For this we need to add Employee as a prototype in HR
HR.prototype = Object.create(Employee.prototype)

Sarah = new HR("Sarah", 3000, "English")    // This time, prototype will be attached with Employee, however HR's prototype is dismissed and its constructor is not called
                                            // Employee > HR > Object
console.log(Sarah)

// We'll have to manually call HR constructor

HR.prototype.constructor = HR

// Rather than all this mess, we can use classes
class Emp {
    constructor(n, s) {
        this.name = n,
        this.salary = s
    }
}

class HR1 extends Emp{
    constructor(n, s, l) {
        super(n, s),this.language = l
    }
}

// Creating a method in the built-in array prototype
Array.prototype.upper = function() {
    for (let i in this) {
        this[i] = this[i].toUpperCase()
    }
    return this
}

function myArray (arr) {
    this.arr = arr
}

myArray.prototype = Object.create(Array.prototype)

let obj2 = {myprop : 2}
obj1 = obj2

// ... operator unpacks values

let a = [1, 2]
let a1 = [...a, 3, 4]

[a, ,b] = ["sara", "ali", "hira"]