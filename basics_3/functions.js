function sayMyName () {
console. log("H");
console. log("I");
console. log("T") ;
console. log("E") ;
console. log("S") ;
console. log("H") ;
}
sayMyName ()
function addTwoNumbers (number1, number2) {

console.log(number1+ number2) ;}

const result = addTwoNumbers (3, 5)

console. log( "Result: ", result);
function loginUserMessage (username) {
    if(username===undefined){
        console.log("please enter a username")
    }
return '${username} just logged in'
}
console. log(loginUserMessage("hitesh") )


function calculateCartPrice(val1, val2, ... num1) {
return num1
}
console. log(calculateCartPrice (200, 400,))
const user = {
username: "hitesh",
price: 199

}

function handle0bject (anyobject) {
console. log( 'Username is ${anyobject.us) and price is ${} ');
}
handle0bject ( {
username: "sam",
price: 399

})
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))