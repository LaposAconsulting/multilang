'use client';
import Link from 'next-intl/link';

export default function Index() {
    return (
        <>
            <p>About</p>
            <div className="flex flex-col">
                <Link href="/">back</Link>
                <Link href="/" locale="en">Switch to EN</Link>
            </div>
        </>
    )
}