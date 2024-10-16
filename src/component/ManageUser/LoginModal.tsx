// component/ManageUser/LoginModal.tsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate
import './LoginModal.css'; // สไตล์ของ Modal

const LoginModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // เรียกใช้ useNavigate

  const handleLogin = () => {
    // ตรวจสอบการล็อกอินที่นี่ (เช่น API call)
    // หากล็อกอินสำเร็จ ให้เรียกใช้ login()
    login();
    // onClose();
    navigate('/');
  };

  const handleCancel = () => {
    onClose(); // ปิดโมดัล
    navigate('/'); // นำทางไปยังหน้า Home
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay-login">
      <div className="modal-login">
        <h2 className='h2-login'>Login</h2>
        <form className='from-login-modal' onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
            className='inp-username'
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
            className='inp-password'
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className='btn-login-confirm' type="submit">Login</button>
          <button className='btn-cancel-confirm' onClick={handleCancel} type="button">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
