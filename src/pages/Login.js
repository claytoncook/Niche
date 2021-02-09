import './Login.scss';

function Login() {
  return (
    <div className="Login">
      <form>
          <input type="text" placeholder="Email" required/>
          <input type="text" placeholder="Password" required/>
          <button type="submit">Login</button>
          <hr />
          <a href="/createaccount">Create an Account</a>
      </form>
    </div>
  );
}

export default Login;