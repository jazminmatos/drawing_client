class ReferenceService {   
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    // Read/Index Action
    getImage() {
        fetch(`${this.endpoint}/images`)
            .then(resp => resp.json())
            .then(function(json) {
                json.map(obj => new Reference(obj))
                // const keys = Object.keys(json);
                // // use the Math.random - # between 0-16 - to get an item
                // // const random = Math.floor(Math.random() * 17))
                // // Object.keys(json).filter(image => image.id === random)
                // const imageItem = json[keys[keys.length * Math.random() << 0]];
                // // Searches whether it already exists in Reference.all so that we don't have to create new instances
                // const imageExists = Reference.all.find(obj => obj.name === imageItem.name)
                // if (imageExists != undefined) {
                //     // append that instance to the DOM
                //     imageExists.putOnDom()
                // } else {
                //     // create an instance of Reference using parsed JSON data
                //     const newImageInstance = new Reference(imageItem);
                //     // append that instance to the DOM
                //     newImageInstance.putOnDom()
                // }
            });
    };
};