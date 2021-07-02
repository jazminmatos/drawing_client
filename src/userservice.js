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
                // Iterate through JSON object using find
                // Check if the object in JSON object === to inputValue
                const foundName = json.find(obj => obj.username === User.userInput.value);
                // if inputValue exists in the backend
                if (foundName != undefined) {
                    // create a new instance of the User in the frontend
                    const newUsernameInstance = new User(foundName.id, foundName.username)
                    // append to DOM
                    newUsernameInstance.putOnDom()
                // if inputValue does NOT exist in the backend
                } else {
                    // send a fetch POST request 
                    userService.createUser()
                }
            })
    }

    // Create Action
    createUser() {
        const user = {
            username: User.userInput.value
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // username === object, but everything we share on internet needs to be a string 
            body: JSON.stringify(user)
        }

        fetch(`${this.endpoint}/users`, configObj)
            .then(resp => resp.json())
            .then(user => {
                const newUserInstance = new User(user.id, user.username)
                newUserInstance.putOnDom()
            })
    }
}