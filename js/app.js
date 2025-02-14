window.onload = function (){
  const canvas = document.getElementById("canvas");
  const c = canvas.getContext("2d");
  c.fillStyle = "red";
  c.fillRect(0, 0, 150, 75);

  c.moveTo(0, 0);
  c.lineTo(200, 200);
  c.lineWidth = 4;
  c.lineCap = "square";
  c.stroke();

  c.beginPath();
  c.arc(100, 100, 100, 0, 2 * Math.PI);
  c.lineWidth = 2;
  c.strokeStyle = "blue";
  c.stroke();

  c.fillStyle = "green";
  c.strokeStyle = "red";
  c.fillRect(100, 100, 50, 50);

  c.strokeStyle = "purple";
  c.lineWidth = 5;
  c.strokeRect(150, 150, 50, 50);

  c.beginPath();
  c.moveTo(50, 25);
  c.lineTo(50, 75);
  c.lineTo(125, 75);
  c.lineTo(75, 25);
  c.lineTo(50, 25);
  c.lineWidth = 3;
  c.stroke();

  //c.clearRect(0, 0, 100, 100);

  c.beginPath();
  c.moveTo(25, 25);
  c.quadraticCurveTo(10, 180, 75, 60)
  c.strokeStyle = "green";
  c.stroke();

  c.font = "25px Arial";
  c.fillText("Tutorial Drawings", 20, 250);

  c.lineWidth = 2;
  c.strokeStyle = "black";
  c.strokeRect(0, 0, 225, 225)

  const gradient = c.createRadialGradient(875, 400, 10, 875, 100, 600)
  gradient.addColorStop(0, "blue")
  gradient.addColorStop(1, "green")

  c.fillStyle = gradient
  c.fillRect(500, 100, 750, 600)

  c.beginPath()
  c.moveTo(500, 250)
  c.lineTo(500, 700)
  c.lineTo(750, 700)
  c.lineTo(750, 500)
  c.lineTo(500, 250)
  c.stroke()

  c.beginPath()
  c.moveTo(1250, 250)
  c.lineTo(1250, 700)
  c.lineTo(1000, 700)
  c.lineTo(1000, 500)
  c.lineTo(1250, 250)
  c.stroke()

  c.beginPath()
  c.moveTo(875, 500)
  c.lineTo(1250, 700)
  c.stroke()

  c.beginPath()
  c.moveTo(875, 500)
  c.lineTo(500, 700)
  c.stroke()

  c.beginPath()
  c.moveTo(500, 700)
  c.lineTo(1250, 700)
  c.stroke()

  c.beginPath()
  c.moveTo(750, 500)
  c.quadraticCurveTo(875,250,1000, 500)
  c.stroke()

  c.beginPath()
  c.moveTo(500, 700)
  c.lineTo(750, 300)
  c.stroke()

  c.beginPath()
  c.moveTo(1250, 700)
  c.lineTo(1000, 300)
  c.stroke()

  c.beginPath()
  c.moveTo(1000, 300)
  c.lineTo(1250, 100)
  c.stroke()

  c.beginPath()
  c.moveTo(750, 300)
  c.lineTo(500, 100)
  c.stroke()

  c.beginPath()
  c.moveTo(500, 100)
  c.lineTo(1250, 100)
  c.stroke()

  c.strokeStyle = "red"
  c.strokeRect(500, 100, 250, 600)
  c.strokeRect(1000, 100, 250, 600)

  c.beginPath()
  c.arc(875, 400, 100, 0, 2 * Math.PI);
  c.stroke()

  c.beginPath()
  c.arc(875, 400, 25, 0, 2 * Math.PI);
  c.stroke()

  c.beginPath()
  c.arc(875, 400, 300, 0, 2 * Math.PI);
  c.stroke()

  c.beginPath()
  c.strokeStyle = "purple"
  c.arc(875, 400, 250, 0, 2 * Math.PI);
  c.stroke()

  c.beginPath()
  c.arc(875, 400, 80, 0, 2 * Math.PI);
  c.stroke()

  c.beginPath()
  c.arc(875, 400, 15, 0, 2 * Math.PI);
  c.stroke()

  c.fillStyle = "purple"
  c.fillText("Playing with lines and circles", 725, 750)
}
