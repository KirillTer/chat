import React from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';

const items: MenuProps['items'] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

function App() {
  return (
    <Layout hasSider>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Navbar />
      </Header>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Content>
        <AppRouter />
      </Content>
      {/* <Layout.Footer style={{ position: "sticky", bottom: "0" }}>Ant Design ©2018 Created by Ant UED</Layout.Footer> */}
      <Footer style={{ 
        borderTop: '1px solid #e8e8e8',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        textAlign: 'center'}} >
          Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
