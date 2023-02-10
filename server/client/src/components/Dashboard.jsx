import React from 'react'
// import { useContext } from 'react';
import { AuthGuard } from '../controls/AuthGuard'
import './Dashboard.css'
// import { AuthContext } from '../controls/auth';

const Dashboard = () => {
    // const { logout } = useContext(AuthContext);
  return (
    <>
    {/* <AuthGuard> */}
    <div className='dashboard'>
       <div className="aside">
        <aside>
          <h2 className="logo">Nirvana</h2>
          <ul>
            <li className="navs"><span><i className="las la-th-large"></i></span>Dashboard</li>
            <li className="navs"><i className="las la-book-open"></i>Courses</li>
            <li className="navs"><i className="las la-calendar-check"></i>Schedule</li>
            <li className="navs"> <i className="las la-comments"></i>Forum</li>
            <li className="navs"><i className="las la-edit"></i> Score</li>
            <li className="navs"><i className="las la-user-cog"></i>Settings</li>
           
          </ul>
        </aside>
       </div>

       <div className="sec">
        <div className="search">
        <i class="las la-search"></i>
          <input type="search" className="searchbar" placeholder="Search anything here..." />
        </div>

        <div className="board">
          <div className="first-board">
            <div className="ficon">
            <i className="las la-chart-line"></i>
            </div>

            <h3 className="course-title">
              Decentralized Finance
            </h3>
            <small>lecturer</small>

          </div>
        </div>
       </div>

       <div className="third">
        <h2>testing</h2>
        <h1>goat</h1>
       </div>
    </div>
    {/* </AuthGuard> */}
    </>
  )
}

export default Dashboard