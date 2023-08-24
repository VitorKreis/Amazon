import { useState } from 'react';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';

function nameForms() {
  const [email, setEmail] = useState('');
  // const [error, setError] = useState();
  const { token } = JSON.parse(localStorage.getItem('token'));

  function handleSubmit(event) {
    if (!isEmail(email)) {
      console.log('Nao é um email');
    }
    event.preventDefault();
    axios.put(
      'http://localhost:3110/users/',
      {
        email,
      },
      {
        auth: `Bearer ${token}`,
      },
    )
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.error(e.response.data.errors);
      });
  }
  return (
        <form>
            <div className="card">
                <h1>Alterar o seu endereço de e-mail</h1>
                <div className="text">
                    <p>
                    Digite o novo endereço de e-mail que você deseja associar à sua conta abaixo.
                    </p>
                </div>
                <div className="card-input">
                    <label htmlFor="input">
                        Novo endereço de e-mail:
                            <input type="email" onChange={(event) => setEmail(event.target.value)} />
                    </label>
                </div>
                <button onClick={handleSubmit} type="submit">Salvar Alteração</button>
            </div>
        </form>
  );
}

export default nameForms;
