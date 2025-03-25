import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route,RouterProvider,createRoutesFromElements,createBrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'

const routes= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home/>}/>
    </Route>,
  ),
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
