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

// User class & UserService lass
const base_rails_url = "http://127.0.0.1:3000"
const userService = new UserService(base_rails_url);
// this variable gets updated in User's .putOnDom() method
// then gets used to create a drawing
let userId = ""

User.userSubmitButton.addEventListener ("click", function(e) {
    // Necessary to check User.all length b/c User.all array becomes empty on refresh
    // Also prevents unecessary fetch requests
    let userExists = User.all.find(userInstance => userInstance.username === User.userInput.value);
    
    if (User.all.length > 0 && userExists != undefined) {
        userExists.putOnDom()
    } else {
        userService.getUser()
    }
})

// Drawing class & DrawingService class
const drawingService = new DrawingService(base_rails_url)

Drawing.saveDrawingButton.addEventListener ("click", function(e) {
    // if usernameList section is NOT empty, meaning if a username has been submitted/appended
    if (User.usernameList.innerText.length != 0) {
        // Retrieve id and pass it in as an argument to createDrawing
        drawingService.createDrawing(userId)
    } else {
        // alert: You cannot save the drawing without submitting a username
        window.alert("You cannot save the drawing without submitting a username...😅")
    }
})

// add event listener for drawing-:id buttons
// when clicked, fetch GET request OR search for it in Drawing.all
    // convert image attribute and reload it onto canvas
        // reload image onto canvas using Drawing.all & instance id
        // ctx.drawImage(drawingInstance.image, 0, 0)

// Need to figure out a way to have all of a user's drawings show up when a user submits username