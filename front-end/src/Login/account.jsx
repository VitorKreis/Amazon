import './account.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Account() {
  const [User, setUser] = useState();
  const navigate = useNavigate();
  const { token } = JSON.parse(localStorage.getItem('token'));
  if (!token) {
    console.log('token nao existe');
    navigate('/Login');
  }
  useEffect(() => {
    axios.get('http://localhost:3110/users/user', {
      headers: {
        Authorization: `Basic ${token}`,
      },
    }).then((res) => {
      setUser(res.data);
      localStorage.setItem('user', User);
    })
      .catch((error) => {
        console.log(error);
        navigate('/Login');
      });
  }, []);
  return (
        <div className="container">
            <ul className="list-group">
                <li className="list-group-item">
                    <h1>E-mail:</h1>
                    <p>{User?.email}</p>
                    <Link to="/editEmail" className="button-edit" type="button">Editar</Link>
                </li>
                <li className="list-group-item">
                    <h1>Password:</h1>
                    <p>********</p>
                    <Link to="/editPassword" className="button-edit" type="button">Editar</Link>
                </li>
                <li className="list-group-item">
                    <button className="button-logout" type="button">Logout</button>
                </li>
            </ul>

        </div>
  );
}

export default Account;
