class ProductManager {
    constructor() {
        this.products = [];
        this.id = 0;
    }   

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios")
        }
        if (!this.products.some((p) => p.code === code)) {
            let newProduct = {id: this.id++, title, description, price, thumbnail, code, stock}
            this.products.push(newProduct);
            console.log(`El producto ${title} ha sido agregado correctamente`)
        } else {
            console.log(`ERROR - Ya existe un producto con el código ${code}`);
        }
        return
    }

    getProducts() {
        return this.products
    }

    getProductsById(id) {
        let product = this.products.find(product => product.id === id);
        if(!product){
            console.error('ERROR - No se encontró el producto')
        }
       return product
    }

}

const producto = new ProductManager();
console.log(producto.getProducts());
producto.addProduct("Akira", "Película de animación japonesa dirigida por Katsuhiro Otomo", 1500, "Sin Imagen", "akira1988", 42);
producto.addProduct("Ghost in the Shell", "Película de animación japonesa dirigida por Mamoru Oshii", 1500, "Sin Imagen", "gits1995", 40);
console.log(producto.getProducts());
producto.addProduct("Akira", "Película de animación japonesa dirigida por Katsuhiro Otomo", 1500, "Sin Imagen", "akira1988", 42);
console.log(producto.getProductsById(1));
console.log(producto.getProductsById(2));