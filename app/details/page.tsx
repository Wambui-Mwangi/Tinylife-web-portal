// 'use client';
// import React, { useState, useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';
// import { Pie } from 'react-chartjs-2';
// import { Orgs } from '.';
// import SideBar from '../components/Sidebar';
// import useGetOrganizations from '../hooks/getOrganizations/useGetOrganizations';
// Chart.register(CategoryScale, LinearScale, BarElement);


// const Graph = () => {
//   const [chartData, setChartData] = useState({
//     labels: ['Men', 'Children', 'Women'],
//     datasets: [
//       {
//         data: [10000, 19000, 32000],
//         backgroundColor: '#00000',
//       },
//     ],
//   });
//   return (
//     <div>
//       <p className='pb-10 ml-[20px] font-bold  text-[25px]'>Population in Kitisuru</p>
//       <div className='w-[550px] p-4 bg-white'>
//         <Bar
//           data={chartData}
//           options={{
//             scales: {
//               y: {
//                 title: { display: true, text: 'Population' },
//               },
//               x: {
//                 title: { display: true, text: 'Gender' },
//               },
//             },
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// ;
// const Dropdown = () => {
//   const [selectedOption, setSelectedOption] = useState('Add Progress');
//   const options = ['Add Progress', 'Planning', 'Testing', 'Treating'];
//   const handleOptionChange = (e:any) => {
//     setSelectedOption(e.target.value);
//   };
//   return (
//     <div className='bg-none w-[250px] rounded-[10px] pt-5 pl-5 pr-5 ml-[120%]'>
//       <select
//         id='dropdown'
//         className='text-white text-xl p-2 rounded-[10px] font-bold bg-green-400'
//         value={selectedOption}
//         onChange={handleOptionChange}
//       >
//         {options.map((option, index) => (
//           <option
//             key={index}
//             value={option}
//             className='bg-black text-white rounded-[10px]'
//           >
//             {option}
//           </option>
//         ))}
//       </select>
//       <p>Org stage: {selectedOption}</p>
//     </div>
//   );
// };



// const Organizations = () => {
//   const { organizations } = useGetOrganizations();
//   console.log({orgs:organizations})

//   if (!Array.isArray(organizations) || organizations.length === 0) {
//     return <p>No organizations to display.</p>;
//   }  return (
//     <>
//        <h1 className='ml-8 font-bold  text-[25px] mb-[-93px]'>Organzations Currently here</h1>
//       <div className='flex'>
   
//         <div className=' image flex flex-wrap mt-[100px] ml-10 mb-10 '>
      
//       {organizations.map((org, index) => (
//         <div className='gap-10 pl-[20px]' key={org.organizationName}>
        
//           <img
//             src={Orgs[index % Orgs.length].img}
//             alt='product'
//             className='h-[130px] '
//           />

        
         
//           <h1 className='text-[25px] font-bold text-black ml-[3]'>
//             {org.stage_name}
//           </h1>
//           <p className='text-gray-500 '>{org.description}</p>
//         </div>
//       ))}
 
//     </div>

//     </div>
//     </>
    
  
  
//   );
// };
// const Details = () => {
//   return (
//     <div className='flex'>
//       <SideBar />
//       <div>
//         <Dropdown />
//         <div>
//           <Graph />
//           <div>
//             <Organizations />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Details;





