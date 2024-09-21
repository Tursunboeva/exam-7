
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../users/UsersSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  };

  return (
    <div>
      <h1>Tizimga kirish</h1>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Parol" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Tizimga kirish</button>
    </div>
  );
};

export default Login;
