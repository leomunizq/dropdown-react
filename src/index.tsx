import React from 'react'
import ReactDOM from 'react-dom/client'
import { DropDown } from './DropDown/DropDown'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <DropDown />
  </React.StrictMode>
)
