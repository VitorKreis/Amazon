import React from 'react';

import './newAccount.css';

function newAccount() {
  return (
    <div className="newAccount">
    <form className="card">
        <h1>Create you account</h1>
        <div>
            <input className="card-text" name="name" type="text" placeholder="Your name" />
        </div>
        <div>
            <input className="card-text" name="email" type="email" placeholder="teste@gmail.com" />
        </div>
        <div>
            <input className="card-text" name="password" type="password" placeholder="*******" />
        </div>
        <button className="button btn" type="submit">Create your account</button>
    </form>
    </div>
  );
}

export default newAccount;
