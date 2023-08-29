import { useState } from 'react';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import './emailForm.css';
import { useNavigate } from 'react-router';

function nameForms() {
  const [email, setEmail] = useState('');
  // const [error, setError] = useState();
  const { token } = JSON.parse(localStorage.getItem('token'));
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!isEmail(email)) {
      console.log('Nao é um email');
    }

    axios.put('http://localhost:3110/users', { email }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res);
        navigate('/login');
      })
      .catch((e) => {
        console.error(e);
      });
  }
  return (
        <form onSubmit={handleSubmit} className="form">
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
                            <input required type="email" onChange={(event) => setEmail(event.target.value)} />
                    </label>
                </div>
                <button type="submit">Salvar Alteração</button>
            </div>
        </form>
  );
}

export default nameForms;
