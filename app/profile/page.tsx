import React, { useState, useEffect } from 'react';
import SideBar from '../components/Sidebar';
const Documentation = () => {
  return (
    <div className='flex'>
      <SideBar/>
    <div className="flex flex-col ml-20 mt-[4%] font-nunito">
        <h1 className="text-4xl mb-[40px] font-bold">Welcome to TinyLife Wellness</h1>
      <div>
       <h4>
          This portal showcases the extent of lead exposure levels in different areas in Nairobi. The results displayed are from
          an ML model that we fed data on variables that lead   </h4>
          <h4> to lead exposure within our communities, and it came up with the levels of lead exposure in Nairobi.</h4>
      </div>
      <div>
        <h1 className="text-2xl  mb-1 mt-10 font-bold">Map Section</h1>
        <h4 className="text-base mb-8">
          <h4> The map highlights the different wards in Nairobi and their case details. The level of exposure is subject to change  over time as the variables we considered also change</h4>
          <h4>  due to government activity, population growth, as well as continuous interventions to reduce the levels of lead exposure.According to the World Health Organisation,</h4>
<h4>no level of exposure is safe for children, but 5ug/dl is the level that is considered cause for action. The percentage indicates the percentage of   </h4>
<h4>    the population that have blood lead levels above 5ug/dl.</h4>
        </h4>
      </div>
      <div>
        <h1 className="text-2xl  mb-1 mt-10 font-bold">Data Upload</h1>
        <h4 className="text-base mb-8">
          <h4>    It is important to keep the data we showcase as accurate as possible at all times, and we can only do this with your help. The data you collect on lead levels is invaluable  </h4>
          <h4> for retraining the model as well as keeping a record of the progress of these areas. Here is an example of such a dataset: </h4>
          <h4> </h4>
          <a className='text-blue-500' href='/images/womenpopulation.csv' >DataSet</a>
        </h4>
      </div>
    </div>
    </div>
  );
};

export default Documentation






