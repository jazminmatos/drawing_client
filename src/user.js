class User {
    static all = []
    static usernameList = document.getElementById("username-list")
    static userInput = document.querySelector("#username-input")
    static userSubmitButton = document.querySelector("#submit-username-button")
    static signOutButton = document.getElementById("sign-out-button")

    constructor (id, username, drawings, drawings_ids) {
        this.id = id
        this.username = username;
        this.drawings = drawings;
        this.drawings_ids = drawings_ids;

        this.userElement = document.createElement('div');
        this.userElement.id = `user-${this.id}`;
        this.userElement.className = "user"

        User.all.push(this);
    }

    userHTML() {
        User.usernameList.innerHTML = ''
        this.userElement.innerHTML = `
            <br />
            <h3>Submit another user to switch users</h3>
            <br /><br /><br />
            <h3>${this.username} has drawn...</h3>
        `
        // Maybe I should add a 'sign out' button that will make the above disappear?
        // And then make the user input & submit reappear
        return this.userElement;
    }

    putOnDom() {
        User.usernameList.appendChild(this.userHTML());
        userId = this.id
    }
}