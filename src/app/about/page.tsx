import Link from "next/link";

const About=()=>{
    return(
        <h1>
            About page
            <Link href={"/"}>
            Home
            </Link>
            <br/>
             <Link href={"/about/aboutcollege"}>
            Go to about college
            </Link>
            <br/>
             <Link href={"/about/aboutstudent"}>
            Go to about student
            </Link>
            
        </h1>
    )
}
export default About;