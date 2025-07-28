import mongoose from "mongoose";
import { connectionstr } from "../../../lib/dbconnect";
import { NextResponse } from "next/server";
import { ProductModel } from "../../../lib/model/product";
export async function GET() {
    let data=[];
    try{
    await mongoose.connect(connectionstr);
     data=await ProductModel.find();
    }
    catch(e){
        console.log(e);
    }

    return NextResponse.json(data)
}
export async function POST(request) {
    await mongoose.connect(connectionstr);
    let payload=await request.json();
    let product= new ProductModel(payload)
    const result=await product.save();
    return NextResponse.json({result,success:true});
}