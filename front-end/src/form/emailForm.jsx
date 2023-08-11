function nameForms() {
  return (
        <form>
            <div className="card">
                <h1>Alterar o seu endereço de e-mail</h1>
                <div className="text">
                    <p>
                    Digite o novo endereço de e-mail que você deseja associar à sua conta abaixo.
                    Enviaremos um código de verificação para esse endereço.
                    </p>
                </div>
                <div className="card-input">
                    <label htmlFor="input">
                        Novo endereço de e-mail:
                            <input type="email" />
                    </label>
                </div>
                <button type="button">Salvar Alteração</button>
            </div>
        </form>
  );
}

export default nameForms;
