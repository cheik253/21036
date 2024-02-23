import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {Menu} from 'antd';
export default function Sidemenu() {
    return(   
    <div className='Sidemenu'>
   onCli
<Menu items={[{

label:'dashboard',
key:'/'
},{
    label:'Inventory',
    key:'/Inventory'  
},{
    label:'Orders',
    key:'/Orders'  
},{
    label:'Customers',
    key:'/Customers'  
}
]}>

</Menu>
   
   
       </div>
       
       
       );
   }