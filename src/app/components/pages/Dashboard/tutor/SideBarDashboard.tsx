import { CurrentPage } from "@/app/constants/enums";
import { CurrentPageContext } from "@/app/context/CurrentDashboardPageContext";
import { BookImageIcon, Calendar, Flame, GaugeCircle, MessageCircle, User } from "lucide-react"
import { useContext } from "react";

const SideBarDashboard = () => {
    const currentPage = useContext(CurrentPageContext);
    const { setValue } = currentPage!; // TODO: properly error handle

    return (
        <div className="bg-blue-500 h-[100vh] w-[400px] relative">
            <h1 className="text-white mt-8 p-4 text-center mx-auto w-[fit-content] text-2xl font-bold border-1 rounded-lg flex">
                <Flame className="mr-2" /> 
                Phoenix Tutorium
            </h1>
            <ul className="text-white ml-8 mt-14 space-y-4 text-lg">
                <li className="flex" onClick={() => setValue(CurrentPage.SUMMARY_METRICS)}><GaugeCircle className="mr-6" /> Summary Metrics</li>
                <li className="flex" onClick={() => setValue(CurrentPage.MANAGE_AVAILABILITY)}><Calendar className="mr-6" /> Manage Availability</li>
                <li className="flex" onClick={() => setValue(CurrentPage.EDIT_PROFILE)}><User className="mr-6" /> Edit Profile</li>
                <li className="flex" onClick={() => setValue(CurrentPage.MESSAGING)}><MessageCircle className="mr-6" /> Messaging</li>
                <li className="flex" onClick={() => setValue(CurrentPage.MANAGE_BOOKINGS)}><BookImageIcon className="mr-6" /> Manage Bookings</li>
            </ul>
            <div className="w-full absolute bottom-8 left-8">
                <button className="bg-blue-300 text-black rounded-lg p-4 w-[calc(100%-4rem)]">Click Me</button>
            </div>
        </div>
    )
}

export default SideBarDashboard;