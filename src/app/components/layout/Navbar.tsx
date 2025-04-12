import React from 'react'

export const Navbar = () => {
    return (
        <div className="flex text-white relative p-5 text-xl bg-blue-300">
            <h1 className="p-2">Phoenix Tutorium</h1>
            <ul className="flex absolute right-5 gap-8">
                <li className="p-2">About</li>
                <li className="p-2">Browse Tutors</li>
                <li className="border p-2 rounded-md">Log in</li>
            </ul>    
        </div>
    )
}
