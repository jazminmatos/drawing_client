// Global variables

// Maybe I need to move this into an event listener that listens for window's size change
// Maybe I'll need to save the below in a static method and then call that method in the event listener
// Line.canvas.height = Line.drawingBoard[0].offsetHeight;
// Line.canvas.width = Line.drawingBoard[0].offsetWidth;

let canvasBounds = Line.canvas.getBoundingClientRect();
let rectLeft = canvasBounds.left;
let rectTop = canvasBounds.top;

// Reference class & ReferenceService Class
const base_image_url = "http://localhost:8000";
// create new instance using a URL
const image = new ReferenceService(base_image_url);
// allows user to fetch and display random image when button is clicked
Reference.randomImageButton.addEventListener ("click", e =>
    image.getImage()
)

// User class & UserService Class
//const base_rails_url = "http://127.0.0.1:3000"
//const userService = new UserService(base_rails_url);


// Event Listeners
Line.clearButton.addEventListener("click", Line.clearDrawing)