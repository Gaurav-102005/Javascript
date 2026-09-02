function multiplyBy5(num) {
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function() {
    this.score++
}
createUser.prototype.printMe = function() {
    console.log(`price is ${this.score}`)
}

// new keyword helps to add increment and printMe 
// in the prototype for new objects like chai and tea 
const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()
