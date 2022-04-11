import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Router from './Router/Router'
import MiniDrawer from './Navigation/Navbar';


ReactDOM.render(
  <React.StrictMode>
    <MiniDrawer></MiniDrawer>
  </React.StrictMode>,
  document.getElementById('root')
)
