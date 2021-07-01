class UserService {
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    // Read/Index Action
    getUser() {
    // fetch GET request that retrieves usernames
        fetch(`${this.endpoint}/users`)
            .then(resp => resp.json())
            .then(function(json) {
                // Iterate through JSON object trying to find (or filter) using 
                let uName = json.find(x => x.username === User.userInput.value);
                console.log(uName);
                // if uName === undefined
                    // send a POST request to backend
                    // retrieve it using a GET request
                    // create a new instance (b/c now it will have an ID) & append to DOM
                // else, look for it in User.all (might be a problem if names != unique) & append it to the DOM                
            })
    }

    // Create Action
    createUser() {
        const User = {
            name: "something will go here"
        }
    }

}