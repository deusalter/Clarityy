// let details=document.getElementsByClassName("details")[0];
// details.style.width="100%";
// details.style.textAlign="center"

// let detailsbtn = document.getElementsByClassName("detailsbtn")[0]
// detailsbtn.style.width="100%"
// detailsbtn.style.display="flex"
// detailsbtn.style.flexDirection="row"
// detailsbtn.style.justifyContent = "space-around"
// detailsbtn.style.padding="20px"

// detailsbtn.children[0].style.padding="8px"
// detailsbtn.children[0].style.textAlign="center"

// let mainCard=document.querySelector(".mainCard");
// mainCard.style.background="rgb(113,238,211)"
// mainCard.style.border="2px solid black"
// mainCard.style.display="flex"
// mainCard.style.flexDirection = "column"
// console.log(mainCard.children);
// for ( i of mainCard.children){
//     i.classList.add("changeWidth")
// }

// /*
// What is an event?
// An action performed by the user on the webpage is known as a Event.
// With DOM we can dynamically add events to the DOM tree without adding it in the HTML file
// ways to achieve this?
// 1. JS
// 2. Jquery

// What is an Event Listener?
// EL or EH is a function which executes a task when an event is occured on the 
// specific element

// Two flows of event:
// 1. Event Capturing 
// 2. Event Bubbling

// Event bubbling: In EB the event starts at the target element and then flows
// in the upward direction of the DOM tree.
// Event Capturing: In EC the event starts at the root of the HTML node and then flows 
// in the downward direction of the DOM tree.
// EC : document=>body=>div=>input
// EB : input=>div=>body=>document

// Event Propagation:(how does the event object flow)
// There are three phases in EP
// 1. Event capturing
// 2. Event target
// 3. Event Bubbling

// Event capturing always happens before it reaches the target element
// Even Bubbling always happens after it reaches the target element

// Event object:
// An object which is created for an event when an event occurs is known as EO
// Web browser creates the event object when the event occurs
// the web browser passes the event object to the event handler

// Properties of Event object:
// 1. type: 
// 2. target: holds the reference of target element
// 3. eventPhase: it holds the number which respresents the event phase
//     1-capturing
//     2-target
//     3-bubbling
// 4. currentTarget: holds the referncce of current element on which is event is firing
// 5. stopPropagation(): it cancels further event capturing or bubbling

// note: event object is only aviable for use within the eventHandler
// target element and event type should match onlt then the handler can listen to the event

// How to add an event handler to any element
// addEventListener(a1,a2,a3);
// a1-event
// a2-event handler or call back function
// a3-boolean (optional)

// syntax: 
// target.elemet.addEventListener(a1,a2,a3)

// */
// //step1 get the address of target element
// let submit=document.getElementById("submit")
// //step2 design eventhandler
// function eventHandler(e){
//     console.log("clicked submit");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.eventPhase);
//     // console.log(); 
//     submit.style.background="red"
// }
// // step3 add evnet handler to the target elment \
// submit.addEventListener("click",eventHandler)



// let AddInfo=document.getElementById("addinfo");
// AddInfo.addEventListener("submit",()=>{
//     let inputData=document.createElement("input")
//     inputData.type="text"
//     inputData.id="inputData"
//     inputData.placeholder="Add more information to better describe you situation"
//     let btnSubmit=document.createElement("button")
//     btnSubmit.textContent="submit extra info"
//     let extrasinfo=document.createElement("div")
//     extrasinfo.id="extrasinfo"
//     extrasinfo.style.border="1px solid black"
//     btnSubmit.addEventListener("click",()=>{
//         let userInput=inputData.value
//         extrasinfo.textContent=userInput
//     })
//     AddInfo.insertBefore("afterend",inputData)
//     inputData.insertAdjacentElement("afterend", btnSubmit)
//     btnSubmit.insertAdjacentElement("afterend", extrasinfo)
// })


// Asynchornous nature of JS
// Priority based structure 
// The behaviour of making way for others is known as Asynchornous nature
/*

function f1(){
}//10mins

function f2(){
}
with the the task we add some priority

setTimeout(()=>{

    },time in ms)

this function is built into window object
- we cannot predict when the task will be complete
- if we have any dependency on the previous function it will get hard to create 
*/

// function print(m,n){
//     setTimeout(()=>{
//         for (let i=m; i<=n;i++){
//             console.log(i);
//         }
//     },2000)
// }
// function successMessage(){
//     console.log("all the code is executed");
// }
// print(0,10)
// successMessage()

// function print(m, n, cb) {
//     setTimeout(() => {
//         for (let i = m; i <= n; i++) 
//         console.log(i);
//         if(cb!==undefined){
//             cb();
//         }
//     }, 2000);
// }
// function successMessage(){
//     console.log("all the code is executed");
// }

// console.log("start here");
// console.log(print(0, 10, successMessage));
// console.log("ends here");

// promise
/*
Promise is an object 
Promise object keeps an eye on asynchronous tasks
pending - resolved - rejected
Promise has three states 
pending - you are waiting for some action to be completed
resolved - you have completed the task
rejected - you completed but wrong output
two parts
then - catch 
then (cb) - the cb func inside then block will execute only when
the promise state is changed to resolved
catch (cb) - the cb func inside catch block will execute only when 
the promise state is changed to rejected


syntax
new promise((resolve, reject)=>{
    })

steps to design asynchronous fuction

s1: create a function that returns a promise
s2: pass a AsyncCallBackfunc with 2 params resolve n reject
s3: write the cbfunc for resolve and reject

*/

// function print(m, n) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isNaN(m) || isNaN(n)) {
//                 return reject();
//             }
//             for (let i = m; i <= n; i++) {
//                 console.log(i);
//             }
//             return resolve();
//         }, 2000);
//     })
// }
// function successMessage() {
//     console.log("all the code is executed");
// }

// console.log("start here");
// console.log(new Promise((res,rej)=>{}));
// console.log(new Promise((res, rej) => { res()}));
// console.log(new Promise((res, rej) => { rej() }));


// print(0, 10)
//     .then(successMessage)
//     .catch(() => {
//         console.log("some error occured");
//     })

// keywords - async and await 
/*
before function definition we use async
await is used before we call the promise
*/
function even(m, n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(m) || isNaN(n)) {
                return reject();
            }
            for (let i = m; i <= n; i++) {
                console.log(i);
            }
        }, 2000)
    })
}
async function start() {
    console.log("start");
    await even(2,10);
    console.log("success");
}
start();
console.log("end");