import React from 'react'
import { BrowserRouter as Router,Routes,Route, } from 'react-router-dom'
import Nav from '../src/sideNavbar/nav'
import Footer from '../src/footer/Footer'
import Main from '../src/addproducts/main'
import LoginAdmin from '../src/adminlogin/loginAdmin'
import Dashboard from '../src/home/dashboard'
import Users from '../src/users/clients'
import Errorpage from './Errorpage'


const Rouuter = () => {
  return (
    <Router>
        <div>
        {<Nav/>}
        </div>

    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Main' element={<Main/>}/>
        <Route path='/LoginAdmin' element={<LoginAdmin/>}/>
        <Route path='/clients' element={<Users/>}/>
        <Route path='/errorPage' element={<Errorpage/>}/>
              
    </Routes>
    {<Footer/>}
    </Router>
  )
}

export default Rouuter