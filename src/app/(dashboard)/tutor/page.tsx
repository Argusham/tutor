"use client"
import React, { useState } from 'react';
import { BookImageIcon, Calendar, ChartBar, ChartLine, ChartLineIcon, Flame, GaugeCircle, Menu, MessageCircle, User } from 'lucide-react';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { Gauge } from '@mui/x-charts/Gauge';

type Session = {
    month: string,
    sessionsNo: number
}

const TutorDashboard = () => {
    const [sessionsData, setSessionsData] = useState<Session[] | undefined>([
        { month: "Jan", sessionsNo: 2 },
        { month: "Feb", sessionsNo: 5 },
        { month: "Mar", sessionsNo: 3 },
        { month: "April", sessionsNo: 6 },
        { month: "May", sessionsNo: 4 },
        { month: "Jun", sessionsNo: 9 },
        { month: "July", sessionsNo: 4 },
        { month: "Aug", sessionsNo: 3 },
        { month: "Sep", sessionsNo: 10 },
        { month: "Oct", sessionsNo: 9 },
        { month: "Nov", sessionsNo: 13 },
        { month: "Dec", sessionsNo: 17 }
    ]);

    return (
        <div className="flex">
            <SideBarDashboard />
            <div className="w-full">
                <DashboardNavbar />
                <SummaryMetrics />

                <div className="grid grid-cols-3 grid-rows-2 gap-4 m-8">
                    <div className="col-span-2 border-1 rounded-xl border-gray-400 pt-6">
                        <h1 className="font-bold ml-8 text-xl flex">Bookings Analysis 📈</h1>
                        <br />
                        <LineChart
                            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                            series={[
                                {
                                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                                },
                            ]}
                            height={250}
                            className="mr-8"
                        />
                    </div>

                    <div className="border-1 rounded-xl border-gray-400 pt-6">
                        <h1 className="font-bold text-xl ml-8">Profile Strength 💪</h1>
                        <br />
                        <Gauge
                            value={75}
                            startAngle={0}
                            endAngle={360}
                            height={220}
                            innerRadius="80%"
                            outerRadius="100%"
                        // ...
                        />
                    </div>
                    <div className="border-1 rounded-xl border-gray-400 pt-6">
                        <h1 className="font-bold text-xl ml-8">Sessions Overview 🕒</h1>
                        <br />
                        <BarChart
                            xAxis={[
                                {
                                    id: 'barCategories',
                                    data: sessionsData?.map(session => session.month),
                                },
                            ]}
                            series={[
                                {
                                    data: sessionsData?.map(session => session.sessionsNo),
                                },
                            ]}
                            height={250}
                            className="mr-8"
                        />
                    </div>
                    <div className="border-1 col-start-3 row-span-full rounded-xl border-gray-400 p-4 pt-6">
                        <h1 className="font-bold text-2xl ml-6 mb-4">Incoming Bookings (Summary)</h1>
                        <BookingList />
                    </div>
                </div>
            </div>
        </div>
    )
}

const SummaryMetrics = () => {
    return (
        <div className="grid grid-cols-4 gap-4 m-8 mt-10">
            <div className="border-1 border-gray-400 p-4 rounded-xl">
                <h1 className="font-bold text-3xl">8483</h1>
                <span>Number of Profile Visits</span>
                <div className="text-green-500">↑ 25%</div>
            </div>
            <div className="border-1 border-gray-400 p-4 rounded-xl">
                <h1 className="font-bold text-3xl">3792</h1>
                <span>Number of Sessions</span>
                <div className="text-red-400">↓ 10%</div>
            </div>
            <div className="border-1 border-gray-400 p-4 rounded-xl">
                <h1 className="font-bold text-3xl">3792</h1>
                <span>Message Requests (This Month)</span>
                <div className="text-red-400">↓ 4%</div>
            </div>
            <div className="border-1 border-gray-400 p-4 rounded-xl">
                <h1 className="font-bold text-3xl">3792</h1>
                <span>Number of Bookings</span>
                <div className="text-green-500">↑ 10%</div>
            </div>
        </div>
    )
}

const DashboardNavbar = () => {
    return (
        <div className="shadow-lg flex items-center justify-between m-4 p-4 rounded-lg">
            <div className="flex items-center space-x-2">
                <Menu className="mr-2" />
                <span>Hide Menu</span>
            </div>
            <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                        alt="Michael Owen"
                    />
                </div>
                <span>Onodwa Siyotula</span>
            </div>
        </div>
    )
}

const SideBarDashboard = () => {
    return (
        <div className="bg-blue-500 h-[100vh] w-[400px] relative">
            <h1 className="text-white mt-8 p-4 text-center mx-auto w-[fit-content] text-2xl font-bold border-1 rounded-lg flex">
                <Flame className="mr-2" /> 
                Phoenix Tutorium
            </h1>
            <ul className="text-white ml-8 mt-14 space-y-4 text-lg">
                <li className="flex"><GaugeCircle className="mr-6" /> Summary Metrics</li>
                <li className="flex"><Calendar className="mr-6" /> Manage Availability</li>
                <li className="flex"><User className="mr-6" /> Edit Profile</li>
                <li className="flex"><MessageCircle className="mr-6" /> Messaging</li>
                <li className="flex"><BookImageIcon className="mr-6" /> Manage Bookings</li>
            </ul>
            <div className="w-full absolute bottom-8 left-8">
                <button className="bg-blue-300 text-black rounded-lg p-4 w-[calc(100%-4rem)]">Click Me</button>
            </div>
        </div>
    )
}

const StatusCard = ({ id, role, date, time, status }: { id: string, role: string, date: string, time: string, status: string }) => {
  const statusColors: any = {
    "Completed": "text-green-500",
    "In-Progress": "text-yellow-500",
    "Canceled": "text-red-500",
  };

  return (
    <div className="bg-white rounded-xl shadow-md px-7 py-6 mb-4 flex justify-between items-center">
      <div>
        <p className="font-bold text-sm">
          <span className="text-blue-800">{id}</span>{' '}
          <span className="text-pink-500 font-medium">{role}</span>
        </p>
        <p className="text-xs text-gray-500">{date} | {time}</p>
      </div>
      <div className="flex items-center space-x-2">
        <p className={`text-sm font-medium ${statusColors[status]}`}>{status}</p>
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2"
          viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

const data = [
  { id: 'T00230', role: 'Michael', date: '13 Mar 2025', time: '12:00', status: 'Completed' },
  { id: 'T00231', role: 'Josh', date: '27 Apr 2025', time: '12:00', status: 'In-Progress' },
  { id: 'N00232', role: 'Siyamthanda', date: '24 Apr 2025', time: '12:00', status: 'Completed' },
  { id: 'T00232', role: 'Bukho', date: '12 Apr 2025', time: '12:00', status: 'Canceled' },
  { id: 'T00233', role: 'Zolani', date: '30 Mar 2025', time: '12:00', status: 'In-Progress' },
];

function BookingList() {
  return (
    <div className="p-4">
      {data.map((item, index) => (
        <StatusCard key={index} {...item} />
      ))}
    </div>
  );
}


export default TutorDashboard
