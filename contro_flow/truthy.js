const userEmail= "qwert@ example.com";
if(userEmail){
    console.log("email is valid");
}
else{
    console.log("email is not valid");
}
//********** */ falsyvalues 
// false
// 0
// ""
// null
// undefined
// NaN
// truthy values *************
// "0"," ",[],{}=> all are truthy values
// nullish coalescing operator
let myvar=null;
let myvar2=myvar ?? "default value";
console.log(myvar2);