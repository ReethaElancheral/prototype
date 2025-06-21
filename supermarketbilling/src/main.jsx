import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BillingProvider } from './components/BillingContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BillingProvider>
    <App />
  </BillingProvider>
)
