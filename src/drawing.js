class Drawing {
    static all = [];

    static userDrawingList = document.getElementById("user-drawings")

    // Button
    static saveDrawingButton = document.getElementById("save-button");

    constructor(id, image, user_id) {
        this.id = id;
        this.image = image;
        this.user_id = user_id;

        this.drawingElement = document.createElement("div");
        this.drawingElement.addEventListener("click", this.convertImgDataToDrawing);

        Drawing.all.push(this);
    }

    drawingHTML() {
        this.drawingElement.innerHTML += `
            <button id="${this.id}" class="drawing buttons">See drawing ${this.id}</button>
        `

        return this.drawingElement
    }

    putOnDom() {
        Drawing.userDrawingList.appendChild(this.drawingHTML());
    }

    convertImgDataToDrawing(e) {
        if (e.target.className === "drawing buttons") {
            const drawing_id = e.target.id
            const drawingExists = Drawing.all.find(drawingInstance => drawingInstance.id === drawing_id)
            
            if (Drawing.all.length > 0 && drawingExists != undefined) {
                // reconvert drawingExists.image to canvas
                const imageData = drawingExists.image
                Line.ctx.drawImage(imageData, 0, 0)
            } else {
                // this should result in reconversion of image to canvas
                drawingService.getDrawing(drawing_id)
            }
        }
    }
}