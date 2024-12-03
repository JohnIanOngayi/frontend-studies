// Examine the DOM
// GETELEMENTBYID
// var headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "World!";
// headerTitle.innerHTML = "<h3>Hello</h3>";
// headerTitle.style.borderBottom = "2px solid red";
// var items = document.getElementsByClassName("list-group-item");
// items[1].style.backgroundColor = "yellow";
// for (var i = 0; i < items.length; i++) {
//   items[i].style.color = "blue";
// }

// var li = document.getElementsByTagName("li");
// console.log(li);

var li = document.querySelector("li");
// console.log(li.parentNode);
// console.log("nextSibling", li.nextSibling);
// console.log("nextElementSibling", li.nextElementSibling);
var ul = document.querySelector("ul");
// console.log(ul.children);
// console.log(ul.firstElementChild);
var newDiv = document.createElement("div");
newDiv.className = "hello bob";
newDiv.id = "hello-1";
newDiv.setAttribute("title", "new");
var newDivText = document.createTextNode("Hello World");
newDiv.appendChild(newDivText);
var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");
container.insertBefore(newDiv, h1);
newDiv.style.fontSize = "25px";
console.log(newDiv);
