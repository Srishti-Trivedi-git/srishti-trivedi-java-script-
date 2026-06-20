const promiseOne=new Promise(function(resolve,reject){
// do async task.
// db calls .
// cryptography
setTimeout(function(){
console.log('async task is complete')
resolve()
},1000)
})
promiseOne.then(function(){
    console.log("promise consumed")
})

// second promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2')
        resolve()
    },1000)
}).then(function(){
    console.log('async task 2 resolved')
})

// third promise 
const promiseThree=new Promise(function(resolve , reject) {
      setTimeout(function(){
        resolve({userName:"srishti",email:"srishti@example.com"})
      },1000)
})
promiseThree.then(function(user){
    console.log('user')
})

// forth promise
const promiseFour=new Promise(function(resolve , reject) {
setTimeout(function(){
    let error=true 
    if(!error){
        resolve({username:"srishti",password:"123"})
        }else{
            reject('error:something went wrong')
        }
},1000)
})
const usernae=promiseFour.then((user)=>{
console.log('user')
return user.username
})
.then((username)=>{
    console.log(username)

})
.catch(function(error){
console.log(error)
}).finally(()=> console.log('finally it is complete '))

// promise 5
const promiseFive=new Promise(function(resolve , reject) {
setTimeout(function(){
    let error=true
    if(!error){
        resolve({username:"trivedi",password:"123456"})
        }else{
            reject('error:trivedi went wrong')
        }
},1000)
})
async function consumePromiseFive(){
    try{
const response=await promiseFive
console.log(response)
}catch(error){
console.log('error')
}
}
consumePromiseFive()

async function getAllUsers(){
 try{
       const response=await fetch('https://jsonplaceholder.typicode.com/usre')
    const data= await response.json()
console.log(data)

 } catch(error){
console.log('E:',error)
 }
getAllUsers()}


