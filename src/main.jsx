import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './utils/Theme.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './utils/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <UserProvider>
     <ThemeProvider>
    <App />
    </ThemeProvider>
    </UserProvider>
    </BrowserRouter>
  
)
