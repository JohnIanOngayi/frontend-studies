var addForm = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//form submit event
addForm.addEventListener("submit", addItem);

// Delete event
itemList.addEventListener("click", removeItem);

//Filter event
filter.addEventListener("keyup", filterItems);

function addItem(event) {
  event.preventDefault();

  //Get input value
  var newItem = document.getElementById("item").value;

  //Create new li
  var li = document.createElement("li");

  //Add a class
  li.className = "list-group-item";

  //Add text node
  if (newItem == "" || !newItem) return;
  li.appendChild(document.createTextNode(newItem));

  //Create delete button
  var delBtn = document.createElement("button");
  delBtn.innerText = "X";

  li.appendChild(delBtn);

  //Add classes to delBtn
  delBtn.className = "btn btn-danger btn-sm float-right delete";

  itemList.appendChild(li);
}

function removeItem(event) {
  console.log(event.target);
  if (event.target.classList.contains("delete")) {
    if (confirm("Are you sure? ")) {
      var li = event.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
function filterItems(event) {
  var filterTxt = event.target.value.toLowerCase();

  //Get all items
  var items = itemList.getElementsByTagName("li");

  //Convert to array
  Array.from(items).forEach((item) => {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(filterTxt) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
