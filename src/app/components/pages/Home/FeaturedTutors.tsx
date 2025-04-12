import React from 'react'
import TutorCard from '../../ui/TutorCard';

const tutors = [
    {
        imageURL: '',
        rating: 5,
        name: 'Lock In Fuh Nigg'
    },
    {
        imageURL: '',
        rating: 4,
        name: 'Be yoself Fuh Nigg'
    },
    {
        imageURL: '',
        rating: 5,
        name: 'Chase Your Dreams Fuh Nigg'
    },
    {
        imageURL: '',
        rating: 3,
        name: 'Go get a car Fuh Nigg'
    }
]

export const FeaturedTutors = () => {
    return (
        <div className="bg-purple-200 h-[60vh] flex items-center">
            <div className="w-full">
                <h1 className="text-center text-5xl">Featured Tutors</h1>
                <br />
                <br />
                <div className="w-full">
                    <div className="flex gap-10 w-[fit-content] mx-auto">
                        {tutors.map((tutor, _) => (
                            <TutorCard key={_} {...tutor} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
