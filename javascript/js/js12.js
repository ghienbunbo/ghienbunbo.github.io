function draw(){
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(70,201,201)';
    ctx.fillRect(100,100,200,200);
    ctx.stroke();
    ctx.beginPath();
    var gr = ctx.createLinearGradient(100,100,200,200);
    gr.addColorStop(0, 'red');
    gr.addColorStop(1,'red');
    gr.addColorStop(0.9,'white');
    ctx.fillStyle = gr;
    ctx.arc= (200,200,100,0,5*Math.PI);
    ctx.fillRect(100,100,200,200);
}