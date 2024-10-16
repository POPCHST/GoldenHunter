// component/ManageUser/Login.tsx
import React, { useState } from 'react';
import LoginModal from './LoginModal';

const Login: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // เปิด Modal เริ่มต้น

  return (
    <div>
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Login;
