class Line {
    static canvas = document.getElementById('canvas');
    static ctx = Line.canvas.getContext("2d"); // leads to creation of a CanvasRenderingContext2d object

    static drawingBoard = document.getElementsByClassName('drawing-board');
    
    static drawing = false;
    static colorPicker = document.querySelector("body > main > section > div.dashboard > section.colors > input");
    static strokeWeight = document.querySelector("body > main > section > div.dashboard > section.thickness > input");
    
    // Buttons
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
    
    static setCanvasSize() {
        Line.canvas.height = Line.drawingBoard[0].offsetHeight;
        Line.canvas.width = Line.drawingBoard[0].offsetWidth;
    }
    
    static clearDrawing() {
        Line.ctx.clearRect(0, 0, Line.canvas.width, Line.canvas.height);
    }
}

// Is this the best place for this function to go?
function createLines(e) {
        let canvasBounds = Line.canvas.getBoundingClientRect();
        let rectLeft = canvasBounds.left;
        let rectTop = canvasBounds.top;
        
        let x = e.clientX - rectLeft;
        let y = e.clientY - rectTop;
        let line = new Line (x, y);
        line.draw(Line.ctx);
}