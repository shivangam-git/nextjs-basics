import mongoose from "mongoose";
import {connectionstr} from '../../../../lib/dbconnect'
import {ProductModel} from '../../../../lib/model/product'
import { NextResponse } from "next/server";
export async function PUT(req,{params}) {
    const productid= params.productid;
    const filter={_id:productid};
//     const filter = { _id: "66a7fa12abc1234567890def" };
// This tells MongoDB:
// 👉 “Find the product where _id equals 66a7fa12abc1234567890def.”
    const payload=await req.json();
    // console.log(payload)
    await mongoose.connect(connectionstr);
    const result= await ProductModel.findOneAndUpdate(filter,payload)
    return NextResponse.json(result);
}

export async function GET(_,{params}) {
    const productid=await params.productid;
    const filter={_id:productid};
    await mongoose.connect(connectionstr);
    const result= await ProductModel.findById(filter)
    return NextResponse.json(result);
}

export async function DELETE(_,{params}) {
    const productid=await params.productid;
    const filter={_id:productid};
    await mongoose.connect(connectionstr);
    const result= await ProductModel.deleteOne(filter);
    return NextResponse.json(result);
}