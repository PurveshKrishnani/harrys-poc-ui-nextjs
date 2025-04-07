import Image from "next/image";
import profileIcon from "../../assets/profile.png";
import themeIcon from "../../assets/theme-icon.png";
import bellIcon from "../../assets/bell-icon.png";
import antiClockIcon from "../../assets/anti-clock-icon.png";

export default function Header() {
    return (
        <div className="flex items-center justify-between bg-white shadow-md rounded-2xl p-4 mx-4 my-2">
            {/* Left Icons */}
            <div className="flex items-center space-x-4">
                <button className="p-2 rounded-lg hover:bg-gray-100">
                    <i className="fas fa-bars"></i>
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-100">
                    <i className="far fa-star"></i>
                </button>
            </div>
            
            {/* Search Bar */}
            <div className="relative">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
                <i className="absolute left-3 top-2.5 text-gray-400 fas fa-search"></i>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
                <button className="p-2 rounded-lg hover:bg-gray-100">
                    <i className="fas fa-sliders-h"></i>
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-100">
                    <Image src={antiClockIcon} alt="bellIcon" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-100">
                    <Image src={bellIcon} alt="bellIcon" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-100">
                    <Image src={themeIcon} alt="themeIcon" />
                </button>
                
                {/* Profile Image */}
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src={profileIcon} alt="User" />
                </div>
            </div>
        </div>
    );
}
