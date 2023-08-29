import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import Message from '../layout/message';
import './login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState();
  const [type, setType] = useState();
  // eslint-disable-next-line no-unused-vars
  const [token, Settoken] = useState('');

  // eslint-disable-next-line consistent-return
  async function handleSubmit(e) {
    e.preventDefault();

    if (!isEmail(email)) {
      setType('error');
      setMessage('Please verify your email');
      return;
    }

    if (password.length < 5 || password.length > 50) {
      setType('error');
      setMessage('Please verify your password!');
      return;
    }

    const user = { email, password };
    const login = JSON.stringify(user);
    localStorage.setItem('login', login);
    try {
      await axios.post('http://localhost:3110/login', user).then((res) => Settoken(JSON.stringify(res.data)));
      localStorage.setItem('token', token);
      if (localStorage.getItem('token')) {
        navigate('/You');
      }
    } catch (err) {
      setMessage('Please verify your email and pasword');
      setType('error');
    }
  }

  return (
    <>
    <div className="login">
        <form className="card" onSubmit={handleSubmit}>
            <h1>Fazer Login</h1>
            { Message && <Message msg={message} type={type} />}
            <div>
            <input className="card-text" name="email" type="email" placeholder="teste@gmail.com" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
          <div>
          <input className="card-text" name="password" type="password" placeholder="*******" value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
          <button className="button btn" type="submit" onClick={handleSubmit}>Login</button>
          <p> Ao continuar, você concorda com as Condições de Uso da Amazon.</p>
          <p> Por favor verifique a Notificação de Privacidade, Notificação de Cookies e a Notificação de Anúncios Baseados em Interesse.</p>

        </form>
    </div>
      <div className="new-account">
        <Link to="/NewAccount" type="submit">Create your account from DarkCode</Link>
      </div>
    </>

  );
}
export default Login;
