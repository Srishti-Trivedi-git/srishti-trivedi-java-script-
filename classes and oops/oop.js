const user={
    username:"srishti",
    logInCount:8 ,
    signedin:true,

    getUserDetails:function(){
        // console.log("got user details from database.")
        // console.log(`username:${this.usernamer}`);
        console.log(this)
    }

};
console.log(user.username)
console.log(user.getUserDetails())


// ***********constructor function***************
// const promiseOne=new Promise(function(resolve , reject){
// const Date=new Date()
function userTwo(username,loginCount,isLoggedIn){
    this.username=username 
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    return this 
}


const userOne= new userTwo("srishti",12,true)
const userThree= new userTwo("trivedi",18,false)
console.log(userOne)
console.log(userThree)

 
// 1.when we use "new"it means a new obj is created. 
// 2.constructor func is called.
// 3.all arguments are injected in the constructor obj.
// 4.we get the values.
