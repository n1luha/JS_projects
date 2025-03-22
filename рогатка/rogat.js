window.addEventListener('load', main, false);
function main () {

    let canvas = document.getElementById("canvas"); 
    let field = canvas.getContext("2d"); 

    let w = canvas.width;
    let h = canvas.height;
    let fps = 60;
    let dt = 1 / fps;
    let press = false;
    let position = 0;

    let ball = {
        x: w / 2,
        y: h * 0.75,
        vx: 0, 
        vy: 0, 
        r: 30,
        color: "red",
    }

    function drawRogat() {
        field.beginPath();
        field.moveTo(w / 2, h);
        field.lineTo(w / 2, h * 0.75 + 80);
        field.moveTo(w / 2, h * 0.75 + 80);
        field.lineTo(w / 2 - 80, h * 0.75);
        field.moveTo(w / 2, h * 0.75 + 80);
        field.lineTo(w / 2 + 80, h * 0.75);
        field.strokeStyle = 'black';
        field.lineWidth = 4;
        field.stroke();
    }
    drawRogat();

    function restart() {
        field.clearRect(0,0,w,h);
        field.beginPath();
        field.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
        field.closePath();
        field.fillStyle = ball.color;
        field.fill();
    }
    restart();

    function move() {
        ball.x += ball.vx * dt;
        ball.y += ball.vy * dt;
        if (ball.x + ball.r >= w || ball.x - ball.r <= 0) {
            ball.vx = -ball.vx;
        }
        if (ball.y + ball.r >= h || ball.y - ball.r <= 0) {
            ball.vy = -ball.vy;
        }
    }

    function inBall(click, ball){
        return(click.x - ball.x) ** 2 + (click.y - ball.y) ** 2 <= ball.r ** 2;
    }

    setInterval(() => { // метод, позволяющий выполнять код или вызывать функцию регулярно с заданным интервалом
        move();
        restart();
        drawRogat();
    }, 1 * dt);

    canvas.onmousedown = (event) => {
        let mouse = {
            x: event.offsetX,
            y: event.offsetY,
        }
    
        press = inBall (mouse,ball);

        if (press) {
        position = {...ball};
        }
    }

    canvas.onmousemove = (event) => {
         if (!press) {
            return;
        }

        let mouse = {
            x: event.offsetX,
            y: event.offsetY,  
        }

        ball.x = mouse.x;
        ball.y = mouse.y;
    }

    canvas.onmouseup = (event) => {
        if (press) {
            ball.vx = (position.x - ball.x) * 3;
            ball.vy = (position.y - ball.y) * 3;
        }
        
        press = false;
    }
}