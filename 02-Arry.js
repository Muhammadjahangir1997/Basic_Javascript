const numberArr = [1,2,3,[4,5,[7,8,9],4,6],8]  // flat multipal Array ko singal line me karde ta hai
const newNumArr = numberArr.flat(Infinity)
console.log(newNumArr);