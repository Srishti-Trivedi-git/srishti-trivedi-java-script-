const user ={
_email:'qwerty@gmai.com',
_password:"abc",

get email(){
return this._email.toUppeCase()

},
set email(value){
    this_email=value
}
}

const qwerty=Object.create(user)
console.log(qwerty._email)