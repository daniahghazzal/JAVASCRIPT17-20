// QUESTION 1
// Declare and initialize an empty multidimensional array.
// (Array of arrays)

// let array = [];

// QUESTION 2

// Declare and initialize a multidimensional array
// representing the following matrix:

// let matrix = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// for (i = 0; i<matrix.length ; i++){

// for (j=0; j<matrix[i].length; j++){


//     document.write(matrix[i][j] );
// }
// document.write("<br>")
// }






// QUESTION 3
// Write a program to print numeric counting from 1 to 10.

// for (i=1 ; i<=10 ; i++){

// document.write(i + "<br>");

// }

// QUESTION 4

// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.


// let multiplicationTable = +prompt("Enter the number for table");
// let tableLength = +prompt("write table length");

// document.write("Multiplication table of " + multiplicationTable + " upto length " + tableLength + "<br>");


// for (i=1 ; i<=10 ; i++){

// for (i=1 ; i <= tableLength ; i++){

//     document.write(multiplicationTable + " X " + i + " = "   + multiplicationTable*i + "<br>");


// }


// }

// QUESTION 5
// Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]



// let fruits=['apple', 'banana', 'mango', 'orange', 'strawberry'];


// for(var i=0;i<fruits.length;i++){
//     document.write(fruits[i]+'<br>')
// }


// document.write('<br>')
// for(var j=0;j<fruits.length;j++){
//     document.write('Element at index '+j + ' is '+fruits[j]+'<br>');}


// QUESTION 6


// Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// document.write("Counting : " );

// for (i=1; i <=15; i++){
// document.write (i + "," );

// }

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1


// document.write("Reverse Counting : " );

// for (i=10 ; i>=1; i--){

// document.write(i + ",");

// }

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18,


// document.write("Even:  ")

// for (i = 0; i <20; i++){

// document.write(i++ + ",");

// }
    
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19


// document.write("Odd:  ")

// for (i=1 ; i<=19;i=i+2){

// document.write(i + ",")

// }

// for (i=1 ; i<=19;i++){

// document.write(i + ",")
// i++

// }

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// for (i =2 ; i<=20 ; i++){
// document.write(i++ +"k " + " , ");

// }


// QUESTION 7

// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.


// let bakeryItems = ["cake","apple pie","cookie","chips","patties"];

// let userDemand = prompt("Welcome to the bakery, What would you like to order?");

// let flag = false

// for (i = 0; i < bakeryItems.length; i++){

// if(bakeryItems[i]= userDemand){

// flag = true

// break;

// }

// }


// if (flag){

//     document.write(userDemand + " is availabe " );

// }


// else {


// document.write(userDemand + " is not available " )

// }



// QUESTION 8


//  Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].


// let numbers =[24,53,78,91,12];

// let largestNumber = numbers[0];

// for (let i=0 ; i <numbers.length ; i++){

// if (largestNumber < numbers[i]){
//     largestNumber = numbers[i]


// }

// }

// document.write("largest number is : " + largestNumber  )


// QUESTION 9

// let numbers =[24,53,78,91,12];

// let smallestNumber = numbers[0];

// for (let i=0 ; i < numbers.length ; i++){

// if (smallestNumber > numbers[i]){
//     smallestNumber = numbers[i]


// }

// }

// document.write("smallest number is : " + smallestNumber  )



// QUESTION 10

// Write a program to print multiples of 5 ranging 1 to 100.

// for(i=5; i<=100; i=i+5){

//     document.write(i+ " , ")}