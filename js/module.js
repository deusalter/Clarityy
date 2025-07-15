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

// function porgramming - A function calling another function which can 
// accept a function as a argument is called functional programming
// function twodigitOp(Operation,a,b){ //higher order function
//     return Operation(a,b);
// }
// function sum (x,y){ //function which is passed as a parameter 
//     return x+y;
// }
// function product (f,g){ // call back functions
//     return f*g;
// }
// function power(f, g) { //call back function
//     return f ** g;
// }
// console.log(twodigitOp(sum, 4, 3));
// console.log(twodigitOp(product, 4, 3));
// console.log(twodigitOp(power, 4, 3));

// Closure - scope - chaining
// Closure: the ability of a child function to access the members of a parent function without an external keywords

// function xyz(){
//     console.log("outter function");

//     function lmn(){
//         console.log("inner function");
//     }
// }
// lmn(); // one simply cannot call an inner function without the parent function running
//  this happens because of the lexical scope

// function def(){ by default any function without a return keyword will always return undefined

// }
// console.log(def());

// how to call a inner function - do return the inner function as a argument of the outer function
// function xyz(){
//     console.log("outter function");

//     function lmn(){
//         console.log("inner function");
//     }
//     return lmn
// ;}
// console.log(xyz()());

// LEXICAL SCOPE
// tha ability of JS engine to search 
// for a variable in the outer scope when 
// it is not avialable in the local scope 
// is knows as scope chaining or lexical scope

// let a = 5
// function demo(){
//     a++;
//     console.log(a);
// }
// console.log(demo())

//closure
// function a(){
//     let age=18;
//     function addAge(){
//         return ++age;
//     }
//     return addAge();
// }
// console.log(a())

// function counter(){
//     let count=0;
//     return function(){ return ++count }
// }
// debugger;
// let count1 = counter(); // function(){ return ++count }
// let count2 = counter(); // function(){ return ++count }
// console.log(count1()); //1
// console.log(count1()); 
// console.log(count1());
// console.log(count1());
// console.log(count1());
// console.log(count2());

//Types of functions
/*
1. function definition
2. function as a variable
3. function as a parameter
4. higher order and callback functions
5. Arrow functions
6. IIFE
7. Anonymous Functions
*/

//1. function definition
// function add(x, y) {
//     return x + y
// }
// //2. function as a variable
// let sum = function (x, y) { return x + y; }
// console.log("function as a variable", sum(1,9));
// //3. function as a parameter
// //4. call back function
// //5. Arrow function
// let total = (x, y) => x + y
// console.log("Arrow function", total(2,1));
// // 6. Immediately invoked functions
// console.log("IIFE",(function (x, y) { return x + y })(4, 3));
// //(function definition)(function execution)
// // 7. Anonymous functions - any function without any name
// let sumtotal = (operation, x, y) => (operation(x, y))
// console.log("Anonymous, callback and function as a parameter",sumtotal((a, b) => a + b, 4, 5));


// //practice 
// //WAP to print the n natural numbers using arrow function
// let natnum=(upperlimit)=>{
//     let i=0
//     while(i<=upperlimit){
//         console.log(i);
//         i++;
//     }
//     return null;
// }
// console.log(natnum(22));

//Arrays
// An array is a block of memory that stores homogenous values
// in JS Array is an object
// how to create an array
// 1. using array literal
//syntax let arr=[value1,value2,......,valueN]
// let arr = [10, 20, 30, 40, 50]
// console.log(arr);
// console.log(typeof arr);
// //2. by creating an instance of Array
// let arr2 = new Array(1,2,3,4,5);
// console.log(arr2);

// //how to access the elements in a array
// console.log(arr2[0]);
// console.log(arr2.length)


//Array methods
//1. pop - returns the element that is poped 
// and original array is modified
// let a = [20, 40, 60, 80, 100]
// let popedArray = a.pop()
// console.log(a);
// console.log(popedArray);
// // push adds the element at the end of the array 
// // and it returns the length of the array
// // original array is modified
// let pushedArray = a.push(200)
// console.log(a);
// console.log(pushedArray);

// //shift - removes the first element of the array
// // and returns the Element
// // original array is modified
// let shiftedArray = a.shift();
// console.log(a);
// console.log(shiftedArray);

// // unshift - adds new elements in the array 
// // and returns the length of the array
// // original array is modified
// let unshifted = a.unshift(20, 30, 50);
// console.log(a);
// console.log(unshifted);

// // indexOf()
// // returns the position of an element in the array
// // original array is not modified
// let indexPosition = a.indexOf(40);
// console.log(indexPosition);

// //splice() - returns sub array from starting to last-1 positon
// // original array is modifed
// // three arguments 
// // start, last-1 and elements to be added
// // negative index is supported
// let splicedArray = a.splice(0, 5, 100, 200);
// console.log(a);
// console.log(splicedArray);

// //slice 
// // does not modifed original array
// // will always create a new array
// // accepts negative indexs
// console.log(a, "og array");
// let slicedArray = a.slice(0, -2);
// console.log(a, "og array");
// console.log(slicedArray);


