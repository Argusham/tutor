import { Menu } from "lucide-react";

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

export default DashboardNavbar;