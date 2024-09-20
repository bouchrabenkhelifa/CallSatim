import React, { useState } from "react";
import { FaFileAlt, FaUsers } from 'react-icons/fa'; 
import { Link } from "react-router-dom";

const SideBar2 = () => {
    // State for the active button
    const [activeLink, setActiveLink] = useState('calls');

    const menuItems = [
        { name: 'Gestion des appels', icon: <FaFileAlt />, key: '/Acceuil', label: 'Gestion des appels' },
        { name: 'Nos clients', icon: <FaUsers />, key: '/clients', label: 'Nos clients' }
    ];

    return (
        <div className="flex flex-col h-screen w-[20%] bg-[#FAFAFA] shadow-md">
            <div className="border-t border-gray-300"></div>

            <nav className="flex-1 pt-8">
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.key}>
                            <Link
                                to={`${item.key}`}
                                className={`flex items-center mx-auto p-4 w-[85%] h-12 transition-colors duration-200 rounded-lg ${
                                    activeLink === item.key
                                        ? 'bg-[#FF0000] bg-opacity-10 text-white border border-[#FF0000]'
                                        : 'text-[#334C79] hover:bg-[#334C79] hover:text-white'
                                }`}
                                onClick={() => setActiveLink(item.key)}
                            >
                                {/* Icon */}
                                <div className={`text-xl transition-colors duration-200 ${activeLink === item.key ? 'text-[#FF0000]' : 'hover:text-white'}`}>
                                    {item.icon}
                                </div>
                                {/* Text */}
                                <span className={`text-sm font-bold ml-3 transition-colors duration-200 ${activeLink === item.key ? 'text-[#FF0000]' : 'hover:text-white'}`}>
                                    {item.label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default SideBar2