import BookingList from "./BookingList";
import MetricsCharts from "./Charts/ChartsComponent";
import DashboardNavbar from "./DashboardNavbar";

const SummaryMetrics = () => {
    return (
        <div className="w-full">
            <OverviewMetrics />
            <Metrics />
        </div>
    )
}

const OverviewMetrics = () => {

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

const Metrics = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-4 m-8">
            <MetricsCharts />
            <BookingSummary />
        </div>
    )
}

const BookingSummary = () => {
    return (
        <div className="border-1 col-start-3 row-span-full rounded-xl border-gray-400 p-4 pt-6">
            <h1 className="font-bold text-2xl ml-6 mb-4">Incoming Bookings (Summary)</h1>
            <BookingList />
        </div>
    )
}

export default SummaryMetrics;