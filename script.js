const canvas = document.getElementById('fractalCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;

// Randomize fractal parameters
const maxIterations = 100;
const zoom = Math.random() * 300 + 100; // Random zoom between 100 and 400
const offsetX = (Math.random() - 0.5) * 4; // Random offsetX between -2 and 2
const offsetY = (Math.random() - 0.5) * 4; // Random offsetY between -2 and 2

// Randomly choose between Mandelbrot and Julia set
const fractalType = Math.random() > 0.5 ? 'mandelbrot' : 'julia';

// Julia set constant (randomized)
const juliaCx = (Math.random() - 0.5) * 2;
const juliaCy = (Math.random() - 0.5) * 2;

console.log(`Fractal Type: ${fractalType}`);
console.log(`Zoom: ${zoom}, OffsetX: ${offsetX}, OffsetY: ${offsetY}`);
console.log(`Julia Constants: cx=${juliaCx}, cy=${juliaCy}`);

function drawFractal() {
    for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
            let zx, zy, cx, cy;

            if (fractalType === 'mandelbrot') {
                // Mandelbrot set
                zx = 0;
                zy = 0;
                cx = (x / zoom) + offsetX;
                cy = (y / zoom) + offsetY;
            } else {
                // Julia set
                zx = (x / zoom) + offsetX;
                zy = (y / zoom) + offsetY;
                cx = juliaCx;
                cy = juliaCy;
            }

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
drawFractal();

// Draw the fractal
drawMandelbrot();
