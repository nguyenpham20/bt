function clickNumber(value) {
    document.getElementById("screen").value += value;
}
function calculator() {
    let cal = document.getElementById("screen").value;
    let result = eval(cal);
    display (result);
}
function display(value) {
    document.getElementById("screen").value = value;
}
function clearScreen() {
    document.getElementById("screen").value = 0;
}
function deleteNumber() {
    let str = document.getElementById("screen").value;
    let res = str.substring(0, str.length - 1);
    display(res);
}