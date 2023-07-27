import React, { useState } from 'react';
import axios from 'axios';
import './newAccount.css';

import { Navigate } from 'react-router';

function newAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState([]);
  async function handleSubmit(e) {
    e.preventDefault();
    const newUser = { email, password };
    try {
      const res = await axios.post('http://localhost:3110/users/', newUser);
      setUser(res.data);
      localStorage.setItem('user', user);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="newAccount">
    <form className="card" onSubmit={handleSubmit}>
        {localStorage.getItem('user') && <Navigate to="/login" replace />}
        <h1>Create you account</h1>
        <div>
            <input className="card-text" name="email" type="email" placeholder="teste@gmail.com" onChange={({ target }) => setEmail(target.value)} />
        </div>
        <div>
            <input className="card-text" name="password" type="password" placeholder="*******" onChange={({ target }) => setPassword(target.value)} />
        </div>
        <button className="button btn" type="submit">Create your account</button>
    </form>
    </div>
  );
}

export default newAccount;
