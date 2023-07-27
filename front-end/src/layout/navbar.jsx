/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link } from 'react-router-dom';
import './navbar.css';

import { SiGtk } from 'react-icons/si';
import { BsFillCartFill } from 'react-icons/bs';
import { useEffect } from 'react';

function Navbar() {
  let user = false;
  useEffect(() => {
    if (localStorage.getItem('token')) {
      user = true;
    }
  });

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <div className="Container">
      <nav className="nav navbar">
        <button className="icon-button btn btn" type="button"><Link className="icon" to="/"><SiGtk /></Link></button>
            <input className="search" type="text" placeholder="Search" />
        <ul className="list">
          <div className="dropdown">
            <button id="button" className="btn btn dropdown-toggle" type="button" data-bs-toggle="dropdown">Hello, do login in your account</button>
            <ul className="dropdown-menu">
              <li><p className="dropdown-item">List</p></li>
              <li><Link to="/about" className="dropdown-item">About</Link></li>
              {user ? <li><p className="dropdown-item">You</p></li> : <li><Link className="dropdown-item" to="/login">Login</Link></li>}
              <li><button className="dropdown-item" type="button" onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>
          <li className="item">
            <button type="button" className="button-cart btn btn-sm"><BsFillCartFill className="cart" /></button>
          </li>
        </ul>
      </nav>
    </div>

  );
}

export default Navbar;
