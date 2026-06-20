const myArray = [1, 2, 3, 4, 5];
console.log(myArray[0]);
const myArr2=[9, 8, 7, 6, 5];
console.log(myArr2[0]);


// array methods 
myArray.push(6);
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.unshift(0);
console.log(myArray);
myArray.shift();
console.log(myArray);

const newArr=myArray.join()
console.log(newArr)
console.log(typeof newArr)
console.log("A", newArr)
const myn1=newArr.slice(0,5)
console.log(myn1)
console.log(typeof myn1)

