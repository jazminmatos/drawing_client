// Line class
Line.setCanvasSize();
Line.clearButton.addEventListener("click", Line.clearDrawing)

Line.lineButton.addEventListener("click", function(e) {
    Line.canvas.addEventListener("mousedown", function(e) {
        Line.drawing = true;
        createLines(e)
    })
    
    Line.canvas.addEventListener("mousemove", function(e) {
        if (!Line.drawing) return;
        createLines(e)
    })

    Line.canvas.addEventListener("mouseup", function(e) {
        Line.drawing = false;
        Line.ctx.beginPath();
    })
})

// Reference class & ReferenceService Class
const base_image_url = "http://localhost:8000";
// create new instance using a URL
const image = new ReferenceService(base_image_url);
// allows user to fetch and display random image when button is clicked
Reference.randomImageButton.addEventListener ("click", e =>
    image.getImage()
)

// User class & UserService Class
const base_rails_url = "http://127.0.0.1:3000"
const userService = new UserService(base_rails_url);
// Actually, when I submit, I probably want to send that data to the backend first...
// THEN do a fetch GET request
// OR
// check if it exists or not --> if it does, GET request, if not, POST request THEN GET request
User.userSubmitButton.addEventListener ("click", e =>
    userService.getUser()
)