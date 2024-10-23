import React from 'react';
import './DropdownLogin.css';


interface DropdownProps {
  username?: string;
  userFullname?: string;
  onLogout: () => void;
}

//@ts-ignore
const DropdownLogin: React.FC<DropdownProps> = ({ username, userFullname, onLogout }) => {

  return (
    <div className="dropdown-login">
      <ul className="dropdown-menu-login">
        <span className='span-dropdown-profile'>
          ข้อมูลส่วนตัว
        </span>
      </ul>
      
      <ul className="dropdown-menu-login">
        <span className='span-dropdowm-logout' onClick={onLogout}>Logout ?</span>
      </ul>

    </div>
  );
};

export default DropdownLogin;
