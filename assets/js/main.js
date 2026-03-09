const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

/* const window_height = window.innerHeight;
const window_width = window.innerWidth; */

// Definición tamaño de canvas
canvasOOP.height = 200;
canvasOOP.width = 300;

canvasRandom.height = 200;
canvasRandom.width = 300;

canvasMultiple.height = 200;
canvasMultiple.width = 300;

//Colores del fondo canvas
canvasOOP.style.background = "rgb(136, 255, 154)";
canvasRandom.style.background = "#f7e6f6";
canvasMultiple.style.background = "#f98a44";

class Circle {
  //Carga los valores predeterminados del objeto
  constructor(x, y, radius, color, text, backcolor, textcolor) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.backcolor = backcolor;
    this.textcolor = textcolor;
  }

  //Método para renderizar el objeto
  draw(context) {

    context.beginPath();

    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);

    //Relleno
    context.fillStyle = this.backcolor;
    context.fill();

    //Borde
    context.lineWidth = 5;
    context.strokeStyle = this.color;
    context.stroke();

    //Texto
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 20px cursive";
    context.fillStyle = this.textcolor;
    context.fillText(this.text, this.posX, this.posY);

    context.closePath();
  }
}

// ========================
// CÍRCULO ALEATORIO
// ========================

let randomRadius = Math.floor(Math.random() * 60) + 20;

let randomX = Math.random() * (canvasRandom.width - 2 * randomRadius) + randomRadius;
let randomY = Math.random() * (canvasRandom.height - 2 * randomRadius) + randomRadius;

let miCirculoRandom = new Circle(
  randomX,
  randomY,
  randomRadius,
  "rgb(166, 52, 186)",
  "Tec",
  "rgb(83, 186, 52)",
  "rgb(126, 52, 186)"
);

miCirculoRandom.draw(ctxRandom);

// ========================
// CÍRCULO CENTRADO
// ========================

let miCirculo = new Circle(
  canvasOOP.width / 2,
  canvasOOP.height / 2,
  80,
  "rgb(88, 131, 73)",
  "Tec",
  "rgb(108, 245, 66)",
  "rgb(72, 66, 245)"
);

miCirculo.draw(ctx);

// ========================
// MÚLTIPLES CÍRCULOS
// ========================

let maxCircle = 10;
let arrayCircle = [];

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

for (let i = 0; i < maxCircle; i++) {

  let randomRadius = Math.floor(Math.random() * 10 + 20);

  let randomX = Math.random() * (canvasMultiple.width - 2 * randomRadius) + randomRadius;
  let randomY = Math.random() * (canvasMultiple.height - 2 * randomRadius) + randomRadius;

  let fillColor = randomColor();   // color de relleno
  let borderColor = randomColor(); // color del borde
  let textColor = randomColor();   // color del número

  let miCirculoMultiple = new Circle(
    randomX,
    randomY,
    randomRadius,
    borderColor,
    i + 1,
    fillColor,
    textColor
  );

  arrayCircle.push(miCirculoMultiple);

  arrayCircle[i].draw(ctxMultiple);
}