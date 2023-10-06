'use client';
import React, { useState, useEffect } from 'react';
import NairobiMap from '../components/dynaminNairobiMap';
import { FaSearch } from 'react-icons/fa';
import SideBar from '../components/Sidebar';
function Dashboard() {
  const [topLocations, setTopLocations] = useState([])
  return (
    <div className='flex ml-[10px]'>
      <SideBar/>
    <div className='flex'>
    <div className='flex ml-[80px] mt-[2px]'>
      <div className='pl-[50px] pt-10'>
      <div className='flex space-x-40'>
      <div>
        <h3 className='text-[22px] font-bold'>Number of children at risk</h3>
        <div className="mt-5 pl-[35%] w-[326px] h-[161px] bg-lime-950  pt-[50px] rounded-[10px] text-white text-[30px] font-bold font-['Nunito']">154,641</div>
      </div>
      <div>
        <h3 className='text-[22px] font-bold'>Pregnancies at risk per month</h3>
        <div className="mt-5 pl-[35%] w-[326px] h-[161px] bg-lime-600  pt-[50px] rounded-[10px] text-white text-[30px] font-bold font-['Nunito']">11, 237</div>
      </div>
      <div>
        <h3 className='text-[22px] font-bold'>Variables considered</h3>
        <div className="flex mt-5 pl-[4%] space-x-10 w-[326px] h-[161px] bg-lime-950  p-[10px] rounded-[10px] text-white text-[22px] font-normal font-['Nunito']">
          <div>
            <p>No. of industries</p>
            <p>Source of water</p>
          </div>
          <div>
          <p>Presence of open sewage</p>
          <p>Presence of garages</p>
          </div>
        </div>
      </div>
      </div>
     <div className="flex w-[653px] h-[57px] ">
</div>
      <div className="">
        <NairobiMap />
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}
export default Dashboard;







