import './Account.css';

function Account() {
  return (
        <div className="container">
            <div className="card">
    <div className="card-head">
        <p>Nome:</p>
        <span>Pedro</span>
    </div>
    <div className="card-body">
        <button type="button">Editar</button>
    </div>
            </div>
<div className="card">
    <div className="card-head">
        <p>E-mail:</p>
        <span>teste.teste@gmail.com</span>
    </div>
    <div className="card-body">
        <button type="button">Editar</button>
    </div>
</div>
<div className="card">
<div className="card-head">
    <p>Password:</p>
    <span>******</span>
</div>
<div className="card-body">
    <button type="button">Editar</button>
</div>
</div>
        </div>
  );
}

export default Account;
