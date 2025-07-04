// defining variables let a;
// initializing variables let a=5;
let a = 5, b = 6
// + is a operator
console.log(a + b)

// block is a comprised set of instructions
{
    console.log(a - b);
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
function sum(a, b) {
    return a + b;
}
// function is a keyword
// add, sum is a identifiers - user defined
// a and b are identifiers - user defined
// return is a keyword
// + is a operator 
// ; is a token
let d = 78;
{
    let c = 89; //scope variable - block variable
}
console.log(d);

let replay = "pause"

function restart() {
    let boat;
    return replay
}
restart()
let f = "abcd" //! NEVER USE KEYWORDS AS IDENTIFIERS
//  let and function is a keyword
// c d replay restart are identifiers
// return and console are keywords
// log is a keyword
// anything with { } is called block

// Literals: Data or values which are used for variables 
let t = true

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

let name = "Abhinav"
let age = 18
// template literals
console.log(`${name} is of age ${age}`);
console.log(' ${name}');
console.log(" ${name}");
console.log(`${name}`);


// WAP to read text from the browser and print it
// let str = prompt("enter any text to print");
// console.log(str);

// WAP to input any text and print it in uppercase
// let string2 = prompt('enter any text');
// console.log(string2.toUpperCase());

// WAP to input firstname and lastname and then join both and print as whole name
// let fname=prompt("enter first name")
// let lname=prompt("enter last name")
// console.log(`${fname} ${lname}`);

//WAP to accept any string as input along with the index to print characters present in that position
// let strp = prompt("enter the string");//abhinav
// let index = prompt("enter the index");
// console.log(strp[index]);
// console.log(strp.charAt(index));

//WAP to accept a string and a character present in that string and return its index
// let strp= "hello"
// let character= prompt("enter the character");
// console.log(strp.charCodeAt(0));
// console.log(strp.charCodeAt(1));
// console.log(strp.charCodeAt(2));
// console.log(strp.charCodeAt(3));
//! returns unicode value of the character you pass

//WAP to join two strings
// let hello = "hello"
// let world = "world"
// console.log(hello.concat(world));

//WAP to check whether a string ends with a specified substring
// let question = "Hey did you do your homework?"
// console.log(question.endsWith("ork?"));

//WAP to check if a string includes any substring or character?
// console.log(question.includes("did"));

//WAP to cut a portion of the string 
// let substr = question.slice(0, 7);
// console.log(substr);

// let substr2 = question.substring(0, 7)
// console.log(substr);
// Assignment find the difference b/w substring and slice


/* Operators in JS
=========================
1. Airthmetic - are used only on datatype number
    + addition
    - subtraction
    * multiplication
    / division
    % modulus
    ++ increment
    -- decrement
Examples
    

2. Logical 
    && - and
    || - OR
    ! - not
--------------AND logic -------------------
    0 -stands for False
    1 - stands for true
    input       output
    T   T       T
    rest all the time the output is False
--------------OR logic -------------------
    0 -stands for False
    1 - stands for true
    input       output
    F   F       F
    rest all the time the output is True
--------------Not logic -------------------
    !false = true
    !0 = 1
3. Assignment 
    symbol      Operator
    =           Assignment
    +=          Additional assignment
    -=          Subtractal assignment
    *=          multiplicational assignment
    /=          Divisional assignment
    %=          modulus assignment
4. Conditional
if x==2{
    //true part
    }else{
        //false part
}
Ternary operator ( condition ? 'true' : 'false' )
(x==2)? "true part" : "false part"
5. Comparison
Symbol  Function
==      Equal to or not - it checks only the value
===     Strict equal to - it checks both the value and the datatype
!=      Not equal to - only the value
!==     Strict not equal - both value and datatype
>       Greater than
<       less than
>=      Greater or equal to
<=      lesser than or equal to
6. Concatination
+       concats two strings
*/

console.log("==========Airthmetic Op examples========");
console.log(4 + 3);//7
console.log(4 - 3);//1
console.log(4 * 3);//12
console.log(4 / 3);//1
console.log(4 % 3);//1
let y = 5
console.log("pre and post");
// Post and pre 
// sign variable = pre => in the memory before storing the value of y it will increment
// varaible sign = post => it will store the current value and when called for an operation it will update the value
console.log(++y);//6
console.log(--y);//5
console.log(y++);//5 -> 6
console.log(y--);//6 
console.log(y);//5
console.log("==========Logical Op examples========");
console.log("AND && gate");
console.log(false && false);//false
console.log(false && true);//false
console.log(true && false);//false
console.log(true && true);//true
console.log("OR || gate");
console.log(false || false);//false
console.log(false || true);//true
console.log(true || false);//true
console.log(true || true);//true
console.log("NOT ! gate");
console.log(!false); //true
console.log(!true); //false
console.log("==========Assignment Op examples========");
let x = 25 //= assignment operator
console.log(x += 5); //+= add assignment operator //output 30 //x=x+5
console.log(x -= 5); //+= sub assignment operator //output 25 //x=x-5
console.log(x *= 5); //+= multiplication assignment operator //output 125 //x=x*5
console.log(x /= 5); //+= divisional assignment operator //output 25 //x=x/5
console.log(x %= 5); //+= modulus assignment operator //output 0 //x=x%5
console.log("==========Conditional Op examples========");
console.log(x += 5);
// (Expression) ? "True" : "False"
(x == 5) ? console.log("x is 5") : console.log("x is not 5");
console.log("==========Comparison Op examples========");
let w = 56
let z = 56
console.log(w == z);//true
console.log(w != z);//false
console.log(w === z);//true
console.log(w !== z);//false
console.log(w < z);//false
console.log(w > z);//false
console.log(w >= z);//true
console.log(w <= z);//true
//come back to this after type coercion
console.log("come back to this after type coercion");
w = 56
z = "56"
console.log(w == z);//true
console.log(w != z);//false
console.log(w === z);//false
console.log(w !== z);//true
console.log(w < z);//false
console.log(w > z);//false
console.log(w >= z);//true
console.log(w <= z);//true
console.log("==========Concatination Op examples========");
let ab = "ab"
let cd = "cd"
console.log(ab + cd);//abcd


console.log("==========NEW TOPIC========");
console.log("==========Type coercion examples========");
// Definition of type coercion - Conversion of one type of data into a another type automatically by the JS engine is called as TC
/* Rules of type coercion
1. In JS every number other than 0 is respresented as boolean value true
2. 0,null, NaN, "", undefined all these represent boolean value false
3. Any non empty string is considered as true.
*/
console.log(5 - "1");//4
console.log(5 + Number("1"));//51
console.log(5 - "a");//5-a - NaN
console.log(5 + "a");//5+a - 5a
console.log(5 * "a");//5*a - NaN
console.log(5 / "a");//5/a - NaN


//logical || behaves slightly differently instead returning true it returns the first positive value if both are true
// it will return second value if any one value or both the values are false
console.log(10 || 20);//true
console.log(0 || 20);//20
console.log(-10 || -20);//-10

// WAP to print 0 if the count of items is `empty`. 
// If the count is non-zero display the count
// let count = 0
// count != 0 ? console.log(count) : console.log(!count);

// // Explicit type casting
// let fi = "1"
// console.log(typeof fi);
// console.log(typeof Number(fi));

// let l = "a"
// console.log(Number(l));//NaN
// let stry = "Abhinav"
// console.log(Number(stry));//NaN

//WAP to take two numbers as input from the user and log the sum on the screen
// console.log(Number(prompt("give num1"))+Number(prompt("give num1")));

//WAP to take two string and concatinate them
// console.log(prompt("give st1")+prompt('give str2'));

//WAP to input the age and check if they are eligible to drive 
// let age2 = Number(prompt("input age"));
// age2 >= 16 ? console.log("you can drive") : console.log("you can't drive just walk");


// WAP to find the largest number among two numbers 
let num1 = 40

let num2 = 90

num1 > num2 ? console.log("num1 is greater") : console.log("num2 is greater")

// WAP to find the largest number among three numbers 
let num3 = 120
//  (condition)?true part:false part
let largest = (num1 > num2 && num1 > num3) ? num1 : (num2 > num3 ? num2 : num3)
console.log(largest);


// Conditional or Decision statements
/*  1. ternary operator
    2. if
        syntax: if(condition) ---> this condition should result in a boolean value
                {
                    statements;
                }
    3. if else
        syntax: if(condition) 
                {
                    statements;
                }
                else{
                    statements;
                }
    4. else if ladder
            syntax: if(condition) 
                {
                    statements;
                }
                else if (condition){
                    statements;
                }
                else if (condition){
                    statements;
                }
                else if (condition){
                    statements;
                }
                else{
                    statements;
                }
    5. Switch case
    Switch(value)
    {
        Case value:
                {
                    Statements;
                }
        Case value:
                {
                    Statements;
                }
        Case value:
                {
                    Statements;
                }
        Case value:
                {
                    Statements;
                }
        default:
                {
                    Statements;
                }
    }


*/
// break is a control transfer statement compiler will end the exit the switch case immediately upon seeing the break statement
// let num=1;
// switch (num) {
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     case 3:
//         console.log(3);
//         break;
//     case 4:
//         console.log(4);
//         break;
//     default:
//         console.log("default");
//         break;
// }


// if else example
// let g=10
// let h=20
// if(++g){
//     console.log(g);
// }else if(++h){
//     console.log(h);
// }else{
//     console.log(g);
//     console.log(h);
// }

// WAP to read four numbers and log minimum number in the console
// let n1 = prompt("enter num1")
// let n2 = prompt("enter num2")
// let n3 = prompt("enter num3")
// let n4 = prompt("enter num4")
// if (n1 < n2 && n1 < n3 && n1 < n4) {
//     console.log(n1, "is the smallest");
// } else if (n2 < n1 && n2 < n3 && n2 < n4) {
//     console.log(n2, "is the smallest");
// } else if (n3 < n1 && n3 < n2 && n3 < n4) {
//     console.log(n3, "is the smallest");
// } else {
//     console.log(n4, "is the smallest");
// }


// Loops: also called as iterations - the process of executing either a statement or a block of statements repeadedly multiple times is known as looping
// 4 types of loops
/*
1. while loop

while (condition){
    statements to be executed;
}

2. do-while loop - no of minimum iterations is one
do{
    statement;
}while(condition)

3. for loop
for (initialization; condition check; updation){
    statement;
}

*/

// WAP to input a number from the user and print all the numbers until that number using loops
// let n5 = prompt("Enter a number");
// 10
// let i=0
// while(i<=n5){
//     console.log(i);
//     i+=1;
// }
// do{
//     console.log(i);
//     i++;
// }while(i<=n5)


// Scope and window object
// three ways to declare variables in js
// let i = 20;
// const j = 30;
// var k = 40;

// console.log(i, j, k);
// i += 5 //let cab be reinitialized
// j += 5 Uncaught TypeError: Assignment to constant variable.
// k += 5 //var cab be reinitialized
// console.log(i, j, k);


//keyword based scoping
//1.Let keyword - defined by the scope and cannot access the variable outside the scope
// {
//     let ak=10;
//     console.log(ak);
// }
// console.log(ak);//Uncaught ReferenceError: ak is not defined
//2.const keyword same as let when it comes to scoping
// {
//     const ak=10;
//     console.log(ak);//Uncaught ReferenceError: ak is not defined
// }
// console.log(ak);
// 3. var keyword - global variable, can be declared once and used everywhere
// {
//     var ak = 10;
//     console.log(ak);//Uncaught ReferenceError: ak is not defined
// }
// console.log(ak);
// leads to global variable pollution
// var abc="abc"
// var abc="cdf"
// var abc=5
// var abc=true
// console.log(abc);
// can't do this with let and const
// let abc="abc"
// let abc="cdf"
// let abc=5
// let abc=true
// console.log(abc);
// By default all the variables declared or initialised without any keyword is always considered var
// bhuvan="bhuvan"
// console.log(bhuvan);
// Let' declarations can be declared.
// let vfx;
// console.log(vfx);
// const' declarations must be initialized.
// const xfs;
// console.log(xfs);
// using a variable before declaration


//Hoisting in JS
// console.log(gap); //ReferenceError: gap is not defined

// let gap = 0 //Uncaught ReferenceError: Cannot access 'gap' before initialization
// console.log(gap);

//let and const keywords do not have access to window variables
//only global varaibles have access to window object
let abc="abc"
const pi=3.142
var ted="buddy"
console.log(window.abc);
console.log(window.pi);
console.log(window.ted);


