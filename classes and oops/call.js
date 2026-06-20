function setUsername(username){
    this.username=username
}
function createUser(username,email,password){
    setUsername.call(this,username)
    this.email=email
    this.password=password
}
const  qwerty =new createUser("srishti","srishti@gmail.com","123456789")
console.log(qwerty)