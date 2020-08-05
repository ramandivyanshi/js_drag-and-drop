function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("list", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("list");
    event.target.appendChild(document.getElementById(data));
}

var mylist = document.getElementsByTagName("li");
for (var i = 0; i < mylist.length; i++) {
    var div = document.createElement("div");
    var txt = document.createTextNode("x");
    div.className = "x";
    div.appendChild(txt);
    mylist[i].appendChild(div);
}


var close = document.getElementsByClassName("x");
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
    }
}, false);


function newList() {
    var li = document.createElement("li");
    var input = document.getElementById("myInput").value;
    var text = document.createTextNode(input);
    li.appendChild(text);
    if (input === '') {
        alert("Write something!");
    } else {
        document.getElementById("myUl").appendChild(li);
    }

    document.getElementById("myInput").value = "";

    var div = document.createElement("div");
    var txt = document.createTextNode("x");
    div.className = "x";
    div.appendChild(txt);
    li.appendChild(div);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}