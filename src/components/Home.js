import React from 'react'
import "./Home.css";
 const Home = () => {
  return (
    <div className='home-surround'>
        <div className="home-container">
          <div> <h1 className='main-title'>Welcome to the Kilani Blogger</h1> </div>
          <div className='home-buttons'>
          <a className='home-a' href="/login">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Login
    </a>
    <a className='home-a' href="/register">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Register
    </a>
    </div>
        </div>
    </div>
  )
}

export default Home;


