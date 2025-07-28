"use client";
import { useRouter } from "next/navigation";
export default function DeleteProduct({id}){
    const router=useRouter();
    const deleteProduct= async()=>{
        let res= await fetch(`http://localhost:3000/api/products/${id}`,{
            method:"DELETE",
        })
        let data= await res.json();
        if(data.acknowledged){
            alert('product deleted')
            router.push('/getproducts')
        }
    }   
    return(
          <button onClick={deleteProduct}>Delete</button>
    )
}