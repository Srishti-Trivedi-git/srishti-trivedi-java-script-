function multiplyBy5(num){
    this.num=num
    return num*5
}
multiplyBy5.power=2
console.log(multiplyBy5(6))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createUser(userName,score){
    this.userName=userName
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++

}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`)
}
const srishti=new createUser("pqr",25)
const trivedi=new createUser("abc",250)
trivedi.printMe()


// %%%%%%%%%% NEW KEYWORD %%%%%%%%%%
// a new keyword is created-initiates the creation of a new keyword.
// a prototype ids linked-new obj gets linked to the prototype of the constructor function ,gives it the acces to the constructor's prototype.
// a constructor is called-the constructor function is called with specific arguments and this is bound to the newly created object,if no return value is specified from the cponstructyor ,js assumes this the newly created object to be the intended return value.
// the new object is returned -after the contructor function has been called,and it does not return the value as an array , obj,function the newly created object is returned. 