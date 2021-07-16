//NOTE class is the blueprint of an object
export default class Vmaching {
    /**
     * 
     * @param {String} name 
     * @param {Number} price 
     * @param {Number} quantity 
     * @param {URL} image 
     */
    //NOTE constructor is used to add the property for a created class 
    constructor(name, price, qty, img) {
        // this is used to refer to the object that it belong 
        this.name = name
        this.price = print
        this.quantity = qty
        this.image = img
    }
    get Template() {
        return
        `<div class=" col text-center pr-5 mt-5 pt-5">
        <img class="img-fluid" src="./assets/img/Red b.jpg" width="180" height="300"
        alt="what for picture to load">
        <h5>${this.name}: <span id="name"> 0 </span> </h5>
        <h5>Price: <span id="price"> 0 </span> </h5>
        <h5>Quantity: <span id="qnt"> 0 </span> </h5>
        <h5>Total: <span id="total"> 0 </span> </h5>
        </div>`
    }
}
