'use client';

import { use, useEffect, useState } from "react";

export default function Update({params}: {params: {id: string}}) {
    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const handleUpdate = async () => {
        const res= await fetch(`http://localhost:3000/api/users/${params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: userId, name: userName, age: userAge }),
        });
        if (res.ok) {
            // const data = await res.json();
            alert('User updated successfully');
        } else {
            alert('Error updating user');
        }
    }
    useEffect(()=>{
        getUserDetails();
    },[])
  
    const getUserDetails = async () => {
        let data = await fetch(`http://localhost:3000/api/users/${params.id}`);
        if (data.ok) {
            let user = await data.json();
            setUserId(user.id);
            setUserName(user.name);
            setUserAge(user.age);
        } else {
            alert("Error fetching user details");
        }
    }
    return (
        <div>
            <h1>Update User</h1>
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="Enter user ID" />
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter user name" />
            <input type="text" value={userAge} onChange={(e) => setUserAge(e.target.value)} placeholder="Enter user age" />
            <button onClick={handleUpdate}>Update</button>
        </div>
    )
}