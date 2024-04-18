import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '../Contexts/theme.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
 
  <BrowserRouter basename='/books/'>
   <React.StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
 
   
    
  </React.StrictMode>
  </BrowserRouter>
 
)
