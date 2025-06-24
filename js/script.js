// defining variables let a;
// initializing variables let a=5;
let a = 5, b=6
// + is a operator
console.log(a+b)

// block is a comprised set of instructions
{
    console.log(a-b);
}
// single line comment
/*
multi line comment
*/
// Token - smallest unit of any programming language
// keyword - A predefined word which gives a special meaning to the compiler Eg?: let, for ,null ,if
// identifier - user given names to identify parts of the code 
// Rules of identifiers
// 1. Cannot start with a number
// 2. Except $ and _ no special characters are allowed
// 3. we cannot use keywords as identifiers
function sum(a, b){
    return a+b;
}
// function is a keyword
// add, sum is a identifiers - user defined
// a and b are identifiers - user defined
// return is a keyword
// + is a operator 
// ; is a token
let d=78;
{
    let c=89; //scope variable - block variable
}
console.log(d);

let replay="pause"

function restart(){
    return replay
}
restart()
let f= "abcd" //! NEVER USE KEYWORDS AS IDENTIFIERS
//  let and function is a keyword
// c d replay restart are identifiers
// return and console are keywords
// log is a keyword
// anything with { } is called block

// Literals: Data or values which are used for variables 
let t=true

// Datatypes in Javascript
/*
1. number - any mathematical number
2. String - enclose in ' ', " ", ` `
3. Boolean - true or false
4. Null - empty 
5. undefined - its not defined yet
6. object - 
7. BigInt
8. Symbol
*/

console.log(typeof "object");  //string
console.log(typeof 'object'); //string
console.log(typeof `object`); //string
console.log(typeof 54); //number
console.log(typeof -54); //number
console.log(typeof false); //boolean
console.log(typeof null); //Object
console.log(typeof undefined); //undefined
console.log(typeof Object); //Object

// Variables
// A place holder to store a value given by the user
// A named block of memory whose value can be reterieved using the variable
// memory allocation 
// heap memory where there are lot of memory locations present with a hexadecimal address
// when you create a variable and assign it a value 
// the variable points to the memory location on the heap and not the value stored in the variable

// In js variables are dynamically typed
// strictly typed - int a =5; java C C++
// dynamically typed - let a=5, b="abcd" javascript python 
// we specifically need not mention what type of data it is while assigning variables

// ALWAYS DECLARE A VARAIBLE BEFORE USING IT
//  var a; this is a declaration statment 
//  a=20; assigning a value into a varaible

// Uncaught ReferenceError: Cannot access 'k' before initialization at script.js: 93: 2
// k = 20
// let k; 
// console.log(k);

let name="Abhinav"
let age=18
// template literals
console.log(`${name} is of age ${age}`);

// WAP to read text from the browser and print it
// let str = prompt("enter any text to print");
// console.log(str);

// WAP to input any text and print it in uppercase
// let string2 = prompt('enter any text');
// console.log(string2.toUpperCase());

// WAP to input firstname and lastname and then join both and print as whole name
let fname=prompt("enter first name")
let lname=prompt("enter last name")
console.log(`${fname} ${lname}`);