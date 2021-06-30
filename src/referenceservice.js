class ReferenceService {   
    constructor (endpoint) {
        this.endpoint = endpoint;
    }

    // Read/Index Action
    getImage () {
        fetch(`${this.endpoint}/images`)
            .then(resp => resp.json())
            .then(function(json) {
                let keys = Object.keys(json);
                let imageItem = json[keys[keys.length * Math.random() << 0]];

                const r = new Reference(imageItem);
                r.putOnDom();
            });
    };
};

// use the Math.random - # between 0-16 - to get an item
// in the object, then get its image property

// DOM manipulation: append img src element using retrieved URL