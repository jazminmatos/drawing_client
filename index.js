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

User.userSubmitButton.addEventListener ("click", function(e) {
    let userExists = User.all.find(userInstance => userInstance.username === User.userInput.value);
    // if value exists as an instance inside User.all 
    if (userExists != undefined) {
        // Return info from User.all & append that to the DOM
        userExists.putOnDOM()
    } else {
    // else if doesn't exist in User.all
        // Run fetch POST request 
        userService.createUser()
    }
})