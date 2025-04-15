import { connectDB } from "../config/mongo";
import mongoose,{ Document, Schema } from "mongoose";

//Conecto la base de datos
connectDB()

//creo la interfaz de los productos
interface Product extends Document {

    name:string,
    description:string,
    price:number,
    stock:number,
    category_id:number,
}

//creo un esquema con el que tienen que cumplir los productos que se suban a la base de datos
const productSchema : Schema = new Schema<Product>(
    {
        name: { type: String, required: true },
        description: { type: String, required: true},
        price: { type: Number, required: true},
        stock: { type: Number, required: true, min:1 },
        category_id: { type: Number, required:true},
    },
    {
        //Evito que me genere mongoose por defecto los atributos "createdAt" y "_v"
        timestamps:false, versionKey:false
    }
 )

//hago que ningun producto que cumpla con ese esquema pueda subirse a la base de datos
productSchema.set("strict",true)

//voy a guardar mis productos en la coleccion "productos" siguiendo el esquema "productSchema"
const Product = mongoose.model<Product>("productos",productSchema)


//1- CREATE PRODUCT
const createProduct = async (name:string,description:string,price:number,stock:number,category_id:number) => {
    try {
        const product: Product = new Product({name,description,price,stock,category_id})
        await product.save()
        console.log("Producto añadido correctamente",product);
    } catch (error:any) {
        console.log("Error intentar agregar el producto",error.message);
    }
}

//2- READ PRODUCT
const readProduct = async (id:string) => {
    try {
        const prodFound = await Product.findById(id);
        if(!prodFound)
        {
            console.log("Producto no encontrado");
        }
        else
        {
            console.log(prodFound);
        }
    } catch (error:any) {
        console.log("Error al leer el producto", error.message)
    }
}

//2.1- READ PRODUCTS
const readProducts = async () => {
    try {
        const products = await Product.find()
        if(!products)
        {
            console.log("No existen productos en la base de datos")
        }
        else
        {
            console.log(products)
        }
    } catch (error:any) {
        console.log("Error al leer los productos", error.message)
    }
}
//3- UPDATE PRODUCT
const updateProduct = async (id:string,body:Partial<Product>) => {
    try {
        // "new:true" para que me devuelva al producto actualizado y "runValidators:true" para que cumpla con el esquema
        const prod = await Product.findByIdAndUpdate(id,body,{new:true, runValidators:true})
        if(!prod)
        {
            console.log("No se encontro al producto con ese id");
        }
        else
        {
            console.log("Producto actualizado correctamente",prod)
        }
    } catch (error:any) {
        console.log("Error al actualizar producto", error.message)
    }
}

//4- DELETE PRODUCT
const deleteProduct = async (id:string) => {
    try {
        const product = await Product.findByIdAndDelete(id);
        if(!product)
        {
            console.log("Producto no encontrado...")
        }
        else
        {
            console.log("Producto eliminado correctamente", product)
        }
    } catch (error:any) {
        console.log("Error al eliminar el producto", error.message)
    }
       
}


export {createProduct,readProduct, readProducts,updateProduct,deleteProduct}

