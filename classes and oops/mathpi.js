const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter)
const qwerty={
    name :'srishti',
    score:'456',
    isAvailable:'true'

}
console.log(qwerty)
Object.getOwnPropertyDescriptor(qwerty,"name")
Object.defineProperty(qwerty,'score',{
    writable:false,
      enumerable:false,
})
console.log(Object.getOwnPropertyDescriptor(qwerty,"name"))