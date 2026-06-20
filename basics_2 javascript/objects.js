const mySym= symbol("key1")
const JsUser={
    Name="srishti",
    "fullname":"srishti trivedi",
    [mySym]:"myKey1",
    age:20,
    location:bareilly,
    email:"srishti@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","wednesday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["fullname"])
console.log(typeof JsUser.mySym)

JsUser.email="trivedi@gmail.com"
Object.freeze(JsUser)
console.log(JsUser)