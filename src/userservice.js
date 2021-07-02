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
                // 1. Need to check if it exists in JSON object,
                // 2. If yes, need to check if it exists in User.all
                    // If it exists in User.all, use the object from User.all and append it to DOM
                    // If it does NOT exist in User.all, create a new instance, then append to DOM 
                let uName = json.find(function(obj) { 
                    obj.username === User.userInput.value
                    return 
                });
                uName.putOnDOM()
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
                const u = new User(user.id, user.username)
                u.putOnDom()
            })
    }

}