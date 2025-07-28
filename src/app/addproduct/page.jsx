"use client";
import { useState } from "react";
export default function AddProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState('');
    const [company, setCompany] = useState('');
    const [category, setCategory] = useState('');
    const handleSubmit=async()=>{
        console.log(name,price,color,company,category);
        let result= await fetch("http://localhost:3000/api/products",{
            method:"POST",
            body: JSON.stringify({name,price,color,company,category})
        })
        let data=result.json();
        if(data.success){
            alert('product added');
        }
    }
    return (
        <div>
            <h1>
                Add product
            </h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Entername" />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter price" />
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Enter color" />
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter company" />
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter category" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}