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
    createDrawing() {
        // fetch POST request to send to backend & retrieve
        const drawing = {
            image: "this will be the result of .toDataURL()",
            user_id: "this will be the id of the current username, can be found using userElement.id"
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
            })
    }
}