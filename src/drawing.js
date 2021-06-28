// Global variables, move to index.js?

const canvas = document.getElementById('canvas');
// leads to creation of a CanvasRenderingContext2d object
// which represents a 2d rendering context
const ctx = canvas.getContext("2d");

let rectangle = ctx.fillRect(800, 27, 100, 100)
function moveRectangle(e) {
    let rectangle = ctx.fillRect(600, 27, 100, 100)
}
canvas.addEventListener("click", moveRectangle)


// local variables
let drawing = false;

class Drawing {
    // do I need user_id or is that relationship created using the backend only?
    constructor(image) {
        this.image = image
    }

    // function that tells me I am drawing
    // isDrawing() {
        // drawing = true;
    // }

    // function that tells me I am NOT drawing
    // isNotDrawing() {
        // drawing = false;
    // }

    // function to be able to draw
    // draw(e) {
        // if (!drawing) return;
        // ctx.lineWidth = 10;
        // ctx.lineCap = "round"

        // ctx.lineTo(e.clientX, e.clientY);
        // ctx.stroke();
        // ctx.beginPath();
        // ctx.moveTo(e.clientX, e.clientY);
    // }

    // function to convert Drawing instance into image using canvas.toDataURL()
}

// EventListeners
// // when mouse is clicked, drawing = true
// canvas.addEventListener("mousedown", isDrawing)

// // when mouse is NOT clicked, drawing = false
// canvas.addEventListener("mouseup", isNOTDrawing)

// // when mouse is moving, call draw method
// canvas.addEventListener("mousemove", draw)

// REMINDER: 4 diff types of class methods
// 1. standard instance methods
// 2. static (class-level) methods
// 3. getter methods
// 4. setter methods
// All functions that I need will need to be instance methods...I think

