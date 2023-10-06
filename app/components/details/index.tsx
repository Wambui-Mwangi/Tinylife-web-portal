'use client'
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';


Chart.register(CategoryScale, LinearScale, BarElement);
const Details = () =>{
    const Graph= () => {
  const [chartData, setChartData] = useState({
    labels: ['Men', 'Children', 'Women'],
    datasets: [
      {
          data: [10000, 19000, 22000],
          backgroundColor: '#00000',
      },
    ],
  });
  return (
    <>
      <div className='w-full lg:h-[50vh] w-[100%] mt-10 p-4 border rounded-lg bg-white '>
        <p className='pb-10'>Population in Kitisuru</p>
        <Bar
          data={chartData}
          options={{
            scales: {
              y: {
                title: { display: true, text: 'Population' },
              },
              x: {
                title: { display: true, text: 'Gender' },
              },
            },
          }}
        />
      </div>
    </>
  );
};
}
export default Details;