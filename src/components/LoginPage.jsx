import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function LoginPage() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    if (username === 'suman' && password === 'gautam') {
      login();
      history.push('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center justify-center">Login</h1>
        <label htmlFor="username" className=' mb-5'>Username:</label><br />
        <input
          type="text"
          placeholder="Username"
          className="border border-gray-600 rounded-md px-3 py-2 mb-4 w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="username" className=' mb-5'>Password:</label><br />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-600 rounded-md px-3 py-2 mb-4 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
