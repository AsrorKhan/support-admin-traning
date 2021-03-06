import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import App from './App';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import './index.scss';

const store = setupStore();
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el as HTMLElement);
root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BrowserRouter>
        <App />,
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>
);
