import React from 'react';
import ReactApexChart from 'react-apexcharts';
export default function Appfooter() {
 return(   
 <div className='Appfooter'>




    </div>
    
    
    );
}

const PieChartComponent = () => {
    const l1 = [334, 122,55];
    const l2 = ['a', 'b','c'];
  
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