"use client"
import React, { useState } from 'react'
import { Star, MapPin, Book, Clock, CalendarClock, MessageSquareMore } from 'lucide-react';
import dynamic from 'next/dynamic';

const SideBarBooking = dynamic(() => import('../../components/pages/Profile/SideBarBooking'), {
  ssr: false,
});

const Profile = () => {
    const [isSideBarOpened, setIsSideBarOpened] = useState<boolean>(false);
    const [subjects, setSubjects] = useState<String[]>(["Maths", "Physics"]);
    const [availabilityDays, setAvailabilityDays] = useState<{ day: string, startTime: string, endTime: string }[]>([
        {
            day: "Monday",
            startTime: "15:00",
            endTime: "20:00"
        },
        {
            day: "Tuesday",
            startTime: "13:00",
            endTime: "17:00"
        },
        {
            day: "Wednesday",
            startTime: "08:00",
            endTime: "10:00"
        }
    ]);

    return (
        <div className="flex h-[100vh]">
            <div className="w-[35%] p-14">
                <div className="bg-red-200 w-90 h-90 rounded-xl"></div>
                <div>
                    <h1 className="font-bold text-2xl mt-6 mb-2">Bio</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has s traset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageM</p>
                </div>
            </div>
            <div className="w-full p-14">
                <div className="">
                    <h1 className="text-5xl font-bold mb-6">Onodwa Siyotula</h1>
                    <h2 className="text-xl flex"><Star className="mr-2" /> 4.9 (120 Reviews)</h2>
                    <h2 className="text-xl flex mb-2"><MapPin className="mr-2" /> Cape Town, South Africa</h2>
                    <span className="text-xl flex">
                        <Book className="mr-2" /> Subjects:&nbsp; &nbsp;
                        {subjects.map((subject, index) => (
                            <span key={index} className={`px-4 py-2 text-white rounded-full mr-2 ${index % 2 != 0 ? 'bg-red-200' : 'bg-blue-300'}`}>{subject}</span>
                        ))}
                    </span>
                </div>
                <div className="grid grid-cols-2 mt-6 gap-8">
                    <div>
                        <h2 className="mb-4 text-2xl font-bold flex align-baseline">Availability <Clock className="ml-2" /></h2>
                        <hr className="mb-4" />
                        {availabilityDays.map(({ day, startTime, endTime }, index) =>
                            <div key={index} className="grid grid-cols-2">
                                <div>{day}</div>
                                <div>{startTime} - {endTime}</div>
                            </div>
                        )}
                    </div>
                    <div>
                        <h2 className="mb-4 font-bold text-2xl flex">Contact / Booking <CalendarClock className="ml-2" /></h2>
                        <hr className="mb-4" />
                        <div className="">
                            <button className="cursor-pointer bg-blue-300 px-4 p-2 rounded-lg text-white mr-2">Send Message</button>
                            <button onClick={() => setIsSideBarOpened(true)} className="cursor-pointer bg-red-300 px-4 p-2 rounded-lg text-white">Book a Session</button>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl mb-4 flex">Reviews Summary <MessageSquareMore className="ml-2" /></h2>
                        <hr className="mb-4" />
                        <div className="flex gap-4">
                            <div>
                                <div className="h-20 w-20 rounded-full bg-black"></div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Human Person</h3>
                                <div className="stars flex">
                                    {[1, 1, 1, 1, 1].map((item, index) => <div key={index}><Star /></div>)}
                                </div>
                                <div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            {isSideBarOpened && (
                <SideBarBooking setIsSideBarOpened={setIsSideBarOpened} />
            )}
        </div>
    )
}

export default Profile
