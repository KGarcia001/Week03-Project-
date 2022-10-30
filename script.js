//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.$

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

//Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//Do not use numbers to reference the last element, find it programmatically, $
//ages[7] – ages[0] is not allowed!
//var last = ages[ages.length - 1]?????
 
function firstLast() {
    console.log(ages[ages.length - 1] - ages[0]);
};
firstLast();

//Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).$
//Use a loop to iterate through the array and calculate the average age.$$$

ages.push(19);

function firstLast() {
    console.log(ages[ages.length - 1] - ages[0]);
};
firstLast();

console.log(ages);


function averagea(ages){
    let avg = 0;
    for ( i = 0; i < ages.length; i++){
        console.log(ages[i]);
        avg += ages[i];
        
}
return avg/ages.length;
}
console.log(averagea(ages));
    
//Average includes the number 19 from previous line of code when adding 99 to array!
//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.$
//Use a loop to iterate through the array and calculate the average number of letters per name. $

let names= ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
 console.log(names);

 let averagen = 0
 for(i=0; i < names.length; i++){
     console.log(names[i].length);
     averagen += names [i].length;
 }
 console.log (averagen / names.length);

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.$

let nameJoin =""
for (i=0; i < names.length; i++){
    nameJoin += names[i]+" ";
}
console.log(nameJoin);

//How do you access the last element of any array?$
console.log(names[5]);

////console.log(names.pop());(other)

//How do you access the first element of any array?$

console.log(names[0]);

////console.log(names.shift());(other)

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.$
//For example:namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array

//let nameLengths = names.map(function(e){
 //   return e.length;
//}); console.log(nameLengths);

let nameLengths = [];

for (var number of names){
    nameLengths.push(number.length);
    console.log(nameLengths);
}
// console.log removal gets rid of step by step affect.
//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

function sumArray(nameLengths) {
    let sum = 0;
    for (let i = 0; i < nameLengths.length; i += 1) {
      sum += nameLengths[i];
    }
    return sum;
  }
  
  console.log(sumArray([ 3, 5, 3, 5, 4, 3 ]));

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).$

function stutter(str, n) {
    console.log(str.repeat(n));
}
stutter("box", 3);

function repeatStringNumTimes(word, n) {
    var repeatedString = "";
    while (n > 0) {
      repeatedString += word;
      n--;
    }
    return repeatedString;
  }
  console.log(repeatStringNumTimes("BOX", 3));

//Write a function that takes two parameters, firstName and lastName, and returns a full name.$
//The full name should be the first and the last name separated by a space.

let firstName = "Karina";
let lastName= "Garcia";
 function fullName(firstName, lastName){
    return(firstName+ ' '+ lastName);
 }  console.log(firstName+ ' '+ lastName);

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.$
let array11 = [67, 54, 2, 2]
function totalSum(array11){
    let sum = 0;
    for (let i = 0; i < array11.length; i++){
        sum += array11[i];
    }
    if(sum > 100){
        return true
    }
    if (sum <= 100){
        return false
    }
}
console.log(totalSum(array11))

//Write a function that takes an array of numbers and returns the average of all the elements in the array.

function summmArray(array11) {
    let sum = 0;
    for (let i = 0; i < array11.length; i += 1) {
      sum += array11[i];
    }
    return sum;
  }
  
  console.log(summmArray([67, 54, 2, 2]));

//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.


function bigArray(aarrayX, arrayY){    
    var total1 = 0;
    for(var i = 0; i < aarrayX.length; i++) {
        total1 += aarrayX[i];
    }
    var total2=0;
    for(var i = 0; i < arrayY.length; i++) {
        total2 +=arrayY[i];
    }
    var avg1 = total1 / aarrayX.length;
    var avg2 = total2 / arrayY.length;
    if (avg1>avg2){
        return true;
    }
    else{
        return false;
    }
    }
    
    var a= bigArray([6,4,10],[1,2,9]);
    console.log(a);
    


//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

let moneyInPocket = 3;
let isHotOutside = 10;
function willBuyDrink(moneyInPocket, isHotOutside){
    if ((moneyInPocket >= 10.50) && (isHotOutside >= 10.50)){
       console.log(true);
    } else {
        return; false  } 
    } console.log((moneyInPocket >= 10.50) && (isHotOutside >= 10.50));

//Create a function of your own that solves a problem. 
//In comments, write what the function does and why you created it.

let monitor = 64;
let prBuiltPC= 496;
let accessories = 56;

function pcBuildCost(){
    return (monitor+prBuiltPC+accessories);
}
console.log("Total"+" "+"$"+pcBuildCost(monitor,prBuiltPC,accessories));

//wanted to collcet the sum of some pc build necessities, the function helps with adidng it for you.