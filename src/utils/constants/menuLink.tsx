import { ApartmentOutlined, FormOutlined, TeamOutlined } from '@ant-design/icons';

export const menuLinks = [
  {
    key: 1,
    label: 'Admins',
    link: '/admins',
    icon: <ApartmentOutlined />,
    items: [
      {
        label: 'admin1',
        link: '/admin',
        permission: ''
      },
      { 
        label: 'admin2',
        link: '/admin',
        permission: ''
      }
    ],
    permission: ''
  },
  {
    key: 2,
    label: 'Users',
    link: '/users',
    icon: <TeamOutlined />,
    items: [
      {
        label: 'user1',
        link: '',
        icon: '',
        permission: ''
      },
      {
        label: 'user2',
        link: '',
        icon: '',
        permission: ''
      }
    ],
    permission: ''
  },
  {
    key: 3,
    label: 'Debts',
    link: '/debts',
    icon: <FormOutlined />,
    permission: ''
  }
];
