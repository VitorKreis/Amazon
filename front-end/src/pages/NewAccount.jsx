import React, { useState } from 'react';
import axios from 'axios';
import './newAccount.css';

import { Navigate } from 'react-router';
import validator from 'validator';

function newAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState();
  const [erro, setErro] = useState();

  // eslint-disable-next-line no-shadow
  function verifyEmail(email) {
    if (!validator.isEmail(email)) {
      setErro('please verify your e-mail!');
    }
    return email;
  }

  // eslint-disable-next-line no-shadow
  function verifyPassword(password) {
    if (password.length < 5 || password.length > 50) {
      setErro('please verify your password!');
    } else {
      setErro();
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setErro();

    verifyEmail(email);

    verifyPassword(password);

    const newUser = { email, password };

    try {
      const res = await axios.post('http://localhost:3110/users/', newUser);
      setUser(res.data);
      localStorage.setItem('user', user);
    } catch (error) {
      setEmail();
      setPassword();
      console.log(error);
    }

    console.log(erro);
  }
  return (
    <div className="newAccount">
      {localStorage.getItem('user') && <Navigate to="/login" replace />}
    <form className="card" onSubmit={handleSubmit}>
        <h1>Create you account</h1>
        { erro ? <span>{erro}</span> : <span />}
        <div>
            <input required className="card-text" name="email" type="email" placeholder="teste@gmail.com" onChange={({ target }) => setEmail(target.value)} />
        </div>
        <div>
            <input required className="card-text" name="password" type="password" placeholder="*******" onChange={({ target }) => setPassword(target.value)} />
        </div>
        <button className="button btn" type="submit" onClick={handleSubmit}>Create your account</button>
    </form>
    </div>
  );
}

export default newAccount;
