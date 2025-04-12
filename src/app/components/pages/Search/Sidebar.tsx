"use client"
import React, { useState } from 'react'

const SubjectFilter = () => {
    return (
        <div className="text-lg text-white">
            <h1 className="text-xl mb-2">Subject</h1>          
            <div>
                <div className="flex gap-2">
                    <input type="checkbox" />
                    <label>Math</label>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" />
                    <label>English</label>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" />
                    <label>Accounting</label>
                </div>
            </div>
        </div>
    )
}

const AvailabilityFilter = () => {
    return (
        <div>
            <h1 className="text-xl mb-2">Availability</h1>
            <select className="bg-white w-full text-gray-600 rounded-md p-3">
                <option>--No Availability--</option>
                <option>Now</option>
                <option>Later</option>
            </select>
        </div>
    )
}

const RatingFilter = () => {
    const [selected, setSelected] = useState<number | undefined>(undefined);
    const numbers = [0, 1, 2, 3, 4, 5];

    return (
        <div>
            <h1 className="text-xl mb-2">Rating</h1>
            <div className="flex justify-center items-center space-x-4">
                {numbers.map((num) => (
                    <button
                        key={num}
                        onClick={() => setSelected(num)}
                        className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center text-md font-semibold border-2 transition-all
                            ${selected === num
                            ? "bg-blue-600 text-white border-blue-600 scale-110"
                            : "bg-white text-gray-800 border-gray-300 hover:border-blue-400 hover:text-blue-600"}
                        `}
                    >
                        {num}
                    </button>
                ))}
            </div>
        </div>
    )
}

const Sidebar = () => {
    return (
        <div className="bg-blue-300 text-white h-[100vh] pt-10 px-7">
            <h1 className="text-2xl">Filters</h1>
            <br />
            <SubjectFilter />
            <br />
            <hr />
            <br />
            <AvailabilityFilter />
            <br />
            <hr />
            <br />
            <RatingFilter />
            <br />
            <br />
            <button className="p-4 bg-pink-200 text-black rounded-md w-full">Apply</button>
        </div>
    )
}

export default Sidebar
