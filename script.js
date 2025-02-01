const canvas = document.getElementById('fractalCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;

// Mandelbrot parameters
const maxIterations = 100;
const zoom = 200;
const offsetX = -2.5;
const offsetY = -1.5;

function drawMandelbrot() {
    for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
            let zx = 0;
            let zy = 0;
            let cx = (x / zoom) + offsetX;
            let cy = (y / zoom) + offsetY;
            let iteration = 0;

            while (zx * zx + zy * zy < 4 && iteration < maxIterations) {
                let temp = zx * zx - zy * zy + cx;
                zy = 2 * zx * zy + cy;
                zx = temp;
                iteration++;
            }

            // Set color based on iterations
            let color = iteration === maxIterations ? '#000' : `hsl(${iteration % 360}, 100%, 50%)`;
            ctx.fillStyle = color;
            ctx.fillRect(x, y, 1, 1);
        }
    }
}

// Draw the fractal
drawMandelbrot();
