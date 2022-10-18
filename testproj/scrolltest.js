var button = document.querySelector('button');
var box = document.getElementById('box');

button.onclick = function colorChange() {
    
    if (box.style.background == "black") {
        box.style.background = "blue";
        box.style.boxShadow = "black";
    } else {
        box.style.background = "black";
        box.style.boxShadow = "blue";
    }
}