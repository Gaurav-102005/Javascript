// Primitive
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["milkman", "doga", "actionkamin"];

let myObj = {
    name: "gaurav",
    age: 20
}

const myFunction = function() {
    console.log("Hello World")
}