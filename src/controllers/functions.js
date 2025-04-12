"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.readProduct = exports.createProduct = void 0;
const mongo_1 = require("../config/mongo");
const mongoose_1 = __importStar(require("mongoose"));
//Conecto la base de datos
(0, mongo_1.connectDB)();
//creo un esquema con el que tienen que cumplir los productos que se suban a la base de datos
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true, min: 1 },
    category_id: { type: Number, required: true },
}, {
    //Evito que me genere mongoose por defecto los atributos "createdAt" y "_v"
    timestamps: false, versionKey: false
});
//hago que ningun producto que cumpla con ese esquema pueda subirse a la base de datos
productSchema.set("strict", true);
//voy a guardar mis productos en la coleccion "productos" siguiendo el esquema "productSchema"
const Product = mongoose_1.default.model("productos", productSchema);
//1- CREATE PRODUCT
const createProduct = (name, description, price, stock, category_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = new Product({ name, description, price, stock, category_id });
        yield product.save();
        console.log("Producto añadido correctamente", product);
    }
    catch (error) {
        console.log("Error intentar agregar el producto", error.message);
    }
});
exports.createProduct = createProduct;
//2- READ PRODUCT
const readProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const prodFound = yield Product.findById(id);
        if (!prodFound) {
            console.log("Producto no encontrado");
        }
        else {
            console.log(prodFound);
        }
    }
    catch (error) {
        console.log("Error al leer el producto", error.message);
    }
});
exports.readProduct = readProduct;
//3- UPDATE PRODUCT
const updateProduct = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // "new:true" para que me devuelva al producto actualizado y "runValidators:true" para que cumpla con el esquema
        const prod = yield Product.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        if (!prod) {
            console.log("No se encontro al producto con ese id");
        }
        else {
            console.log("Producto actualizado correctamente", prod);
        }
    }
    catch (error) {
        console.log("Error al actualizar producto", error.message);
    }
});
exports.updateProduct = updateProduct;
//4- DELETE PRODUCT
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield Product.findByIdAndDelete(id);
        if (!product) {
            console.log("Producto no encontrado...");
        }
        else {
            console.log("Producto eliminado correctamente", product);
        }
    }
    catch (error) {
        console.log("Error al eliminar el producto", error.message);
    }
});
exports.deleteProduct = deleteProduct;
