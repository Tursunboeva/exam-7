
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../users/UsersSlice';

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    dispatch(registerUser({ email, password }));
  };

  return (
    <div>
      <h1>Ro'yxatdan o'tish</h1>
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
      <button onClick={handleRegister}>Ro'yxatdan o'tish</button>
    </div>
  );
};

export default Register;
