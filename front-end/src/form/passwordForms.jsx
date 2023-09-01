import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import Message from '../layout/message';
import './passwordForm.css';

function passwordForms() {
  const [Oldpassword, setOldPassword] = useState();
  const [password, setPassword] = useState();
  const { token } = JSON.parse(localStorage.getItem('token'));
  const login = JSON.parse(localStorage.getItem('login'));
  const [message, setMessage] = useState();
  const [type, setType] = useState();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    if (login.password !== Oldpassword) {
      setMessage('Please make sure your old password is correct.');
      setType('error');
      return;
    }
    if (password.length < 5) {
      setMessage('Password must be 6 characters long');
      setType('error');
      return;
    }

    axios.put('http://localhost:3110/users', { password }, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
      .then(() => {
        navigate('/login');
      })
      .catch(() => {
        setMessage('Please make sure you password is valid');
        setType('error');
      });
  }
  return (
        <form onSubmit={handleSubmit} className="form">
            <div className="card">
            <Link className="icon-prev" to="/You"><BsArrowLeftCircle /></Link>
            <h1>Alterar sua Senha</h1>
            {Message && <Message msg={message} type={type} />}
            <div className="text">
                    <p>
                    Please make to sure you remember your password, because you have to make login again for security
                    </p>
            </div>
                <div className="inputs">
                    <label htmlFor="oldPassword">
                        Senha atual:
                            <input type="password" onChange={(e) => setOldPassword(e.target.value)} />
                    </label>
                    <label htmlFor="newPassword">
                        Nova Senha:
                            <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <label htmlFor="repitPassword">
                        Reinsira a nova senha:
                            <input type="password" />
                    </label>
                </div>
                <button type="submit">Salvar Alteração</button>
            </div>

        </form>
  );
}

export default passwordForms;
