class user{
    constructor(username,email,password){
        this.username=username
        this.email=email
    this.password=password
    }
encryptpassword(){
    return `${this.password}abc`
}
changeUsername(){
    return`${this.username.toUpperCase()}`
}
}
const qwerty=new user("srishti","srishti@gmail.com","123456789")
console.log(qwerty.encryptpassword())
console.log(qwerty.changeUsername())