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
            });
    };
};