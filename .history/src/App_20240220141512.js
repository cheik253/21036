import React from 'react';
import ReactApexChart from 'react-apexcharts';

const App=() => {
  return (
    <div className="App">
  jxs

    </div>
  );
}
const MyChartComponent = () => {
  const options = {
    chart: {
      type: 'bar',
    },
    series: [
      {
        name: 'Example Series',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <ReactApexChart
      options={options}
      series={options.series}
      type="bar"
      height={350}
    />
  );
};

export default App;
