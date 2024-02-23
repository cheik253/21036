import React from 'react';
import ReactApexChart from 'react-apexcharts';

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

  let chartOptions;

  switch (chartType) {
    case 'bar':
      chartOptions = {
        ...commonOptions,
        chart: {
          type: 'bar',
        },
      };
      break;
    case 'line':
      chartOptions = {
        ...commonOptions,
        chart: {
          type: 'line',
        },
      };
      break;
    case 'area':
      chartOptions = {
        ...commonOptions,
        chart: {
          type: 'area',
        },
      };
      break;
    case 'pie':
      chartOptions = {
        labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        chart: {
          type: 'pie',
        },
      };
      break;
    default:
      chartOptions = commonOptions;
  }

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartOptions.series}
      type={chartOptions.chart.type}
      height={170}
    />
  );
};

export default MyChartComponent;
