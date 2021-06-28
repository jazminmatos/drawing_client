// Global variables, move to index.js?

const canvas = document.getElementById('canvas');
// leads to creation of a CanvasRenderingContext2d object
// which represents a 2d rendering context
const ctx = canvas.getContext("2d");

ctx.fillRect(0, 1, 100, 100)

// local variables
let drawing = false;

// functions
function startPosition() {
    drawing = true;
}

function endPosition() {
    drawing = false;
}

function draw(e) {
    // if we're not drawing, return 
    if (!drawing) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
}

// EventListeners
// whenever we put mousedown, painting = true
canvas.addEventListener('mousedown', startPosition)
// whenever we put mouseup, painting = false
canvas.addEventListener('mouseup', endPosition)
canvas.addEventListener('mousemove', draw)