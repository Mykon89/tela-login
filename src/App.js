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
              <input type="email" />
              <span data-placeholder="Email" />
            </div>

            <div className="wrap-input">
              <input type="password" />
              <span data-placeholder="Password" />
            </div>

            <div>
              <button>LOGIN</button>
            </div>

            <div>
              <span>não possui conta?</span>
              <a href="#">Criar conta.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
