import React from 'react';
import { Button } from 'antd';
import './style'
import img from '@/assets/image/3.png';


const Home = ()=>{
  return (
    <div className="home">
      <p>首页</p>
      <Button type='primary'>换页</Button>
      <img src={img} />
    </div>
  )
}

export default Home;
