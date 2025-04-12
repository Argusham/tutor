import React from 'react'

const SearchComponent = () => {
    return (
        <div className="shadow-md w-full bg-white grid grid-cols-3 p-6 rounded-lg">
            <div className="text-center">Subject</div>
            <div className="text-center">Location</div>
            <button className="text-center">Search</button>
        </div>
    )
}

export const HeroSection = () => {
    return (
        <div className="h-[60vh] bg-pink-100 flex items-center">
            <div className="w-full">
                <h1 className="text-center text-7xl font-bold">Find the perfect tutor</h1>
                <div className="w-[30%] mx-auto mt-8">
                    <SearchComponent />
                </div>
            </div>
        </div>
    )
}
