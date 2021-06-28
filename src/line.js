class Line {
    constructor(xpos, ypos) {
        this.xpos = xpos
        this.ypos = ypos
    }

    draw(context) {
        context.lineWidth = 10;
        context.lineCap = "round";
        
        context.beginPath();
        context.lineTo(this.xpos, this.ypos);
        context.moveTo(this.xpos, this.ypos);
        context.stroke();
        context.closePath();
    }
}
