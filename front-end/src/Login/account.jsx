import './account.css';

function Account() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
        <div className="container">
            <ul className="list-group">
                <li className="list-group-item">
                    <h1>Nome:</h1>
                    <p>User</p>
                    <button className="button-edit" type="button">Editar</button>
                </li>
                <li className="list-group-item">
                    <h1>E-mail</h1>
                    <p>{user.email}</p>
                    <button className="button-edit" type="button">Editar</button>
                </li>
                <li className="list-group-item">
                    <h1>Numero de celular</h1>
                    <p>41 000000000</p>
                    <button className="button-edit" type="button">Editar</button>
                </li>
                <li className="list-group-item">
                    <h1>Password</h1>
                    <p>********</p>
                    <button className="button-edit" type="button">Editar</button>
                </li>
                <li className="list-group-item">
                    <button className="button-logout" type="button">Logout</button>
                </li>
            </ul>
        </div>
  );
}

export default Account;
