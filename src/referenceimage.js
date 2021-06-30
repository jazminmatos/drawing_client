class ReferenceImage {
    // remember objects
    static all = []
    
    constructor (endpoint) {
        this.endpoint = endpoint
        
        ReferenceImage.all.push(this)
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

// // Fetch (GET) from JSON file
// fetch(jsonImageURL)
//     .then(response =>response.json())
//     .then(function(json) {
//     let keys = Object.keys(json);
//     let imageURL = json[keys[keys.length * Math.random() << 0]].image;
//     console.log(imageURL)
//     // use data inside of json to do DOM manipulation
// })
// use the Math.random - # between 0-16 - to get an item
// in the object, then get its image property

// DOM manipulation: append img src element using retrieved URL