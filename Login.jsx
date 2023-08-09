import React from 'react'
import Logo from '../Images/logo.png'
import '../Components/Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
      
      <div className='login-left'>
        <img src={Logo} alt='NO image found'/>
        <h1>Welcome to SBI Life Insurance </h1>
      </div>
      <div className='login-right'>
        <form>
          <input className='login-input' type='text' placeholder='Enter Emp-ID'/>
          <input className='login-input' type='password' placeholder='Enter Password'/>
            <button className='login-btn'>Login</button>
          <div className='no-account'>
          <Link to='/register'><h5 className=''>Don't have account? </h5></Link>
          <Link to='/register'><button className='register-login-button'>Register</button></Link>
          </div>
        </form>
         
      </div>


    </div>
  )
}

export default Login