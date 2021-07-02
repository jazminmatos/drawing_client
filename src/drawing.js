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
        // this.drawingElement.id = `drawing-${this.id}`;
        this.drawingElement.addEventListener("click", this.handleClick);

        Drawing.all.push(this);
    }

    drawingHTML() {
        //return this.drawingElement
        this.drawingElement.innerHTML += `
            <li>
                <button id="${this.id}" class="drawing">See drawing ${this.id}</button>
            </li>
        `

        return this.drawingElement
        // How do I make it so that ALL of their previous drawings show up
        // as soon as their username gets submited
            // in userSubmitButton.eventListener, also do a 
    }

    putOnDom() {
        Drawing.userDrawingList.appendChild(this.drawingHTML());
    }

    handleClick(e) {
        if (e.target.className === `drawing`) {
            console.log(e.target.id)
            let drawingExists = Drawing.all.find(drawingInstance.id === e.target.id)
            
            if (Drawing.all.length > 0 && drawingExists != undefined) {
                // reconvert drawingExists.image to canvas
                ctx.drawImage(drawingInstance.image, 0, 0)
            } else {
                drawingService.getDrawing()
                    // this should result in reconversion of image to canvas
            }
        }
    }
}