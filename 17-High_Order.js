
const arr =[1,2,3,4,5]

   for (const num   of arr) {
      console.log(num);
      
   }

const greeting = "Hello world!"
for (const greet of greeting) {
   console.log(greet);
   
}

//Map

const map = new Map ()
map.set('pk',"pakistan")
map.set('ch',"china")
map.set('pk',"pakistan")
map.set('IN',"India")

console.log(map);
for (const [key, value ]of map) {
   console.log(key,":-", value);
   
}



const myObject = {                // THIS CODE OBJECT NOT WORKING  IS NO ITERABLE
    game1 : "superman",
    game2 : "ironman"
 }
 for (const [key,value] of myObject) {
 console.log(key, value);
 }
 
const myObect = {
       js : "javascript",
       cpp : "C++",
       rb : "ruby",
       swift : "swift by apple"
    }
    for (const key in myObect) {
    console.log(`${key} is full form is${myObect[key]}`);
    }
    


