import { useState, useEffect } from 'react';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';

function nameForms() {
  const [email, setEmail] = useState('');
  const token = JSON.parse(localStorage.getItem('token'));

  function handleEmail(event) {
    if (isEmail(event.target.value)) {
      console.log('Nao é um email');
    }
    return setEmail(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    useEffect(() => {
      axios.get('http://localhost:3110/users/', {
        data: {
          email,
        },
        headers: {
          Authorization: `token ${token}`,
        },
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  }
  return (
        <form onSubmit={handleSubmit}>
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
                            <input type="email" onChange={handleEmail} />
                    </label>
                </div>
                <button type="submit">Salvar Alteração</button>
            </div>
        </form>
  );
}

export default nameForms;
