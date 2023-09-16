

/*
const arr=[1, 2, 3]

// Returns same type of array
const squared=arr.map (
    function(item) {
        return item**2
    }
)
*/

// Returns values in same type of array which mach filter condition
/*
const arr = [1, 2, 3, 4]

const odd = arr.filter(
    function(item) {
        return item % 2 !== 0
    }
)
*/

/*
const arr = [{name:"h", grade:20}, {name:"g", grade:70}, {name:"q", grade:90}]

const st = arr.filter(
    function(item) {
        return item.grade > 70
    }
)
*/

/*
const arr = [1, 2, 3]
// Returns into a single value
const sum = arr.reduce(
    function(res, item) {
        return res + item
    }
)
*/

/*
// Returns true if true for even one value
const arr = [1, 2, -4, 3, -6]
const t = arr.some(
    function(item) {
        return item < 0
    }
)

console.log(t)

// Returns true if true for all values
const t = t.every(
    function(item) {
        return item > 0
    }
)
*/

/*
"ali".toUpperCase()
console.log("ali" === "Ali".toLowerCase())
*/

/*
const str = "aliza"
const arr=Array.from(str)   // converting string to array

arr.forEach(elem=>console.log(elem))
*/

/*
const str = "jan,feb,march"
const month = Array.from(Str)
month = str.split(",")
*/

const obj = {
    n1: "hira",
    n2: 88
}

obj.n1
obj['n1']

let aurora={name: "Aurora", health: 20, coins: 10}
aurora.health -= 10

console.log(aurora.health)
console.log(`character named ${aurora.name} has ${aurora.health} health points`)

// function describe(character) {
//     console.log(`character named ${character.name} has ${character.health} health points`)
// }

aurora = {
    name: "Aurora", 
    health: 20, 
    coins: 10, 
    describe() {
        console.log(`character named ${this.name} has ${this.health} health points`)
    }
}

// don't create arrow function in object

aurora.describe()

const bob = aurora
bob.health -= 10

console.log(bob.health)

function Person(n1, a1) {
    this.name = n1,
    this.age = a1
}

function Person(n1, a1) {
    this.name = n1,
    this.age = a1,
    this.dispaly = function() {
        return `my name is ${this.name} and age is ${this.age}`
    }
}

const FirstChild = new Person("sara", 20)
FirstChild.dispaly()
FirstChild.age = 30
FirstChild.favgame = "none"

const ThirdChild = new Person("ali", 30)
ThirdChild.dispaly()

Person.prototype.add1 = "ok"        // Add attribute dynamically
FirstChild.add1
// SecondChild.add1
ThirdChild.add1

// Arrow functions can't be constructors
// Arrow functions can't be used as object methods