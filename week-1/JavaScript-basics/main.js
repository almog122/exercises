//Exercise 1
console.log((5 > 2) && false)

//Exrcise 2
let didBoughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if (didBoughtTesla) {

  if (isUSCitizen) {

    if (currentYear - yearOfTeslaPurchase >= 4) {

      console.log("would you like to upgrade?");
    } else {

      console.log("are you satisfied with the car?");
    }

  } else {

    console.log("would you like to move to the US");
  }
}
else{

  console.log("are you are interested in buying tesla");
}

//Exrcise 3
const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.splice(1,2)

//numbers[3] = 1;
numbers.splice(3,1,1) //another way , but code abuse too complicated.

//numbers.splice(numbers.length - 4,4)
//numbers.splice(- 4) //better way it will delete only the last 4
numbers.splice(4 , 4) //another way , depends on the array legnth so not generic

// numbers.push(0);
// numbers.push(...(numbers.splice(0, numbers.length - 1)))
// numbers.splice(0,0,0) // another way
numbers.unshift(0); // better way
console.log(numbers);

//Exercise 4
let p1 ={
  name:"Jill ",

  age:21,

  city: "dimona"
}

let p2 ={
  name:"Robert ",

  age:21,

  city: "dimona"
}

if(p1.age == p2.age){
    if(p1.city == p2.city){
      console.log("Jill wanted to date Robert")

    } else{
      console.log("Jill wanted to date Robert but couln'nt")
    }
}

//Exercise 5
const library  = [
  books = [
    {title : "book1", author : "simon" },
    {title: "book2", author: "mary"},
  ] 
]

//Exercise 6

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for(let nameIndex in names){

  people[nameIndex] = {name: names[nameIndex], age: ages[nameIndex]}
}

console.log(people);

for(let person of people){
  console.log(`${person.name} is ${person.age} years old`);
}

// //Exercise 7
// const posts1 = [
//   {id: 1, text: "Love this product"},
//   {id: 2, text: "This is the worst. DON'T BUY!"},
//   {id: 3, text: "So glad I found this. Bought four already!"}
// ]

// for(let i in posts1){

//   if(posts1[i].id == 2){

//     post.splice(i, 1);
//   }
// }



//Exercise 7
// const posts2 = [
//   {
//     id: 1, 
//     text: "Love this product",
//     comments: []
//   },
//   { 
//     id: 2, 
//     text: "This is the worst. DON'T BUY!", 
//     comments: [
//                 {id: 1, text: "Idiot has no idea"}, 
//                 {id: 2, text:"Fool!"}, 
//                 {id: 3, text: "I agree!"}
//               ]
//    },
//    {
//     id: 3, 
//     text: "So glad I found this. Bought four already!",
//     comments: []
//    }
// ]

// for(let i in posts2){

//   if(posts2[i].id == 2){
    
//     for(let j in i){

//       if(i[j].id == 3){

//         posts2[i].splice(j , 1)
//       }

//     }
//   }
// }


//extension 

// const dictionary = {
//   "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
//   "B": ["Banana", "Bonkers", "Brain", "Bump"],
//   "C": ["Callous", "Chain", "Coil", "Czech"]
// }

// for(let i of Object.keys(dictionary) ){

//   console.log(i)

//   for(let j in dictionary){

//     console.log()
//   }

// }
