"use client"
import SideBarDashboard from "./SummaryMetrics/SideBarDashboard";
import { CurrentPageContext, CurrentPageType } from "@/app/context/CurrentDashboardPageContext";
import SummaryMetrics from "./SummaryMetrics/SummaryMetrics";
import { useContext, useState } from "react";
import ManageAvailabilityComponent from "./ManageAvailability/ManageAvailabilityComponent";
import EditProfileComponent from "./EditProfile/EditProfileComponent";
import ManageBookingsComponent from "./ManageBookings/ManageBookingsComponent";
import MessagingComponent from "./Messaging/MessagingComponent";

const DashboardComponent = () => {
    const [value, setValue] = useState<string>('summary-metrics');

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

            {value === 'summary-metrics' && (
                <SummaryMetrics />
            )}

            {value === 'manage-availability' && (
                <ManageAvailabilityComponent />
            )}

            {value === 'edit-profile' && (
                <EditProfileComponent />
            )}

            {value === 'manage-bookings' && (
                <ManageBookingsComponent />
            )}

            {value === 'messaging' && (
                <MessagingComponent />
            )}
        </div>
    )
}

export default DashboardComponent