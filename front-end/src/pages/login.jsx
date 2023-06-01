import './login.css';

function Login() {
  return (
    <>
    <div className="login">
        <form className="card">
            <div>
            <input className="card-text" name="email" type="email" placeholder="teste@gmail.com" />
            </div>
          <div>
          <input className="card-text" name="password" type="password" placeholder="*******" />
          </div>
          <button className="button btn" type="submit">Login</button>
          <p>
          Ao continuar, você concorda com as Condições de Uso da Amazon.
          </p>
          <p>
 Por favor verifique a Notificação de Privacidade,
        Notificação de Cookies e a Notificação de Anúncios Baseados em Interesse.
          </p>

        </form>
    </div>
      <div className="new-account">
        <button type="button">Create Account</button>
      </div>
    </>

  );
}
export default Login;
