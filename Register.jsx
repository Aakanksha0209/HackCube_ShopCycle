import React from 'react'
import Logo from '../Images/logo.png'
import '../Components/Register.css'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <div className='register'>
      
      <div className='register-left'>
        <img src={Logo} alt='NO image found'/>
        <h1>Welcome to SBI Life Insurance </h1>
      </div>
      <div className='register-right'>
        <form>
          <input className='register-input' type='text' placeholder='Name: '/>
          <input className='register-input' type='email' placeholder='Email-ID: '/>
          <input className='register-input' type='phone' placeholder='Contact Number: '/>
          <input className='register-input' type='text' placeholder='Emp-ID: '/>
          <input className='register-input' type='password' placeholder='Password'/>
            <button className='register-btn'>Register</button>
          <div className='no-account'>
         <Link to="/login"> <h5 className=''>Already have account? </h5></Link>
          <Link to='/login'> <button className='login-button'>Login</button> </Link>
          </div>
        </form>
         
      </div>


    </div>
  )
}

export default Register