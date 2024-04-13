import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import './app.css'

const Login = () => {
  return (
    <>
        <div >
            <div className='container'> 
                <h1 className='log'>Login</h1>
                <form action="">
                <div className='box1'>
                    <input type="email" className='box2' placeholder='' />
                    <label htmlFor="" className='lab'>Your Email</label>
                   
                </div>
                <div className='box1'> 
                    <input type="password" className='box2' placeholder=''/>
                    <label htmlFor="" className='lab'>Your Password</label>
                </div>
                <div className='rem'>
                    <div className='rem1'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="Remember Me">Remember Me</label>
                    </div>
                    <Link to='' className='check' >Forgot Password?</Link>
                </div>
                <button type='submit' className='element'>Login</button>
                <div>
                    <span className='check2'>New Here? <Link className='check' to="/Register">Create an account</Link> </span>
                </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login