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
        this.drawingElement.id = `drawing-${this.id}`;
    }

    drawingHTML() {
        //return this.drawingElement
        this.drawingElement.innerHTML += `
            <li>
                <button>${this.id}</button>
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
}