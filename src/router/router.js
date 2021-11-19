// 引入页面组件
import Home from '@/pages/home';
import About from '@/pages/about';
import More from '@/pages/more';


// 路由配置
const router = [
  {
    path: '/',
    key: 'home',
    name: '首页',
    component: Home,
    exact: true,
    children: []
  },
  {
    path: '/about',
    key: 'about',
    name: '关于',
    component: About,
    exact: true,
    children: []
  },
  {
    path: '/more',
    key: 'more',
    name: '更多',
    component: More,
    exact: true,
    children: []
  }
];

export default router;

