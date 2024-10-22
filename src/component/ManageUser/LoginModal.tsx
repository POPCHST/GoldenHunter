// component/ManageUser/LoginModal.tsx
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom"; // นำเข้า useNavigate
import "./LoginModal.css"; // สไตล์ของ Modal
import { appApi } from "../../data/globle";
import { showAlert } from "../../services/alerts";

const LoginModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // เรียกใช้ useNavigate

  const handleLogin = async () => {
    try {
      if (!username || !password) {
        console.error("Username or password is missing");
        return;
      }

      const response = await appApi.post("/api/login/loginuser", {
        user_name: username,
        user_password: password,
      });

      if (response.data && response.data.message === "Login successful") {
        const { user_fullname } = response.data;
        const userData = { username };

        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);
        sessionStorage.setItem("user_fullname", user_fullname);

        login(userData);
        navigate("/"); // นำทางไปยังหน้าแรก
      } else {
        throw new Error("Login failed");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        showAlert('invalidUserNotFound')
      } else if (error.response && error.response.status === 401) {
        showAlert('invalidUserNotFound')

      } else {
        // console.error("Error during login:", error);
      }
    }
  };

  const handleCancel = () => {
    onClose();
    navigate("/"); // นำทางไปยังหน้า Home
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay-login">
      <div className="modal-login">
        <h2 className="h2-login">Login</h2>
        <form
          className="from-login-modal"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              className="inp-username"
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
              className="inp-password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            onClick={handleLogin}
            className="btn-login-confirm"
            type="submit"
          >
            Login
          </button>
          <button
            className="btn-cancel-confirm"
            onClick={handleCancel}
            type="button"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
