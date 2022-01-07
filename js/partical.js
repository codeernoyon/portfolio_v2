const canvas = document.querySelector("#canvas1");
const body = document.querySelector("body");
const particalStyle = document.querySelector("#particale-style");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

let particalAray;

// mouse position

let mouse = {
  x: null,
  y: null,
  radius: (canvas.height / 90) * (canvas.width / 90),
};

window.addEventListener("mousemove", function (event) {
  (mouse.x = event.x), (mouse.y = event.y);
});
canvas
class Partical {
  constructor(x, y, dx, dy, size, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.size = size;
  }
  //draw pawrticle
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgba(189, 189, 189, .01)";
    ctx.fill();
  }
  //update particale
  update() {
    if (this.x > canvas.width || this.x < 0) {
      this.dx = -this.dx;
    }
    if (this.y > canvas.height || this.y < 0) {
      this.dy = -this.dy;
    }

    //check particle position
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < mouse.radius + this.size) {
      if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
        this.x += 10;
      }
      if (mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 10;
      }
      if (mouse.y < this.y && this.y < canvas.width - this.size * 10) {
        this.y == 10;
      }
      if (mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 10;
      }
    }

    this.x += this.dx;
    this.y -= this.dy;
    this.draw();
  }
}

function inti() {
  particalAray = [];
  for (let i = 0; i < 160; i++) {
    let x = Math.random() * (innerWidth - 80 * 2) + 80;
    let y = Math.random() * (innerHeight - 80 * 2) + 80;
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;
    let size = 3;
    particalAray.push(new Partical(x, y, dx, dy, size));
  }
}

function animated() {
  requestAnimationFrame(animated);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < particalAray.length; i++) {
    particalAray[i].update();
  }
  connect();
}

function connect() {
  let opaciy = 1;
  for (let a = 0; a < particalAray.length; a++) {
    for (let b = a; b < particalAray.length; b++) {
      let distance =
        (particalAray[a].x - particalAray[b].x) *
          (particalAray[a].x - particalAray[b].x) +
        (particalAray[a].y - particalAray[b].y) *
          (particalAray[a].y - particalAray[b].y);
      if (distance < (canvas.width / 7) * (canvas.height / 7)) {
        opaciyValue = 1 - distance / 20000;
        ctx.beginPath();
        ctx.strokeStyle = "rgba(189, 189, 189, .1";
        ctx.lineWidth = 1;
        ctx.moveTo(particalAray[a].x, particalAray[a].y);
        ctx.lineTo(particalAray[b].x, particalAray[b].y);
        ctx.stroke();
      }
    }
  }
}
window.addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  mouse.radius = (canvas.height / 80) * (canvas.width / 80);
  inti();
});
window.addEventListener("mouseout", function () {
  (mouse.x = undefined), (mouse.y = undefined);
});
inti();
animated();
