const shoppingCard = [{
       courseName: "javascript course",
       Price : 4999
},
{
       courseName: "phython course",
       Price : 2999
},
{
       courseName: "Data science  course",
       Price : 12999
},
{
       courseName: "cloud computing course",
       Price : 8500
},
]
const totalCourse = shoppingCard.reduce((acc,courseName) => (acc +courseName.Price),0)
console.log(totalCourse);

