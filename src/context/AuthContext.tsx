// context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<any>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // ตรวจสอบว่าผู้ใช้ล็อกอินอยู่หรือไม่
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setIsLoggedIn(true); // ถ้ามี username ใน sessionStorage แสดงว่าผู้ใช้ล็อกอินอยู่
    }
  }, []);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("username"); // ลบข้อมูลเมื่อออกจากระบบ
    sessionStorage.removeItem("user_id"); // ลบ user_id ด้วย
    sessionStorage.removeItem("password");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
