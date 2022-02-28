import React from 'react'
import {Link} from "react-router-dom";
import "./Nav.css";


const Nav = () => {
  return (
    <div>
        <nav>
    <input type="checkbox" id="check" />
    <label htmlFor="check" className="checkbtn">
      <i className="fas fa-bars"></i>
    </label>
    <label className="logo"><a href="/"> <i className="fas fa-code"></i> KILANI</a></label>
    <ul>
            <li><Link to="/" className='links'> Home</Link></li>
            <li><Link to="/login" className='links'> Login</Link> </li>
            <li><Link to="/register" className='links'> Register</Link></li>
    </ul>
  </nav>
    </div>
  )
}

export default Nav;
