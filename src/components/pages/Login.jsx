import './login.css';
function Login() {
  return (
    <main className="login-main">
      {/* Inicio del box de login */}
      <div className="login-box">
        <form>
          <div className="mb-3">
            <h4>Login</h4>
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">No comparta sus datos</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Recordar login</label>
            <a href="#">Recuperar contraseña</a>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <button type="button" className="btn btn-secondary">Registro</button>
        </form>
      </div>
    </main>
  );
}

export default Login;