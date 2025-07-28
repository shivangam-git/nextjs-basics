import Link from "next/link";
import DeleteProduct from '../../lib/DeleteProduct'
async function fetchProducts() {
    let res = await fetch("http://localhost:3000/api/products");
    let jsondata = await res.json();
    let data = jsondata;
    return data;
}
export default async function GetProducts() {
    const products = await fetchProducts();
    return (
        <div>
            <h1>
                Products
            </h1>
            <table border={1}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Color</td>
                        <td>Company</td>
                        <td>Category</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.color}</td>
                                <td>{item.company}</td>
                                <td>{item.category}</td>
                                <td>
                                    <Link href={`/getproducts/${item._id}`}>Update</Link>
                                </td>
                                <td>
                                    <DeleteProduct id={item._id}/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}