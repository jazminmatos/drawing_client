class Line {
    constructor(xpos, ypos) {
        this.xpos = xpos
        this.ypos = ypos
    }

    draw(context) {
        context.lineWidth = 10;
        context.lineCap = "round";
        
        context.lineTo(this.xpos, this.ypos);
        context.stroke();
        context.beginPath()
        context.moveTo(this.xpos, this.ypos);
    }

/////////////////////////////////////////////////////////

    // startDrawing(e) {
    //     drawing = true;
    //     draw(e);
    // }

    // draw(e) {
    //     if (!drawing) return;
    //     ctx.lineWidth = 10;
    //     ctx.lineCap = "round";
        
    //     ctx.lineTo(e.clientX, e.clientY);
    //     ctx.stroke();
    //     ctx.beginPath()
    //     ctx.moveTo(this.xpos, this.ypos);
    // }

//     stopDrawing(e) {
//         drawing = false;
//         //ctx.beginPath();
//     }
}

// EventListeners
// When lineButton clicked, user can draw w/ lines
// An example of a permanent 'line' (looks like a dot):
// let line = new Line(100, 200)
// line.draw(ctx)

lineButton.addEventListener("click", function(e) {
    canvas.addEventListener("mousedown", function(e) {
        drawing = true
        let canvasBounds = canvas.getBoundingClientRect();
        let rectLeft = canvasBounds.left;
        let rectTop = canvasBounds.top;
        
        let line = new Line (e.clientX - rectLeft, e.clientY - rectTop);
        line.draw(ctx);
    })
    
    canvas.addEventListener("mousemove", function(e) {
        if (!drawing) return;
        let canvasBounds = canvas.getBoundingClientRect();
        let rectLeft = canvasBounds.left;
        let rectTop = canvasBounds.top;
        
        let line = new Line (e.clientX - rectLeft, e.clientY - rectTop);
        line.draw(ctx);
    })

    canvas.addEventListener("mouseup", function(e) {
        drawing = false
        ctx.beginPath()
    })
})

clearButton.addEventListener("click", function(e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

