// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not.
// If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".

const numDiv = (num) =>{
  if(num % 3 === 0){
    return num + " is divisible by 3"
  } else {
    return num + " is not divisible by 3"
  }

}
console.log(numDiv(15))
console.log(numDiv(17))

// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you.
// Write a function that returns a description of you.

var helloMe = {
  first_name: "Miguel",
  last_name: "Ortiz",
  age: 23,
  profession: "full-time student",
  getData: function() {return this.first_name + ' ' + this.last_name + " is " + 23 + " year old and is a " + this.profession + " at the moment"}
}

console.log(helloMe.getData())

// console.log();
//
// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

var arr = ["milk", "eggs", "apples", "bananas", "chocolate"]

const newArr = (array) => {
  let arr1= array.filter((value, index)=>{
    return value[0] && value[3] && value[5]
  })
  return arr1.join(" ")
}
console.log(newArr(arr))

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr).
// Assume numbers and punctuation symbols will not be included in the parameter.

const alphabetSoup = (str) => {
 return str.toLowerCase().split('').sort().join("")
}
console.log(alphabetSoup("hello"))

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.
//
var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

function animalNums(arr1,arr2){
  let newArr = []
  for(let i=0; arr1.length; i++)
  for(let i=0; arr2.length; i++)
  newArr.push(arr1[i], arr2[i])
  }
console.log(animalNums(nums,nouns))


// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.

var arrOfNums = [1,2,3,4,5]

let arrMult5 = arrOfNums.map(value=>value * 5)

console.log(arrMult5);
