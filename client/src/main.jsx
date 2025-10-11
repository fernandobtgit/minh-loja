
import App from './App.jsx'
import './index.css'
import {createRoot} from "react-dom/client"
import { StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { RouterProvider } from 'react-router-dom'

import MyRouter from "./Myrouter.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={MyRouter} />
  </StrictMode>,
)
