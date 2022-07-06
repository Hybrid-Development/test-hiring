import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from 'styles/global'
import Router from './Routes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Router />
    <GlobalStyles />
  </React.StrictMode>
)
