class ReferenceService {   
    constructor (endpoint) {
        this.endpoint = endpoint
    }

    // Read/Index Action
    getImage () {
        fetch(`${this.endpoint}/images`)
            .then(resp => resp.json())
            .then(function(json) {
            let keys = Object.keys(json);
            let imageURL = json[keys[keys.length * Math.random() << 0]].image;
            console.log(imageURL)
            // use data inside of json to do DOM manipulation
            })
    }    
}

// use the Math.random - # between 0-16 - to get an item
// in the object, then get its image property

// DOM manipulation: append img src element using retrieved URL