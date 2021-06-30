class Reference {
    static all = [];
    static imagesContainer = document.getElementById("image-container");
    static randomImageButton = document.getElementById('random-image-button')

    constructor ({id, name, imageURL}) {
        this.id = id;
        this.name = name;
        this.imageURL = imageURL;
        
        this.imgElement = document.createElement('img');
        this.imgElement.id = `image-${this.id}`;
        this.imgElement.src = this.imageURL;
        this.imgElement.alt = this.name;
        this.imgElement.width = "500";
        this.imgElement.width = "500";
        
        Reference.all.push(this);
    };

    referenceHTML() {
        Reference.imagesContainer.innerHTML = '';
        return this.imgElement;
    };

    putOnDom() {
        Reference.imagesContainer.appendChild(this.referenceHTML());
    };
};