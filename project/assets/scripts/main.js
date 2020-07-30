function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("fruits", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("fruits");
    event.target.appendChild(document.getElementById(data));
}