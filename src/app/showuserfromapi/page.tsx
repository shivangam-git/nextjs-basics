'use client';

import Delete from "@/lib/DeleteButton";
import Link from "next/link";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
    age: number;
}

export default function ShowUserFromApi() {
  const [data, setData] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/users");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to fetch products");
      }
    };
    fetchData();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div >
      {data.map(user => (
        <div key={user.id} >
        <Link href={`/showuserfromapi/${user.id}`} >{user.name}</Link>
        <span><Link href={`/showuserfromapi/${user.id}/update`}>Edit</Link></span>
        <span><Delete id={user.id} /></span>
        <br/>
        </div>
      ))}
    </div>
  );
}