// //joins
// // does not modified original array 
// // returns the string concatinaton of the entire array as a string
// let c = [10, 30, 50, 70]
// let d = [20, 40, 60, 80]
// let e = c.join()
// console.log(c, d, e);

// //isArray
// // return true or false based on the array
// console.log(Array.isArray(d));

// //forEach()
// // return type is always undefined
// let foreach = d.forEach((value, index) => { console.log(value, index); })
// console.log(foreach);

// //map function -> create a new array 
// // performs map operation to each element in the array
// // will not modify the original array but returns a new array
// let mappedArray = d.map(x => x + 5);
// console.log(mappedArray);
// console.log(d);

// //filter function -> used to set a filter condition and segregate data
// // return a new array which satisfies the filter condition 
// // but doesn't modified the original array
// let filter = d.filter(x => {
//     if (x >= 60)
//         return x
// })
// console.log(filter);
// console.log(d);


// //.from()
// function createArr(arraylike, mapFunc) {
//     return Array.from(arraylike, mapFunc)
// }

// let arr1 = createArr("123456789", x => x * 2);
// console.log(arr1);


// //Array.of()
// let genArr = Array.of("bhuvan", "abhinav");
// console.log(genArr);

// //Array.find()
// console.log(d)
// console.log(d.find(x => x >= 50));
// console.log(d);

// //Array.findIndex()
// console.log(d.findIndex(x => x >= 50));

// //Array.some()
// console.log(d.some(x => x >= 70));
// // returns true or false

// // Array.every()
// console.log(d.every(x => x >= 10));

// //reduce method
// console.log(d);
// console.log(
// d.reduce((acc,value)=>acc+value));
//generate one single value based on the callback function we pass
//original array is not modified

// Set is a DS for storing unique elements
// let a=[3,3,4,7,8,9,1,3,4,56];
// let s=new Set(a);
// console.log(s);

// // how to create a new set
// // using new keyword

// //properties of a Set
// const fruits= new Set(['apple','mango']);
// fruits.add('banana');
// console.log(fruits);

// //to check if an element exists we have has method
// console.log(fruits.has('apple'));

// //delete
// fruits.delete("apple");
// console.log(fruits);

// //entries
// for( const f of fruits.entries()){
//     console.log(f);
// }

// //values
// for (const f of fruits.values()) {
//     console.log(f);
// }

// //size propery
// console.log(fruits.size);

// //Maps
// const player=new Map([["lawal","kamal"]]);
// console.log(player);

// //using set you can add new elements
// player.set('abhi',"nav");
// console.log(player);

// //has method 
// console.log(player.has("lawal"));

// // player.clear("lawal");
// // console.log(player);

// //values
// for (const f of player.values()) {
//     console.log(f);
// }

// //keys
// for (const f of player.keys()) {
//     console.log(f);
// }

// //enumerate
// player.forEach((key,value)=>{
//     console.log(`I am here ${key} and also here in ${value}`);
// })


// Object
// Any substance which has its exsistence in the real world is known as an Object.keys
// Every object will have properties which describe them, every object will have action

// Examples
// Car 
//     Properties 
//     color, price, model 
//     Actions
//     drive, brake and moving
// In programming 
// actions as behaviours or function
// properties are static values

// In js objects are a collection of attributes and actions

// every object has two parts 
// keys and values

// three ways you can create an object
// 1. using object literals
// 2. using a function
// 3. using a class
// let ob = { eid: "324", ename: "abhinav", sal: 500000 }
// console.log(ob);
// console.log(ob.eid);
// console.log(ob.ename);

// // trying to access an key which is not present will return undefined
// console.log(ob.job);

// // objects are mutuable in nature
// ob.eid = "555"
// console.log(ob);

// // to delete specific keys we use delete keyword
// delete ob.sal;
// console.log(ob);

// //notation in objects
// //bracket notation
// console.log(ob["ename"]);
// //dot notation
// console.log(ob.ename);


// //nested objects
// let emp1 = {
//     ename: "ajay",
//     eid: "123",
//     salary: 160000,
//     job: "Senior dev",
//     details: { dn0: 123, city: "Boston" },
//     cars:["model Y", "Model 3"]
// }

// emp1.cars.push("Camry")
// console.log(emp1);

// //how to destructure an object
// let {cars}=emp1
// console.log(cars);

// loops in JS
// for loop
// for ( let i=0;i<=5;i++){
//     console.log("*");
// }

// to loop strings, objects,arrays we use for of loop
//arrays
// var subjects=["maths","science","english"]
// for (let demo of subjects){
//     console.log(demo);
// }
//strings
// let loca="bangalore"
// for ( let f of loca){
//     console.log(f);
// }
//objects
// let emp={
//     eid:5,
//     enam:"suresh",
//     eplace:"bangalore"
// }
// its not possible to iterate objects using for of loop
// for ( let k of emp){
//     console.log(k);
// }

