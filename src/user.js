class User {
    static all = []
    static usernameContainer = document.getElementById("username-container")
    static userInput = document.getElementById("username-input")
    static userSubmitButton = document.getElementById("submit-username-button")

    constructor (id, username) {
        this.id = id
        this.username = username;

        this.userElement = document.createElement('li');
        this.userElement.id = `user-${this.id}`;

        User.all.push(this);
    }

    userHTML() {
        // Remove the username input & submit button when appending username to DOM
        // if not doing the above, clear value of username-input
        // Reference.usernameContainer.innerHTML = '';
        // Write `${this.username} has drawn...`
        this.element.innerHTML += `
            <h3>${this.name}</h3>
        `
        
        return this.userElement;
    }

    putonDom() {
        Reference.usernameContainer.appendChild(this.userHTML());
    }
}