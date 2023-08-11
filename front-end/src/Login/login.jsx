import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import validator from 'validator';

import './login.css';
import { setLocalStorege } from '../LocalStorage';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState();
  // eslint-disable-next-line no-unused-vars
  const [token, Settoken] = useState([]);
  const [login, setlogin] = useState();

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

  // eslint-disable-next-line consistent-return
  async function handleSubmit(e) {
    e.preventDefault();
    const user = { email, password };
    setlogin(JSON.stringify(user));

    setLocalStorege('login', login, 1);

    try {
      const res = await axios.post('http://localhost:3110/login', user);
      Settoken(res.data);
      setLocalStorege('token', token, 1);
    } catch (err) {
      if (err.response.data) return setErro(err.response.data);
    }
  }

  return (
    <>
    <div className="login">
        <form className="card" onSubmit={handleSubmit}>
            <div>
                {localStorage.getItem('token') && (<Navigate to="/" replace />)}
            </div>
            <h1>Fazer Login</h1>
            { erro ? <span className="error">{erro}</span> : <p />}
            <div>
            <input className="card-text" name="email" type="email" placeholder="teste@gmail.com" value={email} onChange={verifyEmail} />
            </div>
          <div>
          <input className="card-text" name="password" type="password" placeholder="*******" value={password} onChange={verifyPassword} />
          </div>
          <button className="button btn" type="submit" onClick={handleSubmit}>Login</button>
          <p> Ao continuar, você concorda com as Condições de Uso da Amazon.</p>
          <p> Por favor verifique a Notificação de Privacidade, Notificação de Cookies e a Notificação de Anúncios Baseados em Interesse.</p>

        </form>
    </div>
      <div className="new-account">
        <Link to="/NewAccount" type="button">Create your account from DarkCode</Link>
      </div>
    </>

  );
}
export default Login;
