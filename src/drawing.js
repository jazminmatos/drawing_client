// Global variables, move to index.js?

const canvas = document.getElementById('canvas');
// leads to creation of a CanvasRenderingContext2d object
// which represents a 2d rendering context
const ctx = canvas.getContext("2d");
// Allows canvas size to be it's container's size
const drawingBoard = document.getElementsByClassName('drawing-board');
canvas.height = drawingBoard[0].offsetHeight;
canvas.width = drawingBoard[0].offsetWidth;
// Buttons
const lineButton = document.getElementById('line-button')
const circleButton = document.getElementById('circle-button');
const triangleButton = document.getElementById('triangle-button')
const squareButton = document.getElementById('square-button')

// local variables
let drawing = false;

// An example of a permanent static circle:
// let circle = new Circle(100, 100, 50, "black");
// Need to call draw in order for it to show up
//circle.draw(ctx)

// create a circle class
// maybe this can be a type of pen that can be toggled w/ a button???
class Circle {
    constructor(xpos, ypos, radius, color) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
    }

    draw(context) {
        // creates a new path
        context.beginPath();
        // creates the circle
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI*2, false);
        // outlines the current or given path w/ current stroke style
        context.stroke(); 
        context.closePath();
    }
}


// EventListeners
// When circleButton clicked, user can draw w/ circles
circleButton.addEventListener("click", function(e) {
    // Allows user to click and have a circle appear
    // HOWEVER, if user resizes the viewport, mouseposition vs circle position changes...
    canvas.addEventListener("mousedown", function(e) {
        drawing = true
        // Retrieve position of canvas
        // returns DOMRect object w/ info about the size of an element & its position relative to the viewport
        // Had to move this inside this eventListener b/c as global variables, whenever viewport = resized, mouseposition/circle changed
        let canvasBounds = canvas.getBoundingClientRect();
        let rectLeft = canvasBounds.left;
        let rectTop = canvasBounds.top

        let newCircle = new Circle(e.clientX - rectLeft, e.clientY - rectTop, 50, "red");
        newCircle.draw(ctx)    
    })

    // If I am not drawing, i.e. if I didn't do 'mousedown', nothing will happen when I move the mouse  
    canvas.addEventListener("mousemove", function(e) {
        if (!drawing) return;
        let canvasBounds = canvas.getBoundingClientRect();
        let rectLeft = canvasBounds.left;
        let rectTop = canvasBounds.top

        let newCircle = new Circle(e.clientX - rectLeft, e.clientY - rectTop, 50, "red");
        newCircle.draw(ctx)  
    })

    canvas.addEventListener("mouseup", function(e) {
        drawing = false
    })
})


// figure out mouse/circle position issue
// try to implement new eventlisteners:
    // drawing circle after clicking mouse and keep drawing while dragging it
    // once I've stopped clicking, stop drawing




class Drawing {
    // do I need user_id or is that relationship created using the backend only?
    constructor(image) {
        this.image = image
    }

    // function that tells me I am drawing
    // isDrawing() {
        // drawing = true;
    // }

    // function to be able to draw
    // draw(e) {
        // if (!isDrawing) return;
        // ctx.lineWidth = 10;
        // ctx.lineCap = "round"

        // ctx.lineTo(e.clientX, e.clientY);
        // what allows us to draw a line
        // ctx.stroke();
        // ctx.beginPath();
        // ctx.moveTo(e.clientX, e.clientY);
    // }

    // function to clear the canvas

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

