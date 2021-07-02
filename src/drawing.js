class Drawing {
    static all = [];

    static userDrawingList = document.getElementById("user-drawings")

    // Button
    static saveDrawingButton = document.getElementById('save-button');

    constructor(id, image, user_id) {
        this.id = id;
        this.image = image;
        this.user_id = user_id;

        this.drawingElement = document.createElement('li');
    }

    drawingHTML() {
        // use id as buttons?
    }

    putOnDom() {

    }
}