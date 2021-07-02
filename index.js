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
    if (User.all.length > 0 && userExists != undefined) {
        userExists.putOnDom()
    } else {
        userService.getUser()
    }
    // // If page has been reloaded, User.all will be empty
    // // If User.all is empty, then we have to run getUser (fetch GET request)
    // if (User.all.length === 0) {
    //     userService.getUser()
    //     // Check if the inputValue === to object in JSON object
    //         // if exists in JSON Obj & User.all is empty...
    //             // create a new instance of the User (in the frontend)
    //             // append that to the DOM
    //         // if it doesn't exist in the JSON Obj
    //             // run createUser (wrote this.createUser() in getUser() method)
    // // If User.all is NOT empty
    // } else {
    //     // Check if inputValue exists in User.all
    //     let userExists = User.all.find(userInstance => userInstance.username === User.userInput.value);
    //     // if inputValue exists in User.all
    //     if (userExists != undefined) {
    //         // use that user instance and put it on the DOM
    //         userExists.putOnDom()
    //     // if inputValue does NOT exist in User.all
    //     } else {
    //         // Check if the inputValue === to object in JSON object
    //         // if exists in JSON Obj & User.all is empty...
    //             // create a new instance of the User (in the frontend)
    //             // append that to the DOM
    //         // if it doesn't exist in the JSON Obj
    //             // run createUser (wrote this.createUser() in getUser() method)
    //         userService.getUser()
    //     }
    // }
})


// if (User.all.length === 0) {
//     userService.getUser()
// } else {
//     let userExists = User.all.find(userInstance => userInstance.username === User.userInput.value);
//     if (userExists != undefined) {
//         userExists.putOnDom()
//     } else {
//         userService.getUser()
//     }
// }

// Need to Refactor:
// If User.all != empty && inputValue exists in User.all --> userExists.putOnDom()
// If User.all is empty --> userService.getUser()
// If User.all is NOT empty BUT inputValue doesn't exist in backend --> userService.getUser()

// let userExists = User.all.find(userInstance => userInstance.username === User.userInput.value);
// if (User.all.length > 0 && userExists != undefined) {
//     userExists.putOnDom()
// } else {
//     userService.getUser()
// }
