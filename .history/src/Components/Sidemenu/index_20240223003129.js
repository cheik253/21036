import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {Menu} from 'antd';
import { ApprovalOutlined } from '@mui/icons-material';
export default function Sidemenu() {
    return(   
    <div className='Sidemenu'>
   
<Menu onClick={(item) => {

}
} items={[{

label:'dashboard',
icon:<A,
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