// different types of for loops
// 1. normal for Loop
/*  2. for of loop
3. for in loop
4. forEach
*/

// var subjects=["maths", "science","english","history"]
// console.log("forEach method");
// subjects.forEach(element=>{
//     console.log(element);
// })
// console.log("for in loop");
// for (let element in subjects){
//     console.log(element);
// }
// console.log("for of loop");
// for (let element of subjects) {
//     console.log(element);
// }

// let abhinav={
//     empid:115,
//     place:"California",
//     designation:"intern",
//     techskills:["machine chipset design","python developer"]
// }
// for (let details in abhinav){
//     console.log(abhinav[details]);
// }
// console.log("for of loop doesn't work with objects - it throws typerror");
// // for (let details of abhinav) {
// //     console.log(details);
// // }

// Rest parameter and spread operator
//rest parameter is used to accept multiple values as an array of elements
// Generally converts multiple values into arrays
// syntax: ...identifier

// uses of a rest parameter:
// 1. function definition and parameter list
// 2. object destructring

// How to use rest parameter in a function:
// function test(...a){

// }

// rules of rest parameter
// rest parameter should always be defined in the last of function 
// correct below
// function abc (b,...a){

// }
// //incorrect below
// function abd (...a,b){

// }

// function sum(...a){
//     return a.reduce((acc, v)=> acc+v,0)
// }
// console.log(sum(3,4,5))
//Design a function which can accept multiple arguments and list them on the console.
// function listArg(...arg){
//     console.log(arg);
//     console.log(arg.forEach(element => {
//         console.log(element);
//     }));
// }
// listArg(23,46,68,92,-35,67)

// 2. how to destructure an object using rest parameter
// let abhinav={
//     empid:115,
//     place:"California",
//     designation:"intern",
//     techskills:["machine chipset design","python developer"]
// }
// let {empid,...dump}=abhinav;
// console.log(empid);
// console.log(dump);
//3. how to destructure arrays
// let arr=[12,3,4,67,89,34,21]
// let [a,b,...c]=arr
// console.log(a);
// console.log(b);
// console.log(c);

//4. how to clone an array
// let [...cloneArr]=arr;

// console.log(cloneArr);

// uses of rest parameters
// can be used in a function to store excess data
// can be used to copy objects and arrays
// destructure arrays and objects 

// Spread Operator
// spread operator is used to perform unpacking, spread operator uses an iterator to access each and every element in an array or any object
// let arr = [12, 3, 4, 67, 89, 34, 21]
// console.log(arr);
// console.log(...arr);

//cannot be used with objects
// let abhinav={
//     empid:115,
//     place:"California",
//     designation:"intern",
//     techskills:["machine chipset design","python developer"]
// }
// console.log(abhinav);
// console.log(...abhinav);// TYPE ERROR

// let city="bangalore"
// let arr=[...city]
// let obj={...city}
// console.log(city);
// console.log(arr);
// console.log(obj);

// // special uses cases of spread operator
// let a=[1,2,3]
// let b=[4,5,6]
// let ab=a.concat(b);
// let c=[...a,...b]
// console.log(ab);
// console.log(c);

// let abhinav={
//     empid:115,
//     place:"California",
//     designation:"intern",
//     techskills:["machine chipset design","python developer"]
// }
// let bhuvan={
//     empid: 120,
//     place: "Boston",
//     designation: "SDE",
//     techskills: ["VLSI chipset design", "JS developer"]
// }

// let emp={...abhinav,...bhuvan}
// console.log(emp);

// Object methods
// A function which is a member of an object is called object method
// A function defined inside an object is known as object method or method
// Encapsulation:binding of state and behaviours of an object together is known as encapsulation

// syntax: let obj={
//     func: function (){
//         return []
//     }
// }

// example:
let Car1 = {
    color: "red",
    price: 35000,
    manufacturer: "toyota",
    name: "camry",
    accleration: "average",
    driveEconomy: ((accleration) => { return "Fuel economy is the best in class!" })
}

let Car2 = {
    color: "black",
    price: 3500000,
    manufacturer: "ferrari",
    name: "f50",
    accleration: "best",
    driveEconomy: (accleration) => {
        return "just drinks fuel to go very very quick and fast!"
    }
}

console.log(Car1.color, Car1.price, Car1.manufacturer, Car1.name, Car1.accleration);
console.log(Car1.driveEconomy("1G"));

console.log(Car2.color, Car2.price, Car2.manufacturer, Car2.name, Car2.accleration);
console.log(Car2.driveEconomy("5G"));


const o3={
    demo:()=>{
        console.log(this); 
        //here this will always refer to the global object or window object 
        // it will not point to o3 object
    }
}
o3.demo();


const l3={
    eid:15,
    ename:"abhinav",
    display: function () {
        console.log(this.eid);
    }
}
l3.display();

// this keyword in an arrow function will always point to undefined
// this keyword in a regular function will point to the window object
// this keyword in a object method(not an arrow function) will always point to the object itself 
// this keyword in a object method(arrow function) will always point to window object

