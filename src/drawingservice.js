class DrawingService {    
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    // Read/Index Action
    getDrawing() {
        // fetch GET request to retrieve 
        fetch(`${this.endpoint}/drawings`)
            .then(resp => resp.json())
            .then(function(json) {
                console.log(json)
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
                
                console.log(newDrawingInstance)
            })
    }
}