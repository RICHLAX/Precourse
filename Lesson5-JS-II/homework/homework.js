// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x > y) {
    return x;
  } else if (x < y) {
    return y;
  } else {
    return x;
  }
  }

getBiggest(8, 2);

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  if (language === 'German') {
    return 'Guten Tag!';
  } else if (language === 'English'){
    return 'Hello!';
  } else if (language === 'Spanish'){
    return 'Hola!';
  } else {
    return 'Hello!';
  }
}

greeting('German');

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  if (num === 10 || num === 5){
    return true;
  } else {
    return false;
  }
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  if (num < 50 && num >20){
    return true;
  } else {
    return false;
  }
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
let int = Math.floor(num);
if (num === int){
  return true;
} else {
  return false;
}
}

isInteger(1.5);

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num % 5 === 0 && num % 3 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0){
    return 'fizz';
  } else if (num % 5 === 0){
    return 'buzz';
  } else {
    return num;
  }
}

fizzBuzz(30);

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  for (let i = 2; i < num; i++){
    if(num % i === 0){
      return false;
    }
    }
    return true;
  }

isPrime(23);

let students = ['Dan','Rich','Punit','Shafi'];

function returnFirst(arr) {
  // return the first item from the array
  return (arr[0]);
}
returnFirst(students);

function returnLast(arr) {
  // return the last item of the array
  return (arr[arr.length - 1]);
}

returnLast(students);

function getArrayLength(arr) {
  // return the length of the array
return arr.length;
}

// Ask Dan!
let int = [1,5,7,11];

function incrementByOne(arr) {
  // arr is an array of integers  a
  // increase each integer by one
  // return the array
  let finalArray = [];
  for (let i = 0; i < arr.length; i++){
    let newInt = arr[i] + 1;
    finalArray.push(newInt);
  }
  return finalArray;
}

incrementByOne(int);

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
 arr.push(item);
 return arr;
}

addItemToArray(students, 'Terrie');

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

addItemToFront(students, 'Terrie');

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  let finalString = '';
  let wordsArr = [];
  for (let i = 0; i < words.length; i++){
    wordsArr.push(words[i]);
    wordsArr.push(' ');
  }
  for(let j =0; j < wordsArr.length - 1; j++){
    finalString = finalString + wordsArr[j];
  }
  return finalString;
  }

  let arrayOfStrings = ['Hi','my','name','is','Rich!'];
  wordsToSentence(arrayOfStrings);


  let animalArray = ['dog','cat','bird'];
  
  function contains(arr, item) {
    // check to see if item is inside of arr
    // return true if it is, otherwise return false
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === item){
        return true;
      }
      }
      return false;
    }
  
  contains(animalArray,'cat');

// Ask Dan!
let intArr = [1,2,3];
    
function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
  }
  return sum;
}

addNumbers(intArr);


let aveArr = [1,2,3];
    
function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let total = 0;
  let ave = 0;
  for (let i = 0; i < testScores.length; i++){
    total = total + testScores[i];
    ave = total/testScores.length;
  }
  return ave;
}

averageTestScore(aveArr);

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
