// import dependencies
import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import {routes} from './../../routes/routes';
import { UserOutlined, BellOutlined } from '@ant-design/icons';

// import components 

// import actions 

// import styling 
import './menu.styles.scss';


const MenuPage = (props) => {
      const { Header, Content,Sider } = Layout;
      console.log(
        "PRopS", props.children.props
      )
      return (
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
          >
            <div className="logo" />
            <Menu mode="inline" defaultSelectedKeys={[`${props.children.props.match.path}`]}>
              {routes.map((route) => {
                return <Menu.Item key={route.path} onClick={() => {props.children.props.history.push(`${route.path}`)}} icon={route.icon}>
                {route.name}
              </Menu.Item>
              })}
            </Menu>
          </Sider>
          <Layout>
            <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
              <h2>{props.children.props.match.path.substring(1).charAt(0).toUpperCase() + props.children.props.match.path.substring(1).slice(1)}</h2>
              <div className="profile-container">
              <BellOutlined style={{ fontSize: '20px' }} />
              <div className="divider"> 
              </div>
              <Avatar style={{ backgroundColor: '#87d068', marginRight: '5px' }} icon={<UserOutlined />} /> User
              </div>
            </Header>
            <Content className="content-container">
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                {props.children}
              </div>
            </Content>
          </Layout>
        </Layout>
      );

};

export default MenuPage;
