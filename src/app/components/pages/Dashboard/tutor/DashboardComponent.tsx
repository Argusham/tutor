"use client"
import { CurrentPageContext, CurrentPageType } from "@/app/context/CurrentDashboardPageContext";
import SummaryMetrics from "./SummaryMetrics/SummaryMetrics";
import { useContext, useState } from "react";
import ManageAvailabilityComponent from "./ManageAvailability/ManageAvailabilityComponent";
import EditProfileComponent from "./EditProfile/EditProfileComponent";
import ManageBookingsComponent from "./ManageBookings/ManageBookingsComponent";
import MessagingComponent from "./Messaging/MessagingComponent";
import DashboardNavbar from "./SummaryMetrics/DashboardNavbar";
import SideBarDashboard from "./SideBarDashboard";
import { CurrentPage } from "@/app/constants/enums";

const DashboardComponent = () => {
    const [value, setValue] = useState<CurrentPage>(CurrentPage.SUMMARY_METRICS);

    const currentPageProps: CurrentPageType = {
        value,
        setValue
    }

    return (
        <CurrentPageContext.Provider value={currentPageProps}>
            <DashboardRouting />
        </CurrentPageContext.Provider>
    )
}

const DashboardRouting = () => {
    const currentPage = useContext(CurrentPageContext);
    const { value } = currentPage!; // TODO: properly error handle

    return (
        <div className="flex">
            <SideBarDashboard />

            <div className="w-full">
                <DashboardNavbar />
                {value === CurrentPage.SUMMARY_METRICS && (
                    <SummaryMetrics />
                )}

                {value === CurrentPage.MANAGE_AVAILABILITY && (
                    <ManageAvailabilityComponent />
                )}

                {value === CurrentPage.EDIT_PROFILE && (
                    <EditProfileComponent />
                )}

                {value === CurrentPage.MANAGE_BOOKINGS && (
                    <ManageBookingsComponent />
                )}

                {value === CurrentPage.MESSAGING && (
                    <MessagingComponent />
                )}
            </div>
        </div>
    )
}

export default DashboardComponent