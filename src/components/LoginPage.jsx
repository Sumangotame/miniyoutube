import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { VideoContext } from '../contexts/VideoContext';
import DarkMode from './DarkMode';

function LoginPage() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { darkMode } = useContext(VideoContext)
  const handleLogin = () => {
    if (username === 'suman' && password === 'gautam') {
      login();
      history.push('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className={` pt-4 pr-4 ${darkMode ? 'bg-slate-950' : ''}`}>
      <div className='float-right'>
        <DarkMode />
      </div>
      <div className={`flex justify-center items-center h-screen ${darkMode ? 'bg-slate-950 text-white' : ''}`}>
        <div className={` p-8 rounded-lg shadow-md ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
          <h1 className="text-2xl font-bold mb-4 text-center justify-center">Login</h1>
          <label htmlFor="username" className=' mb-5'>Username:</label><br />
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-600 rounded-md px-3 py-2 mb-4 w-full text-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="username" className=' mb-5'>Password:</label><br />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-600 rounded-md px-3 py-2 mb-4 w-full text-black"
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
    </div>
  );
}

export default LoginPage;
