const user = {
username: "hitesh",
price: 999,

welcomeMessage: function() {
console. log( '${this.username} , welcome to website');
}
}
user . welcomeMessage()
user.username="sam"
user.welcomeMessage()
console.log(this)


function srishti(){
    let username="qwerty"
    console.log(this.username)
}