import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
     <>
        <div >
            <div className='container'> 
                <h1 className='log'>Register</h1>
                <form action="">
                <div className='box1'>
                    <input type="email" className='box2' placeholder='' />
                    <label htmlFor="" className='lab'>Your Email</label>
                   
                </div>
                <div className='box1'> 
                    <input type="password" className='box2' placeholder=''/>
                    <label htmlFor="" className='lab'>Your Password</label>
                </div>
                <div className='box1'> 
                    <input type="password" className='box2' placeholder=''/>
                    <label htmlFor="" className='lab'>Confirm Password</label>
                </div>
                
                <button type='submit' className='element'>Register</button>
                <div>
                <span>Already have an account? <Link to="/">Login</Link> </span>
                </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Register