import  React, {useState} from 'react'
import './Login.css'
import Vector1 from '../Utility/firstv.png'
import Vector2 from '../Utility/Vector.png'
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username: username, 
          password:password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      const token = data.token;
      // Save the token in a secure way
      // ...
      console.log(data)
      // Redirect to the dashboard or home page
      // ...
    } catch (err) {
      setError('Invalid username or password');
      console.log(err)
    }
  };
  return (
    <div className="father">
    <div className='login-container'>
      <div className="title">
      <h1>Sign in</h1>
      <p>Sign in and start taking courses</p>
      </div>
      <form method='POST' className="loginform" onSubmit={handleSubmit}>
        <div className="fields">
        <input type="text" className="username" autoComplete='false ' value={username} required name='username' placeholder='Username' onChange={(event) => setUsername(event.target.value)} />
        <input type="password" className="password" value={password} autoComplete='false' name='password' required placeholder='Password' onChange={(event) => setPassword(event.target.value)}  />
        </div>
        <div className="controls">
        <input type="checkbox" name="remember" id="remember" />
        <label htmlFor="remember">Remember me</label>
        <a href="#">Forgot password?</a>
        </div>
        <div className="submit">
          <button className='loginbtn' type='Submit'>Login</button>
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