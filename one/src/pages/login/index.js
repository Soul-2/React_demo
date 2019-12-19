import React, { Component } from 'react'
import { Button, Radio, Icon,Input } from 'antd';
import { Card } from 'antd';
import Background from '../../images/bg.jpg';
import Axios from 'axios';
import {Fragment,PureComponent} from 'react';
import moment from 'moment';  //引入了moment的库
//定义背景样式
import { message } from 'antd';
var sectionStyle = {
    position:"fixed",
    left:0,
    top:0,
  width: "100%",
  height: "700px",
// makesure here is String确保这里是一个字符串，以下是es6写法
  background: `url(${Background}) no-repeat` 
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
     name:'',
     pwd:''
    }
  }
  handleName= (event)=>{
    if(event && event.target && event.target.value){
      let value = event.target.value;
      this.setState(()=>({name:value }))
    }
  }
  handlePwd= (event)=>{
    if(event && event.target && event.target.value){
      let value = event.target.value;
      this.setState(()=>({pwd:value }))
    }
  }
  
  userLogin=()=>{
  // let name=this.refs.username.value;
  // let pwd=this.refs.pwd.value;
	// this.setState({
	// 	username:name,
	// 	password:pwd
	// })
Axios.get('http://127.0.0.1:8888/login').then((res)=>{
  console.log(res.data)
  if(res.data.username==this.state.name&&res.data.password==this.state.pwd){
    message.success('登陆成功！');
    this.props.history.push('/home')
  }
    else{
      message.error('登陆失败！');
      this.props.history.push('/')

    }
})
}
    render() {
        return (
  <div style={sectionStyle} >
                <Card title="欢迎登录" extra={<a href="#/home">注册</a>} style={{ width: 300, position: 'absolute',top:'50%', left:'50%'
    ,transform:'translate(-50%,-50%)',textAlign:"center" }}>
                    <p><Input placeholder="请输入用户名" ref='username' onChange ={event => this.handleName(event)} /></p>
                    <p><Input placeholder="请输入密码" ref='pwd'onChange ={event => this.handlePwd(event)} /></p>
                    <Button type="primary" onClick={this.userLogin}> 登录</Button>
                   
                </Card>
            </div>
        )
    }
}

