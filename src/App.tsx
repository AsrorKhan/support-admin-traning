import React from 'react';
import SiderComponent from './components/sidebar/sidebar';
import './App.scss';
import { Layout } from 'antd';
import AppRoutes from './routes/appRoutes';

function App() {
  return (
    <Layout className='App'>
        <Layout.Content className="content">
          <SiderComponent />
        </Layout.Content>
    </Layout>
  );
}

export default App;
