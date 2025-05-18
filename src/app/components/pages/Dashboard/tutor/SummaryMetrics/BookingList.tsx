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

export default BookingList;