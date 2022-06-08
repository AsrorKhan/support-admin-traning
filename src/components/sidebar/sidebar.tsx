import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { menuLinks } from '../../utils/constants/menuLink';
import AppRoutes from '../../routes/appRoutes';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const SiderComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider
        className='sidebar fixed-sidebar'
        breakpoint='lg'>
        <Menu>
          {
            menuLinks?.map((item) => {
              if (item.link !== null) {
                return (
                  <Menu.Item
                    icon={item.icon}
                    key={item.label}
                  >
                    <Link to={`${item.link}`}>{item.label}</Link>
                  </Menu.Item>
                );
              } else {
                return (
                  <SubMenu key={item.link} icon={item.icon} title={item.label}>
                    
                  </SubMenu>
                );
              }
            })
          }
        </Menu>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <AppRoutes/>
      </Layout>
    </Layout>
  );
};

export default SiderComponent;

