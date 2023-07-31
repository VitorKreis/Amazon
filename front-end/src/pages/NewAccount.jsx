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

  function verifyEmail(e) {
    setEmail(e.target.value);
    if (!validator.isEmail(email)) {
      setErro('Please verify your e-mail!');
    } else {
      setErro();
    }
    return email;
  }

  function verifyPassword(e) {
    setPassword(e.target.value);
    if (password.length < 5 || password.length > 50) {
      setErro('Please verify your password!');
    } else {
      setErro();
    }

    return password;
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const newUser = { email, password };
      const res = await axios.post('http://localhost:3110/users/', newUser);
      setUser(res.data);
      localStorage.setItem('user', user);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="newAccount">
      {localStorage.getItem('user') && <Navigate to="/login" replace />}
    <form className="card" onSubmit={handleSubmit}>
        <h1>Create you account</h1>
        { erro ? <span className="error">{erro}</span> : <p />}
        <div>
            <input required className="card-text" name="email" type="email" placeholder="teste@gmail.com" onChange={verifyEmail} />
        </div>
        <div>
            <input required className="card-text" name="password" type="password" placeholder="*******" onChange={verifyPassword} />
        </div>
        <button className="button btn" type="submit" onClick={handleSubmit}>Create your account</button>
    </form>
    </div>
  );
}

export default newAccount;
