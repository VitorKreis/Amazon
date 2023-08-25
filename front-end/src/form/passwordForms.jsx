import './passwordForm.css';

function passwordForms() {
  return (
        <form className="form">
            <div className="card">
            <h1>Alterar sua Senha</h1>
                <div className="input">
                    <label htmlFor="oldPassword">
                        Senha atual:
                            <input type="password" />
                    </label>
                    <label htmlFor="newPassword">
                        Nova Senha:
                            <input type="password" />
                    </label>
                    <label htmlFor="repitPassword">
                        Reinsira a nova senha:
                            <input type="password" />
                    </label>
                </div>
                <button type="button">Salvar Alteração</button>
            </div>

        </form>
  );
}

export default passwordForms;
