'use client';
interface prod{
    price:number;
}
export default function Product({price}:prod){
    return(
        <button onClick={()=>alert(price)}>Check Price</button>
    )
}