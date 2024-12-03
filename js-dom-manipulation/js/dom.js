// function buttonClick(event) {
// console.log(event.target.id);
// console.log(event.target.classList);
// alert("button clicked!");
//
var output = document.getElementById("output");
var body = document.body;
// output.innerHTML = "<h3>" + event.target.id + "</h3>";
//
// console.log(event.type);
// console.log(event.clientX, event.clientY);
// console.log(event.offsetX, event.offsetY);
//   console.log(event.altKey);
//   console.log(event.ctrlKey);
//   console.log(event.altKey);
// }
//
// var button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);
var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector("form");

function runEvent(event) {
  console.log("Event Type:", event.type);
  console.log(event.target.value);
  // output.innerHTML =
  //   "<h3>MouseX: " +
  //   event.offsetX +
  //   "</h3>" +
  //   "<h3>MouseY: " +
  //   event.offsetY +
  //   "</h3>";
  // body.style.backgroundColor =
  //   "rgb(" +
  //   event.offsetX +
  //   "," +
  //   event.offsetY +
  //   "," +
  //   eval((event.offsetX + event.offsetY) % 256) +
  //   ")";
}

itemInput.addEventListener("keydown", runEvent);
// var button = document.getElementById("button");
// var boxdiv = document.getElementById("box");

// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);
// boxdiv.addEventListener("mouseenter", runEvent);
// boxdiv.addEventListener("mouseleave", runEvent);
// boxdiv.addEventListener("mousemove", runEvent);
