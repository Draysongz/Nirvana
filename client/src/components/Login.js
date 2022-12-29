import React from 'react'
import './Login.css'
import Vector1 from '../Utility/firstv.png'
import Vector2 from '../Utility/Vector.png'

const Login = () => {
  return (
    <div className="father">
    <div className='login-container'>
      <div className="title">
      <h1>Sign in</h1>
      <p>Sign in and start taking courses</p>
      </div>
      <form method='post' className="loginform">
        <div className="fields">
        <input type="text" className="username" required name='username' placeholder='Username' />
        <input type="text" className="password" name='password' required placeholder='Password'  />
        </div>
        <div className="controls">
        <input type="checkbox" name="remember" id="remember" />
        <label htmlFor="remember">Remember me</label>
        <a href="#">Forgot password?</a>
        </div>
        <div className="submit">
          <button className='loginbtn' type='submit'>Login</button>
        </div>
        
      </form>


    </div>
    <div className="vectors">
      <div className="first">
        <img src={Vector2} alt=""  className="firstv" width='1350' />
      </div>
  <div className="second">
  <img src={Vector1} alt=""  className="secondv" width='1350' />
  </div>
</div>
    </div>
  )
}

export default Login