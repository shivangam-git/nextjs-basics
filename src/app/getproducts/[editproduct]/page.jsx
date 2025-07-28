"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function EditProduct() {
    const params=useParams();
    const editproduct= params.editproduct;
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState('');
    const [company, setCompany] = useState('');
    const [category, setCategory] = useState('');

    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails= async()=>{
        let data= await fetch(`http://localhost:3000/api/products/${editproduct}`);
        let res=await data.json();
        console.log(res);
        setName(res.name);
        setPrice(res.price);
        setColor(res.color);
        setCompany(res.company);
        setCategory(res.category);
    }
    const handleUpdate=async()=>{
        // console.log(name,price,color,company,category);
        let result= await fetch(`http://localhost:3000/api/products/${editproduct}`,{
            method:"PUT",
            body: JSON.stringify({name,price,color,company,category})
        })
        let data=result.json();
        if(data.ok){
            alert('product updated');
        }
    }
    return (
        <div>
            <h1>
                Update product
            </h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Entername" />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter price" />
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Enter color" />
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter company" />
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter category" />
            <button onClick={handleUpdate}>Submit</button>
        </div>
    )
}