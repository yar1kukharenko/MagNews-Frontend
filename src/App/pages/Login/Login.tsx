import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const login = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:8080/api/auth/login', { email, password })
      .then((response) => {
        localStorage.setItem('access_token', response.data.access_token);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className={'section'}>
      <div className="container">
        <form onSubmit={login}>
          <div className="form-group">
            <label htmlFor="inputEmail1">Email address</label>
            <input
              required={true}
              type="email"
              className="form-control"
              id="inputEmail1"
              value={email}
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We&rsquo;ll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
