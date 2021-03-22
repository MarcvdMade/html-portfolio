window.onload = () => {
    init();
}

let c = document.getElementById("canvas1");
let ctx = c.getContext("2d");

// set canvas width + height
c.width = window.innerWidth;
c.height = window.innerHeight;

// particles
let particlesArray = [];
let particleAmount = 200;

const gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop('0.1', 'red');
gradient.addColorStop('0.2', 'blue');
gradient.addColorStop('0.3', 'yellow');
gradient.addColorStop('0.4', 'pink');
gradient.addColorStop('0.5', 'purple');
gradient.addColorStop('0.6', 'lime');
gradient.addColorStop('0.7', 'green');
gradient.addColorStop('0.8', 'orange');
gradient.addColorStop('0.9', 'lightsalmon');

// title element
let titleElement = document.getElementById("title");
let titleMeasurements = titleElement.getBoundingClientRect();
let title = {
    x: titleMeasurements.left,
    y: titleMeasurements.top,
    width: titleMeasurements.width,
    height: 10
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 7;
        this.weight = Math.random() * 2;
        this.directionX = (Math.random() * 2) - 1;
    }

    update() {

        if (this.y > c.height) {
            this.y = 0 - this.size;
            this.weight = Math.random() * 2;
            this.x = Math.random() * c.width * 1.2;
        }

        this.weight += 0.01;
        this.y += this.weight;
        this.x += this.directionX;

        // check for collision
        if (
            this.x < title.x + title.width &&
            this.x + this.size > title.x &&
            this.y < title.y + title.height &&
            this.y + this.size > title.y
        ) {
            this.y - + 3;
            this.weight *= -1.1;
        }
    }

    draw() {
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, c.width, c.height);

    for (let i = 0; i < particleAmount; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }

    ctx.fillRect(title.x, title.y, title.width, title.height);

    requestAnimationFrame(animate);
}

function init() {
    // create particles
    for (let i = 0; i < particleAmount; i++) {
        const x = Math.random() * c.width;
        particlesArray.push(new Particle(x, 0));
    }

    animate();

    // console log completion
    console.log("init complete");
}

window.addEventListener('resize', function () {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    titleMeasurements = titleElement.getBoundingClientRect();
    title = {
        x: titleMeasurements.left,
        y: titleMeasurements.top,
        width: titleMeasurements.width,
        height: 10
    }

});