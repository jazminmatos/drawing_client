class User {
    static usernameContainer = document.getElementById("username-container")

    constructor (username) {
        this.username = username;

        this.userElement = document.createElement('h3');
        // Once I click submit, it should go to the backend
        // once saved onto the database, it will get an id
        // should I pass in id as a parameter in order to construct it?
        this.userElement.id = this.id;

    }

    userHTML() {
        // As soon as submit button is clicked
        // Remove the username input & submit button
        // Write `${this.username} has drawn...`
    }

    putonDom() {
        Reference.usernameContainer.appendChild(this.userHTML());
    }
}