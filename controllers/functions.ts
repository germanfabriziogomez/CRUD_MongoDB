import { connectDB } from "../config/mongo";
import mongoose,{ Document, Schema } from "mongoose";

//Conecto la base de datos
connectDB()

//creo la interfaz de los productos
interface Product extends Document {

    name:string,
    description:string,
    price:number,
    stock:boolean,
    category_id:number,
}

//creo un esquema con el que tienen que cumplir los productos que se suban a la base de datos
const productSchema : Schema = new Schema<Product>(
    {
        name: { type: String, required: true },
        description: { type: String, required: true},
        price: { type: Number, required: true},
        stock: { type: Boolean, required: true, min:1 },
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





