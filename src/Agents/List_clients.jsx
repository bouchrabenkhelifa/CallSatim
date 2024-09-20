import React from 'react';
import SideBar from '../Components/SideBar2';
import Clients from '../Components/Clients';
import Header from '../Components/Header';

function List_clients() {
  return (
    <div className="flex  flex-col h-screen">
    <Header />
    <div className="flex  flex-grow">
      <SideBar className="h-full  w-[90%]" />
      <div className=" flex-grow ">
      <Clients />
      </div>
    </div>
  </div>
  )
}

export default List_clients