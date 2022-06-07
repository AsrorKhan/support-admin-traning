import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorBoundary from './components/errorBoundary/errorBoundary'
import 'antd/dist/antd.css'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { setupStore } from './store/store'

const store = setupStore()
const el = document.getElementById('root')
const root = ReactDOM.createRoot(el as HTMLElement)
root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BrowserRouter>
        <App />,
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>
)
