import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
//import { Nav } from 'react-bootstrap'

function nav() {
  return (
    <>
    <nav className="navbar navbar-light bg-light justify-content-between">
    <Link to='/dashboard' className="navbar-brand">ORDERS</Link>
    <Link  to='/main'  className="navbar-brand">PRODUCTS</Link>
    <Link  to='/users'  className="navbar-brand">USERS</Link>
  <form className="form-inline">

    <Link  to='/adminlogin' ><button className="btn btn-outline-success my-2 my-sm-0" type="submit">
      Login</button></Link>
  </form>
</nav>
    
    
    </>
  )
}

export default nav