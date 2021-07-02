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
        //this.drawings.map(drawing => Drawing.all.push(new Drawing(drawing.id, drawing.image, drawing.user_id)))
    }

    userHTML() {
        User.usernameList.innerHTML = ''
        //const drawingButtons = this.drawings.map(drawing => drawing.drawingHTML)
        // this.drawing.drawingElement.innerHTML += `
        //     <li>
        //         <button id="${this.drawing.id}" class="drawing buttons">See drawing ${this.drawing.id}</button>
        //     </li>
        // `
        this.userElement.innerHTML = `
            <br />
            <h3>Submit another user to switch users</h3>
            <br /><br /><br />
            <h3>${this.username} has drawn...</h3>
        `

        return this.userElement;
    }

    putOnDom() {
        let newDivs = this.drawings.map(function(drawing) {
            drawing.drawingElement.innerHTML = `<button id="${drawing.id}" class="drawing buttons">See drawing ${drawing.id}</button>`
            return drawing.drawingElement
        })
        //const divs = this.drawings.map(drawing => drawing.drawingElement)

        User.usernameList.appendChild(this.userHTML());
        debugger
        newDivs.map(div => Drawing.userDrawingList.appendChild(div))
        userId = this.id
    }
}