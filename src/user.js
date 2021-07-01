class User {
    static all = []
    static usernameContainer = document.getElementById("username-container")
    static userInput = document.getElementById("username-input")
    static userSubmitButton = document.getElementById("submit-username-button")

    constructor (id, username) {
        this.id = id
        this.username = username;

        this.userElement = document.createElement('div');
        this.userElement.id = `user-${this.id}`;

        User.all.push(this);
    }

    userHTML() {
        this.userElement.innerHTML += `
            <h3>${this.username} has drawn...</h3>
        `
        
        return this.userElement;
    }

    putOnDom() {
        User.usernameContainer.appendChild(this.userHTML());
    }
}