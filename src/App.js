import Logo from './assets/logo.svg';
import './styles.css';

export default function App() {
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
              <input className="input" type="email" />
              <span className="focus-input" data-placeholder="Email" />
            </div>

            <div className="wrap-input">
              <input className="input" type="password" />
              <span className="focus-input" data-placeholder="Password" />
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">LOGIN</button>
            </div>

            <div className="text-center">
              <span className="txt1">não possui conta?</span>
              <a href="#" className="txt2">
                Criar conta.
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
