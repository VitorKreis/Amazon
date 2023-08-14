import './account.css';

import { Link, Navigate } from 'react-router-dom';
import { getLocalStorage } from '../LocalStorage';

function Account() {
  const login = JSON.parse(getLocalStorage('login'));
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(localStorage.getItem('login'));
  return (
        <div className="container">
            {!getLocalStorage('login') && (<Navigate to="/" replace />)}
            <ul className="list-group">
                <li className="list-group-item">
                    <h1>Nome:</h1>
                    {user ? <p>{user.name}</p> : <p>User</p> }
                    <Link to="/editName" className="button-edit" type="button">Editar</Link>
                </li>
                <li className="list-group-item">
                    <h1>E-mail</h1>
                    <p>{login.email}</p>
                    <Link to="/editEmail" className="button-edit" type="button">Editar</Link>
                </li>
                <li className="list-group-item">
                    <h1>Numero de celular</h1>
                    <p>41 000000000</p>
                    <button className="button-edit" type="button">Editar</button>
                </li>
                <li className="list-group-item">
                    <h1>Password</h1>
                    <p>********</p>
                    <Link to="/editPassword" className="button-edit" type="button">Editar</Link>
                </li>
                <li className="list-group-item">
                    <button className="button-logout" type="button">Logout</button>
                </li>
            </ul>
        </div>
  );
}

export default Account;
