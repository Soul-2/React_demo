import {
   Cart,Dog,Login,Home
  } from '../pages' //导入页面

  
  import React from 'react';
  import {HashRouter, Route, Switch} from 'react-router-dom';

  
  
  const BasicRoute = () => (
      <HashRouter >
          <Switch>
              <Route exact path="/home" component={Home}/>
              <Route  path="/cart" component={Cart}/>
              <Route  path="/dog" component={Dog}/>
          </Switch>
          <Route exact path="/" component={Login}/>

      </HashRouter>
      
  );
  
  
  export default BasicRoute;

