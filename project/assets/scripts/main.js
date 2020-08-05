function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("kiwi", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("kiwi");
    event.target.appendChild(document.getElementById(data));
}