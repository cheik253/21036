import React from 'react';
import ReactApexChart from 'react-apexcharts';

const App = () => {
  return (
    <div className="App">
      <MyChartComponent chartType="bar" />
      <MyChartComponent chartType="line" />
      <MyChartComponent chartType="area" />
      <MyChartComponent chartType="pie" />
    </div>
  );
};

const MyChartComponent = ({ chartType }) => {
  const commonOptions = {
    series: [
      {
        name: 'Example Series',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
    xaxis: {
      categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    },
  };



export default App;
