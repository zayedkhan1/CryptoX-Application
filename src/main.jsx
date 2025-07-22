import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Route/Route.jsx';
import CoinContextProvider from './Context/CoinContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CoinContextProvider>
        <RouterProvider router={router} />
    </CoinContextProvider>
  </StrictMode>,
)
