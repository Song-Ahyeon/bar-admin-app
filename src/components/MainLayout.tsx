import React from "react";
import { Route } from "react-router";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import NotFound from "../pages/NotFound";
import Notice from "../pages/Notice";

const MainLayout = () => {

    const { Header, Content, Footer } = Layout;

    const routes = [
        {path: '/notice', element: <Notice />}
    ]

    return (
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label: `nav ${key}`,
              };
            })}
          />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          
        <Router>
            <Routes>
                <Route path="/"></Route>
                {routes.map((route, index) => <Route path={route.path} element={route.element} key={route.path} />)}
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </Router>
        
          <div className="site-layout-content">
            Content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    );
  };

export default MainLayout