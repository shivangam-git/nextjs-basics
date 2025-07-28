'use client';
export default function Delete({id}:{id:number}){
    const handleDelete=async()=>{
        let res= await fetch(`http://localhost:3000/api/users/${id}`,{
            method:"DELETE"
        });
        if(res.ok){
            alert("deleted")
        }
    }
    return(
        <button onClick={handleDelete}>Delete</button>
    )
}