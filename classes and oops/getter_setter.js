class user{
    constructor(email, password){
        this.email=email
        this.password=password
    }

get email(){
    return this._email.toUpperCase()
}
set email(newemail){
    this._email=newemail.toUpperCase()
}
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password=value.toUpperCase()
    }
}
const srishti=new user ("srishti@gmail.com","123")
console.log(srishti.email)