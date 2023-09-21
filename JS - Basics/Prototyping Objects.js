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

