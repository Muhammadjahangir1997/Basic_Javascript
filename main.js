
const myArr = [1,2,3,4,5]
const myNewArr = [6,7,8,9]
myArr.push(1997)             
console.log(myArr.concat(myNewArr));

console.log(myArr);      // This change original Array 
myArr.pop()              // last digit to removed for pop
console.log(myArr);

myArr.unshift(9)
console.log(myArr);          //Unshift add your number for first 
myArr.shift()
console.log(myArr);          //Shift removed a number for first

console.log(myArr.includes(7));     // check for Array and search your number & answere true & false is answere is false

const myArr2 = myArr.join()          // join function array convert to string & answere 1,2,3,4,5
console.log(myArr);      
console.log(myArr2);
console.log(typeof myArr2);      

const na1 = myArr.splice(0,3)      //slice original Array ko change nahi karta 
console.log(na1);                  //splice original Array ko change karta hai
console.log(myArr);      

const totalArray = [...myArr,...myNewArr]   // sperate method bhi concat ke tarha kaam karta hai
console.log(totalArray);                    // ye method chapter 15 me hai
console.log(typeof totalArray);