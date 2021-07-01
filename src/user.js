class User {
    static all = []
    static usernameContainer = document.getElementById("username-container")
    static userSubmitButton = document.getElementById("submit-username-button")

    constructor (id, username) {
        this.id = id
        this.username = username;

        this.userElement = document.createElement('h3');
        this.userElement.id = `user-${this.id}`;

        User.all.push(this);
    }

    userHTML() {
        // Remove the username input & submit button when appending username to DOM
        //Reference.usernameContainer.innerHTML = '';
        // As soon as submit button is clicked
        // Write `${this.username} has drawn...`
        return this.userElement;
    }

    putonDom() {
        Reference.usernameContainer.appendChild(this.userHTML());
    }
}