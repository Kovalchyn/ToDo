function onDragStart(event) {
    event.dataTransfer.setData("text", event.target.getAttribute('id'));
}

function allowDrop(event) {
    event.preventDefault();
}


function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var item = document.getElementById(data);

    var parentElement = item.parentElement.id;
    var target = event.target.id;
    var id = item.id;

    if (item) {
        if (target === "todo" || target === "inprogress" || target === "done") {
            state.moveItemToOtherPanel(parentElement, target, id);
            event.target.appendChild(item);
        }
    } else {
        console.error('Cannot find element, event:', event)
    }
}