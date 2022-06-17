const clockContainer=document.getElementById("canvas"),
       drawingElement=clockContainer.getContext("2d");
var radius=clockContainer.height/2;
drawingElement.translate(radius,radius);
radius=radius*0.9;




const drawCircle = (e) =>{

    e.arc(0,0,radius,0, 2*Math.PI);
    e.fillStyle="#fff";
    e.fill();
}

const centreCircle = (e) =>{
    e.beginPath();
    e.arc(0,0,radius*0.1,0, 2*Math.PI);
    e.fillStyle="#333";
    e.fill();
}

const borderGradient = (e) =>{
    let grad=e.createRadialGradient(0, 0 ,radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    e.strokeStyle = grad;
    e.lineWidth = radius*0.1;
    e.stroke();
}

drawCircle(drawingElement);
borderGradient(drawingElement);
centreCircle(drawingElement);