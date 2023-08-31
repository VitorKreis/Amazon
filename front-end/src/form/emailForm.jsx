import { useState } from 'react';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import './emailForm.css';
import { useNavigate } from 'react-router-dom';
import Message from '../layout/message';

function nameForms() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState();
  const [type, setType] = useState();
  const navigate = useNavigate();
  const { token } = JSON.parse(localStorage.getItem('token'));

  function handleSubmit(event) {
    event.preventDefault();

    if (!isEmail(email)) {
      setMessage('Please check the email');
      setType('Error');
    }

    axios.put('http://localhost:3110/users', { email }, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
      .then(() => {
        navigate('/login');
      })
      .catch(() => {
        setMessage('Please make sure you email is valid');
        setType('error');
      });
  }
  return (
        <form onSubmit={handleSubmit} className="form">
            <div className="card">
                <h1>Alterar o seu endereço de e-mail</h1>
                {Message && <Message msg={message} type={type} />}
                <div className="text">
                    <p>
                    Digite o novo endereço de e-mail que você deseja associar à sua conta abaixo,
                    Please make to sure you remember your password, because you have to make login again for security
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
