import {
  useNavigate,
} from 'react-router-dom';
import { useState } from 'react';
import Api from '../../common/api';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login">
      Login

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => {
        // TODO add error handling
        Api.login(email, password)
          .then(({ data }: { data: string }) => {
            /* TODO work with Bearer */
            /* TODO change to redux - just for fun */
            sessionStorage.setItem('token', `Bearer ${data}`);
            navigate('/main');
          })
          .catch((e: any) => {
            alert(e.response.data);
          });
      }}
      >
        Sign in
      </button>
    </div>
  );
}

export default Login;
