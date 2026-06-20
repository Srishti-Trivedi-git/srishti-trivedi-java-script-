class User {
constructor (username) {
this.username = username
}


logMe() {
    console.log(`USERNAME is ${this.username}`)
}
}
class teacher extends User{
  constructor(username,email,password){
    super(username)
     this.email=email
    this.password=password
  }
  addCourse(){
    console.log(`a new course was added by ${this.username}`)
  }
}
const qwerty=new teacher("srishti","srishti@gmail.com","123456789")
qwerty.addcourse