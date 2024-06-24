                             
    const chai = () => {              // Output value is undifine  function is not run value "This"                                
    let username = "Jahangir"
    console.log(this.username);
}
chai()

const addtwo  = (num1 , num2) =>{
    return num1 + num2
}
console.log(addtwo(3,5));

const addnum  = (num1 , num2) =>  num1 + num2
console.log(addnum(3,5));

const userName  = (num1 , num2) =>  ({username : "jahangir"})
console.log(userName());