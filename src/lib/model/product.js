import mongoose from "mongoose";
const productModel= new mongoose.Schema({
    name:String,
    price: String,
    company:String,
    color: String,
    category: String
})

export const ProductModel= mongoose.models.product|| mongoose.model("product",productModel);  