var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// quadrado
c.fillStyle = 'rgba(0,255,0,0.5)';
c.fillRect(100,100,100,100);

// linha 
c.beginPath();
c.moveTo(50,500);
c.lineTo(300,100);
c.strokeStyle = 'green';
c.stroke();

// circulo 
c.beginPath();
c.arc(400,400, 60,0, Math.PI * 2,false);
c.strokeStyle = "#F22005";
c.stroke();

