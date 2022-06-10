import React from 'react';
import { SidebarComponent } from './components/sidebar/sidebar';
import { Layout } from 'antd';
import AppRoutes from './routes/appRoutes';
import './App.scss';

function App() {
  return (
    <Layout className='App'>
        <Layout.Content className="content">
          <SidebarComponent />
        </Layout.Content>
    </Layout>
  );
}

export default App;
