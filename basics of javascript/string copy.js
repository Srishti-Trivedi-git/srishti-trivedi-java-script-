const name ="srishti"
const rollNumber="123456"
// console.log(name+" "+rollNumber)
console.log(`my name is ${name} and my rollNumber is ${rollNumber}`);
const surname=new String('trivedi')
console.log(surname)
console.log(surname[0])
console.log(surname.length)
console.log(surname._proto_)
console.log(surname.toUpperCase())
console.log(surname.charAt(3))
console.log(surname.indexOf('i','i'))

const newstring=surname.substring(0,3)
console.log(newstring)
const newstring2=surname.slice(-7,-3)
console.log(newstring2)
const surname2=new String('          trivedi        ')
console.log(surname2)
console.log(surname2.trim())
const surname3=new String('Agni hot ri')
console.log(surname3.split(" "))
