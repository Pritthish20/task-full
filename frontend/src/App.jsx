import React from 'react'
import { Outlet} from 'react-router';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar';


const App = () => {
  return (
    <>
      <ToastContainer/>
       <Navbar/>
      <main className='py-3'>
        <Outlet/>
      </main>
    </>
    
  )
}
export default App;