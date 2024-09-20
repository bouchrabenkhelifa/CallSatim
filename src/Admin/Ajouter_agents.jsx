import React from 'react'
import SideBar from '../Components/SideBar1';
import Ajouter from '../Components/Ajouter';
import Header from '../Components/Header';

function Ajouter_agents() {
  return (
    <div className="flex  flex-col h-screen">
    <Header />
    <div className="flex  flex-grow">
      <SideBar className="h-full  w-[90%]" />
      <div className=" flex-grow ">
      <Ajouter />
      </div>
    </div>
  </div>
  )
}

export default Ajouter_agents