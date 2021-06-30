class Line {
    static clearButton = document.getElementById('clear-button');
    
    constructor(xpos, ypos) {
        this.xpos = xpos;
        this.ypos = ypos;
    }

    draw() {
        ctx.lineWidth = strokeWeight.value;
        ctx.lineCap = "round";
        ctx.strokeStyle = colorPicker.value;
        
        ctx.lineTo(this.xpos, this.ypos);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(this.xpos, this.ypos);
    }

    static clearDrawing() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

// EventListeners
// When lineButton clicked, user can draw w/ lines
// An example of a permanent 'line' (looks like a dot):
// let line = new Line(100, 200)
// line.draw(ctx)

// Buttons
// Had to store buttons here, otherwise Uncaught ReferenceError if put in index.js
const lineButton = document.querySelector("#line-button");


lineButton.addEventListener("click", function(e) {
    canvas.addEventListener("mousedown", function(e) {
        drawing = true;
        let line = new Line (e.clientX - rectLeft, e.clientY - rectTop);
        line.draw(ctx);
    })
    
    canvas.addEventListener("mousemove", function(e) {
        if (!drawing) return;
        let line = new Line (e.clientX - rectLeft, e.clientY - rectTop);
        line.draw(ctx);
    })

    canvas.addEventListener("mouseup", function(e) {
        drawing = false;
        ctx.beginPath();
    })
})
