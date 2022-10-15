import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem('userId', username);
    setUsername('');
    navigate('/tasks');
  };
  return (
    <div className="login__container">
      <form className="login__form" onSubmit={handleLogin}>
        <label htmlFor="username">Informe um nome de usuário</label>
        <input
          type="text"
          name="username"
          id="username"
          required
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button>Entrar</button>
      </form>
    </div>
  );
};
