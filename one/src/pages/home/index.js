//pages>index.js
// import Loadable from 'react-loadable';
// // import Loading from './my-loading-component';
import { Cart, Dog } from '../../pages'
// import Router from '../../router/index.js'
import { HashRouter, Route, Switch, Link } from 'react-router-dom';

import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon, Dropdown } from 'antd';
const { Header, Sider, Content } = Layout;
// import BasicLayout from './BasicLayout'
const menu = (
  <Menu>
    <Menu.Item>
      <p target="_blank" rel="noopener noreferrer">
        个人设置
      </p>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        退出登录
      </a>
    </Menu.Item>
  </Menu>
);
export default class Home extends Component {
  state = {
    collapsed: false,
  };
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  logoStyle = {
    height: '32px',
    background: 'rgba(255, 255, 255, 0.2)',
    margin: '16px'
  };
  render() {
    return (
      <Layout style={{ width: '100%', height: '800px', position: 'fixed' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" style={this.logoStyle} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">

              <Link to="/welcome"><Icon type="user" /> <span>首页</span></Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/cart">  <Icon type="video-camera" /><span>猫</span></Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/dog">   <Icon type="upload" />
                <span>狗</span></Link>

            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <div style={{float:'right'}}>  <Dropdown overlay={menu} >
              <a className="ant-dropdown-link" href="#">
                Admin <Icon type="down" />
              </a>
            </Dropdown></div>


          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              {this.props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}