// Question 1 - How many vowels?
// Write code that counts the number of vowels in a string.
// +1 bonus points if you ask for the string from the user

//var sentence = "How many vowels do you think are in this one?";
// Your solution goes here.

let userInput = prompt("Please enter a word");

console.log("You entered: " + userInput); 

function getVowels(userInput) {
  var vowelsCount = 0;

  // Turn the input into a string
  var string = userInput.toString();

  // Loop through the string
  for (var i = 0; i < string.length; i++) {
    // If a vowel, add to vowel count
    if ("aeiouAEIOU".indexOf(string.charAt(i)) !== -1) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

console.log("Number of vowels: " + getVowels(userInput));

// adapted from this stack overflow forum: https://stackoverflow.com/questions/29450399/counting-number-of-vowels-in-a-string-with-javascript
// used MS copilot for debugging


// Question 2 - Odd Addition
// You'll be given three arrays containing two numbers each. 
// Write a script that checks if the numbers are odd or even.
// If they are odd, multiple them and return or print the results.
// If they are even, add them and return or print the results.
// For example, [3, 5] would return 15; but [3, 6] would result in 9

const first = [5, 7];
const second = [12, 3];
const third = [7, 7];
// Your solution goes here

const isEven = (n) => n % 2 === 0;
const isOdd = (n) => !isEven(n);

const processArray = (array) => {
  const [a, b] = array;
  if (isOdd(a) && isOdd(b)) {
    return a * b;
  } else {
    return a + b;
  }
};

console.log(processArray(first)); 
console.log(processArray(second)); 
console.log(processArray(third));  


// adapted from https://www.geeksforgeeks.org/javascript-program-to-find-sum-of-odd-numbers-in-an-array/ 
// used MS copilot for debugging

// Question 3 - Twenty One
// You'll receive three arrays with two numbers again.
// If the two numbers add up to 21, return True
// If they don't, return False unless they are identical
// If they are identical, return "Split"

const p = [19, 2];
const q = [4, 6];
const r = [16 ,16];
// Your solution goes here

const checkArray = (array) => {
  const [a, b] = array;
  if (a + b === 21) {
    return "True";
  } else if (a === b) {
    return "Split";
  } else {
    return "False";
  }
};

console.log(checkArray(p));
console.log(checkArray(q));
console.log(checkArray(r));

//I used MS Copilot to help me after writing some psudeocode

// Question 4 - FizzBuzz
// This is a classic programming question.
// Print out the numbers from 1 to 100, except
// If the number is a multiple of three, print Fizz
// If the number is a multiple of five, print Buzz
// If the number is a multiple of three and five, print FizzBuzz
// Your output might look something like 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz ....

// Your solution goes here

for (var i = 1; i < 101; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}

//from https://flexiple.com/javascript/fizzbuzz-javascript 


//Question 5 - Start my car
// Create a car variable (object)
// Give it the properties of make, model, year, and color
// Give it a start method that returns to the console "Vroom vroom! Car started!" or something similar
// Call the start method

//Your solution goes here

let car = {
  make: "Toyota",
  model: "Land Cruiser",
  year: 1998,
  color: "white",
  start: function() {console.log("Vroom vroom!"); }
};

car.start()

// adapted from https://www.w3resource.com/javascript-exercises/oop/javascript-oop-exercise-3.php 

//Question 6 - How many states are there?
// Ok, this seems silly, but we're actually going to work with AJAX to get some data and process it
// You need to load a geojson file, convert it to json, and then count up the number of entires it has...
// In other words, print out to the console log the number of airports in the data set
// You'll want to use chapter 3 of the roth textbook and our Monday lecture here.
// +2 bonus points if you tell me first how many total airports there are and then how many civilian 
// feel free to explore the data in QGIS (or arc). If you know how to answer the question in QGIS, how do you transfer it to javascript?

function jsAjax(){
    var request = new Request('https://cdn.glitch.global/45c8ffb6-e284-4197-88b2-373c9436357b/airports.geojson?v=1737854879047'); //I decided to host on glitch API for testing


    var init = {
      method: 'GET'
  };

    fetch(request, init)
    .then(conversion)
    .then(callback)
};

function conversion(response) {
  return response.json();
}

function callback(data) {
  console.log('Number of Airports', data.features.length);
}

window.onload = jsAjax();

//utilized the textbook and your email :)

// Question 7 - Dynamically creating a list
// This problem draws heavily from Chapter 2 of your workbook (the Roth et al.), so make sure to review there if you're stuck!
// I'm going to give you two arrays as variables. One will have city names, the other their populations.
// You need to create a FUNCTION that takes in the two arrays (so the data is not created within them, this is different from the example in Chapter 2)
// The function should take in the arrays, combine them into an HTML FORMATTED TABLE
// The table should be added to an imaginary div with the id "mydiv"

var cities = ['Corvallis', 'Portland', 'Eugene', 'Albany'];
var pops = ['59920', '652500', '176650', '56470'];

function createTable(cities, pops) {

  const table = document.createElement('table');
  

  const headerRow = document.createElement('tr');
  const cityHeader = document.createElement('th');
  cityHeader.textContent = 'City';
  const popHeader = document.createElement('th');
  popHeader.textContent = 'Population';
  headerRow.appendChild(cityHeader);
  headerRow.appendChild(popHeader);
  table.appendChild(headerRow);
    

  for (let i = 0; i < cities.length; i++) {
    const row = document.createElement('tr');
    const cityCell = document.createElement('td');
    cityCell.textContent = cities[i];
    const popCell = document.createElement('td');
    popCell.textContent = pops[i];
    row.appendChild(cityCell);
    row.appendChild(popCell);
    table.appendChild(row);
  }
    

  var mydiv = document.getElementById('mydiv');
  if (mydiv) {
    mydiv.appendChild(table);
  }
}

createTable(cities, pops);


// utilized chapter 2 of the workbook and used MS copilot for debugging

