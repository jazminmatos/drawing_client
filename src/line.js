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
}
