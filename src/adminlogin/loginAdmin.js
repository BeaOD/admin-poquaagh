import React from 'react'
 import './loginAdmin.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function loginadmin() {
  return (
    <>
    <div className='container fluid '>
      <div className='row'>

      <div className='col-md-6'>
      <img className="img-fluid d-block w-100  imgma" src="images/logomandy.jpeg" alt="poquaagh logo"/>
      </div>
      

        <div  className='col-md-6'>
          <div className='textform'>
      <form>
        <h4>POQUAA GH  ADMIN</h4>
 
  <label  placeholder='email'></label>
  <br/>
  <input type="email" id="email" name="lname" placeholder='Email*'  />
  <br/>
  <label placeholder='password'></label>
  <br/>
  <input type="password" id="password" name="pword" placeholder='password*'  />
  <label placeholder='rememberme' style={{alignItems:'right'}}>Remember me</label>
  <br/>
  <input type="checkbox" id="rememberme" name="rememberme" placeholder='password*'  />
    <br/><br/>
  <button>Continue</button> 
  </form>
<br/>


<div >
  <div >
    <label className='forgotp'>Forgot Password?</label>
  </div>
  </div>
      </div>
      </div>
      </div>
      </div>
      
   
    
    
    </>
  )
}

export default loginadmin