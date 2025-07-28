'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Page() {
  const router=useRouter();
  return (
    <main>
      <h1>Hello, Next.js!
    </h1>
    {/* Below is linking */}
    <Link href={"/login"}>Login
    </Link>
     <Link href={"/about"}>About
    </Link>
    {/* below is navigation */}
    <button onClick={()=>router.push('/login')}>
      Go to login page
    </button>
    </main>
  );
}
