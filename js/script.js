//ALAB 308.1.1//

//-----Part 1: Math Problems-----//
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isOver25 && isUnique;



//Check if all numbers are divisible by 5. Cache the result in a variable.

console.log(n1 % 5 ==0);

console.log(n2 % 5 ==0);

console.log(n3 % 5 ==0);

console.log(n4 % 5 ==0);


//Check if the first number is larger than the last. Cache the result in a variable.

console.log(n1 > n4);


//Accomplish the following arithmetic chain.

console.log(n1 - n2 * n3 / n4 );


//Part 2: Practical Math

//Car Fuel Efficiency.
let perGallon1 = 30;
let perGallon2 = 28;
let perGallon3 = 23;

//Distance, Budget, Fuel Cost.
let totalDistance = 1500;
let totalBudget = 175;
let fuelCost = 3;

//How many gallons of fuel will you need for the entire trip.
let trip1 = totalDistance / perGallon1;
let trip2 = totalDistance / perGallon2;
let trip3 = totalDistance / perGallon3;



//Will your budget be enough to cover the fuel expense.
let trip1fuel = trip1 * fuelCost < totalBudget;
console.log(trip1fuel);
let trip2fuel = trip2 * fuelCost < totalBudget;
console.log(trip2fuel);
let trip3fuel = trip3 * fuelCost < totalBudget;
console.log(trip3fuel);

//How long will the trip take in hours.

let speed1 = 55;
let speed2 = 60;
let speed3 = 75;

let tripTime1 = totalDistance / speed1;
console.log(`The total trip time for 55 MPH: ${tripTime1}`);
let tripTime2 = totalDistance / speed2;
console.log(`The total trip time for 60 MPH: ${tripTime2}`);
let tripTime3 = totalDistance / speed3;
console.log(`The total trip time for 75 MPH: ${tripTime3}`);

//I believe 60 MPH would be the most efficent speed for traveling. 60 MPH is fater than 55 and still within budget. 75 miles brings down the efficency making it out of our budget.

