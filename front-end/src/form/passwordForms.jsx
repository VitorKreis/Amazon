function passwordForms() {
  return (
        <form>
            <h1>Aleterar sua Senha</h1>
            <div className="card">
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
