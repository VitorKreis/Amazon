import { useState } from 'react';

import { useNavigate } from 'react-router';

function NameForms() {
  const [name, setName] = useState();
  const navigate = useNavigate;
  function handleForms(e) {
    e.preventDefault();
    localStorage.setItem('user', name);
  }

  function handleClick() {
    if (localStorage.getItem('user')) {
      navigate('/You');
    }
  }

  return (
        <form onSubmit={handleForms}>
            <h1>Alterar seu nome</h1>
            <div className="card ">
                <div className="text">
                     <p>
                        Se quiser alterar o nome associado à sua conta de cliente da Amazon,
                         você poderá fazê-lo a seguir.
                          Lembre-se de clicar no botão Salvar alterações quando tiver concluído
                     </p>
                </div>
                <div className="card-input">
                    <label htmlFor="input">
                        Novo Nome:
                        <input onChange={(e) => setName(e.target.value)} type="text" />
                    </label>
                </div>
                <button onClick={handleClick} type="submit">Salvar Alteração</button>
            </div>
        </form>
  );
}

export default NameForms;
