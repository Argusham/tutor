"use client"
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const hours: string[] = [];
const minutes: string[] = [];

for (let i = 0; i < 24; i++) {
    if (i < 10) {
        hours[i] = `0${i}`;
    } else {
        hours[i] = `${i}`;
    }
}

for (let i = 0; i < 60; i++) {
    if (i < 10) {
        minutes[i] = `0${i}`;
    } else {
        minutes[i] = `${i}`
    }
}

const SideBarBooking = () => {
    const [date, setDate] = useState<Value>(new Date());
    const [time, setTime] = useState<string>("00:00");

    const handleHourChange = (event: any) => {
        let hours: string = event.target.value;
        setTime(`${hours}:${time.split(":")[1]}`);
    }

    const handleMinuteChange = (event: any) => {
        let minutes: string = event.target.value;
        setTime(`${time.split(":")[0]}:${minutes}`)
    }
    
    return (
        <div className="shadow-lg w-[900px] h-[100vh] p-8">
            <h1 className="text-3xl font-bold">Book a session</h1>
            <Calendar 
                onChange={setDate}
                value={date} 
                className="shadow-md p-4 rounded-lg text-center" />
            <div className="mt-6 flex gap-2">
                <select className="border-1 p-4 rounded-lg w-full" onChange={handleHourChange}>
                    {hours.map(hour => <option key={hour} value={hour}>{hour}</option>)}
                </select>
                <select className="border-1 p-4 rounded-lg w-full" onChange={handleMinuteChange}>
                    {minutes.map((minute) => <option key={minute} value={minute}>{minute}</option> )}
                </select>
            </div>

            <div className="mt-6"><span className="font-bold">Selected Date:</span> {date?.toString()}</div>
            <div className="mt-2"><span className="font-bold">Selected Time:</span> {time?.toString()}</div>

            <div className="mt-6">
                <h3 className="font-bold text-lg">Choose Your Preferred Meeting Spot</h3>
                <div className="grid grid-cols-2 gap-4 text-center mt-4">
                    <div className="border-1 p-4 rounded-lg">Library</div>
                    <div className="border-1 p-4 rounded-lg">Classroom</div>
                    <div className="border-1 p-4 rounded-lg">Outside</div>
                    <div className="border-1 p-4 rounded-lg">Other Location</div>
                </div>
            </div>

            <button className="bg-gray-700 text-white p-2 w-full rounded-lg mt-4">Submit</button>
        </div>
    )
}

export default SideBarBooking;
