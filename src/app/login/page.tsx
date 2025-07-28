"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
const Login=()=>{
    const router=useRouter();
    return(
        <h1>
            Login page
             <Link href={"/"}>
            Home
            </Link>
            <br/>
            <button onClick={()=>router.push('/login/loginstudent')}>
                go to login student
            </button>
                        <br/>
            <button onClick={()=>router.push('/login/loginteacher')}>
                go to login teacher
            </button>
        </h1>
    )
}
export default Login;