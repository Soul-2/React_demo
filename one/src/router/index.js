import {
   Cart,Dog
  } from '../pages' //导入页面
  //通过组件配置路由
  const routes = [{
    path: '/cart',
    component: Cart
  }, {
    path: '/dog',
    component: Dog
  }
  ];
  export default routes
  