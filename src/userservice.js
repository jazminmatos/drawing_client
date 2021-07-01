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
                console.log(json);
                // create an instance of user using parsed JSON data
                
                // append that instance to the DOM
            })
    }

    // Create Action
    createUser() {
        const User = {
            name: "something will go here"
        }
    }

}