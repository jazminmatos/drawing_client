// Line class
Line.setCanvasSize();
Line.clearButton.addEventListener("click", Line.clearDrawing)

function createLines(e) {
        const canvasBounds = Line.canvas.getBoundingClientRect();
        const rectLeft = canvasBounds.left;
        const rectTop = canvasBounds.top;
        
        const x = e.clientX - rectLeft;
        const y = e.clientY - rectTop;
        const line = new Line (x, y);
        line.draw(Line.ctx);
}

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
// Populate Reference.all w/ image objects
image.getImage()

Reference.randomImageButton.addEventListener ("click", function(e) {
    // Retrieve random number
    function randomNumber() {return Math.floor(Math.random() * 17)} 
    // Retrive obj from Reference.all using random number
    Reference.all[randomNumber()].putOnDom()
})

// User class & UserService lass
const base_rails_url = "http://127.0.0.1:3000"
const userService = new UserService(base_rails_url);
// this variable gets updated in User's .putOnDom() method
// then gets used to create a drawing
let userId = ""

User.userSubmitButton.addEventListener ("click", function(e) {
    // Necessary to check User.all length b/c User.all array becomes empty on refresh
    // Also prevents unecessary fetch requests
    const input = User.userInput.value
    const userExists = User.all.find(userInstance => userInstance.username === input);
    
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