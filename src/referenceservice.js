class ReferenceService {   
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    // Read/Index Action
    getImage() {
        fetch(`${this.endpoint}/images`)
            .then(resp => resp.json())
            .then(function(json) {
                let keys = Object.keys(json);
                // use the Math.random - # between 0-16 - to get an item
                let imageItem = json[keys[keys.length * Math.random() << 0]];

                const r = new Reference(imageItem);
                r.putOnDom();
            });
    };
};