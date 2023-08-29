import './passwordForm.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Message from '../layout/message';

function passwordForms() {
  const [password, setPassword] = useState();
  const [Newpassword, setNewPassword] = useState();
  const [RepNewpassword, setRepNewPassword] = useState();
  const { token } = JSON.parse(localStorage.getItem('token'));
  const login = JSON.parse(localStorage.getItem('login'));
  const [message, setMessage] = useState();
  const [type, setType] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(login);
    if (login.password !== password) {
      setMessage('Please make sure your old password is correct.');
      setType('error');
      return;
    }
    if (Newpassword !== RepNewpassword) {
      setMessage('Please make sure your put same passwords');
      setType('error');
      return;
    }

    if (!Newpassword.length > 5) {
      setMessage('Password must be 6 characters long');
      setType('error');
    }

    axios.put('http://localhost:3110/users', { Newpassword }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res);
        navigate('/login');
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
        <form onSubmit={handleSubmit} className="form">
            <div className="card">
            <h1>Alterar sua Senha</h1>
            {Message && <Message msg={message} type={type} />}
                <div className="input">
                    <label htmlFor="oldPassword">
                        Senha atual:
                            <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <label htmlFor="newPassword">
                        Nova Senha:
                            <input type="password" onChange={(e) => setNewPassword(e.target.value)} />
                    </label>
                    <label htmlFor="repitPassword">
                        Reinsira a nova senha:
                            <input type="password" onChange={(e) => setRepNewPassword(e.target.value)} />
                    </label>
                </div>
                <button type="submit">Salvar Alteração</button>
            </div>

        </form>
  );
}

export default passwordForms;
