// let myName = "hitesh     "
// let mychannel = "chai    "

// console.log(myName.trim().length)
// console.log(myName.truelength)

let myheros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidey power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function() {
    console.log(`hitesh is present in all objects`)
}

// heroPower.hitesh()

Array.prototype.heyHitesh = function() {
    console.log(`Hitesh says hello`)
}

// myheros.hitesh()
// myheros.heyHitesh()
// heroPower.heyHitesh()

// Inheritance

const User = {
    username: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode      "

String.prototype.trueLength = function() {
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
