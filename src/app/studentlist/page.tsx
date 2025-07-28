import Link from "next/link";

export default function StudentList(){
    return(
        <div>
            <h1>
                Student List
            </h1>
            <ul>
            <li><Link href={"/studentlist/shivu"}>Shivu</Link></li>
           <li><Link href={"/studentlist/anil"}>Anil</Link></li> 
            <li><Link href={"/studentlist/rahul"}>Rahul</Link></li>
            </ul>
        </div>

    )
}