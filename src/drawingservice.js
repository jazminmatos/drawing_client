class DrawingService {    
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    // Read/Index Action
    getDrawing(drawing_id) {
        // fetch GET request to retrieve 
        fetch(`${this.endpoint}/drawings`)
            .then(resp => resp.json())
            .then(function(json) {
                // No need to check if it exists in the backend, 
                // b/c we know for sure it's there, 
                // or else we wouldn't have access to the show button
                const imageData = json[drawing_id - 1].image

                // reload image onto canvas using Drawing.all & instance id
                const img = new Image()
                img.onload = function() {
                    Line.ctx.drawImage(img, 0, 0)
                }
                img.src = imageData
            })
    }

    // Create Action
    createDrawing(userId) {
        // fetch POST request to send to backend & retrieve
        const drawing = {
            image: Line.canvas.toDataURL(),
            user_id: userId
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // drawing === object, but everything we share on internet needs to be a string 
            body: JSON.stringify(drawing)
        }

        fetch(`${this.endpoint}/drawings`, configObj)
            .then(resp => resp.json())
            .then(drawing => {
                const newDrawingInstance = new Drawing(drawing.id, drawing.image, drawing.user_id)
                newDrawingInstance.putOnDom()
                //debugger
                // Search for user instance --> 
                const user = User.all.find(user => user.id === userId)
                // Push drawing instance --> 
                user.drawings[length] = newDrawingInstance
            })
    }
}