class ProductManager {
    constructor (){
        this.products = [];
    }
    addProduct(item) {
        const products = this.getProducts();
        const addSuccessfully = 'Producto añadido con exito'
        if(products.length){
            
            const result = products.find( element => element.code === item.code )
            
            if(result){
                return console.log('Este producto ha sido añadido')
            } else {
                let lastIndex = products.length - 1;
                let lastId = products[lastIndex].id;
                item.id = lastId + 1;
                let id = item.id;
                this.products.push(item);
                console.log(addSuccessfully)
                return id;
            }

        } else {
            item.id = 1;
            this.products.push(item);
            console.log(addSuccessfully)
        }
        }
    getProducts() {
        const products = this.products;
        return products;
        
    }
    getProductById(id){
        const products = this.getProducts();
        let productsById;
        const notFound = 'No encontrado'
        products.map(elemento => {
            elemento.id === id && (productsById = elemento);
        });
        return productsById ? console.log(productsById) : console.log(notFound);
    }
}

const productsManager = new ProductManager();

console.log(productsManager.getProducts())

productsManager.addProduct({
    title:'producto 1 ',
    description:'Exitooo',
    price:200,
    thumbnail:'Sin imagen',
    code:'asdsdfsdf',
    stock:25
});

console.log(productsManager.getProducts());

productsManager.addProduct({
    title:'producto 2',
    description:'Este es un producto prueba',
    price:200,
    thumbnail:'Sin imagen',
    code:'abc123',
    stock:25
});
