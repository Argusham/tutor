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

const Results = () => {
    return (
        <div>
            <div className="p-10">
                <h1 className="text-4xl">Showing Results For: </h1>
                <br />
                <div className="grid grid-cols-3 gap-10">
                    {tutors.map((tutor, _) => (
                        <TutorCard {...tutor} key={_} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Results
