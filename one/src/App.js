import React from 'react';
import './App.css';
import { Button } from 'antd';
// es6
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// function App(p) {
//   const numbers = [1, 2, 3, 4, 5,6];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );
//   return (
//    <div className="circle">
// {p.name}
// {listItems}
//    </div>
//   );
// }
import {
  Route,
  Switch,
  Redirect
 } from 'react-router-dom'
 
 import routes from './router/index'
 class App extends React.Component {
   render() {
     return (
      <div className="App">
      <header> 
      <a href="/cart"><Button type="dashed" size="large" >
    Cat
     
        </Button></a>
        <a href="/dog">  <Button type="danger" size="large">
                 Dog
        </Button></a>
        
      </header>
        <Switch>
          {
            routes.map(route => { 
              return(
                <Route 
                key = {route.path}
                path = {route.path}
                component = {route.component}/>
              )
            })
          }
        {/* <Redirect exact from = "/" to = {routes[0].path} />
          这里用 redirect 进行 首页自动跳转到 /home 路由下 
              exact 意味着精确匹配 当为 / 时才跳转 /home 不是包含 / 就跳转到 /home
         
          <Redirect to = '/404'/>
          如果找不到页面 则去 4040页面 */}
        </Switch>
       <footer>尾部</footer>
    </div>    
     );
   }
 }
export default App;
