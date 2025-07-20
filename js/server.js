// DOM - document object model
/*
Any HTML file has two parts
1. contents to be displayed
2. Structure or elements
once a page is already rendered by the browser and want to make 
few changes we use Document.

What is document? Document is an object.

Life span of the DOM manipulation is untill the session ends or the
webpage is reloaded.

Document is an object created by the Browser. The Document
object is the root node of DOM tree.

advantages of DOM:
makes the HTML pages dynamic
Any modifications to an DOM element is not updated on the original html page.
Whenever we reload the page all the DOM based modification will be lost forever.


<html>
<head></head>
<body>
<h1>Hello world</h1>
<p>lorem10</p>
</body>
</html>
*/
// function test(){
//     document.write(document.getElementById("name").value)
//     console.log(document.getElementById("name")?.value);
// }

// methods of DOM object
/*
1.getElementById():
this method we need to pass the ID of an element as a string
and it returns the first element with a specific ID.
let e = document.getElementById('name');

2.getElementsByName():
this is used for fetching an element using the html attribute name
let e = document.getElementByName('name');

3. getElementsByClassName():
this is used to fetching all the html elements containing the same class name

<div class="happy"></div>
<div></div>
<p class="happy"></p>

let e = document.getElementsByClassName('happy'); ["div","p"]
this will return a HTML collection 
4. getElementsByTagName():
let e = document.getElementsByTagName('p');


Fetching elements using CSS selectors:
1. querySelectorAll()
2. querySelector()

let e = document.querySelectorAll('.divstyle1');
let e = document.querySelector('#style1');


notes:
1. we need to pass queryselector as a string always
2. querySelector returns the reference of the first element found
3. queryselectorAll() returs a NodeList of all the elements found in original order.

*/
//higher order function
function twoDigitOp(cb) {
    let n1=Number(document.getElementById("n1").value)
    let n2=Number(document.getElementById("n2").value)
    let result=cb(n1,n2);
    console.log(result);
    let para=document.createElement("p");
    para.textContent=result;
    console.log(document?.getElementsByTagName("body"));
    let body=document?.getElementsByTagName("body")[0].appendChild(para)
    // body.app
    console.log(body);
}
// call back functions
function add() { twoDigitOp((a, b) => a + b) }
function sub() { twoDigitOp((a, b) => a - b) }
function mul() { twoDigitOp((a, b) => a * b) }
function div() { twoDigitOp((a, b) => a / b) }
function mod() { twoDigitOp((a, b) => a % b) }

console.log(document.getElementsByTagName("input"));