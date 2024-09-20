import React from 'react'
import SideBar from '../Components/SideBar1';
import Agents from '../Components/Agents';
import Header from '../Components/Header';

function Gestion_agents() {
  return (
    <div className="flex  flex-col h-screen">
    <Header />
    <div className="flex  flex-grow">
      <SideBar className="h-full  w-[90%]" />
      <div className=" flex-grow ">
      <Agents />
      </div>
    </div>
  </div>
  )
}

export default Gestion_agents