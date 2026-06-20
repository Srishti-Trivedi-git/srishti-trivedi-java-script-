let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toTimeString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());       
let myTimeStamp = Date.now();
console.log(myTimeStamp);
let mydate2 = new Date(2024, 5, 20, 10, 30, 0);
console.log(mydate2.toString());    
console.log(mydate.getMonth());


// date********************
let myDate = new Date();
myDate.toLocaleString('default',{
    month:'long',
    day:'2-digit',
    year:'numeric',
    weekday:'long'      
});

