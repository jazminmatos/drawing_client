// Global variables

// Line class
Line.setCanvasSize()

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