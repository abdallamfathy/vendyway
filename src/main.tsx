import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { OrderProvider } from './theme1/utils/OrderContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <OrderProvider>
    <App />
    </OrderProvider>
  </React.StrictMode>,
)
