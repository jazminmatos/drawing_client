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

// Flow of User Submission:
// index.js:
    // new instance of UserService (i.e. URL) is created
    // user clicks submit
    // Call .getUser() on UserService instance
// userservice.js:
    // .getUser() runs a fetch GET request to retrieve usernames from backend
        // JSON is parsed
            // iterate through JSON object trying to find (or filter if can't do unique usernames?) username === value of input field (id="username-input") 
            // create a user instance using the newly parsed JSON data
// user.js:
    // handles the creation of the user instance
// userservice.js:
            // append the instance onto the DOM using the putOnDom() instance method
// user.js: 
    // handles putOnDOM() instance method
        // uses userHTML() instance method to format the HTML and append it to the DOM