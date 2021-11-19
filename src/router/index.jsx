

// 路由配置
import React from 'react';
import { Route } from 'react-router-dom';
import routerConfig from './router';


// 注册路由组件
const APPRouter = () =>(
  <>
  
    {/* 
      <Route exact={true}  path="/" component={Home}/>
      <Route exact={true}  path="/about" component={About}/>
      <Route exact={true}  path="/more" component={More} /> 
    */}

    {
      routerConfig.map(route => (
        <Route 
          key={route.key} 
          exact={route.exact}  
          path={route.path} 
          component={route.component}
        />
      ))
    }
  </>
);  

export default APPRouter;