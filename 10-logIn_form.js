const userLoggedin = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInEmail = false


if (userLoggedin && debitCard ){
    console.log("Allow to buy course");
}
if (loggedInEmail || loggedInFromGoogle) {
    console.log("User Logged In");
    
}else{
    console.log("Please Login");
}
