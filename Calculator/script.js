function clearScreen() {
    document.getElementById("result").value = "";
}
 

function display(value) {
    document.getElementById("result").value += value;
}
 

function calculate() {
    var u = document.getElementById("result").value;
    var v = eval(u);
    document.getElementById("result").value = v;
}