import React from 'react'
import { Star } from 'lucide-react'

interface props {
    imageURL: string,
    rating: number,
    name: string
}

const TutorCard = ({ imageURL, rating, name }: props) => {
    return (
        <div className="shadow-lg flex items-center bg-white rounded-lg max-w-100 p-10">
            <div className="w-[fit-content] mx-auto ">
                <div className="w-30 h-30 mx-auto rounded-full bg-red-200"></div>
                <br />
                <span className="flex mx-auto w-[fit-content]">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </span>

                <div className="text-center">{name}</div>
                <br />
                <div className="w-[fit-content] mx-auto">
                    <button className="bg-blue-200 w-80 p-3 rounded-md">View Profile</button>
                </div>
            </div>
        </div>
    )
}

export default TutorCard
