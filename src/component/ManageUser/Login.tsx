// component/ManageUser/Login.tsx
import React, { useState } from 'react';
import LoginModal from './LoginModal';
import './Login.css';

const Login: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className='login-container'>
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Login;
