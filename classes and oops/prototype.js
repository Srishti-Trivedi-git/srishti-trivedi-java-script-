// let myName ="srishti"
// let mySurname="trivedi"

// console.log(myName.trueLenght())
let myHeros = ["thor", "spiderman"]


let heroPower = {
thor: "hammer",
spiderman: "sling",

getSpiderPower: function(){
console.log(`Spidy power is ${this.spiderman}` );
}
}
Object.prototype.srishti=function() {
    console.log(`srishti is present in all objects`)
}
Array.prototype.heySrishti=function(){
    console.log(`srishti says helo`)
}

// heroPower.srishti()
myHeros.heySrishti()
// heroPower.heySrishti()

// %%%%%%%%%%%%%%%%%% inheritance%%%%%%%%%%%%%%%%%%%%%
const user={
 name:"qwerty",
 email:"qwerty@gmail.com"
}
const Teacher = {
makeVideo: true
}
const TeachingSupport = {
isAvailable: false
}         
const TASupport={
    makeAssighnment:'js assighnment',
    fullTime: true ,
    __proto__: TeachingSupport
}   
Teacher.__proto__ =user       
// new syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "ChaiAurCode       "

String.prototype.trueLength = function() {
console.log(`${this}`);
// console.log(`${this.name}`);
console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
