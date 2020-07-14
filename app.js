function someFunc() {
    var title = document.getElementById('new-todo').value;
    localStorage.setItem("newTodo", title)

    if (title) {
        document.getElementById('new-todo').value = '';
        var id = state.todo.length + state.inprogress.length + state.done.length + 1;

        state.todo.push({ id, title });
        document.getElementById("todo").appendChild(createTodoElement(id, title));
    }
}


var state = {
    todo: [{ id: 1, title: "Test todo 1" }, { id: 2, title: "Test todo 2" }],
    inprogress: [],
    done: [],
    addItemToState: function(key, item) {
        this[key].push(item);
        console.log("ADD", this[key])
    },
    deleteItemFromState: function(key, item) {
        this[key] = this[key].filter(element => element.id != item.id);
        console.log("DELETE", this[key])
    },
    moveItemToOtherPanel: function(key1, key2, itemId) {
        var item = state[key1].find(element => element.id == itemId);
        this.deleteItemFromState(key1, item);
        this.addItemToState(key2, item);
    }
}

document.addEventListener('DOMContentLoaded', initBoard);

function initBoard() {
    initPanel('todo', state.todo);
    initPanel('inprogress', state.inprogress);
    initPanel('done', state.done);
}

function initPanel(key, todoList) {
    var panel = document.getElementById(key);
    for (var i = 0; i < todoList.length; i++) {
        var currentItemObject = todoList[i];
        var newTodoElement = createTodoElement(currentItemObject.id, currentItemObject.title);
        panel.appendChild(newTodoElement);
    }
}

function createTodoElement(id, title) {
    var todoElement = document.createElement("span");
    todoElement.id = id;
    todoElement.draggable = true; // for drag and drop
    todoElement.ondragstart = onDragStart; // for drag and drop
    todoElement.textContent = title;
    return todoElement;
}