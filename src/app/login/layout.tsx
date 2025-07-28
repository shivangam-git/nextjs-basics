"use client";
import Link from "next/link";
import './login.css'
import { usePathname } from "next/navigation";

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    return (
        <html lang="en">
            <body
            >
                <ul>
            <li>
                <Link href={"/login/loginstudent"}>Login Student</Link>
            </li>
               <li>
                <Link href={"/login/loginteacher"}>Login Teacher</Link>
            </li>
           </ul>
                {/* conditional common layout */}
                {/* {
                    pathname !== "/login/loginteacher" ?
                        <ul>
                            <li>
                                <Link href={"/login/loginstudent"}>Login Student</Link>
                            </li>
                            <li>
                                <Link href={"/login/loginteacher"}>Login Teacher</Link>
                            </li>
                        </ul> : null
                } */}
                {children}
            </body>
        </html>
    );
}
