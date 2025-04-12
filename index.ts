import {addProduct, deleteProduct} from './controllers/functions'

const main = () => {

    //CREATE PRODUCT
    addProduct("Celular","Samsung Galaxy A3", 130, 4, 20);
    addProduct("Celular","Motorola Moto E20", 130, 4, 5);
    addProduct("Celular","Iphone X", 1000, 10, 15);

    //DELETE PRODUCT
    deleteProduct("67f9adf03e878dcd558c34a9");
    

}

main();