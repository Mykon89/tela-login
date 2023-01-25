import { useState } from 'react';
import Logo from './assets/logo.svg';
import './styles.css';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              <img src={Logo} alt="logo" />
            </span>

            <span className="login-form-title">Login</span>

            <div className="wrap-input">
              <input
                // if ternário
                className={email !== '' ? 'has-val input' : 'input'}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email" />
            </div>

            <div className="wrap-input">
              <input
                className={password !== '' ? 'has-val input' : 'input'}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password" />
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">LOGIN</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta?</span>
              <a href="#ahref" id="ahref" className="txt2">
                Criar conta.
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
