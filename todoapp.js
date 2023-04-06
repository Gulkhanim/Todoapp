var todoInput = document.querySelector("#todoInput");
var todoAddButton = document.querySelector("#todoAddButton");
var todoList = document.querySelector("#todoList");

var todoListData = [];

console.log(todoInput);
console.log(todoAddButton);
console.log(todoList);

function addTodoItem() {
    var value = todoInput.value;

    todoListData.push(value);
    console.log("Click:",todoListData);

    todoInput.value = " ";
}


todoAddButton.onclick = addTodoItem;
