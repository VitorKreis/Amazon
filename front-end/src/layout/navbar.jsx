/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link } from 'react-router-dom';
import './navbar.css';

import { SiGtk } from 'react-icons/si';
import { BsFillCartFill } from 'react-icons/bs';

function Navbar() {
  const reloads = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  const handleLogout = () => {
    localStorage.clear();
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className="Container">
      <nav className="nav navbar">
        <button className="icon-button btn btn" onClick={reloads} type="button"><Link className="icon" to="/"><SiGtk /></Link></button>
            <input className="search" type="text" placeholder="Search" />
        <ul className="list">
          <div className="dropdown">
            <button id="button" className="btn btn dropdown-toggle" type="button" data-bs-toggle="dropdown">Hello, do login in your account</button>
            <ul className="dropdown-menu">
              <li><p className="dropdown-item">List</p></li>
              <li><Link to="/about" className="dropdown-item">About</Link></li>
              {localStorage.getItem('token') ? <li><Link className="dropdown-item" to="/You">You</Link></li> : <li><Link className="dropdown-item" to="/login">Login</Link></li>}
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
