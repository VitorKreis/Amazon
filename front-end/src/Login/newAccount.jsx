import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { isEmail } from 'validator';

import './newAccount.css';
import Message from '../layout/message';

function newAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState();
  const [message, setMessage] = useState();
  const [type, setType] = useState();
  const navigate = useNavigate();

  // eslint-disable-next-line consistent-return
  async function handleSubmit(event) {
    if (!isEmail(email)) {
      setType('error');
      setMessage('Please verify your email');
    }
    if (!password.length > 5 && !password.length < 50) {
      setMessage('Please verify your password!');
      setType('error');
    }
    const newUser = { email, password };
    event.preventDefault();
    try {
      await axios.post('http://localhost:3110/users/', newUser).then((res) => {
        setUser(res.data);
        localStorage.setItem('user', user);
        navigate('/login');
      });
    } catch (error) {
      console.log(error);
      setMessage('Please verify your email and pasword');
      setType('error');
    }
  }
  return (
    <div className="newAccount">
    <form className="card" onSubmit={handleSubmit}>
        <h1>Create you account</h1>
        { Message && <Message msg={message} type={type} />}
        <div>
            <input required className="card-text" name="email" value={email} type="email" placeholder="teste@gmail.com" onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div>
            <input required className="card-text" name="password" value={password} type="password" placeholder="*******" onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button className="button btn" type="submit">Create your account</button>
    </form>
    </div>
  );
}

export default newAccount;
