import React from 'react';
import ReactApexChart from 'react-apexcharts';

const App=() => {
  return (
    <div className="App">
 <MyChartComponent />

    </div>
  );
}
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
      height={230} width={250}
    />
  );
};
const App=() => {
  return (
    <div className="App">
 <MyChartComponent />

    </div>
  );
}
const Char = () => {
  const options = {
   
    series: [
      {
      
        data: [4],
      },
    ],
  };

  return (
    <ReactApexChart
      options={options}
      series={options.series}
      type="bar"
      height={230} width={250}
    />
  );
};

export default App;
