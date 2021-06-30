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
const randomImageButton = document.getElementById('random-image-button')
const saveButton = document.getElementById('save-button');

// Reference class & ReferenceService Class
const base_image_url = "http://localhost:8000";
// create new instance using a URL
const image = new ReferenceService(base_image_url);
// allows user to fetch and display random image when button is clicked
randomImageButton.addEventListener ("click", e =>
    image.getImage()
)

// User class & UserService Class
//const base_rails_url = "http://127.0.0.1:3000"
//const userService = new UserService(base_rails_url);


// let canvasBounds = canvas.getBoundingClientRect();
// let rectLeft = canvasBounds.left;
// let rectTop = canvasBounds.top;

// Event Listeners
Line.clearButton.addEventListener("click", Line.clearDrawing)

let canvasBounds = canvas.getBoundingClientRect();
    let rectLeft = canvasBounds.left;
    let rectTop = canvasBounds.top;