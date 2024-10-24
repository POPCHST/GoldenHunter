// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider, useAuth } from './context/AuthContext'; // นำเข้ามาจากที่สร้างไว้
import './style.css';
import Header from './Header';
import Home from './component/Description/Home';
import Products from './component/Product/Products';
// import Login from './component/ManageUser/Login';
import Signup from './component/ManageUser/Signup';
import Community from './component/Description/Community';
import InformationTrader from './component/Description/InformationTrader';
// import Footer from './Footer';
import LoginModal from './component/ManageUser/LoginModal';
import CourseList from './component/Course/CourseList';

const AppContent = () => {
  const { isLoggedIn } = useAuth(); // ใช้ AuthContext

  return (
    <div className="app-wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<CourseList/>}></Route>
          <Route path="/products" element={<Products />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/login" element={<LoginModal isOpen={true} onClose={() => {}} />} />
          {!isLoggedIn && <Route path="/signup" element={<Signup />} />} {/* แสดง Signup เฉพาะเมื่อไม่ล็อกอิน */}
          <Route path="/community" element={<Community />} />
          <Route path="/info" element={<InformationTrader />} />
        </Routes>
        {/* <Footer/> */}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AuthProvider> {/* เพิ่ม AuthProvider */}
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
};

export default App;
