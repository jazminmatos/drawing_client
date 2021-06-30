class Reference {
    static all = []

    constructor (id, name, imageURL) {
        this.id = id
        this.name = name
        this.imageURL = imageURL
        
        this.imgElement = document.createElement('img')
        this.imgElement.id = `image-${this.id}`
        this.imgElement.src = 
        this.imgElement.alt = 
        // will I need to put width & height
        
        Reference.all.push(this)
    }

}