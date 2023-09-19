/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link } from 'react-router-dom';
import './navbar.css';

import { SiGtk } from 'react-icons/si';
import { BsFillCartFill, BsFillPersonFill } from 'react-icons/bs';

function Navbar() {
  return (
    <div className="Container">
      <nav className="nav navbar">
        <button className="icon-button btn btn" type="button"><Link className="icon" to="/"><SiGtk /></Link></button>
        <ul className="list">
          <div className="dropdown">
            <button id="button" className="btn btn dropdown-toggle" type="button" data-bs-toggle="dropdown"><BsFillPersonFill fontSize={29} /></button>
            <ul className="dropdown-menu">
              <li><Link to="/Cart" className="dropdown-item">Cart</Link></li>
              <li><Link to="/about" className="dropdown-item">About</Link></li>
              {localStorage.getItem('token') ? <li><Link className="dropdown-item" to="/You">You</Link></li> : <li><Link className="dropdown-item" to="/login">Login</Link></li>}
            </ul>
          </div>
          <li className="item">
            <Link to="/Cart" className="cart"><BsFillCartFill className="icon-cart" /></Link>
          </li>
        </ul>
      </nav>
    </div>

  );
}

export default Navbar;
