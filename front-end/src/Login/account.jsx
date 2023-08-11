import './account.css';

import { Link } from 'react-router-dom';

import { getLocalStorage } from '../LocalStorage';

function Account() {
  const user = JSON.parse(getLocalStorage('login'));
  return (
        <div className="container">
            <ul className="list-group">
                <li className="list-group-item">
                    <h1>Nome:</h1>
                    <p>User</p>
                    <Link to="/editName" className="button-edit" type="button">Editar</Link>
                </li>
                <li className="list-group-item">
                    <h1>E-mail</h1>
                    <p>{user.email}</p>
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
