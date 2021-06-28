// Global variables, move to index.js?

const canvas = document.getElementById('canvas');
// leads to creation of a CanvasRenderingContext2d object
// which represents a 2d rendering context
const ctx = canvas.getContext("2d");

ctx.fillRect(800, 27, 100, 100)

// local variables
let drawing = false;

class Drawing {
    // do I need user_id or is that relationship created using the backend only?
    constructor(image) {
        this.image = image
    }
}