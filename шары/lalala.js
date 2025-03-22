window.addEventListener('load', main, false);
function main() {

	let canvas = document.getElementById("canvas"); 
	let ctx = canvas.getContext('2d');

	let w = canvas.width;
	let h = canvas.height;
	let deltatime = 10;
	let dt = 1 / 60;



	class Particle {
	constructor(x, y, vx, vy, v, rad,r,g,b){
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.v = v;
		this.rad = rad;
		this.r = r;
		this.g = g;
		this.b = b;
	}

	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.rad, 0, 2*Math.PI);
        ctx.fillStyle=`rgb(${this.r}, ${this.g}, ${this.b})`;
		ctx.fill();
	}

	move(){
		this.x += this.vx * dt;
		this.y += this.vy * dt;
	}

	checkbounce(){
		if (this.x <= this.rad){
			this.vx = -this.vx;
		}
		if (this.y <= this.rad){
			this.vy = -this.vy;
		}
		if (this.x >= w - this.rad){
			this.vx = -this.vx;
		}
		if (this.y >= h - this.rad){
			this.vy = -this.vy;
		}
	}

	collisions(other) {
	    if ((other.x - this.x) ** 2 + (other.y - this.y) ** 2 <= (this.rad + other.rad) ** 2) {
	        const alfa = Math.atan2(other.y - this.y, other.x - this.x);
	        const alphaX = Math.cos(alfa);
	        const alphaY = Math.sin(alfa);
	
	        const speed = (other.vx - this.vx) * alphaX + (other.vy - this.vy) * alphaY;
				
			this.vx +=  speed * alphaX;
	        this.vy +=  speed * alphaY;
	        other.vx -=  speed * alphaX;
 	        other.vy -=  speed * alphaY;
	        
	    }
	}
}	



let Particles = [];
let N = 16; 
	for (let i = 0; i < N; i++){
  	let x, y, rad;
  	do {
    	x = Math.random() * (w - 10) + 10;
    	y = Math.random() * (h - 10) + 10;
    	rad = Math.random() * 20 + 10;
  	} while (chekcBorders(x, y, rad));
  	 vx = Math.random() * 100;
    vy = Math.random()  * 100;
    v= (vx ** 2 + vy ** 2) ** 0.5;
    const r = Math.trunc(Math.random() * 256);
    const g = Math.trunc(Math.random() * 256);
    const b = Math.trunc(Math.random() * 256);
    let p = new Particle(x, y, vx, vy, v, rad,r,g,b);
    Particles.push(p);
}

function chekcBorders(x, y, rad){
	for (const particle of Particles) {
	if (((particle.x - x) ** 2 + (particle.y - y) ** 2) ** 0.5 < particle.rad + rad  )
	{
  	return true; 
	}
}
	return false; 
}

function draw() {
	ctx.clearRect(0, 0, w, h);
	for (const Particle of Particles){
		Particle.draw();
	}
}

function phys(){
	for (const Particle of Particles){
		Particle.move();
		Particle.checkbounce();

	}
	for (let i = 0; i < N; i++){
		for (let j = 0; j < i; j++){
			Particles[i].collisions(Particles[j])
		}
	}
}

function control(){
	phys();
	draw();
}
   setInterval(control, deltatime);
}
