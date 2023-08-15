import './nameForm.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function NameForms() {
  const [name, setName] = useState('');
  const navigate = useNavigate;
  // eslint-disable-next-line consistent-return
  const handleForms = (e) => {
    e.preventDefault();
    localStorage.setItem('user', name);
    if (localStorage.getItem('user')) {
      console.log('funcionou');
      navigate('/You');
    } else {
      console.log('Precisa preencher o nome ');
    }
  };
  return (
        <div className="container">
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
                            Novo Nome
                            <input onChange={(e) => setName(e.target.value)} type="text" />
                        </label>
                    </div>
                    <button type="submit">Salvar Alteração</button>
                </div>
            </form>
        </div>
  );
}

export default NameForms;
