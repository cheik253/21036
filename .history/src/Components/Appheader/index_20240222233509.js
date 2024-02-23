import React from 'react';
import { Space, Typography } from 'antd';
import { MailOutlined, BellOutlined } from '@ant-design/icons';
import ReactApexChart from 'react-apexcharts';
import madaraImage from './madara.jpg';

export default function Appheader() {
  return (   
    <div className="Appheader">
      <img src={madaraImage} alt="Madara Image" width={40} />
      <Typography.Title>cheik's Dashboard</Typography.Title>
      <Space>
        <Bage>
            
        <MailOutlined style={{fontSize:24}} />
        <BellOutlined  style={{fontSize:24}} />
     
      </Space>
    </div>
  );
}
