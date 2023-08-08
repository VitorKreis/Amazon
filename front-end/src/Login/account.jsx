import './account.css';

function Account() {
  return (
        <div className="container">
            <ul className="list-group">
                <li className="list-group-item">
                    <h1>Nome:</h1>
                    <p>Pedro</p>
                    <button type="button">Editar</button>
                </li>
                <li className="list-group-item">
                    <h1>E-mail</h1>
                    <p>tese.teste@teste.com</p>
                    <button type="button">Editar</button>
                </li>
                <li className="list-group-item">
                    <h1>Numero de celualr</h1>
                    <p>41 000000000</p>
                    <button type="button">Editar</button>
                </li>
                <li className="list-group-item">
                    <h1>Password</h1>
                    <p>********</p>
                    <button type="button">Editar</button>
                </li>
                <li className="list-group-item">
                    <button className="button-logout" type="button">Logout</button>
                </li>
            </ul>
        </div>
  );
}

export default Account;
