"use client"
import { usePathname } from 'next/navigation';

export default function Menu() {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <>

        </>
    )
}