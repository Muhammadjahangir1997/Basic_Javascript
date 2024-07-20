const mybook = [
{title: "one", genre: "Fiction", public: 1980, edition: 2004},
{title: "two", genre: "non-Fiction", public: 1999, edition: 2010},
{title: "three", genre: "science", public: 1990, edition: 2002},       
{title: "four", genre: "History", public: 1980, edition: 2008},
{title: "five", genre: "History", public: 2000, edition: 2016},
{title: "six", genre: "science", public: 2004, edition: 2020},
{title: "seven", genre: "fiction", public: 1950, edition: 1998},
 ]


const userbook = mybook.filter((book)=> (book.public >= 2000 ))

console.log(userbook);















