window.addEventListener('load', main, false);
function main() {

let canvas = document.getElementById("canvas"); 
let field = canvas.getContext("2d"); 

let w = 1500;
let h = 800;
let g = 9.8;
let fps = 60;
let deltaTime = 1 / fps;
let scale = 7; //в честь Роналду

let ball = { 
    x0: 0, 
    y0: h,
    x: 0, 
    y: h,
    radius: 10, 
    color: "red", 
}

let button = document.querySelector("button[id='draw']"); 
let speed = document.querySelector("input[name='speed']"); 
let alpha = document.querySelector("input[name='alpha']");

canvas.height = h; 
canvas.width = w;
field.strokeStyle = "black"; 
field.fillStyle = ball.color; 
field.lineWidth = 2; 
drawCoord(); 
drawBall(ball.x0, ball.y0); 

function drawCoord() { 
    field.beginPath();
    field.moveTo(0, 0);
    field.lineTo(0, h);
    field.lineTo(w, h);
    field.stroke();
}

button.onclick = function() { 
    speed = document.querySelector("input[name='speed']").value; 
    alpha = document.querySelector("input[name='alpha']").value / 180 * Math.PI; 
    ball.x = ball.x0; 
    oneStep(); 
}

function drawBall(x, y) { 
    field.beginPath();
    field.arc(x, y, ball.radius, 0, 2 * Math.PI);
    field.fill();
}

function drawGraph() { 
    let vX = speed * Math.cos(alpha); 
    let vY = speed * Math.sin(alpha);

    field.beginPath();
    let y = ball.y0;
    field.moveTo(ball.x0, ball.y0);

    for (let x = ball.x0 / scale; x <= ball.x; x += (vX * deltaTime) / scale) { 
        if (y > h) { 
            break;
        }
        y -= vY * deltaTime / scale;
        vY -= g * deltaTime / scale; 
        field.lineTo(x, y); 
    }

    ball.y = y;
    field.stroke();
}
        
function clearFrame() { 
    field.clearRect(0, 0, w, h);
}

function drawFrame() { 
    drawCoord();   
    drawGraph(); 
    drawBall(ball.x, ball.y); 
    }

function oneStep() { 
    clearFrame(); 
    drawFrame(); 
    
    if (ball.x <= w && ball.y <= h) { 
        ball.x += speed * Math.cos(alpha) / scale; 
        requestAnimationFrame(oneStep); // ключевой метод для создания анимаций в браузере
    } else {
        cancelAnimationFrame(oneStep); //  метод, который останавливает анимацию, созданную requestAnimationFrame()
    }
}


}