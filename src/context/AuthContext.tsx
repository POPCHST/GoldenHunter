// context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<any>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // ตรวจสอบว่าผู้ใช้ล็อกอินอยู่หรือไม่
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setUser({ username: storedUsername });
      setIsLoggedIn(true); // ถ้ามี username ใน sessionStorage แสดงว่าผู้ใช้ล็อกอินอยู่
    }
  }, []);


  const login = (userData: { username: string }) => {
    if (userData && userData.username) {
      setIsLoggedIn(true);
      setUser(userData);
      sessionStorage.setItem("username", userData.username); // เก็บข้อมูลผู้ใช้ใน sessionStorage
      
    } else {
      console.error("Invalid userData:", userData); // เช็คว่าข้อมูลถูกต้องหรือไม่
    }
  };


  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("password");
    sessionStorage.removeItem("user_fullname");

  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
