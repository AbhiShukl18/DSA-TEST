// Question 1:- Write a JavaScript for loop that iterates from 0 to 10 and prints only the even numbers.


// for(var i=0; i<=10;i++)
//     {

// if( i!=0 && i%2===0 ){
//     console.log(i)
// }
// }

// Question 2:Write a JavaScript while loop that calculates the factorial of a given number.

// var num1=6; 
// var fact=1
// while(num1>0)
//     {
//         fact=fact*num1
//         num1--;
//     }
//     console.log(fact)


// Question 3: Create a JavaScript function that takes an array of numbers as input and returns the sum of all the numbers using a for loop.

// var array=[2,4,1,2,4];
// sum=0;
// function result(){

//     for(i=0; i<array.length; i++){

//         sum=sum+array[i];
//     }
//     console.log(sum);
// }

// result();

// Question 4: Write a JavaScript program that generates a Fibonacci sequence up to a certain number n, using a while loop.
//0,1,1,2,3,5,8.....

// var num1=0;
// var num2=1;
// var fibo;
// while(num1<10){
//     console.log(num1); // 0, 1, 1, 2, 3
//     fibo=num1+num2;   // fibo=0+1=1, 1+1=2, 1+2=3, 2+3=5
//     num1=num2;        // num1= 1, 1, 2, 3
//     num2= fibo;       //num2=1, 2, 3, 5
// }


// Question 5:Create a JavaScript function that takes an array of strings as input and returns a new array with only the strings that have a length greater than 5 characters.

// students=["Abhi","Rudra","Abhishek","Honey"]
//  for(i=0; i<=students.length-1; i++){

//     // console.log(students[i]);
//     if(students[i].length>5){
//         console.log(students[i]);
//     }
//  }

// Question 6:Write a JavaScript function that takes a number as input and returns true if it is a prime number, otherwise false.



// Question 7:Create a JavaScript program that calculates the sum of all numbers from 1 to 1000 that are divisible by both 3 and 5.

// for(var i=1; i<=1000; i++){
//     if(i%3===0 && i%5===0){
//         console.log(i)
//     }
// }

// Question 8: Write a JavaScript function that takes a string as input and returns the reverse of the string using a for loop.

// function reverse(string){

// const output= string.split("").reduce((accumulator, currentvalue) => currentvalue + accumulator, "")


// console.log(output);

// }

// reverse("abhi")