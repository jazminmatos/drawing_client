class User {
    static all = []
    static usernameContainer = document.getElementById("username-container")

    constructor (username) {
        this.username = username;

        this.userElement = document.createElement('h3');
        // once saved onto the database, it will get an id
        // should I pass in id as a parameter in order to construct it?
        this.userElement.id = this.id;

        User.all.push(this);
    }

    userHTML() {
        // Remove the username input & submit button when appending username to DOM
        Reference.usernameContainer.innerHTML = '';
        // As soon as submit button is clicked
        // Write `${this.username} has drawn...`
        return this.userElement;
    }

    putonDom() {
        Reference.usernameContainer.appendChild(this.userHTML());
    }
}