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



