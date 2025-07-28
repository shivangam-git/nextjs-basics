'use client';

import { useState } from "react";

export default function CreateUser(){
        const[userId, setUserId] = useState('');
        const[userName, setUserName] = useState('');   
        const[userAge, setUserAge] = useState('');
        const handleSubmit = async () => {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: userId, name: userName, age: userAge }),
            });

            if (response.ok) {
                const data = await response.json();
                alert('User created');
            } else {
                alert('Error creating user');
            }
        };
    return(
        <div>
            <h1>Create User</h1>
           <input type="text" value={userId} onChange={(e)=>setUserId(e.target.value)} placeholder="Enter user ID" />
           <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder="Enter user name" />
           <input type="text" value={userAge} onChange={(e)=>setUserAge(e.target.value)} placeholder="Enter user age" />
           <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}