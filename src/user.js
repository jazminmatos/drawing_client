class User {
    static all = []
    static usernameList = document.getElementById("username-list")
    static userInput = document.querySelector("#username-input")
    static userSubmitButton = document.querySelector("#submit-username-button")
    static signOutButton = document.getElementById("sign-out-button")

    constructor (id, username, drawings) {
        this.id = id
        this.username = username;
        this.drawings = drawings.map(drawing => new Drawing(drawing.id, drawing.image, drawing.user_id, drawing.drawingElement));

        this.userElement = document.createElement('div');
        this.userElement.id = `user-${this.id}`;
        this.userElement.className = "user"

        User.all.push(this);
    }

    userHTML() {
        User.usernameList.innerHTML = ''
        this.userElement.innerHTML = `
            <br />
            <h3>Submit another user to see their drawings:</h3>
            <br />
        `

        return this.userElement;
    }

    drawingHTML() {
        Drawing.userDrawingList.innerHTML = ''
        const divs = this.drawings.map(function(drawing) {
            drawing.drawingElement.innerHTML = `<button id="${drawing.id}" class="drawing buttons">See drawing ${drawing.id}</button>`
            return drawing.drawingElement
        })
        return divs
    }

    putOnDom() {
        User.usernameList.appendChild(this.userHTML());
        this.drawingHTML().map(d => Drawing.userDrawingList.appendChild(d))
        userId = this.id
    }
}