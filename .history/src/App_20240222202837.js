import React from 'react';
import ReactApexChart from 'react-apexcharts';
import Sidemenu from './Components/Sidemenu';
import Appfooter from './Components/Appfooter';
import Appheader from './Components/Appheader';
import {Sp }
function App ()  {
  return (
    <div className="App">
   
   <Appheader />
   <Space
    </div>
  );
};

const MyChartComponent = () => {
  const options = {
    series: [
      {
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <ReactApexChart
      options={options}
      series={options.series}
      type="bar"
      height={230}
      width={250}
    />
  );
};

const PieChartComponent = () => {
  const l1 = [334, 122];
  const l2 = ['a', 'b'];

  const options = {
    labels: l2,
    series: l1,
  };

  return (
    <ReactApexChart
      options={options}
      series={options.series}
      type="pie"
      height={230}
      width={250}
    />
  );
};

export default App;
