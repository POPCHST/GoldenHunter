// Header.tsx
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "./context/LanguageContext"; // นำเข้าคอนเท็กซ์
import "./Header.css"; // นำเข้าไฟล์ CSS สำหรับการจัดรูปแบบ
import IconCartDropDown from "./component/Product/IconCartDropDown";

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext); // ใช้คอนเท็กซ์

  const handleLanguageToggle = () => {
    setLanguage(language === "EN" ? "TH" : "EN");
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Haru Girlsbigport V.2</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">{language == "EN" ? "Home" : "หน้าหลัก"}</Link>
          </li>
          <li>
            <Link to="/products">
              {language == "EN" ? "Products" : "เครื่องมือ"}
            </Link>
          </li>
          <li>
            <Link to="/community">
              {language == "EN" ? "Community" : "กลุ่มนักเทรด"}
            </Link>
          </li>

          <li>
            <Link to="/info">
              {language == "EN" ? "Information Trader" : "ข่าวสารนักเทรด"}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header-right">
        <div className="language-selector">
          <Link to="/login">
            <button className="btn-login-header">
              {language === "EN" ? "Login" : "ล็อกอิน"}
            </button>
          </Link>

          <Link to="/signup">
            <button className="btn-signup-header">
              {language === "EN" ? "Sign Up" : "สมัครสมาชิก"}
            </button>
          </Link>

          <button
            onClick={handleLanguageToggle}
            style={{ marginRight: "2px", marginLeft: "3rem" }}
            className={language === "EN" ? "active" : ""}
          >
            {language === "EN" ? "TH" : "EN"}
          </button>

        </div>

        <div className="cart">
          <button className="btn-cart">
            {/* <img src={cartIcon} alt="Cart" /> */}
            <IconCartDropDown />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
