window.addEventListener ('load', main, false);
function main() {

    const canvas = document.getElementById("canvas"); 
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    function gradf(x,y){
        return[2*x-w/2,2*y-h/2];
    }

    function drawCoord(){
        ctx.beginPath();
        ctx.moveTo(0, h/2);
        ctx.lineTo(w, h/2);
        ctx.moveTo(w/2, 0);
        ctx.lineTo(w/2, h);
        ctx.moveTo(w, h/2);
        ctx.lineTo(w-7, h/2-3);
        ctx.moveTo(w, h/2);
        ctx.lineTo(w-7, h/2+3);
        ctx.moveTo(w/2, 0);
        ctx.lineTo(w/2-3, 7);
        ctx.moveTo(w/2, 0);
        ctx.lineTo(w/2+3, 7);
        ctx.stroke();
    }
    drawCoord();

    class GradVector{
        constructor(x0,y0,x1,y1){
            this.x0=x0;
            this.y0=y0;
            this.x1=x1;
            this.y1=y1;
        }

        plot(){
            if(Math.pow(this.x1-this.x0,2) + Math.pow(this.y1-this.y0,2) != 0){
                this.x1 = this.x0 + (this.x1 - this.x0) / 20
                this.y1 = this.y0 + (this.y1 - this.y0) / 20
                ctx.beginPath();
                ctx.moveTo(this.x0,this.y0);
                ctx.lineTo(this.x1,this.y1);
                ctx.stroke();
                ctx.strokeStyle='blue';
                ctx.beginPath();
                ctx.arc(this.x1,this.y1,2,0,2*Math.PI);
                ctx.stroke();
                ctx.strokeStyle='black';
             }else{
                ctx.beginPath();
                ctx.arc(this.x1,this.y1,2,0,2*Math.PI);
                ctx.fillStyle='red';
                ctx.fill();
             }
            }
    }  

    for (let i = 0;i < w;i += 25){
        for(let j = 0;j < h;j += 25){
            let result = gradf(i,j);
            x0 = i;
            y0 = j;
            x1 = result[0];
            y1 = result[1];
            let bruh = new GradVector(x0,y0,x1,y1);
            bruh.plot();
        }
    }
}
