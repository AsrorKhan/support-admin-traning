import {
  ApartmentOutlined,
  ControlOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
  UserSwitchOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';

export const menuLinks = [
  {
    key: 1,
    label: 'Home',
    link: '/main',
    icon: <AppstoreOutlined/>,
    items: null,
    permission: ''
  },
  {
    key: 2,
    label: 'Admins',
    link: null,
    icon: <ApartmentOutlined />,
    items: [
      {
        label: 'admin1',
        link: '/admins',
        icon: <UserSwitchOutlined />,
        permission: ''
      },
      {
        label: 'admin2',
        link: '/admins',
        icon: <UserSwitchOutlined />,
        permission: ''
      }
    ],
    permission: ''
  },
  {
    key: 3,
    label: 'Users',
    link: null,
    icon: <TeamOutlined />,
    items: [
      {
        label: 'user1',
        link: '/users',
        icon: <UserOutlined />,
        permission: ''
      },
      {
        label: 'user2',
        link: '/users',
        icon: <UserOutlined />,
        permission: ''
      }
    ],
    permission: ''
  },
  {
    key: 4,
    label: 'Configuration',
    link: '/configuration',
    icon: <ControlOutlined />,
    permission: ''
  },
  {
    key: 5,
    label: 'Settings',
    link: '/settings',
    icon: <SettingOutlined />,
    permission: ''
  }
];
