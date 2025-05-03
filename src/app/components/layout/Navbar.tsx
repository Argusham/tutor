import React from 'react'
import Link from 'next/link';

export const Navbar = () => {
    return (
        <div className="flex text-white relative p-5 text-xl bg-blue-300">
            <h1 className="p-2"><Link href="/home">Phoenix Tutorium</Link></h1>
            <ul className="flex absolute right-5 gap-8">
                <li className="p-2"><Link href="/about">About</Link></li>
                <li className="p-2"><Link href="/search">Browse Tutors</Link></li>
                <li className="border p-2 rounded-md"><Link href="signin">Log in</Link></li>
            </ul>    
        </div>
    )
}
