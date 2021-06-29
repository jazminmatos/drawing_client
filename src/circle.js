// class Circle {
//     constructor(xpos, ypos, radius, color) {
//         this.xpos = xpos;
//         this.ypos = ypos;
//         this.radius = radius;
//         this.color = color;
//     }

//     // input will be ctx, defined in index.js
//     draw(context) {
//         // creates a new path
//         // creates the circle
//         context.beginPath();
//         context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI*2, false);
//         // outlines the current or given path w/ current stroke style
//         context.stroke(); 
//         context.closePath();
//     }
// }

// //Buttons
// const circleButton = document.getElementById('circle-button');

// // EventListeners
// // When circleButton clicked, user can draw w/ circles
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

// // An example of a permanent static circle:
// // let circle = new Circle(100, 100, 50, "black");
// // Need to call draw in order for it to show up
// //circle.draw(ctx)