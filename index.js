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

// Fetch Requests



/////////////////////////////////////////////////////////

    // startDrawing(e) {
    //     drawing = true;
    //     draw(e);
    // }

    // draw(e) {
    //     if (!drawing) return;
    //     ctx.lineWidth = 10;
    //     ctx.lineCap = "round";
        
    //     ctx.lineTo(e.clientX, e.clientY);
    //     ctx.stroke();
    //     ctx.beginPath()
    //     ctx.moveTo(this.xpos, this.ypos);
    // }

//     stopDrawing(e) {
//         drawing = false;
//         //ctx.beginPath();
//     }


// class Line {
//     constructor(xpos, ypos) {
//         this.xpos = xpos
//         this.ypos = ypos
//     }

//     startDrawing(e) {
//         drawing = true
//         draw(e)
//     }

//     keepDrawing({clientX: x, clientY: y}) {
//         if (!drawing) return;
//         ctx.lineWidth = 10;
//         ctx.lineCap = "round";
        
//         ctx.lineTo(x - rectLect, y - rectTop);
//         ctx.stroke();
//         ctx.beginPath()
//         ctx.moveTo(x - rectLect, y - rectTop);
//     }
//     stopDrawing() {
//         drawing = false
//         ctx.beginPath()
//     }
// }

// canvas.addEventListener("mousedown", startDrawing)
// canvas.addEventListener("mousemove", keepDrawing)
// canvas.addEventListener("mousemove", stopDrawing)

// // Buttons
// //const lineButton = document.querySelector("#line-button")
// const clearButton = document.getElementById('clear-button');

// //lineButton.addEventListener("click", function(e) {
//     // canvas.addEventListener("mousedown", function(e) {
//     //     drawing = true
//     //     let line = new Line (e.clientX - rectLeft, e.clientY - rectTop);
//     //     line.draw(ctx);
//     // })
    
//     // canvas.addEventListener("mousemove", function(e) {
//     //     if (!drawing) return;
//     //     let line = new Line (e.clientX - rectLeft, e.clientY - rectTop);
//     //     line.draw(ctx);
//     // })

//     // canvas.addEventListener("mouseup", function(e) {
//     //     drawing = false
//     //     ctx.beginPath()
//     // })
// //})

// clearButton.addEventListener("click", function(e) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
// })


