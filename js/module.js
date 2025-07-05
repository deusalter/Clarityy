//!Functions in Javascript
//WAFP to add two numbers

// function sum(x,y){
//     return x+y;
// }
// console.log(sum(3,4));

//functionkeyword functionName (input params){
// return statement;
// }

//WAFP to find the subtraction of two numbers
// function subtraction (x,y){
//     return x-y
// }
// console.log(subtraction(10,4));

// scoping in functions
// function test(a) {
//     let b = 5;
//     console.log(22, a);
//     return (a, b);
// }
// console.log(25, test);
// a = 5;
// console.log(27, a);
// console.log(test());

// console.log(b);
// Scope with rest to any function
// 1. Any memeber declared inside a function will have local scope
//2. local scope: the scope within the duction block 
//3. Any member with local scope annot be used outside the function block

// Scenario with let const and var
// function brand() {
//     let company = "nike"
//     var tagLine = "Just do it!"
//     const brandconcious = true

//     return { company, tagLine, brandconcious }
// }

// console.log(brand());
//console.log(company) //throws reference error trying to access outside the scope
// console.log(tagLine)
// console.log(brandconcious);

// scenario with var 
// console.log(carCompany);//undefined

// var carCompany="Ford"
// console.log(carCompany);//ford

// function fam(){
//     var carCompany="Audi"
//     console.log(carCompany);//audi
// }
// console.log(carCompany);//ford
// console.log(fam());//audi - undefined
// console.log(carCompany);//ford

//scenario with global variable pollution
// Rule - when passing global varaibles - pass it as a parameter
//  do not pass it directly 
// let car = "F150"

// function changeCar(car){
//     car = "civic"
//     return car
// }

// console.log(car); //F150
// console.log(73,changeCar(car)); //civic
// console.log(74,car); //F150


// this keyword
// it is a keyword
//  it holds the address to global window object
// using this we can access the global variables 
// this is a default property that exists in any function
// used to access the members of GEC
// var car = "F150"

// function changeCar(car) {
//     var car = "civic"
//     function carColor(){
//         console.log("white");
//     }
//     carColor();
//     return car
// }

// console.log(car); //F150 -> white
// console.log(73, changeCar(car)); //civic
// console.log(74, car); //F150
// for every function definition a new execution context is created with the functions parameters


// var car = "F150"

// function changeCar(car) {
//     var car = "civic"
//     console.log(106, this); //civic
//     function carColor() {
//         console.log(108, this.car); //civic
//         console.log("white");
//     }
//     carColor();
//     return car
// }

// console.log(car); //F150
// console.log(115, changeCar(car)); 
// // civic 
// console.log(116, car); //f150

// console.log(this);  //window
// console.log(window);    //window

// var a =5
// function abd(){
//     var a = 6;
//     console.log("func ---> abd");
//     console.log(a, this.a , window.a);// 6,5,5
//     function xzy(){
//         var a=7;
//         console.log("func ---> xzy");
//         console.log(a, this.a, window.a);// 7,5,5
//     }
//     xzy()
// }
// abd()
// console.log("outside function", a, this.a, window.a);// 5,5,5

//Call stack 
// it is also called as main stack or execution stack

// Data structures - stack?
//What is a stack?
// stack is an organised block of memory where multiple objects can be stored.
// stack follows a specific order for entry and exit of objects (LIFO - last inserted element is first out or FILO: First in last out)
// the object inserted at the first is removed at the last.

// call stack - determines who needs to be executed 
// call stack remembers the caller of any function

// console.log("start");
// function a1(){
//     console.log("a1");
// }
// console.log("GEC");
// function a2() {
//     console.log("a2");
//     a1();
//     console.log("a2");
// }
// a2();
// console.log("GEC");
// console.log("stop");
// start - GEC - a2 - a1 - a2 - GEC - stop

// function porgramming - A function call ing another function which can accept a funstion as a argument is called fucntional programming
function twodigitOp(Operation,a,b){ //higher order function
    return Operation(a,b);
}
function sum (x,y){ //function which is passed as a parameter 
    return x+y;
}
function product (f,g){ // call back functions
    return f*g;
}
function power(f, g) { //call back function
    return f ** g;
}
console.log(twodigitOp(sum, 4, 3));
console.log(twodigitOp(product, 4, 3));
console.log(twodigitOp(power, 4, 3));

