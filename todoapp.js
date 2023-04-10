var todoInput = document.querySelector("#todoInput");
var todoAddButton = document.querySelector("#todoAddButton");
var todoShowButton = document.querySelector("#todoShowButton");
var todoList = document.querySelector("#todoList");

var todoListData = [];

console.log(todoInput);
console.log(todoAddButton);
console.log(todoList);

function addTodoItem() {
    var value = todoInput.value;

    if(!value.trim()) {
        alert("please fill input");
        return;
    }

    todoListData.push(value);
    console.log("Click:",todoListData);

    todoInput.value = " ";

    showTodoItems();
}

function showTodoItems() {

todoList.innerHTML = todoListData
.map(function (item, index) {
return ` <li class="list-group-item d-flex justify-content-between ">
${index+1}. ${item}

<button type="button" class="btn btn-danger btn-sm " 
id="todoRemoveButton"
onclick="removeItem(${index})">
remove
</button>

</li>`;

})
.join("");

    console.log("todoListData:" ,todoListData)
}

function removeItem(index){
    console.log("index", index)

    newArrayData = todoListData.filter(function (_, elementIndex) {
        if (elementIndex !== index) return true;

        return false;
    });

    console.log("newArrayData", newArrayData);
    console.log("todoListData", todoListData);

 todoListData = newArrayData;

 showTodoItems();
}

function deletelist() {
    todoListData = [];

    showTodoItems();
}


todoAddButton.onclick = addTodoItem;

todoDeleteButton.addEventListener ("click", deletelist);
