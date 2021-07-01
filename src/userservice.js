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
                console.log(json[0]);
                // Iterate through JSON object trying to find (or filter) using 
                // value of input field (id="username-input") 

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