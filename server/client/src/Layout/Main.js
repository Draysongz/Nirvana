import React from 'react'
import Login from '../components/Login'
import { ToastContainer} from 'react-toastify';
// import Landing from '../components/Landing';
import { Route , BrowserRouter as Router, Routes} from 'react-router-dom'
import Dashboard from '../components/Dashboard';
import { AuthProvider } from '../controls/auth';
import Home from '../components/Home';

const Main = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>} />
        </Routes>
    </Router>
      <ToastContainer />
      </AuthProvider>
    </div>
  )
}

export default Main