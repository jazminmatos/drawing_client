// Global variables
const canvas = document.getElementById('canvas');
// leads to creation of a CanvasRenderingContext2d object
// which represents a 2d rendering context
const ctx = canvas.getContext("2d");
// Allows canvas size to be it's container's size
const drawingBoard = document.getElementsByClassName('drawing-board');
canvas.height = drawingBoard[0].offsetHeight;
canvas.width = drawingBoard[0].offsetWidth;
// Buttons
const saveButton = document.getElementById('save-button');

// Local variables
let drawing = false;

let canvasBounds = canvas.getBoundingClientRect();
let rectLeft = canvasBounds.left;
let rectTop = canvasBounds.top;

// EventListeners
// When circleButton clicked, user can draw w/ circles
// circleButton.addEventListener("click", function(e) {
//     // Allows user to click and have a circle appear
//     // HOWEVER, if user resizes the viewport, mouseposition vs circle position changes...
//     canvas.addEventListener("mousedown", function(e) {
//         drawing = true
//         // Retrieve position of canvas
//         // returns DOMRect object w/ info about the size of an element & its position relative to the viewport
//         // Had to move this inside this eventListener b/c as global variables, whenever viewport = resized, mouseposition/circle changed
//         let canvasBounds = canvas.getBoundingClientRect();
//         let rectLeft = canvasBounds.left;
//         let rectTop = canvasBounds.top

//         let newCircle = new Circle(e.clientX - rectLeft, e.clientY - rectTop, 50, "red");
//         newCircle.draw(ctx)    
//     })

//     // If I am not drawing, i.e. if I didn't do 'mousedown', nothing will happen when I move the mouse  
//     canvas.addEventListener("mousemove", function(e) {
//         if (!drawing) return;
//         let canvasBounds = canvas.getBoundingClientRect();
//         let rectLeft = canvasBounds.left;
//         let rectTop = canvasBounds.top

//         let newCircle = new Circle(e.clientX - rectLeft, e.clientY - rectTop, 50, "red");
//         newCircle.draw(ctx)  
//     })

//     canvas.addEventListener("mouseup", function(e) {
//         drawing = false
//     })
// })

// EventListeners
// When lineButton clicked, user can draw w/ lines
// An example of a permanent 'line' (looks like a dot):
// let line = new Line(100, 200)
// line.draw(ctx)
// lineButton.addEventListener("click", function(e) {
//     canvas.addEventListener("mousedown", function(e) {
//         drawing = true
//         let canvasBounds = canvas.getBoundingClientRect();
//         let rectLeft = canvasBounds.left;
//         let rectTop = canvasBounds.top;
        
//         let line = new Line (e.clientX - rectLeft, e.clientY - rectTop);
//         line.draw(ctx);
//     })
    
//     canvas.addEventListener("mousemove", function(e) {
//         if (!drawing) return;
//         let canvasBounds = canvas.getBoundingClientRect();
//         let rectLeft = canvasBounds.left;
//         let rectTop = canvasBounds.top;
        
//         let line = new Line (e.clientX - rectLeft, e.clientY - rectTop);
//         line.draw(ctx);
//     })

//     canvas.addEventListener("mouseup", function(e) {
//         drawing = false
//         ctx.beginPath()
//     })
// })

// clearButton.addEventListener("click", function(e) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
// })

// Fetch Requests