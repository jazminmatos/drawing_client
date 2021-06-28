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
