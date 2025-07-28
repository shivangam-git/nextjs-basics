'use client';

import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
}

export default function ProductList() {
  const [data, setData] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const json = await res.json();
        // console.log(json);
        setData(json.products);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to fetch products");
      }
    };
    fetchData();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      {data.map(product => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
}
