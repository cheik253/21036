import React from 'react';
import { Badge, Space, Typography } from 'antd';
import { MailOutlined, BellOutlined } from '@ant-design/icons';
import ReactApexChart from 'react-apexcharts';
import madaraImage from './madara.jpg';

export default function Appheader() {
  return (   
    <div className="Appheader">
      <img src={madaraImage} alt="Madara Image" width={40} />
      <Typography.Title>cheik's Dashboard</Typography.Title>
      <Space>
        <Badge co>
        <MailOutlined style={{fontSize:24}} />
        </Badge>

      <Badge>
      <BellOutlined  style={{fontSize:24}} />
      </Badge>

     
      </Space>
    </div>
  );
}
