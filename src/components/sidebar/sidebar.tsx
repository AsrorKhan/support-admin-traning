import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Switch } from 'antd';
import { menuLinks } from '../../utils/constants/menuLink';
import AppRoutes from '../../routes/appRoutes';
import './sidebar.scss';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export const SidebarComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mode, setMode] = useState<'vertical' | 'inline'>('vertical');
  const [collapseMenu, setCollapseMenu] = useState(true);

  const changeMode = (value: boolean) => {
    setMode(value ? 'vertical' : 'inline');
  };

  const collapseMenuItems = () => {
    setCollapseMenu(!collapseMenu);
  };
  return (
    <Layout>
      <Sider
        className='sidebar fixed-sidebar'
        breakpoint='lg'>


        <Menu className='menu' mode='inline'>
          <Link className='sidebar sidebar-menu' to='/main' >
            Support Admin
          </Link>
          {/*<Switch onChange={collapseMenuItems} />*/}
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
                  <SubMenu key={item.label} icon={item.icon} title={item.label}>
                    {
                      item.items!.map(i => {
                        return (
                          <Menu.Item key={i.label}>
                            <Link to={i.link}>
                              {i.icon} &nbsp;
                              {i.label}
                            </Link>
                          </Menu.Item>
                        );
                      })
                    }
                  </SubMenu>
                );
              }
            })
          }
        </Menu>
      </Sider>
      <Layout>
        <Header className='header-component'></Header>
        <AppRoutes />
      </Layout>
    </Layout>
  );
};

