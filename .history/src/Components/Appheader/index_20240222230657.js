import React from 'react';
import ReactApexChart from 'react-apexcharts';
import madaraImage from './madara.jpg';
import {Image,Space,}
export default function Appheader() {
  return (   
    <div className="Appheader">
   <img src={madaraImage} alt="Madara Image" width={40} />
   
    </div>
  );
}
