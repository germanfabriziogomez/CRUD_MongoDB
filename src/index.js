"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./controllers/functions");
const main = () => {
    //CREATE PRODUCT
    // createProduct("Celular","Samsung Galaxy A3", 130, 4, 20);
    // createProduct("Celular","Motorola Moto E20", 130, 4, 5);
    // createProduct("Celular","Iphone X", 1000, 10, 15);
    //READ PRODUCT
    // readProduct("67f9adf03e878dcd558c34a9");
    //UPDATE PRODUCT
    // updateProduct("67f9adf03e878dcd558c34ab",{stock:5})
    //DELETE PRODUCT
    (0, functions_1.deleteProduct)("67f9adf03e878dcd558c34ab");
};
main();
