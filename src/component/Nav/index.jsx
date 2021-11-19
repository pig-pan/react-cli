import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import routerConfig from '@/router/router';
import './style';

const Navbar = ()=>{

  const [active, setActive] = useState('/');

  const handleClick = (e)=>{
    setActive(e.key)
  }

  return (
    <div className="nav">
      <Menu mode="horizontal" onClick={e => handleClick(e)}  selectedKeys={active}>

        {/* 
          <Menu.Item key="/about" >
            <Link to={"/about"}>About</Link>
          </Menu.Item>
          <Menu.Item key="/more">
            <Link to={"/more"}>More</Link>
          </Menu.Item> 
        */}

        {
          routerConfig.map(route => (
            <Menu.Item key={route.path}>
              <Link to={route.path}>{route.name}</Link>
            </Menu.Item>
          ))
        }
        
      </Menu>
    </div>
  )
}

export default Navbar;
