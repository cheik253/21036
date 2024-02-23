import React from 'react';
import ReactApexChart from 'react-apexcharts';
import madaraImage from './madara.jpg';
import {Image,Space,Typography} from 'antd';
import { MailLockOutlined, MailOutline, MailOutlined } from '@mui/icons-material';
export default function Appheader() {
  return (   
    <div className="Appheader">
   <img src={madaraImage} alt="Madara Image" width={40} />
   <Typography.Title>cheik's Dahsboard </Typography.Title>
   <Space>
    <MailOutlined />
    <Be
   </Space>
    </div>
  );
}
