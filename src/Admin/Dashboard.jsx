import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/SideBar1';
import Graphes from '../Images/Graphes.svg';
import Secteurs from '../Images/Secteurs.svg';
import { FaPhoneAlt, FaClock, FaMicrophone } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100 flex-col h-screen">
      <Header />
      <div className="flex h-full">
        {/* Sidebar */}
        <Sidebar className="w-[20%] h-full" />

        {/* Main content */}
        <div className="flex-grow p-4 space-y-10">
          {/* Images Section */}
          <div className="flex justify-center gap-10 pt-10">
            <img className="w-[42%] h-auto object-cover rounded-lg" src={Secteurs} alt="Secteurs" />
            <img className="w-[42%] h-auto object-cover rounded-lg" src={Graphes} alt="Graphes" />
          </div>

          {/* Rectangles Section */}
          <div className="flex justify-around gap-6">
            {/* Rectangle 1 */}
            <div className="bg-white p-6 w-1/5 flex flex-col items-center shadow-lg rounded-lg">
              <div className="flex items-center">
                <FaPhoneAlt className="w-6 h-6 mr-2 text-[#FF0000]" />
                <span className=" font-semibold">Total des appels</span>
              </div>
              <div className=" text-2xl font-bold">12</div>
            </div>

            {/* Rectangle 2 */}
            <div className="bg-white p-6 w-1/5 flex flex-col items-center shadow-lg rounded-lg">
              <div className="flex items-center">
                <FaClock className="w-6 h-6 mr-2 text-[#FF0000]" />
                <span className=" font-semibold">Appels en attente</span>
              </div>
              <div className="text-2xl font-bold">15</div>
            </div>

            {/* Rectangle 2 */}
            <div className="bg-white p-6 w-1/5 flex flex-col items-center shadow-lg rounded-lg">
              <div className="flex items-center">
                <FaMicrophone className="w-6 h-6 mr-2 text-[#FF0000]" />
                <span className=" font-semibold">Appel en cours</span>
              </div>
              <div className=" text-3xl font-bold">15</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
