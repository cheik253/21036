import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {Menu} from 'antd';
export default function Sidemenu() {
    return(   
    <div className='Sidemenu'>
   
<Menu items={[{

label:'dashboard',
key:'/'
},{
    label:'Inventory',
    key:'/Inventory'  
},{
    label:'Orders',
    key:'/Orders'  
}
]}>

</Menu>
   
   
       </div>
       
       
       );
   }