import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LanguageContext } from "./context/LanguageContext"; // นำเข้าคอนเท็กซ์
import "./Header.css"; // นำเข้าไฟล์ CSS สำหรับการจัดรูปแบบ
import IconCartDropDown from "./component/Product/IconCartDropDown";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from "./context/AuthContext";
import Swal from "sweetalert2";

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext); // ใช้คอนเท็กซ์
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate(); // นำทาง

  const handleLanguageToggle = () => {
    setLanguage(language === "EN" ? "TH" : "EN");
  };

  const handleLoginClick = () => {
    if (!isLoggedIn) {
      // ถ้ายังไม่ได้ล็อกอิน, แสดง modal login
      // setIsLoginModalOpen(true);

      navigate("/login");

    } else {
      // ถ้าล็อกอินแล้ว, แสดง modal สำหรับยืนยันการล็อกเอาท์
      Swal.fire({
        title: language === "EN" ? "Are you sure?" : "คุณแน่ใจหรือไม่?",
        text: language === "EN" ? "Do you want to log out?" : "คุณต้องการออกจากระบบหรือไม่?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: language === "EN" ? "Yes, log out" : "ใช่, ออกจากระบบ",
        cancelButtonText: language === "EN" ? "Cancel" : "ยกเลิก",
      }).then((result: any) => {
        if (result.isConfirmed) {
          logout(); // ฟังก์ชันล็อกเอาท์
          navigate("/"); // นำทางไปหน้าแรก
        }
      });
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Haru Girlsbigport V.2</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">{language === "EN" ? "Home" : "หน้าหลัก"}</Link>
          </li>
          <li>
            <Link to="/products">
              {language === "EN" ? "Products" : "เครื่องมือ"}
            </Link>
          </li>
          <li>
            <Link to="/community">
              {language === "EN" ? "Community" : "กลุ่มนักเทรด"}
            </Link>
          </li>
          <li>
            <Link to="/info">
              {language === "EN" ? "Information Trader" : "ข่าวสารนักเทรด"}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header-right">
        <div className="language-selector">
          <button className="btn-login-header" onClick={handleLoginClick}>
            <FontAwesomeIcon icon={faUser} />
          </button>

          {/* แสดงปุ่มสมัครสมาชิกถ้าไม่ได้ล็อกอิน */}
          {!isLoggedIn && (
            <Link to="/signup">
              <button className="btn-signup-header">
                {language === "EN" ? "Sign Up" : "สมัครสมาชิก"}
              </button>
            </Link>
          )}

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
            <IconCartDropDown />
          </button>
        </div>
      </div>
   
    </header>
  );
};

export default Header;
