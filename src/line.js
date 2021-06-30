class Line {
    static canvas = document.getElementById('canvas');
    static ctx = Line.canvas.getContext("2d");
    
    static drawing = false;
    static colorPicker = document.querySelector("body > main > section > div.dashboard > section.colors > input");
    static strokeWeight = document.querySelector("body > main > section > div.dashboard > section.thickness > input");
    
    static lineButton = document.querySelector("#line-button");
    static clearButton = document.getElementById('clear-button');
    
    constructor(xpos, ypos) {
        this.xpos = xpos;
        this.ypos = ypos;
    }

    draw() {
        Line.ctx.lineWidth = Line.strokeWeight.value;
        Line.ctx.lineCap = "round";
        Line.ctx.strokeStyle = Line.colorPicker.value;
        
        Line.ctx.lineTo(this.xpos, this.ypos);
        Line.ctx.stroke();
        Line.ctx.beginPath();
        Line.ctx.moveTo(this.xpos, this.ypos);
    }

    static clearDrawing() {
        Line.ctx.clearRect(0, 0, Line.canvas.width, Line.canvas.height);
    }
}

// EventListeners
// When lineButton clicked, user can draw w/ lines
// An example of a permanent 'line' (looks like a dot):
// let line = new Line(100, 200)
// line.draw(ctx)


Line.lineButton.addEventListener("click", function(e) {
    Line.canvas.addEventListener("mousedown", function(e) {
        Line.drawing = true;
        let x = e.clientX - rectLeft;
        let y = e.clientY - rectTop;
        let line = new Line (x, y);
        line.draw(Line.ctx);
    })
    
    Line.canvas.addEventListener("mousemove", function(e) {
        if (!Line.drawing) return;
        let x = e.clientX - rectLeft;
        let y = e.clientY - rectTop;
        let line = new Line (x, y);
        line.draw(Line.ctx);
    })

    Line.canvas.addEventListener("mouseup", function(e) {
        Line.drawing = false;
        Line.ctx.beginPath();
    })
})
