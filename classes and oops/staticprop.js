class user{
    construtor(username){
        this.username=username
    }
    logme(){
        console.log(`username:${this.username}`)
    }
    static createId(){
        return`123`
    }
}
const srishti =new user("trivedi")
console.log(srishti.createId())