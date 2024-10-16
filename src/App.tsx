import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import './style.css';
import Header from './Header';
import Home from './component/Description/Home';
import Products from './component/Product/Products';
// import Footer from './Footer';
import Login from './component/ManageUser/Login';
import Signup from './component/ManageUser/Signup';
import Community from './component/Description/Community';
import InformationTrader from './component/Description/InformationTrader';

const AppContent = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/community" element={<Community />} />
          <Route path="/info" element={<InformationTrader />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
};

export default App;
