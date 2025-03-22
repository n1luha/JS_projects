window.addEventListener('load', main, false);
function main() {

let canvas = document.getElementById("canvas");
let field = canvas.getContext("2d");

let w = 1000;
let h = 800;
let cX = w / 2;
let cY = h / 2;
let scale = 10; //в честь Месси

let button = document.querySelector("button[id='draw']"); // возвращает первый элемент в указанном селекторе

canvas.height = h;
canvas.width = w;
field.strokeStyle = "black";
field.lineWidth = 1.5;
drawCoord();

function drawCoord() {
    field.beginPath();
    field.moveTo(cX, 0);
    field.lineTo(cX, h);
    field.moveTo(0, cY);
    field.lineTo(w, cY);
    field.stroke();
}

function clearScreen() {
    field.clearRect(0, 0, w, h);
}

function drawGraph(a) {
    clearScreen();
    drawCoord();
    field.beginPath();
    field.moveTo(0, 0);
    for (let x = -cX; x <= cX; x++) {
        let y = 0;
        for (let i = 0; i < a.length; i++) {
            y += (x / scale) ** i * a[i];
        }
        y *= -scale;
        field.lineTo(x + cX, y + cY);
    }
    field.stroke();
}

button.onclick = function() {
    let a0 = document.querySelector("input[name='a0']");
    let a1 = document.querySelector("input[name='a1']");
    let a2 = document.querySelector("input[name='a2']");
    let a3 = document.querySelector("input[name='a3']");
    let a4 = document.querySelector("input[name='a4']");
    let a5 = document.querySelector("input[name='a5']");
    let a = [a0.value, a1.value, a2.value, a3.value, a4.value, a5.value];
    drawGraph(a);
}

}