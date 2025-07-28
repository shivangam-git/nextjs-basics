import Product from "./product";

interface Product {
  id: number;
  title: string;
  price:number;
}


async function fetchProducts() {
     try {
        const res = await fetch("https://dummyjson.com/products");
        const json = await res.json();
        // console.log(json);
        return json.products;
     }
     catch(error){
        console.log(error);
     }
}
export default async function ProductListServer(){
    const data= await fetchProducts();
    return(
        <div>
            {
                data.map((item:Product)=>(
                    <div key={item.id}>
                    <p>{item.title}</p>
                    {/* using client component in server */}
                    <Product price={item.price}/>
                    </div>
                ))
            }
        </div>
    )
}