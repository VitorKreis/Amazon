/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link } from 'react-router-dom';
import './navbar.css';

import { SiGtk } from 'react-icons/si';
import { BsFillCartFill } from 'react-icons/bs';

function Navbar() {
  return (
    <div className="Container">
      <nav className="nav navbar">
        <button className="icon-button btn btn-sm" type="button"><Link className="icon" to="/"><SiGtk /></Link></button>
        <input className="search" type="text" placeholder="Search" />
        <ul className="list">
          <div className="dropdown">
            <button id="button" className="btn btn dropdown-toggle" type="button" data-bs-toggle="dropdown">Account</button>
            <ul className="dropdown-menu">
              <li><p className="dropdown-item">Config</p></li>
              <li><p className="dropdown-item">About</p></li>
              <li><p className="dropdown-item">Contact</p></li>
              <li><p className="dropdown-item">You</p></li>
            </ul>
          </div>
          <li className="item">
            <button type="button" className="button-cart btn btn-sm"><Link className="cart" to="/login"><BsFillCartFill /></Link></button>
          </li>
        </ul>
      </nav>
    </div>

  );
}

export default Navbar;
