import { BarChart } from "@mui/x-charts/BarChart";
import { Gauge } from "@mui/x-charts/Gauge";
import { LineChart } from "@mui/x-charts/LineChart";
import { useState } from "react";

type Session = {
    month: string,
    sessionsNo: number
}

const MetricsCharts = () => {
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
        <>
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
        </>
    )
}

export default MetricsCharts;