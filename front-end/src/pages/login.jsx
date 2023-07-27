import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState();
  // eslint-disable-next-line no-unused-vars
  const [token, Settoken] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    const user = { email, password };

    try {
      await axios.post('http://localhost:3110/login', user).then((res) => {
        Settoken(res.data);
        localStorage.setItem('token', token);
      });
    } catch (err) {
      console.log(err);
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

            <div>
            <input className="card-text" name="email" type="email" placeholder="teste@gmail.com" value={email} onChange={({ target }) => setEmail(target.value)} />
            </div>
          <div>
          <input className="card-text" name="password" type="password" placeholder="*******" value={password} onChange={({ target }) => setPassword(target.value)} />
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
